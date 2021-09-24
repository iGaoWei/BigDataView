//封装成layui模块
layui.define(function(exports){
	
! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function(t) {
	"use strict";

	function e(t) {
		var e = {},
			n = {},
			i = t.match(/Firefox\/([\d.]+)/),
			a = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
			o = t.match(/Edge\/([\d.]+)/),
			r = /micromessenger/i.test(t);
		return i && (n.firefox = !0, n.version = i[1]), a && (n.ie = !0, n.version = a[1]), o && (n.edge = !0, n.version = o[1]), r && (n.weChat = !0), {
			browser: n,
			os: e,
			node: !1,
			canvasSupported: !!document.createElement("canvas").getContext,
			svgSupported: "undefined" != typeof SVGRect,
			touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
			pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11),
			domSupported: "undefined" != typeof document
		}
	}

	function n(t, e) {
		"createCanvas" === t && (lb = null), rb[t] = e
	}

	function i(t) {
		if(null == t || "object" != typeof t) return t;
		var e = t,
			n = Qw.call(t);
		if("[object Array]" === n) {
			if(!z(t)) {
				e = [];
				for(var a = 0, o = t.length; o > a; a++) e[a] = i(t[a])
			}
		} else if(Jw[n]) {
			if(!z(t)) {
				var r = t.constructor;
				if(t.constructor.from) e = r.from(t);
				else {
					e = new r(t.length);
					for(var a = 0, o = t.length; o > a; a++) e[a] = i(t[a])
				}
			}
		} else if(!$w[n] && !z(t) && !T(t)) {
			e = {};
			for(var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]))
		}
		return e
	}

	function a(t, e, n) {
		if(!S(e) || !S(t)) return n ? i(e) : t;
		for(var o in e)
			if(e.hasOwnProperty(o)) {
				var r = t[o],
					s = e[o];
				!S(s) || !S(r) || _(s) || _(r) || T(s) || T(r) || M(s) || M(r) || z(s) || z(r) ? !n && o in t || (t[o] = i(e[o], !0)) : a(r, s, n)
			}
		return t
	}

	function o(t, e) {
		for(var n = t[0], i = 1, o = t.length; o > i; i++) n = a(n, t[i], e);
		return n
	}

	function r(t, e) {
		for(var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		return t
	}

	function s(t, e, n) {
		for(var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
		return t
	}

	function l() {
		return lb || (lb = sb().getContext("2d")), lb
	}

	function u(t, e) {
		if(t) {
			if(t.indexOf) return t.indexOf(e);
			for(var n = 0, i = t.length; i > n; n++)
				if(t[n] === e) return n
		}
		return -1
	}

	function h(t, e) {
		function n() {}
		var i = t.prototype;
		n.prototype = e.prototype, t.prototype = new n;
		for(var a in i) t.prototype[a] = i[a];
		t.prototype.constructor = t, t.superClass = e
	}

	function c(t, e, n) {
		t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n)
	}

	function d(t) {
		return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
	}

	function f(t, e, n) {
		if(t && e)
			if(t.forEach && t.forEach === eb) t.forEach(e, n);
			else if(t.length === +t.length)
			for(var i = 0, a = t.length; a > i; i++) e.call(n, t[i], i, t);
		else
			for(var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
	}

	function p(t, e, n) {
		if(t && e) {
			if(t.map && t.map === ab) return t.map(e, n);
			for(var i = [], a = 0, o = t.length; o > a; a++) i.push(e.call(n, t[a], a, t));
			return i
		}
	}

	function g(t, e, n, i) {
		if(t && e) {
			if(t.reduce && t.reduce === ob) return t.reduce(e, n, i);
			for(var a = 0, o = t.length; o > a; a++) n = e.call(i, n, t[a], a, t);
			return n
		}
	}

	function m(t, e, n) {
		if(t && e) {
			if(t.filter && t.filter === nb) return t.filter(e, n);
			for(var i = [], a = 0, o = t.length; o > a; a++) e.call(n, t[a], a, t) && i.push(t[a]);
			return i
		}
	}

	function v(t, e, n) {
		if(t && e)
			for(var i = 0, a = t.length; a > i; i++)
				if(e.call(n, t[i], i, t)) return t[i]
	}

	function y(t, e) {
		var n = ib.call(arguments, 2);
		return function() {
			return t.apply(e, n.concat(ib.call(arguments)))
		}
	}

	function x(t) {
		var e = ib.call(arguments, 1);
		return function() {
			return t.apply(this, e.concat(ib.call(arguments)))
		}
	}

	function _(t) {
		return "[object Array]" === Qw.call(t)
	}

	function w(t) {
		return "function" == typeof t
	}

	function b(t) {
		return "[object String]" === Qw.call(t)
	}

	function S(t) {
		var e = typeof t;
		return "function" === e || !!t && "object" === e
	}

	function M(t) {
		return !!$w[Qw.call(t)]
	}

	function I(t) {
		return !!Jw[Qw.call(t)]
	}

	function T(t) {
		return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
	}

	function A(t) {
		return t !== t
	}

	function D() {
		for(var t = 0, e = arguments.length; e > t; t++)
			if(null != arguments[t]) return arguments[t]
	}

	function C(t, e) {
		return null != t ? t : e
	}

	function L(t, e, n) {
		return null != t ? t : null != e ? e : n
	}

	function k() {
		return Function.call.apply(ib, arguments)
	}

	function P(t) {
		if("number" == typeof t) return [t, t, t, t];
		var e = t.length;
		return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
	}

	function O(t, e) {
		if(!t) throw new Error(e)
	}

	function N(t) {
		return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
	}

	function E(t) {
		t[ub] = !0
	}

	function z(t) {
		return t[ub]
	}

	function R(t) {
		function e(t, e) {
			n ? i.set(t, e) : i.set(e, t)
		}
		var n = _(t);
		this.data = {};
		var i = this;
		t instanceof R ? t.each(e) : t && f(t, e)
	}

	function B(t) {
		return new R(t)
	}

	function V(t, e) {
		for(var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
		var a = t.length;
		for(i = 0; i < e.length; i++) n[i + a] = e[i];
		return n
	}

	function G() {}

	function F(t, e) {
		var n = new cb(2);
		return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
	}

	function W(t, e) {
		return t[0] = e[0], t[1] = e[1], t
	}

	function H(t) {
		var e = new cb(2);
		return e[0] = t[0], e[1] = t[1], e
	}

	function Z(t, e, n) {
		return t[0] = e, t[1] = n, t
	}

	function X(t, e, n) {
		return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
	}

	function Y(t, e, n, i) {
		return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
	}

	function U(t, e, n) {
		return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
	}

	function j(t) {
		return Math.sqrt(q(t))
	}

	function q(t) {
		return t[0] * t[0] + t[1] * t[1]
	}

	function K(t, e, n) {
		return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
	}

	function $(t, e, n) {
		return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
	}

	function J(t, e) {
		return t[0] * e[0] + t[1] * e[1]
	}

	function Q(t, e, n) {
		return t[0] = e[0] * n, t[1] = e[1] * n, t
	}

	function te(t, e) {
		var n = j(e);
		return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
	}

	function ee(t, e) {
		return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
	}

	function ne(t, e) {
		return(t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
	}

	function ie(t, e) {
		return t[0] = -e[0], t[1] = -e[1], t
	}

	function ae(t, e, n, i) {
		return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
	}

	function oe(t, e, n) {
		var i = e[0],
			a = e[1];
		return t[0] = n[0] * i + n[2] * a + n[4], t[1] = n[1] * i + n[3] * a + n[5], t
	}

	function re(t, e, n) {
		return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
	}

	function se(t, e, n) {
		return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
	}

	function le() {
		this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
	}

	function ue(t, e) {
		return {
			target: t,
			topTarget: e && e.topTarget
		}
	}

	function he(t, e) {
		var n = t._$eventProcessor;
		return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e
	}

	function ce(t, e, n, i, a, o) {
		var r = t._$handlers;
		if("function" == typeof n && (a = i, i = n, n = null), !i || !e) return t;
		n = he(t, n), r[e] || (r[e] = []);
		for(var s = 0; s < r[e].length; s++)
			if(r[e][s].h === i) return t;
		var l = {
				h: i,
				one: o,
				query: n,
				ctx: a || t,
				callAtLast: i.zrEventfulCallAtLast
			},
			u = r[e].length - 1,
			h = r[e][u];
		return h && h.callAtLast ? r[e].splice(u, 0, l) : r[e].push(l), t
	}

	function de(t) {
		return t.getBoundingClientRect ? t.getBoundingClientRect() : {
			left: 0,
			top: 0
		}
	}

	function fe(t, e, n, i) {
		return n = n || {}, i || !Kw.canvasSupported ? pe(t, e, n) : Kw.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : pe(t, e, n), n
	}

	function pe(t, e, n) {
		var i = de(t);
		n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top
	}

	function ge(t, e, n) {
		if(e = e || window.event, null != e.zrX) return e;
		var i = e.type,
			a = i && i.indexOf("touch") >= 0;
		if(a) {
			var o = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];
			o && fe(t, o, e, n)
		} else fe(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
		var r = e.button;
		return null == e.which && void 0 !== r && _b.test(e.type) && (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
	}

	function me(t, e, n) {
		xb ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
	}

	function ve(t, e, n) {
		xb ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
	}

	function ye(t) {
		return 2 === t.which || 3 === t.which
	}

	function xe(t) {
		var e = t[1][0] - t[0][0],
			n = t[1][1] - t[0][1];
		return Math.sqrt(e * e + n * n)
	}

	function _e(t) {
		return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
	}

	function we(t, e, n) {
		return {
			type: t,
			event: n,
			target: e.target,
			topTarget: e.topTarget,
			cancelBubble: !1,
			offsetX: n.zrX,
			offsetY: n.zrY,
			gestureEvent: n.gestureEvent,
			pinchX: n.pinchX,
			pinchY: n.pinchY,
			pinchScale: n.pinchScale,
			wheelDelta: n.zrDelta,
			zrByTouch: n.zrByTouch,
			which: n.which,
			stop: be
		}
	}

	function be() {
		wb(this.event)
	}

	function Se() {}

	function Me(t, e, n) {
		if(t[t.rectHover ? "rectContain" : "contain"](e, n)) {
			for(var i, a = t; a;) {
				if(a.clipPath && !a.clipPath.contain(e, n)) return !1;
				a.silent && (i = !0), a = a.parent
			}
			return i ? Mb : !0
		}
		return !1
	}

	function Ie() {
		var t = new Ab(6);
		return Te(t), t
	}

	function Te(t) {
		return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
	}

	function Ae(t, e) {
		return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
	}

	function De(t, e, n) {
		var i = e[0] * n[0] + e[2] * n[1],
			a = e[1] * n[0] + e[3] * n[1],
			o = e[0] * n[2] + e[2] * n[3],
			r = e[1] * n[2] + e[3] * n[3],
			s = e[0] * n[4] + e[2] * n[5] + e[4],
			l = e[1] * n[4] + e[3] * n[5] + e[5];
		return t[0] = i, t[1] = a, t[2] = o, t[3] = r, t[4] = s, t[5] = l, t
	}

	function Ce(t, e, n) {
		return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
	}

	function Le(t, e, n) {
		var i = e[0],
			a = e[2],
			o = e[4],
			r = e[1],
			s = e[3],
			l = e[5],
			u = Math.sin(n),
			h = Math.cos(n);
		return t[0] = i * h + r * u, t[1] = -i * u + r * h, t[2] = a * h + s * u, t[3] = -a * u + h * s, t[4] = h * o + u * l, t[5] = h * l - u * o, t
	}

	function ke(t, e, n) {
		var i = n[0],
			a = n[1];
		return t[0] = e[0] * i, t[1] = e[1] * a, t[2] = e[2] * i, t[3] = e[3] * a, t[4] = e[4] * i, t[5] = e[5] * a, t
	}

	function Pe(t, e) {
		var n = e[0],
			i = e[2],
			a = e[4],
			o = e[1],
			r = e[3],
			s = e[5],
			l = n * r - o * i;
		return l ? (l = 1 / l, t[0] = r * l, t[1] = -o * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - r * a) * l, t[5] = (o * a - n * s) * l, t) : null
	}

	function Oe(t) {
		var e = Ie();
		return Ae(e, t), e
	}

	function Ne(t) {
		return t > Lb || -Lb > t
	}

	function Ee(t) {
		this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
	}

	function ze(t) {
		return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
	}

	function Re(t) {
		return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
	}

	function Be(t) {
		return 0 > t ? 0 : t > 1 ? 1 : t
	}

	function Ve(t) {
		return ze(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
	}

	function Ge(t) {
		return Be(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
	}

	function Fe(t, e, n) {
		return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
	}

	function We(t, e, n) {
		return t + (e - t) * n
	}

	function He(t, e, n, i, a) {
		return t[0] = e, t[1] = n, t[2] = i, t[3] = a, t
	}

	function Ze(t, e) {
		return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
	}

	function Xe(t, e) {
		Zb && Ze(Zb, e), Zb = Hb.put(t, Zb || e.slice())
	}

	function Ye(t, e) {
		if(t) {
			e = e || [];
			var n = Hb.get(t);
			if(n) return Ze(e, n);
			t += "";
			var i = t.replace(/ /g, "").toLowerCase();
			if(i in Wb) return Ze(e, Wb[i]), Xe(t, e), e;
			if("#" !== i.charAt(0)) {
				var a = i.indexOf("("),
					o = i.indexOf(")");
				if(-1 !== a && o + 1 === i.length) {
					var r = i.substr(0, a),
						s = i.substr(a + 1, o - (a + 1)).split(","),
						l = 1;
					switch(r) {
						case "rgba":
							if(4 !== s.length) return void He(e, 0, 0, 0, 1);
							l = Ge(s.pop());
						case "rgb":
							return 3 !== s.length ? void He(e, 0, 0, 0, 1) : (He(e, Ve(s[0]), Ve(s[1]), Ve(s[2]), l), Xe(t, e), e);
						case "hsla":
							return 4 !== s.length ? void He(e, 0, 0, 0, 1) : (s[3] = Ge(s[3]), Ue(s, e), Xe(t, e), e);
						case "hsl":
							return 3 !== s.length ? void He(e, 0, 0, 0, 1) : (Ue(s, e), Xe(t, e), e);
						default:
							return
					}
				}
				He(e, 0, 0, 0, 1)
			} else {
				if(4 === i.length) {
					var u = parseInt(i.substr(1), 16);
					return u >= 0 && 4095 >= u ? (He(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), Xe(t, e), e) : void He(e, 0, 0, 0, 1)
				}
				if(7 === i.length) {
					var u = parseInt(i.substr(1), 16);
					return u >= 0 && 16777215 >= u ? (He(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Xe(t, e), e) : void He(e, 0, 0, 0, 1)
				}
			}
		}
	}

	function Ue(t, e) {
		var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
			i = Ge(t[1]),
			a = Ge(t[2]),
			o = .5 >= a ? a * (i + 1) : a + i - a * i,
			r = 2 * a - o;
		return e = e || [], He(e, ze(255 * Fe(r, o, n + 1 / 3)), ze(255 * Fe(r, o, n)), ze(255 * Fe(r, o, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
	}

	function je(t) {
		if(t) {
			var e, n, i = t[0] / 255,
				a = t[1] / 255,
				o = t[2] / 255,
				r = Math.min(i, a, o),
				s = Math.max(i, a, o),
				l = s - r,
				u = (s + r) / 2;
			if(0 === l) e = 0, n = 0;
			else {
				n = .5 > u ? l / (s + r) : l / (2 - s - r);
				var h = ((s - i) / 6 + l / 2) / l,
					c = ((s - a) / 6 + l / 2) / l,
					d = ((s - o) / 6 + l / 2) / l;
				i === s ? e = d - c : a === s ? e = 1 / 3 + h - d : o === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1)
			}
			var f = [360 * e, n, u];
			return null != t[3] && f.push(t[3]), f
		}
	}

	function qe(t, e) {
		var n = Ye(t);
		if(n) {
			for(var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
			return en(n, 4 === n.length ? "rgba" : "rgb")
		}
	}

	function Ke(t) {
		var e = Ye(t);
		return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
	}

	function $e(t, e, n) {
		if(e && e.length && t >= 0 && 1 >= t) {
			n = n || [];
			var i = t * (e.length - 1),
				a = Math.floor(i),
				o = Math.ceil(i),
				r = e[a],
				s = e[o],
				l = i - a;
			return n[0] = ze(We(r[0], s[0], l)), n[1] = ze(We(r[1], s[1], l)), n[2] = ze(We(r[2], s[2], l)), n[3] = Be(We(r[3], s[3], l)), n
		}
	}

	function Je(t, e, n) {
		if(e && e.length && t >= 0 && 1 >= t) {
			var i = t * (e.length - 1),
				a = Math.floor(i),
				o = Math.ceil(i),
				r = Ye(e[a]),
				s = Ye(e[o]),
				l = i - a,
				u = en([ze(We(r[0], s[0], l)), ze(We(r[1], s[1], l)), ze(We(r[2], s[2], l)), Be(We(r[3], s[3], l))], "rgba");
			return n ? {
				color: u,
				leftIndex: a,
				rightIndex: o,
				value: i
			} : u
		}
	}

	function Qe(t, e, n, i) {
		return t = Ye(t), t ? (t = je(t), null != e && (t[0] = Re(e)), null != n && (t[1] = Ge(n)), null != i && (t[2] = Ge(i)), en(Ue(t), "rgba")) : void 0
	}

	function tn(t, e) {
		return t = Ye(t), t && null != e ? (t[3] = Be(e), en(t, "rgba")) : void 0
	}

	function en(t, e) {
		if(t && t.length) {
			var n = t[0] + "," + t[1] + "," + t[2];
			return("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")"
		}
	}

	function nn(t, e) {
		return t[e]
	}

	function an(t, e, n) {
		t[e] = n
	}

	function on(t, e, n) {
		return(e - t) * n + t
	}

	function rn(t, e, n) {
		return n > .5 ? e : t
	}

	function sn(t, e, n, i, a) {
		var o = t.length;
		if(1 === a)
			for(var r = 0; o > r; r++) i[r] = on(t[r], e[r], n);
		else
			for(var s = o && t[0].length, r = 0; o > r; r++)
				for(var l = 0; s > l; l++) i[r][l] = on(t[r][l], e[r][l], n)
	}

	function ln(t, e, n) {
		var i = t.length,
			a = e.length;
		if(i !== a) {
			var o = i > a;
			if(o) t.length = a;
			else
				for(var r = i; a > r; r++) t.push(1 === n ? e[r] : jb.call(e[r]))
		}
		for(var s = t[0] && t[0].length, r = 0; r < t.length; r++)
			if(1 === n) isNaN(t[r]) && (t[r] = e[r]);
			else
				for(var l = 0; s > l; l++) isNaN(t[r][l]) && (t[r][l] = e[r][l])
	}

	function un(t, e, n) {
		if(t === e) return !0;
		var i = t.length;
		if(i !== e.length) return !1;
		if(1 === n) {
			for(var a = 0; i > a; a++)
				if(t[a] !== e[a]) return !1
		} else
			for(var o = t[0].length, a = 0; i > a; a++)
				for(var r = 0; o > r; r++)
					if(t[a][r] !== e[a][r]) return !1;
		return !0
	}

	function hn(t, e, n, i, a, o, r, s, l) {
		var u = t.length;
		if(1 === l)
			for(var h = 0; u > h; h++) s[h] = cn(t[h], e[h], n[h], i[h], a, o, r);
		else
			for(var c = t[0].length, h = 0; u > h; h++)
				for(var d = 0; c > d; d++) s[h][d] = cn(t[h][d], e[h][d], n[h][d], i[h][d], a, o, r)
	}

	function cn(t, e, n, i, a, o, r) {
		var s = .5 * (n - t),
			l = .5 * (i - e);
		return(2 * (e - n) + s + l) * r + (-3 * (e - n) - 2 * s - l) * o + s * a + e
	}

	function dn(t) {
		if(d(t)) {
			var e = t.length;
			if(d(t[0])) {
				for(var n = [], i = 0; e > i; i++) n.push(jb.call(t[i]));
				return n
			}
			return jb.call(t)
		}
		return t
	}

	function fn(t) {
		return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
	}

	function pn(t) {
		var e = t[t.length - 1].value;
		return d(e && e[0]) ? 2 : 1
	}

	function gn(t, e, n, i, a, o) {
		var r = t._getter,
			s = t._setter,
			l = "spline" === e,
			u = i.length;
		if(u) {
			var h, c = i[0].value,
				f = d(c),
				p = !1,
				g = !1,
				m = f ? pn(i) : 0;
			i.sort(function(t, e) {
				return t.time - e.time
			}), h = i[u - 1].time;
			for(var v = [], y = [], x = i[0].value, _ = !0, w = 0; u > w; w++) {
				v.push(i[w].time / h);
				var b = i[w].value;
				if(f && un(b, x, m) || !f && b === x || (_ = !1), x = b, "string" == typeof b) {
					var S = Ye(b);
					S ? (b = S, p = !0) : g = !0
				}
				y.push(b)
			}
			if(o || !_) {
				for(var M = y[u - 1], w = 0; u - 1 > w; w++) f ? ln(y[w], M, m) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);
				f && ln(r(t._target, a), M, m);
				var I, T, A, D, C, L, k = 0,
					P = 0;
				if(p) var O = [0, 0, 0, 0];
				var N = function(t, e) {
						var n;
						if(0 > e) n = 0;
						else if(P > e) {
							for(I = Math.min(k + 1, u - 1), n = I; n >= 0 && !(v[n] <= e); n--);
							n = Math.min(n, u - 2)
						} else {
							for(n = k; u > n && !(v[n] > e); n++);
							n = Math.min(n - 1, u - 2)
						}
						k = n, P = e;
						var i = v[n + 1] - v[n];
						if(0 !== i)
							if(T = (e - v[n]) / i, l)
								if(D = y[n], A = y[0 === n ? n : n - 1], C = y[n > u - 2 ? u - 1 : n + 1], L = y[n > u - 3 ? u - 1 : n + 2], f) hn(A, D, C, L, T, T * T, T * T * T, r(t, a), m);
								else {
									var o;
									if(p) o = hn(A, D, C, L, T, T * T, T * T * T, O, 1), o = fn(O);
									else {
										if(g) return rn(D, C, T);
										o = cn(A, D, C, L, T, T * T, T * T * T)
									}
									s(t, a, o)
								}
						else if(f) sn(y[n], y[n + 1], T, r(t, a), m);
						else {
							var o;
							if(p) sn(y[n], y[n + 1], T, O, 1), o = fn(O);
							else {
								if(g) return rn(y[n], y[n + 1], T);
								o = on(y[n], y[n + 1], T)
							}
							s(t, a, o)
						}
					},
					E = new Ee({
						target: t._target,
						life: h,
						loop: t._loop,
						delay: t._delay,
						onframe: N,
						ondestroy: n
					});
				return e && "spline" !== e && (E.easing = e), E
			}
		}
	}

	function mn(t, e, n, i, a, o, r, s) {
		function l() {
			h--, h || o && o()
		}
		b(i) ? (o = a, a = i, i = 0) : w(a) ? (o = a, a = "linear", i = 0) : w(i) ? (o = i, i = 0) : w(n) ? (o = n, n = 500) : n || (n = 500), t.stopAnimation(), vn(t, "", t, e, n, i, s);
		var u = t.animators.slice(),
			h = u.length;
		h || o && o();
		for(var c = 0; c < u.length; c++) u[c].done(l).start(a, r)
	}

	function vn(t, e, n, i, a, o, r) {
		var s = {},
			l = 0;
		for(var u in i) i.hasOwnProperty(u) && (null != n[u] ? S(i[u]) && !d(i[u]) ? vn(t, e ? e + "." + u : u, n[u], i[u], a, o, r) : (r ? (s[u] = n[u], yn(t, e, u, i[u])) : s[u] = i[u], l++) : null == i[u] || r || yn(t, e, u, i[u]));
		l > 0 && t.animate(e, !1).when(null == a ? 500 : a, s).delay(o || 0)
	}

	function yn(t, e, n, i) {
		if(e) {
			var a = {};
			a[e] = {}, a[e][n] = i, t.attr(a)
		} else t.attr(n, i)
	}

	function xn(t, e, n, i) {
		0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
	}

	function _n(t) {
		for(var e = 0; t >= sS;) e |= 1 & t, t >>= 1;
		return t + e
	}

	function wn(t, e, n, i) {
		var a = e + 1;
		if(a === n) return 1;
		if(i(t[a++], t[e]) < 0) {
			for(; n > a && i(t[a], t[a - 1]) < 0;) a++;
			bn(t, e, a)
		} else
			for(; n > a && i(t[a], t[a - 1]) >= 0;) a++;
		return a - e
	}

	function bn(t, e, n) {
		for(n--; n > e;) {
			var i = t[e];
			t[e++] = t[n], t[n--] = i
		}
	}

	function Sn(t, e, n, i, a) {
		for(i === e && i++; n > i; i++) {
			for(var o, r = t[i], s = e, l = i; l > s;) o = s + l >>> 1, a(r, t[o]) < 0 ? l = o : s = o + 1;
			var u = i - s;
			switch(u) {
				case 3:
					t[s + 3] = t[s + 2];
				case 2:
					t[s + 2] = t[s + 1];
				case 1:
					t[s + 1] = t[s];
					break;
				default:
					for(; u > 0;) t[s + u] = t[s + u - 1], u--
			}
			t[s] = r
		}
	}

	function Mn(t, e, n, i, a, o) {
		var r = 0,
			s = 0,
			l = 1;
		if(o(t, e[n + a]) > 0) {
			for(s = i - a; s > l && o(t, e[n + a + l]) > 0;) r = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s), r += a, l += a
		} else {
			for(s = a + 1; s > l && o(t, e[n + a - l]) <= 0;) r = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s);
			var u = r;
			r = a - l, l = a - u
		}
		for(r++; l > r;) {
			var h = r + (l - r >>> 1);
			o(t, e[n + h]) > 0 ? r = h + 1 : l = h
		}
		return l
	}

	function In(t, e, n, i, a, o) {
		var r = 0,
			s = 0,
			l = 1;
		if(o(t, e[n + a]) < 0) {
			for(s = a + 1; s > l && o(t, e[n + a - l]) < 0;) r = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s);
			var u = r;
			r = a - l, l = a - u
		} else {
			for(s = i - a; s > l && o(t, e[n + a + l]) >= 0;) r = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s), r += a, l += a
		}
		for(r++; l > r;) {
			var h = r + (l - r >>> 1);
			o(t, e[n + h]) < 0 ? l = h : r = h + 1
		}
		return l
	}

	function Tn(t, e) {
		function n(t, e) {
			l[c] = t, u[c] = e, c += 1
		}

		function i() {
			for(; c > 1;) {
				var t = c - 2;
				if(t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--;
				else if(u[t] > u[t + 1]) break;
				o(t)
			}
		}

		function a() {
			for(; c > 1;) {
				var t = c - 2;
				t > 0 && u[t - 1] < u[t + 1] && t--, o(t)
			}
		}

		function o(n) {
			var i = l[n],
				a = u[n],
				o = l[n + 1],
				h = u[n + 1];
			u[n] = a + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;
			var d = In(t[o], t, i, a, 0, e);
			i += d, a -= d, 0 !== a && (h = Mn(t[i + a - 1], t, o, h, h - 1, e), 0 !== h && (h >= a ? r(i, a, o, h) : s(i, a, o, h)))
		}

		function r(n, i, a, o) {
			var r = 0;
			for(r = 0; i > r; r++) d[r] = t[n + r];
			var s = 0,
				l = a,
				u = n;
			if(t[u++] = t[l++], 0 !== --o) {
				if(1 === i) {
					for(r = 0; o > r; r++) t[u + r] = t[l + r];
					return void(t[u + o] = d[s])
				}
				for(var c, f, p, g = h;;) {
					c = 0, f = 0, p = !1;
					do
						if(e(t[l], d[s]) < 0) {
							if(t[u++] = t[l++], f++, c = 0, 0 === --o) {
								p = !0;
								break
							}
						} else if(t[u++] = d[s++], c++, f = 0, 1 === --i) {
						p = !0;
						break
					} while (g > (c | f));
					if(p) break;
					do {
						if(c = In(t[l], d, s, i, 0, e), 0 !== c) {
							for(r = 0; c > r; r++) t[u + r] = d[s + r];
							if(u += c, s += c, i -= c, 1 >= i) {
								p = !0;
								break
							}
						}
						if(t[u++] = t[l++], 0 === --o) {
							p = !0;
							break
						}
						if(f = Mn(d[s], t, l, o, 0, e), 0 !== f) {
							for(r = 0; f > r; r++) t[u + r] = t[l + r];
							if(u += f, l += f, o -= f, 0 === o) {
								p = !0;
								break
							}
						}
						if(t[u++] = d[s++], 1 === --i) {
							p = !0;
							break
						}
						g--
					} while (c >= lS || f >= lS);
					if(p) break;
					0 > g && (g = 0), g += 2
				}
				if(h = g, 1 > h && (h = 1), 1 === i) {
					for(r = 0; o > r; r++) t[u + r] = t[l + r];
					t[u + o] = d[s]
				} else {
					if(0 === i) throw new Error;
					for(r = 0; i > r; r++) t[u + r] = d[s + r]
				}
			} else
				for(r = 0; i > r; r++) t[u + r] = d[s + r]
		}

		function s(n, i, a, o) {
			var r = 0;
			for(r = 0; o > r; r++) d[r] = t[a + r];
			var s = n + i - 1,
				l = o - 1,
				u = a + o - 1,
				c = 0,
				f = 0;
			if(t[u--] = t[s--], 0 !== --i) {
				if(1 === o) {
					for(u -= i, s -= i, f = u + 1, c = s + 1, r = i - 1; r >= 0; r--) t[f + r] = t[c + r];
					return void(t[u] = d[l])
				}
				for(var p = h;;) {
					var g = 0,
						m = 0,
						v = !1;
					do
						if(e(d[l], t[s]) < 0) {
							if(t[u--] = t[s--], g++, m = 0, 0 === --i) {
								v = !0;
								break
							}
						} else if(t[u--] = d[l--], m++, g = 0, 1 === --o) {
						v = !0;
						break
					} while (p > (g | m));
					if(v) break;
					do {
						if(g = i - In(d[l], t, n, i, i - 1, e), 0 !== g) {
							for(u -= g, s -= g, i -= g, f = u + 1, c = s + 1, r = g - 1; r >= 0; r--) t[f + r] = t[c + r];
							if(0 === i) {
								v = !0;
								break
							}
						}
						if(t[u--] = d[l--], 1 === --o) {
							v = !0;
							break
						}
						if(m = o - Mn(t[s], d, 0, o, o - 1, e), 0 !== m) {
							for(u -= m, l -= m, o -= m, f = u + 1, c = l + 1, r = 0; m > r; r++) t[f + r] = d[c + r];
							if(1 >= o) {
								v = !0;
								break
							}
						}
						if(t[u--] = t[s--], 0 === --i) {
							v = !0;
							break
						}
						p--
					} while (g >= lS || m >= lS);
					if(v) break;
					0 > p && (p = 0), p += 2
				}
				if(h = p, 1 > h && (h = 1), 1 === o) {
					for(u -= i, s -= i, f = u + 1, c = s + 1, r = i - 1; r >= 0; r--) t[f + r] = t[c + r];
					t[u] = d[l]
				} else {
					if(0 === o) throw new Error;
					for(c = u - (o - 1), r = 0; o > r; r++) t[c + r] = d[r]
				}
			} else
				for(c = u - (o - 1), r = 0; o > r; r++) t[c + r] = d[r]
		}
		var l, u, h = lS,
			c = 0,
			d = [];
		l = [], u = [], this.mergeRuns = i, this.forceMergeRuns = a, this.pushRun = n
	}

	function An(t, e, n, i) {
		n || (n = 0), i || (i = t.length);
		var a = i - n;
		if(!(2 > a)) {
			var o = 0;
			if(sS > a) return o = wn(t, n, i, e), void Sn(t, n, i, n + o, e);
			var r = new Tn(t, e),
				s = _n(a);
			do {
				if(o = wn(t, n, i, e), s > o) {
					var l = a;
					l > s && (l = s), Sn(t, n, n + l, n + o, e), o = l
				}
				r.pushRun(n, o), r.mergeRuns(), a -= o, n += o
			} while (0 !== a);
			r.forceMergeRuns()
		}
	}

	function Dn(t, e) {
		return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
	}

	function Cn(t, e, n) {
		var i = null == e.x ? 0 : e.x,
			a = null == e.x2 ? 1 : e.x2,
			o = null == e.y ? 0 : e.y,
			r = null == e.y2 ? 0 : e.y2;
		e.global || (i = i * n.width + n.x, a = a * n.width + n.x, o = o * n.height + n.y, r = r * n.height + n.y), i = isNaN(i) ? 0 : i, a = isNaN(a) ? 1 : a, o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
		var s = t.createLinearGradient(i, o, a, r);
		return s
	}

	function Ln(t, e, n) {
		var i = n.width,
			a = n.height,
			o = Math.min(i, a),
			r = null == e.x ? .5 : e.x,
			s = null == e.y ? .5 : e.y,
			l = null == e.r ? .5 : e.r;
		e.global || (r = r * i + n.x, s = s * a + n.y, l *= o);
		var u = t.createRadialGradient(r, s, 0, r, s, l);
		return u
	}

	function kn() {
		return !1
	}

	function Pn(t, e, n) {
		var i = sb(),
			a = e.getWidth(),
			o = e.getHeight(),
			r = i.style;
		return r && (r.position = "absolute", r.left = 0, r.top = 0, r.width = a + "px", r.height = o + "px", i.setAttribute("data-zr-dom-id", t)), i.width = a * n, i.height = o * n, i
	}

	function On(t) {
		if("string" == typeof t) {
			var e = bS.get(t);
			return e && e.image
		}
		return t
	}

	function Nn(t, e, n, i, a) {
		if(t) {
			if("string" == typeof t) {
				if(e && e.__zrImageSrc === t || !n) return e;
				var o = bS.get(t),
					r = {
						hostEl: n,
						cb: i,
						cbPayload: a
					};
				return o ? (e = o.image, !zn(e) && o.pending.push(r)) : (e = new Image, e.onload = e.onerror = En, bS.put(t, e.__cachedImgObj = {
					image: e,
					pending: [r]
				}), e.src = e.__zrImageSrc = t), e
			}
			return t
		}
		return e
	}

	function En() {
		var t = this.__cachedImgObj;
		this.onload = this.onerror = this.__cachedImgObj = null;
		for(var e = 0; e < t.pending.length; e++) {
			var n = t.pending[e],
				i = n.cb;
			i && i(this, n.cbPayload), n.hostEl.dirty()
		}
		t.pending.length = 0
	}

	function zn(t) {
		return t && t.width && t.height
	}

	function Rn(t, e) {
		e = e || AS;
		var n = t + ":" + e;
		if(SS[n]) return SS[n];
		for(var i = (t + "").split("\n"), a = 0, o = 0, r = i.length; r > o; o++) a = Math.max(qn(i[o], e).width, a);
		return MS > IS && (MS = 0, SS = {}), MS++, SS[n] = a, a
	}

	function Bn(t, e, n, i, a, o, r, s) {
		return r ? Gn(t, e, n, i, a, o, r, s) : Vn(t, e, n, i, a, o, s)
	}

	function Vn(t, e, n, i, a, o, r) {
		var s = Kn(t, e, a, o, r),
			l = Rn(t, e);
		a && (l += a[1] + a[3]);
		var u = s.outerHeight,
			h = Fn(0, l, n),
			c = Wn(0, u, i),
			d = new xn(h, c, l, u);
		return d.lineHeight = s.lineHeight, d
	}

	function Gn(t, e, n, i, a, o, r, s) {
		var l = $n(t, {
				rich: r,
				truncate: s,
				font: e,
				textAlign: n,
				textPadding: a,
				textLineHeight: o
			}),
			u = l.outerWidth,
			h = l.outerHeight,
			c = Fn(0, u, n),
			d = Wn(0, h, i);
		return new xn(c, d, u, h)
	}

	function Fn(t, e, n) {
		return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
	}

	function Wn(t, e, n) {
		return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
	}

	function Hn(t, e, n) {
		var i = e.x,
			a = e.y,
			o = e.height,
			r = e.width,
			s = o / 2,
			l = "left",
			u = "top";
		switch(t) {
			case "left":
				i -= n, a += s, l = "right", u = "middle";
				break;
			case "right":
				i += n + r, a += s, u = "middle";
				break;
			case "top":
				i += r / 2, a -= n, l = "center", u = "bottom";
				break;
			case "bottom":
				i += r / 2, a += o + n, l = "center";
				break;
			case "inside":
				i += r / 2, a += s, l = "center", u = "middle";
				break;
			case "insideLeft":
				i += n, a += s, u = "middle";
				break;
			case "insideRight":
				i += r - n, a += s, l = "right", u = "middle";
				break;
			case "insideTop":
				i += r / 2, a += n, l = "center";
				break;
			case "insideBottom":
				i += r / 2, a += o - n, l = "center", u = "bottom";
				break;
			case "insideTopLeft":
				i += n, a += n;
				break;
			case "insideTopRight":
				i += r - n, a += n, l = "right";
				break;
			case "insideBottomLeft":
				i += n, a += o - n, u = "bottom";
				break;
			case "insideBottomRight":
				i += r - n, a += o - n, l = "right", u = "bottom"
		}
		return {
			x: i,
			y: a,
			textAlign: l,
			textVerticalAlign: u
		}
	}

	function Zn(t, e, n, i, a) {
		if(!e) return "";
		var o = (t + "").split("\n");
		a = Xn(e, n, i, a);
		for(var r = 0, s = o.length; s > r; r++) o[r] = Yn(o[r], a);
		return o.join("\n")
	}

	function Xn(t, e, n, i) {
		i = r({}, i), i.font = e;
		var n = C(n, "...");
		i.maxIterations = C(i.maxIterations, 2);
		var a = i.minChar = C(i.minChar, 0);
		i.cnCharWidth = Rn("国", e);
		var o = i.ascCharWidth = Rn("a", e);
		i.placeholder = C(i.placeholder, "");
		for(var s = t = Math.max(0, t - 1), l = 0; a > l && s >= o; l++) s -= o;
		var u = Rn(n, e);
		return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = t, i
	}

	function Yn(t, e) {
		var n = e.containerWidth,
			i = e.font,
			a = e.contentWidth;
		if(!n) return "";
		var o = Rn(t, i);
		if(n >= o) return t;
		for(var r = 0;; r++) {
			if(a >= o || r >= e.maxIterations) {
				t += e.ellipsis;
				break
			}
			var s = 0 === r ? Un(t, a, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
			t = t.substr(0, s), o = Rn(t, i)
		}
		return "" === t && (t = e.placeholder), t
	}

	function Un(t, e, n, i) {
		for(var a = 0, o = 0, r = t.length; r > o && e > a; o++) {
			var s = t.charCodeAt(o);
			a += s >= 0 && 127 >= s ? n : i
		}
		return o
	}

	function jn(t) {
		return Rn("国", t)
	}

	function qn(t, e) {
		return DS.measureText(t, e)
	}

	function Kn(t, e, n, i, a) {
		null != t && (t += "");
		var o = C(i, jn(e)),
			r = t ? t.split("\n") : [],
			s = r.length * o,
			l = s;
		if(n && (l += n[0] + n[2]), t && a) {
			var u = a.outerHeight,
				h = a.outerWidth;
			if(null != u && l > u) t = "", r = [];
			else if(null != h)
				for(var c = Xn(h - (n ? n[1] + n[3] : 0), e, a.ellipsis, {
						minChar: a.minChar,
						placeholder: a.placeholder
					}), d = 0, f = r.length; f > d; d++) r[d] = Yn(r[d], c)
		}
		return {
			lines: r,
			height: s,
			outerHeight: l,
			lineHeight: o
		}
	}

	function $n(t, e) {
		var n = {
			lines: [],
			width: 0,
			height: 0
		};
		if(null != t && (t += ""), !t) return n;
		for(var i, a = TS.lastIndex = 0; null != (i = TS.exec(t));) {
			var o = i.index;
			o > a && Jn(n, t.substring(a, o)), Jn(n, i[2], i[1]), a = TS.lastIndex
		}
		a < t.length && Jn(n, t.substring(a, t.length));
		var r = n.lines,
			s = 0,
			l = 0,
			u = [],
			h = e.textPadding,
			c = e.truncate,
			d = c && c.outerWidth,
			f = c && c.outerHeight;
		h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));
		for(var p = 0; p < r.length; p++) {
			for(var g = r[p], m = 0, v = 0, y = 0; y < g.tokens.length; y++) {
				var x = g.tokens[y],
					_ = x.styleName && e.rich[x.styleName] || {},
					w = x.textPadding = _.textPadding,
					b = x.font = _.font || e.font,
					S = x.textHeight = C(_.textHeight, jn(b));
				if(w && (S += w[0] + w[2]), x.height = S, x.lineHeight = L(_.textLineHeight, e.textLineHeight, S), x.textAlign = _ && _.textAlign || e.textAlign, x.textVerticalAlign = _ && _.textVerticalAlign || "middle", null != f && s + x.lineHeight > f) return {
					lines: [],
					width: 0,
					height: 0
				};
				x.textWidth = Rn(x.text, b);
				var M = _.textWidth,
					I = null == M || "auto" === M;
				if("string" == typeof M && "%" === M.charAt(M.length - 1)) x.percentWidth = M, u.push(x), M = 0;
				else {
					if(I) {
						M = x.textWidth;
						var T = _.textBackgroundColor,
							A = T && T.image;
						A && (A = On(A), zn(A) && (M = Math.max(M, A.width * S / A.height)))
					}
					var D = w ? w[1] + w[3] : 0;
					M += D;
					var k = null != d ? d - v : null;
					null != k && M > k && (!I || D > k ? (x.text = "", x.textWidth = M = 0) : (x.text = Zn(x.text, k - D, b, c.ellipsis, {
						minChar: c.minChar
					}), x.textWidth = Rn(x.text, b), M = x.textWidth + D))
				}
				v += x.width = M, _ && (m = Math.max(m, x.lineHeight))
			}
			g.width = v, g.lineHeight = m, s += m, l = Math.max(l, v)
		}
		n.outerWidth = n.width = C(e.textWidth, l), n.outerHeight = n.height = C(e.textHeight, s), h && (n.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);
		for(var p = 0; p < u.length; p++) {
			var x = u[p],
				P = x.percentWidth;
			x.width = parseInt(P, 10) / 100 * l
		}
		return n
	}

	function Jn(t, e, n) {
		for(var i = "" === e, a = e.split("\n"), o = t.lines, r = 0; r < a.length; r++) {
			var s = a[r],
				l = {
					styleName: n,
					text: s,
					isLineHolder: !s && !i
				};
			if(r) o.push({
				tokens: [l]
			});
			else {
				var u = (o[o.length - 1] || (o[0] = {
						tokens: []
					})).tokens,
					h = u.length;
				1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l)
			}
		}
	}

	function Qn(t) {
		var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
		return e && N(e) || t.textFont || t.font
	}

	function ti(t, e) {
		var n, i, a, o, r = e.x,
			s = e.y,
			l = e.width,
			u = e.height,
			h = e.r;
		0 > l && (r += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = a = o = h : h instanceof Array ? 1 === h.length ? n = i = a = o = h[0] : 2 === h.length ? (n = a = h[0], i = o = h[1]) : 3 === h.length ? (n = h[0], i = o = h[1], a = h[2]) : (n = h[0], i = h[1], a = h[2], o = h[3]) : n = i = a = o = 0;
		var c;
		n + i > l && (c = n + i, n *= l / c, i *= l / c), a + o > l && (c = a + o, a *= l / c, o *= l / c), i + a > u && (c = i + a, i *= u / c, a *= u / c), n + o > u && (c = n + o, n *= u / c, o *= u / c), t.moveTo(r + n, s), t.lineTo(r + l - i, s), 0 !== i && t.arc(r + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(r + l, s + u - a), 0 !== a && t.arc(r + l - a, s + u - a, a, 0, Math.PI / 2), t.lineTo(r + o, s + u), 0 !== o && t.arc(r + o, s + u - o, o, Math.PI / 2, Math.PI), t.lineTo(r, s + n), 0 !== n && t.arc(r + n, s + n, n, Math.PI, 1.5 * Math.PI)
	}

	function ei(t) {
		return ni(t), f(t.rich, ni), t
	}

	function ni(t) {
		if(t) {
			t.font = Qn(t);
			var e = t.textAlign;
			"middle" === e && (e = "center"), t.textAlign = null == e || LS[e] ? e : "left";
			var n = t.textVerticalAlign || t.textBaseline;
			"center" === n && (n = "middle"), t.textVerticalAlign = null == n || kS[n] ? n : "top";
			var i = t.textPadding;
			i && (t.textPadding = P(t.textPadding))
		}
	}

	function ii(t, e, n, i, a, o) {
		i.rich ? oi(t, e, n, i, a, o) : ai(t, e, n, i, a, o)
	}

	function ai(t, e, n, i, a, o) {
		var r, s = ui(i),
			l = !1,
			u = e.__attrCachedBy === dS.PLAIN_TEXT;
		o !== fS ? (o && (r = o.style, l = !s && u && r), e.__attrCachedBy = s ? dS.NONE : dS.PLAIN_TEXT) : u && (e.__attrCachedBy = dS.NONE);
		var h = i.font || CS;
		l && h === (r.font || CS) || (e.font = h);
		var c = t.__computedFont;
		t.__styleFont !== h && (t.__styleFont = h, c = t.__computedFont = e.font);
		var d = i.textPadding,
			f = i.textLineHeight,
			p = t.__textCotentBlock;
		(!p || t.__dirtyText) && (p = t.__textCotentBlock = Kn(n, c, d, f, i.truncate));
		var g = p.outerHeight,
			m = p.lines,
			v = p.lineHeight,
			y = di(g, i, a),
			x = y.baseX,
			_ = y.baseY,
			w = y.textAlign || "left",
			b = y.textVerticalAlign;
		si(e, i, a, x, _);
		var S = Wn(_, g, b),
			M = x,
			I = S;
		if(s || d) {
			var T = Rn(n, c),
				A = T;
			d && (A += d[1] + d[3]);
			var D = Fn(x, A, w);
			s && hi(t, e, i, D, S, A, g), d && (M = vi(x, w, d), I += d[0])
		}
		e.textAlign = w, e.textBaseline = "middle", e.globalAlpha = i.opacity || 1;
		for(var C = 0; C < PS.length; C++) {
			var L = PS[C],
				k = L[0],
				P = L[1],
				O = i[k];
			l && O === r[k] || (e[P] = cS(e, P, O || L[2]))
		}
		I += v / 2;
		var N = i.textStrokeWidth,
			E = l ? r.textStrokeWidth : null,
			z = !l || N !== E,
			R = !l || z || i.textStroke !== r.textStroke,
			B = pi(i.textStroke, N),
			V = gi(i.textFill);
		if(B && (z && (e.lineWidth = N), R && (e.strokeStyle = B)), V && (l && i.textFill === r.textFill || (e.fillStyle = V)), 1 === m.length) B && e.strokeText(m[0], M, I), V && e.fillText(m[0], M, I);
		else
			for(var C = 0; C < m.length; C++) B && e.strokeText(m[C], M, I), V && e.fillText(m[C], M, I), I += v
	}

	function oi(t, e, n, i, a, o) {
		o !== fS && (e.__attrCachedBy = dS.NONE);
		var r = t.__textCotentBlock;
		(!r || t.__dirtyText) && (r = t.__textCotentBlock = $n(n, i)), ri(t, e, r, i, a)
	}

	function ri(t, e, n, i, a) {
		var o = n.width,
			r = n.outerWidth,
			s = n.outerHeight,
			l = i.textPadding,
			u = di(s, i, a),
			h = u.baseX,
			c = u.baseY,
			d = u.textAlign,
			f = u.textVerticalAlign;
		si(e, i, a, h, c);
		var p = Fn(h, r, d),
			g = Wn(c, s, f),
			m = p,
			v = g;
		l && (m += l[3], v += l[0]);
		var y = m + o;
		ui(i) && hi(t, e, i, p, g, r, s);
		for(var x = 0; x < n.lines.length; x++) {
			for(var _, w = n.lines[x], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, A = m, D = y, C = S - 1; S > T && (_ = b[T], !_.textAlign || "left" === _.textAlign);) li(t, e, _, i, M, v, A, "left"), I -= _.width, A += _.width, T++;
			for(; C >= 0 && (_ = b[C], "right" === _.textAlign);) li(t, e, _, i, M, v, D, "right"), I -= _.width, D -= _.width, C--;
			for(A += (o - (A - m) - (y - D) - I) / 2; C >= T;) _ = b[T], li(t, e, _, i, M, v, A + _.width / 2, "center"), A += _.width, T++;
			v += M
		}
	}

	function si(t, e, n, i, a) {
		if(n && e.textRotation) {
			var o = e.textOrigin;
			"center" === o ? (i = n.width / 2 + n.x, a = n.height / 2 + n.y) : o && (i = o[0] + n.x, a = o[1] + n.y), t.translate(i, a), t.rotate(-e.textRotation), t.translate(-i, -a)
		}
	}

	function li(t, e, n, i, a, o, r, s) {
		var l = i.rich[n.styleName] || {};
		l.text = n.text;
		var u = n.textVerticalAlign,
			h = o + a / 2;
		"top" === u ? h = o + n.height / 2 : "bottom" === u && (h = o + a - n.height / 2), !n.isLineHolder && ui(l) && hi(t, e, l, "right" === s ? r - n.width : "center" === s ? r - n.width / 2 : r, h - n.height / 2, n.width, n.height);
		var c = n.textPadding;
		c && (r = vi(r, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2), fi(e, "shadowBlur", L(l.textShadowBlur, i.textShadowBlur, 0)), fi(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), fi(e, "shadowOffsetX", L(l.textShadowOffsetX, i.textShadowOffsetX, 0)), fi(e, "shadowOffsetY", L(l.textShadowOffsetY, i.textShadowOffsetY, 0)), fi(e, "textAlign", s), fi(e, "textBaseline", "middle"), fi(e, "font", n.font || CS);
		var d = pi(l.textStroke || i.textStroke, p),
			f = gi(l.textFill || i.textFill),
			p = C(l.textStrokeWidth, i.textStrokeWidth);
		d && (fi(e, "lineWidth", p), fi(e, "strokeStyle", d), e.strokeText(n.text, r, h)), f && (fi(e, "fillStyle", f), e.fillText(n.text, r, h))
	}

	function ui(t) {
		return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor)
	}

	function hi(t, e, n, i, a, o, r) {
		var s = n.textBackgroundColor,
			l = n.textBorderWidth,
			u = n.textBorderColor,
			h = b(s);
		if(fi(e, "shadowBlur", n.textBoxShadowBlur || 0), fi(e, "shadowColor", n.textBoxShadowColor || "transparent"), fi(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), fi(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {
			e.beginPath();
			var c = n.textBorderRadius;
			c ? ti(e, {
				x: i,
				y: a,
				width: o,
				height: r,
				r: c
			}) : e.rect(i, a, o, r), e.closePath()
		}
		if(h)
			if(fi(e, "fillStyle", s), null != n.fillOpacity) {
				var d = e.globalAlpha;
				e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = d
			} else e.fill();
		else if(S(s)) {
			var f = s.image;
			f = Nn(f, null, t, ci, s), f && zn(f) && e.drawImage(f, i, a, o, r)
		}
		if(l && u)
			if(fi(e, "lineWidth", l), fi(e, "strokeStyle", u), null != n.strokeOpacity) {
				var d = e.globalAlpha;
				e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = d
			} else e.stroke()
	}

	function ci(t, e) {
		e.image = t
	}

	function di(t, e, n) {
		var i = e.x || 0,
			a = e.y || 0,
			o = e.textAlign,
			r = e.textVerticalAlign;
		if(n) {
			var s = e.textPosition;
			if(s instanceof Array) i = n.x + mi(s[0], n.width), a = n.y + mi(s[1], n.height);
			else {
				var l = Hn(s, n, e.textDistance);
				i = l.x, a = l.y, o = o || l.textAlign, r = r || l.textVerticalAlign
			}
			var u = e.textOffset;
			u && (i += u[0], a += u[1])
		}
		return {
			baseX: i,
			baseY: a,
			textAlign: o,
			textVerticalAlign: r
		}
	}

	function fi(t, e, n) {
		return t[e] = cS(t, e, n), t[e]
	}

	function pi(t, e) {
		return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
	}

	function gi(t) {
		return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
	}

	function mi(t, e) {
		return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
	}

	function vi(t, e, n) {
		return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
	}

	function yi(t, e) {
		return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
	}

	function xi(t) {
		t = t || {}, nS.call(this, t);
		for(var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
		this.style = new gS(t.style, this), this._rect = null, this.__clipPaths = []
	}

	function _i(t) {
		xi.call(this, t)
	}

	function wi(t) {
		return parseInt(t, 10)
	}

	function bi(t) {
		return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
	}

	function Si(t, e, n) {
		return VS.copy(t.getBoundingRect()), t.transform && VS.applyTransform(t.transform), GS.width = e, GS.height = n, !VS.intersect(GS)
	}

	function Mi(t, e) {
		if(t === e) return !1;
		if(!t || !e || t.length !== e.length) return !0;
		for(var n = 0; n < t.length; n++)
			if(t[n] !== e[n]) return !0
	}

	function Ii(t, e) {
		for(var n = 0; n < t.length; n++) {
			var i = t[n];
			i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
		}
	}

	function Ti(t, e) {
		var n = document.createElement("div");
		return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
	}

	function Ai(t) {
		return "mousewheel" === t && Kw.browser.firefox ? "DOMMouseScroll" : t
	}

	function Di(t) {
		t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
			t._touching = !1
		}, 700)
	}

	function Ci(t) {
		var e = t.pointerType;
		return "pen" === e || "touch" === e
	}

	function Li(t) {
		function e(t, e) {
			return function() {
				return e._touching ? void 0 : t.apply(e, arguments)
			}
		}
		f(XS, function(e) {
			t._handlers[e] = y(jS[e], t)
		}), f(US, function(e) {
			t._handlers[e] = y(jS[e], t)
		}), f(ZS, function(n) {
			t._handlers[n] = e(jS[n], t)
		})
	}

	function ki(t) {
		function e(e, n) {
			f(e, function(e) {
				me(t, Ai(e), n._handlers[e])
			}, n)
		}
		yb.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._handlers = {}, Li(this), Kw.pointerEventsSupported ? e(US, this) : (Kw.touchEventsSupported && e(XS, this), e(ZS, this))
	}

	function Pi(t, e) {
		var n = new tM(jw(), t, e);
		return JS[n.id] = n, n
	}

	function Oi(t) {
		if(t) t.dispose();
		else {
			for(var e in JS) JS.hasOwnProperty(e) && JS[e].dispose();
			JS = {}
		}
		return this
	}

	function Ni(t) {
		return JS[t]
	}

	function Ei(t, e) {
		$S[t] = e
	}

	function zi(t) {
		delete JS[t]
	}

	function Ri(t) {
		return t instanceof Array ? t : null == t ? [] : [t]
	}

	function Bi(t, e, n) {
		if(t) {
			t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
			for(var i = 0, a = n.length; a > i; i++) {
				var o = n[i];
				!t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o])
			}
		}
	}

	function Vi(t) {
		return !iM(t) || aM(t) || t instanceof Date ? t : t.value
	}

	function Gi(t) {
		return iM(t) && !(t instanceof Array)
	}

	function Fi(t, e) {
		e = (e || []).slice();
		var n = p(t || [], function(t) {
			return {
				exist: t
			}
		});
		return nM(e, function(t, i) {
			if(iM(t)) {
				for(var a = 0; a < n.length; a++)
					if(!n[a].option && null != t.id && n[a].exist.id === t.id + "") return n[a].option = t, void(e[i] = null);
				for(var a = 0; a < n.length; a++) {
					var o = n[a].exist;
					if(!(n[a].option || null != o.id && null != t.id || null == t.name || Zi(t) || Zi(o) || o.name !== t.name + "")) return n[a].option = t, void(e[i] = null)
				}
			}
		}), nM(e, function(t) {
			if(iM(t)) {
				for(var e = 0; e < n.length; e++) {
					var i = n[e].exist;
					if(!n[e].option && !Zi(i) && null == t.id) {
						n[e].option = t;
						break
					}
				}
				e >= n.length && n.push({
					option: t
				})
			}
		}), n
	}

	function Wi(t) {
		var e = B();
		nM(t, function(t) {
			var n = t.exist;
			n && e.set(n.id, t)
		}), nM(t, function(t) {
			var n = t.option;
			O(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
		}), nM(t, function(t, n) {
			var i = t.exist,
				a = t.option,
				o = t.keyInfo;
			if(iM(a)) {
				if(o.name = null != a.name ? a.name + "" : i ? i.name : oM + n, i) o.id = i.id;
				else if(null != a.id) o.id = a.id + "";
				else {
					var r = 0;
					do o.id = "\x00" + o.name + "\x00" + r++; while (e.get(o.id))
				}
				e.set(o.id, t)
			}
		})
	}

	function Hi(t) {
		var e = t.name;
		return !(!e || !e.indexOf(oM))
	}

	function Zi(t) {
		return iM(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
	}

	function Xi(t, e) {
		function n(t, e, n) {
			for(var i = 0, a = t.length; a > i; i++)
				for(var o = t[i].seriesId, r = Ri(t[i].dataIndex), s = n && n[o], l = 0, u = r.length; u > l; l++) {
					var h = r[l];
					s && s[h] ? s[h] = null : (e[o] || (e[o] = {}))[h] = 1
				}
		}

		function i(t, e) {
			var n = [];
			for(var a in t)
				if(t.hasOwnProperty(a) && null != t[a])
					if(e) n.push(+a);
					else {
						var o = i(t[a], !0);
						o.length && n.push({
							seriesId: a,
							dataIndex: o
						})
					}
			return n
		}
		var a = {},
			o = {};
		return n(t || [], a), n(e || [], o, a), [i(a), i(o)]
	}

	function Yi(t, e) {
		return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _(e.dataIndex) ? p(e.dataIndex, function(e) {
			return t.indexOfRawIndex(e)
		}) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _(e.name) ? p(e.name, function(e) {
			return t.indexOfName(e)
		}) : t.indexOfName(e.name) : void 0
	}

	function Ui() {
		var t = "__\x00ec_inner_" + sM++ + "_" + Math.random().toFixed(5);
		return function(e) {
			return e[t] || (e[t] = {})
		}
	}

	function ji(t, e, n) {
		if(b(e)) {
			var i = {};
			i[e + "Index"] = 0, e = i
		}
		var a = n && n.defaultMainType;
		!a || qi(e, a + "Index") || qi(e, a + "Id") || qi(e, a + "Name") || (e[a + "Index"] = 0);
		var o = {};
		return nM(e, function(i, a) {
			var i = e[a];
			if("dataIndex" === a || "dataIndexInside" === a) return void(o[a] = i);
			var r = a.match(/^(\w+)(Index|Id|Name)$/) || [],
				s = r[1],
				l = (r[2] || "").toLowerCase();
			if(!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && u(n.includeMainTypes, s) < 0)) {
				var h = {
					mainType: s
				};
				("index" !== l || "all" !== i) && (h[l] = i);
				var c = t.queryComponents(h);
				o[s + "Models"] = c, o[s + "Model"] = c[0]
			}
		}), o
	}

	function qi(t, e) {
		return t && t.hasOwnProperty(e)
	}

	function Ki(t, e, n) {
		t.setAttribute ? t.setAttribute(e, n) : t[e] = n
	}

	function $i(t, e) {
		return t.getAttribute ? t.getAttribute(e) : t[e]
	}

	function Ji(t) {
		return "auto" === t ? Kw.domSupported ? "html" : "richText" : t || "html"
	}

	function Qi(t, e) {
		var n = B(),
			i = [];
		return f(t, function(t) {
			var a = e(t);
			(n.get(a) || (i.push(a), n.set(a, []))).push(t)
		}), {
			keys: i,
			buckets: n
		}
	}

	function ta(t) {
		var e = {
			main: "",
			sub: ""
		};
		return t && (t = t.split(lM), e.main = t[0] || "", e.sub = t[1] || ""), e
	}

	function ea(t) {
		O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
	}

	function na(t) {
		t.$constructor = t, t.extend = function(t) {
			var e = this,
				n = function() {
					t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
				};
			return r(n.prototype, t), n.extend = this.extend, n.superCall = aa, n.superApply = oa, h(n, this), n.superClass = e, n
		}
	}

	function ia(t) {
		var e = ["__\x00is_clz", hM++, Math.random().toFixed(3)].join("_");
		t.prototype[e] = !0, t.isInstance = function(t) {
			return !(!t || !t[e])
		}
	}

	function aa(t, e) {
		var n = k(arguments, 2);
		return this.superClass.prototype[e].apply(t, n)
	}

	function oa(t, e, n) {
		return this.superClass.prototype[e].apply(t, n)
	}

	function ra(t, e) {
		function n(t) {
			var e = i[t.main];
			return e && e[uM] || (e = i[t.main] = {}, e[uM] = !0), e
		}
		e = e || {};
		var i = {};
		if(t.registerClass = function(t, e) {
				if(e)
					if(ea(e), e = ta(e), e.sub) {
						if(e.sub !== uM) {
							var a = n(e);
							a[e.sub] = t
						}
					} else i[e.main] = t;
				return t
			}, t.getClass = function(t, e, n) {
				var a = i[t];
				if(a && a[uM] && (a = e ? a[e] : null), n && !a) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
				return a
			}, t.getClassesByMainType = function(t) {
				t = ta(t);
				var e = [],
					n = i[t.main];
				return n && n[uM] ? f(n, function(t, n) {
					n !== uM && e.push(t)
				}) : e.push(n), e
			}, t.hasClass = function(t) {
				return t = ta(t), !!i[t.main]
			}, t.getAllClassMainTypes = function() {
				var t = [];
				return f(i, function(e, n) {
					t.push(n)
				}), t
			}, t.hasSubTypes = function(t) {
				t = ta(t);
				var e = i[t.main];
				return e && e[uM]
			}, t.parseClassType = ta, e.registerWhenExtend) {
			var a = t.extend;
			a && (t.extend = function(e) {
				var n = a.call(this, e);
				return t.registerClass(n, e.type)
			})
		}
		return t
	}

	function sa(t) {
		return t > -yM && yM > t
	}

	function la(t) {
		return t > yM || -yM > t
	}

	function ua(t, e, n, i, a) {
		var o = 1 - a;
		return o * o * (o * t + 3 * a * e) + a * a * (a * i + 3 * o * n)
	}

	function ha(t, e, n, i, a) {
		var o = 1 - a;
		return 3 * (((e - t) * o + 2 * (n - e) * a) * o + (i - n) * a * a)
	}

	function ca(t, e, n, i, a, o) {
		var r = i + 3 * (e - n) - t,
			s = 3 * (n - 2 * e + t),
			l = 3 * (e - t),
			u = t - a,
			h = s * s - 3 * r * l,
			c = s * l - 9 * r * u,
			d = l * l - 3 * s * u,
			f = 0;
		if(sa(h) && sa(c))
			if(sa(s)) o[0] = 0;
			else {
				var p = -l / s;
				p >= 0 && 1 >= p && (o[f++] = p)
			}
		else {
			var g = c * c - 4 * h * d;
			if(sa(g)) {
				var m = c / h,
					p = -s / r + m,
					v = -m / 2;
				p >= 0 && 1 >= p && (o[f++] = p), v >= 0 && 1 >= v && (o[f++] = v)
			} else if(g > 0) {
				var y = vM(g),
					x = h * s + 1.5 * r * (-c + y),
					_ = h * s + 1.5 * r * (-c - y);
				x = 0 > x ? -mM(-x, wM) : mM(x, wM), _ = 0 > _ ? -mM(-_, wM) : mM(_, wM);
				var p = (-s - (x + _)) / (3 * r);
				p >= 0 && 1 >= p && (o[f++] = p)
			} else {
				var w = (2 * h * s - 3 * r * c) / (2 * vM(h * h * h)),
					b = Math.acos(w) / 3,
					S = vM(h),
					M = Math.cos(b),
					p = (-s - 2 * S * M) / (3 * r),
					v = (-s + S * (M + _M * Math.sin(b))) / (3 * r),
					I = (-s + S * (M - _M * Math.sin(b))) / (3 * r);
				p >= 0 && 1 >= p && (o[f++] = p), v >= 0 && 1 >= v && (o[f++] = v), I >= 0 && 1 >= I && (o[f++] = I)
			}
		}
		return f
	}

	function da(t, e, n, i, a) {
		var o = 6 * n - 12 * e + 6 * t,
			r = 9 * e + 3 * i - 3 * t - 9 * n,
			s = 3 * e - 3 * t,
			l = 0;
		if(sa(r)) {
			if(la(o)) {
				var u = -s / o;
				u >= 0 && 1 >= u && (a[l++] = u)
			}
		} else {
			var h = o * o - 4 * r * s;
			if(sa(h)) a[0] = -o / (2 * r);
			else if(h > 0) {
				var c = vM(h),
					u = (-o + c) / (2 * r),
					d = (-o - c) / (2 * r);
				u >= 0 && 1 >= u && (a[l++] = u), d >= 0 && 1 >= d && (a[l++] = d)
			}
		}
		return l
	}

	function fa(t, e, n, i, a, o) {
		var r = (e - t) * a + t,
			s = (n - e) * a + e,
			l = (i - n) * a + n,
			u = (s - r) * a + r,
			h = (l - s) * a + s,
			c = (h - u) * a + u;
		o[0] = t, o[1] = r, o[2] = u, o[3] = c, o[4] = c, o[5] = h, o[6] = l, o[7] = i
	}

	function pa(t, e, n, i, a, o, r, s, l, u, h) {
		var c, d, f, p, g, m = .005,
			v = 1 / 0;
		bM[0] = l, bM[1] = u;
		for(var y = 0; 1 > y; y += .05) SM[0] = ua(t, n, a, r, y), SM[1] = ua(e, i, o, s, y), p = gb(bM, SM), v > p && (c = y, v = p);
		v = 1 / 0;
		for(var x = 0; 32 > x && !(xM > m); x++) d = c - m, f = c + m, SM[0] = ua(t, n, a, r, d), SM[1] = ua(e, i, o, s, d), p = gb(SM, bM), d >= 0 && v > p ? (c = d, v = p) : (MM[0] = ua(t, n, a, r, f), MM[1] = ua(e, i, o, s, f), g = gb(MM, bM), 1 >= f && v > g ? (c = f, v = g) : m *= .5);
		return h && (h[0] = ua(t, n, a, r, c), h[1] = ua(e, i, o, s, c)), vM(v)
	}

	function ga(t, e, n, i) {
		var a = 1 - i;
		return a * (a * t + 2 * i * e) + i * i * n
	}

	function ma(t, e, n, i) {
		return 2 * ((1 - i) * (e - t) + i * (n - e))
	}

	function va(t, e, n, i, a) {
		var o = t - 2 * e + n,
			r = 2 * (e - t),
			s = t - i,
			l = 0;
		if(sa(o)) {
			if(la(r)) {
				var u = -s / r;
				u >= 0 && 1 >= u && (a[l++] = u)
			}
		} else {
			var h = r * r - 4 * o * s;
			if(sa(h)) {
				var u = -r / (2 * o);
				u >= 0 && 1 >= u && (a[l++] = u)
			} else if(h > 0) {
				var c = vM(h),
					u = (-r + c) / (2 * o),
					d = (-r - c) / (2 * o);
				u >= 0 && 1 >= u && (a[l++] = u), d >= 0 && 1 >= d && (a[l++] = d)
			}
		}
		return l
	}

	function ya(t, e, n) {
		var i = t + n - 2 * e;
		return 0 === i ? .5 : (t - e) / i
	}

	function xa(t, e, n, i, a) {
		var o = (e - t) * i + t,
			r = (n - e) * i + e,
			s = (r - o) * i + o;
		a[0] = t, a[1] = o, a[2] = s, a[3] = s, a[4] = r, a[5] = n
	}

	function _a(t, e, n, i, a, o, r, s, l) {
		var u, h = .005,
			c = 1 / 0;
		bM[0] = r, bM[1] = s;
		for(var d = 0; 1 > d; d += .05) {
			SM[0] = ga(t, n, a, d), SM[1] = ga(e, i, o, d);
			var f = gb(bM, SM);
			c > f && (u = d, c = f)
		}
		c = 1 / 0;
		for(var p = 0; 32 > p && !(xM > h); p++) {
			var g = u - h,
				m = u + h;
			SM[0] = ga(t, n, a, g), SM[1] = ga(e, i, o, g);
			var f = gb(SM, bM);
			if(g >= 0 && c > f) u = g, c = f;
			else {
				MM[0] = ga(t, n, a, m), MM[1] = ga(e, i, o, m);
				var v = gb(MM, bM);
				1 >= m && c > v ? (u = m, c = v) : h *= .5
			}
		}
		return l && (l[0] = ga(t, n, a, u), l[1] = ga(e, i, o, u)), vM(c)
	}

	function wa(t, e, n) {
		if(0 !== t.length) {
			var i, a = t[0],
				o = a[0],
				r = a[0],
				s = a[1],
				l = a[1];
			for(i = 1; i < t.length; i++) a = t[i], o = IM(o, a[0]), r = TM(r, a[0]), s = IM(s, a[1]), l = TM(l, a[1]);
			e[0] = o, e[1] = s, n[0] = r, n[1] = l
		}
	}

	function ba(t, e, n, i, a, o) {
		a[0] = IM(t, n), a[1] = IM(e, i), o[0] = TM(t, n), o[1] = TM(e, i)
	}

	function Sa(t, e, n, i, a, o, r, s, l, u) {
		var h, c = da,
			d = ua,
			f = c(t, n, a, r, OM);
		for(l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0, h = 0; f > h; h++) {
			var p = d(t, n, a, r, OM[h]);
			l[0] = IM(p, l[0]), u[0] = TM(p, u[0])
		}
		for(f = c(e, i, o, s, NM), h = 0; f > h; h++) {
			var g = d(e, i, o, s, NM[h]);
			l[1] = IM(g, l[1]), u[1] = TM(g, u[1])
		}
		l[0] = IM(t, l[0]), u[0] = TM(t, u[0]), l[0] = IM(r, l[0]), u[0] = TM(r, u[0]), l[1] = IM(e, l[1]), u[1] = TM(e, u[1]), l[1] = IM(s, l[1]), u[1] = TM(s, u[1])
	}

	function Ma(t, e, n, i, a, o, r, s) {
		var l = ya,
			u = ga,
			h = TM(IM(l(t, n, a), 1), 0),
			c = TM(IM(l(e, i, o), 1), 0),
			d = u(t, n, a, h),
			f = u(e, i, o, c);
		r[0] = IM(t, a, d), r[1] = IM(e, o, f), s[0] = TM(t, a, d), s[1] = TM(e, o, f)
	}

	function Ia(t, e, n, i, a, o, r, s, l) {
		var u = re,
			h = se,
			c = Math.abs(a - o);
		if(1e-4 > c % CM && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void(l[1] = e + i);
		if(LM[0] = DM(a) * n + t, LM[1] = AM(a) * i + e, kM[0] = DM(o) * n + t, kM[1] = AM(o) * i + e, u(s, LM, kM), h(l, LM, kM), a %= CM, 0 > a && (a += CM), o %= CM, 0 > o && (o += CM), a > o && !r ? o += CM : o > a && r && (a += CM), r) {
			var d = o;
			o = a, a = d
		}
		for(var f = 0; o > f; f += Math.PI / 2) f > a && (PM[0] = DM(f) * n + t, PM[1] = AM(f) * i + e, u(s, PM, s), h(l, PM, l))
	}

	function Ta(t, e, n, i, a, o, r) {
		if(0 === a) return !1;
		var s = a,
			l = 0,
			u = t;
		if(r > e + s && r > i + s || e - s > r && i - s > r || o > t + s && o > n + s || t - s > o && n - s > o) return !1;
		if(t === n) return Math.abs(o - t) <= s / 2;
		l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);
		var h = l * o - r + u,
			c = h * h / (l * l + 1);
		return s / 2 * s / 2 >= c
	}

	function Aa(t, e, n, i, a, o, r, s, l, u, h) {
		if(0 === l) return !1;
		var c = l;
		if(h > e + c && h > i + c && h > o + c && h > s + c || e - c > h && i - c > h && o - c > h && s - c > h || u > t + c && u > n + c && u > a + c && u > r + c || t - c > u && n - c > u && a - c > u && r - c > u) return !1;
		var d = pa(t, e, n, i, a, o, r, s, u, h, null);
		return c / 2 >= d
	}

	function Da(t, e, n, i, a, o, r, s, l) {
		if(0 === r) return !1;
		var u = r;
		if(l > e + u && l > i + u && l > o + u || e - u > l && i - u > l && o - u > l || s > t + u && s > n + u && s > a + u || t - u > s && n - u > s && a - u > s) return !1;
		var h = _a(t, e, n, i, a, o, s, l, null);
		return u / 2 >= h
	}

	function Ca(t) {
		return t %= jM, 0 > t && (t += jM), t
	}

	function La(t, e, n, i, a, o, r, s, l) {
		if(0 === r) return !1;
		var u = r;
		s -= t, l -= e;
		var h = Math.sqrt(s * s + l * l);
		if(h - u > n || n > h + u) return !1;
		if(Math.abs(i - a) % qM < 1e-4) return !0;
		if(o) {
			var c = i;
			i = Ca(a), a = Ca(c)
		} else i = Ca(i), a = Ca(a);
		i > a && (a += qM);
		var d = Math.atan2(l, s);
		return 0 > d && (d += qM), d >= i && a >= d || d + qM >= i && a >= d + qM
	}

	function ka(t, e, n, i, a, o) {
		if(o > e && o > i || e > o && i > o) return 0;
		if(i === e) return 0;
		var r = e > i ? 1 : -1,
			s = (o - e) / (i - e);
		(1 === s || 0 === s) && (r = e > i ? .5 : -.5);
		var l = s * (n - t) + t;
		return l === a ? 1 / 0 : l > a ? r : 0
	}

	function Pa(t, e) {
		return Math.abs(t - e) < JM
	}

	function Oa() {
		var t = tI[0];
		tI[0] = tI[1], tI[1] = t
	}

	function Na(t, e, n, i, a, o, r, s, l, u) {
		if(u > e && u > i && u > o && u > s || e > u && i > u && o > u && s > u) return 0;
		var h = ca(e, i, o, s, u, QM);
		if(0 === h) return 0;
		for(var c, d, f = 0, p = -1, g = 0; h > g; g++) {
			var m = QM[g],
				v = 0 === m || 1 === m ? .5 : 1,
				y = ua(t, n, a, r, m);
			l > y || (0 > p && (p = da(e, i, o, s, tI), tI[1] < tI[0] && p > 1 && Oa(), c = ua(e, i, o, s, tI[0]), p > 1 && (d = ua(e, i, o, s, tI[1]))), f += 2 === p ? m < tI[0] ? e > c ? v : -v : m < tI[1] ? c > d ? v : -v : d > s ? v : -v : m < tI[0] ? e > c ? v : -v : c > s ? v : -v)
		}
		return f
	}

	function Ea(t, e, n, i, a, o, r, s) {
		if(s > e && s > i && s > o || e > s && i > s && o > s) return 0;
		var l = va(e, i, o, s, QM);
		if(0 === l) return 0;
		var u = ya(e, i, o);
		if(u >= 0 && 1 >= u) {
			for(var h = 0, c = ga(e, i, o, u), d = 0; l > d; d++) {
				var f = 0 === QM[d] || 1 === QM[d] ? .5 : 1,
					p = ga(t, n, a, QM[d]);
				r > p || (h += QM[d] < u ? e > c ? f : -f : c > o ? f : -f)
			}
			return h
		}
		var f = 0 === QM[0] || 1 === QM[0] ? .5 : 1,
			p = ga(t, n, a, QM[0]);
		return r > p ? 0 : e > o ? f : -f
	}

	function za(t, e, n, i, a, o, r, s) {
		if(s -= e, s > n || -n > s) return 0;
		var l = Math.sqrt(n * n - s * s);
		QM[0] = -l, QM[1] = l;
		var u = Math.abs(i - a);
		if(1e-4 > u) return 0;
		if(1e-4 > u % $M) {
			i = 0, a = $M;
			var h = o ? 1 : -1;
			return r >= QM[0] + t && r <= QM[1] + t ? h : 0
		}
		if(o) {
			var l = i;
			i = Ca(a), a = Ca(l)
		} else i = Ca(i), a = Ca(a);
		i > a && (a += $M);
		for(var c = 0, d = 0; 2 > d; d++) {
			var f = QM[d];
			if(f + t > r) {
				var p = Math.atan2(s, f),
					h = o ? 1 : -1;
				0 > p && (p = $M + p), (p >= i && a >= p || p + $M >= i && a >= p + $M) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h)
			}
		}
		return c
	}

	function Ra(t, e, n, i, a) {
		for(var o = 0, r = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {
			var c = t[h++];
			switch(c === KM.M && h > 1 && (n || (o += ka(r, s, l, u, i, a))), 1 === h && (r = t[h], s = t[h + 1], l = r, u = s), c) {
				case KM.M:
					l = t[h++], u = t[h++], r = l, s = u;
					break;
				case KM.L:
					if(n) {
						if(Ta(r, s, t[h], t[h + 1], e, i, a)) return !0
					} else o += ka(r, s, t[h], t[h + 1], i, a) || 0;
					r = t[h++], s = t[h++];
					break;
				case KM.C:
					if(n) {
						if(Aa(r, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, a)) return !0
					} else o += Na(r, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, a) || 0;
					r = t[h++], s = t[h++];
					break;
				case KM.Q:
					if(n) {
						if(Da(r, s, t[h++], t[h++], t[h], t[h + 1], e, i, a)) return !0
					} else o += Ea(r, s, t[h++], t[h++], t[h], t[h + 1], i, a) || 0;
					r = t[h++], s = t[h++];
					break;
				case KM.A:
					var d = t[h++],
						f = t[h++],
						p = t[h++],
						g = t[h++],
						m = t[h++],
						v = t[h++];
					h += 1;
					var y = 1 - t[h++],
						x = Math.cos(m) * p + d,
						_ = Math.sin(m) * g + f;
					h > 1 ? o += ka(r, s, x, _, i, a) : (l = x, u = _);
					var w = (i - d) * g / p + d;
					if(n) {
						if(La(d, f, g, m, m + v, y, e, w, a)) return !0
					} else o += za(d, f, g, m, m + v, y, w, a);
					r = Math.cos(m + v) * p + d, s = Math.sin(m + v) * g + f;
					break;
				case KM.R:
					l = r = t[h++], u = s = t[h++];
					var b = t[h++],
						S = t[h++],
						x = l + b,
						_ = u + S;
					if(n) {
						if(Ta(l, u, x, u, e, i, a) || Ta(x, u, x, _, e, i, a) || Ta(x, _, l, _, e, i, a) || Ta(l, _, l, u, e, i, a)) return !0
					} else o += ka(x, u, x, _, i, a), o += ka(l, _, l, u, i, a);
					break;
				case KM.Z:
					if(n) {
						if(Ta(r, s, l, u, e, i, a)) return !0
					} else o += ka(r, s, l, u, i, a);
					r = l, s = u
			}
		}
		return n || Pa(s, u) || (o += ka(r, s, l, u, i, a) || 0), 0 !== o
	}

	function Ba(t, e, n) {
		return Ra(t, 0, !1, e, n)
	}

	function Va(t, e, n, i) {
		return Ra(t, e, !0, n, i)
	}

	function Ga(t) {
		xi.call(this, t), this.path = null
	}

	function Fa(t, e, n, i, a, o, r, s, l, u, h) {
		var c = l * (dI / 180),
			d = cI(c) * (t - n) / 2 + hI(c) * (e - i) / 2,
			f = -1 * hI(c) * (t - n) / 2 + cI(c) * (e - i) / 2,
			p = d * d / (r * r) + f * f / (s * s);
		p > 1 && (r *= uI(p), s *= uI(p));
		var g = (a === o ? -1 : 1) * uI((r * r * s * s - r * r * f * f - s * s * d * d) / (r * r * f * f + s * s * d * d)) || 0,
			m = g * r * f / s,
			v = g * -s * d / r,
			y = (t + n) / 2 + cI(c) * m - hI(c) * v,
			x = (e + i) / 2 + hI(c) * m + cI(c) * v,
			_ = gI([1, 0], [(d - m) / r, (f - v) / s]),
			w = [(d - m) / r, (f - v) / s],
			b = [(-1 * d - m) / r, (-1 * f - v) / s],
			S = gI(w, b);
		pI(w, b) <= -1 && (S = dI), pI(w, b) >= 1 && (S = 0), 0 === o && S > 0 && (S -= 2 * dI), 1 === o && 0 > S && (S += 2 * dI), h.addData(u, y, x, r, s, _, S, c, o)
	}

	function Wa(t) {
		if(!t) return new UM;
		for(var e, n = 0, i = 0, a = n, o = i, r = new UM, s = UM.CMD, l = t.match(mI), u = 0; u < l.length; u++) {
			for(var h, c = l[u], d = c.charAt(0), f = c.match(vI) || [], p = f.length, g = 0; p > g; g++) f[g] = parseFloat(f[g]);
			for(var m = 0; p > m;) {
				var v, y, x, _, w, b, S, M = n,
					I = i;
				switch(d) {
					case "l":
						n += f[m++], i += f[m++], h = s.L, r.addData(h, n, i);
						break;
					case "L":
						n = f[m++], i = f[m++], h = s.L, r.addData(h, n, i);
						break;
					case "m":
						n += f[m++], i += f[m++], h = s.M, r.addData(h, n, i), a = n, o = i, d = "l";
						break;
					case "M":
						n = f[m++], i = f[m++], h = s.M, r.addData(h, n, i), a = n, o = i, d = "L";
						break;
					case "h":
						n += f[m++], h = s.L, r.addData(h, n, i);
						break;
					case "H":
						n = f[m++], h = s.L, r.addData(h, n, i);
						break;
					case "v":
						i += f[m++], h = s.L, r.addData(h, n, i);
						break;
					case "V":
						i = f[m++], h = s.L, r.addData(h, n, i);
						break;
					case "C":
						h = s.C, r.addData(h, f[m++], f[m++], f[m++], f[m++], f[m++], f[m++]), n = f[m - 2], i = f[m - 1];
						break;
					case "c":
						h = s.C, r.addData(h, f[m++] + n, f[m++] + i, f[m++] + n, f[m++] + i, f[m++] + n, f[m++] + i), n += f[m - 2], i += f[m - 1];
						break;
					case "S":
						v = n, y = i;
						var T = r.len(),
							A = r.data;
						e === s.C && (v += n - A[T - 4], y += i - A[T - 3]), h = s.C, M = f[m++], I = f[m++], n = f[m++], i = f[m++], r.addData(h, v, y, M, I, n, i);
						break;
					case "s":
						v = n, y = i;
						var T = r.len(),
							A = r.data;
						e === s.C && (v += n - A[T - 4], y += i - A[T - 3]), h = s.C, M = n + f[m++], I = i + f[m++], n += f[m++], i += f[m++], r.addData(h, v, y, M, I, n, i);
						break;
					case "Q":
						M = f[m++], I = f[m++], n = f[m++], i = f[m++], h = s.Q, r.addData(h, M, I, n, i);
						break;
					case "q":
						M = f[m++] + n, I = f[m++] + i, n += f[m++], i += f[m++], h = s.Q, r.addData(h, M, I, n, i);
						break;
					case "T":
						v = n, y = i;
						var T = r.len(),
							A = r.data;
						e === s.Q && (v += n - A[T - 4], y += i - A[T - 3]), n = f[m++], i = f[m++], h = s.Q, r.addData(h, v, y, n, i);
						break;
					case "t":
						v = n, y = i;
						var T = r.len(),
							A = r.data;
						e === s.Q && (v += n - A[T - 4], y += i - A[T - 3]), n += f[m++], i += f[m++], h = s.Q, r.addData(h, v, y, n, i);
						break;
					case "A":
						x = f[m++], _ = f[m++], w = f[m++], b = f[m++], S = f[m++], M = n, I = i, n = f[m++], i = f[m++], h = s.A, Fa(M, I, n, i, b, S, x, _, w, h, r);
						break;
					case "a":
						x = f[m++], _ = f[m++], w = f[m++], b = f[m++], S = f[m++], M = n, I = i, n += f[m++], i += f[m++], h = s.A, Fa(M, I, n, i, b, S, x, _, w, h, r)
				}
			}("z" === d || "Z" === d) && (h = s.Z, r.addData(h), n = a, i = o), e = h
		}
		return r.toStatic(), r
	}

	function Ha(t, e) {
		var n = Wa(t);
		return e = e || {}, e.buildPath = function(t) {
			if(t.setData) {
				t.setData(n.data);
				var e = t.getContext();
				e && t.rebuildPath(e)
			} else {
				var e = t;
				n.rebuildPath(e)
			}
		}, e.applyTransform = function(t) {
			lI(n, t), this.dirty(!0)
		}, e
	}

	function Za(t, e) {
		return new Ga(Ha(t, e))
	}

	function Xa(t, e) {
		return Ga.extend(Ha(t, e))
	}

	function Ya(t, e) {
		for(var n = [], i = t.length, a = 0; i > a; a++) {
			var o = t[a];
			o.path || o.createPathProxy(), o.__dirtyPath && o.buildPath(o.path, o.shape, !0), n.push(o.path)
		}
		var r = new Ga(e);
		return r.createPathProxy(), r.buildPath = function(t) {
			t.appendPath(n);
			var e = t.getContext();
			e && t.rebuildPath(e)
		}, r
	}

	function Ua(t, e, n, i, a, o, r) {
		var s = .5 * (n - t),
			l = .5 * (i - e);
		return(2 * (e - n) + s + l) * r + (-3 * (e - n) - 2 * s - l) * o + s * a + e
	}

	function ja(t, e, n) {
		var i = e.points,
			a = e.smooth;
		if(i && i.length >= 2) {
			if(a && "spline" !== a) {
				var o = II(i, a, n, e.smoothConstraint);
				t.moveTo(i[0][0], i[0][1]);
				for(var r = i.length, s = 0;
					(n ? r : r - 1) > s; s++) {
					var l = o[2 * s],
						u = o[2 * s + 1],
						h = i[(s + 1) % r];
					t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
				}
			} else {
				"spline" === a && (i = MI(i, n)), t.moveTo(i[0][0], i[0][1]);
				for(var s = 1, c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1])
			}
			n && t.closePath()
		}
	}

	function qa(t, e, n) {
		var i = n && n.lineWidth;
		if(e && i) {
			var a = e.x1,
				o = e.x2,
				r = e.y1,
				s = e.y2;
			DI(2 * a) === DI(2 * o) ? t.x1 = t.x2 = $a(a, i, !0) : (t.x1 = a, t.x2 = o), DI(2 * r) === DI(2 * s) ? t.y1 = t.y2 = $a(r, i, !0) : (t.y1 = r, t.y2 = s)
		}
	}

	function Ka(t, e, n) {
		var i = n && n.lineWidth;
		if(e && i) {
			var a = e.x,
				o = e.y,
				r = e.width,
				s = e.height;
			t.x = $a(a, i, !0), t.y = $a(o, i, !0), t.width = Math.max($a(a + r, i, !1) - t.x, 0 === r ? 0 : 1), t.height = Math.max($a(o + s, i, !1) - t.y, 0 === s ? 0 : 1)
		}
	}

	function $a(t, e, n) {
		var i = DI(2 * t);
		return(i + DI(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
	}

	function Ja(t, e, n) {
		var i = t.cpx2,
			a = t.cpy2;
		return null === i || null === a ? [(n ? ha : ua)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? ha : ua)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? ma : ga)(t.x1, t.cpx1, t.x2, e), (n ? ma : ga)(t.y1, t.cpy1, t.y2, e)]
	}

	function Qa(t) {
		xi.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
	}

	function to(t) {
		return Ga.extend(t)
	}

	function eo(t, e) {
		return Xa(t, e)
	}

	function no(t, e, n, i) {
		var a = Za(t, e);
		return n && ("center" === i && (n = ao(n, a.getBoundingRect())), oo(a, n)), a
	}

	function io(t, e, n) {
		var i = new _i({
			style: {
				image: t,
				x: e.x,
				y: e.y,
				width: e.width,
				height: e.height
			},
			onload: function(t) {
				if("center" === n) {
					var a = {
						width: t.width,
						height: t.height
					};
					i.setStyle(ao(e, a))
				}
			}
		});
		return i
	}

	function ao(t, e) {
		var n, i = e.width / e.height,
			a = t.height * i;
		a <= t.width ? n = t.height : (a = t.width, n = a / i);
		var o = t.x + t.width / 2,
			r = t.y + t.height / 2;
		return {
			x: o - a / 2,
			y: r - n / 2,
			width: a,
			height: n
		}
	}

	function oo(t, e) {
		if(t.applyTransform) {
			var n = t.getBoundingRect(),
				i = n.calculateTransform(e);
			t.applyTransform(i)
		}
	}

	function ro(t) {
		var e = t.shape,
			n = t.style.lineWidth;
		return FI(2 * e.x1) === FI(2 * e.x2) && (e.x1 = e.x2 = lo(e.x1, n, !0)), FI(2 * e.y1) === FI(2 * e.y2) && (e.y1 = e.y2 = lo(e.y1, n, !0)), t
	}

	function so(t) {
		var e = t.shape,
			n = t.style.lineWidth,
			i = e.x,
			a = e.y,
			o = e.width,
			r = e.height;
		return e.x = lo(e.x, n, !0), e.y = lo(e.y, n, !0), e.width = Math.max(lo(i + o, n, !1) - e.x, 0 === o ? 0 : 1), e.height = Math.max(lo(a + r, n, !1) - e.y, 0 === r ? 0 : 1), t
	}

	function lo(t, e, n) {
		var i = FI(2 * t);
		return(i + FI(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
	}

	function uo(t) {
		return null != t && "none" !== t
	}

	function ho(t) {
		if("string" != typeof t) return t;
		var e = UI.get(t);
		return e || (e = qe(t, -.1), 1e4 > jI && (UI.set(t, e), jI++)), e
	}

	function co(t) {
		if(t.__hoverStlDirty) {
			t.__hoverStlDirty = !1;
			var e = t.__hoverStl;
			if(!e) return void(t.__cachedNormalStl = t.__cachedNormalZ2 = null);
			var n = t.__cachedNormalStl = {};
			t.__cachedNormalZ2 = t.z2;
			var i = t.style;
			for(var a in e) null != e[a] && (n[a] = i[a]);
			n.fill = i.fill, n.stroke = i.stroke
		}
	}

	function fo(t) {
		var e = t.__hoverStl;
		if(e && !t.__highlighted) {
			var n = t.useHoverLayer;
			t.__highlighted = n ? "layer" : "plain";
			var i = t.__zr;
			if(i || !n) {
				var a = t,
					o = t.style;
				n && (a = i.addHover(t), o = a.style), Oo(o), n || co(a), o.extendFrom(e), po(o, e, "fill"), po(o, e, "stroke"), Po(o), n || (t.dirty(!1), t.z2 += XI)
			}
		}
	}

	function po(t, e, n) {
		!uo(e[n]) && uo(t[n]) && (t[n] = ho(t[n]))
	}

	function go(t) {
		var e = t.__highlighted;
		if(e)
			if(t.__highlighted = !1, "layer" === e) t.__zr && t.__zr.removeHover(t);
			else if(e) {
			var n = t.style,
				i = t.__cachedNormalStl;
			i && (Oo(n), t.setStyle(i), Po(n));
			var a = t.__cachedNormalZ2;
			null != a && t.z2 - a === XI && (t.z2 = a)
		}
	}

	function mo(t, e) {
		t.isGroup ? t.traverse(function(t) {
			!t.isGroup && e(t)
		}) : e(t)
	}

	function vo(t, e) {
		e = t.__hoverStl = e !== !1 && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (t.__cachedNormalStl = null, go(t), fo(t))
	}

	function yo(t) {
		return t && t.__isEmphasisEntered
	}

	function xo(t) {
		this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && mo(this, fo)
	}

	function _o(t) {
		this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && mo(this, go)
	}

	function wo() {
		this.__isEmphasisEntered = !0, mo(this, fo)
	}

	function bo() {
		this.__isEmphasisEntered = !1, mo(this, go)
	}

	function So(t, e, n) {
		t.isGroup ? t.traverse(function(t) {
			!t.isGroup && vo(t, t.hoverStyle || e)
		}) : vo(t, t.hoverStyle || e), Mo(t, n)
	}

	function Mo(t, e) {
		var n = e === !1;
		if(t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {
			var i = n ? "off" : "on";
			t[i]("mouseover", xo)[i]("mouseout", _o), t[i]("emphasis", wo)[i]("normal", bo), t.__hoverStyleTrigger = !n
		}
	}

	function Io(t, e, n, i, a, o, r) {
		a = a || ZI;
		var s, l = a.labelFetcher,
			u = a.labelDataIndex,
			h = a.labelDimIndex,
			c = n.getShallow("show"),
			d = i.getShallow("show");
		(c || d) && (l && (s = l.getFormattedLabel(u, "normal", null, h)), null == s && (s = w(a.defaultText) ? a.defaultText(u, a) : a.defaultText));
		var f = c ? s : null,
			p = d ? C(l ? l.getFormattedLabel(u, "emphasis", null, h) : null, s) : null;
		(null != f || null != p) && (To(t, n, o, a), To(e, i, r, a, !0)), t.text = f, e.text = p
	}

	function To(t, e, n, i, a) {
		return Do(t, e, i, a), n && r(t, n), t
	}

	function Ao(t, e, n) {
		var i, a = {
			isRectText: !0
		};
		n === !1 ? i = !0 : a.autoColor = n, Do(t, e, a, i)
	}

	function Do(t, e, n, i) {
		if(n = n || ZI, n.isRectText) {
			var a = e.getShallow("position") || (i ? null : "inside");
			"outside" === a && (a = "top"), t.textPosition = a, t.textOffset = e.getShallow("offset");
			var o = e.getShallow("rotate");
			null != o && (o *= Math.PI / 180), t.textRotation = o, t.textDistance = C(e.getShallow("distance"), i ? null : 5)
		}
		var r, s = e.ecModel,
			l = s && s.option.textStyle,
			u = Co(e);
		if(u) {
			r = {};
			for(var h in u)
				if(u.hasOwnProperty(h)) {
					var c = e.getModel(["rich", h]);
					Lo(r[h] = {}, c, l, n, i)
				}
		}
		return t.rich = r, Lo(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
	}

	function Co(t) {
		for(var e; t && t !== t.ecModel;) {
			var n = (t.option || ZI).rich;
			if(n) {
				e = e || {};
				for(var i in n) n.hasOwnProperty(i) && (e[i] = 1)
			}
			t = t.parentModel
		}
		return e
	}

	function Lo(t, e, n, i, a, o) {
		n = !a && n || ZI, t.textFill = ko(e.getShallow("color"), i) || n.color, t.textStroke = ko(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = C(e.getShallow("textBorderWidth"), n.textBorderWidth), t.insideRawTextPosition = t.textPosition, a || (o && (t.insideRollbackOpt = i, Po(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), o && i.disableBox || (t.textBackgroundColor = ko(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = ko(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
	}

	function ko(t, e) {
		return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
	}

	function Po(t) {
		var e = t.insideRollbackOpt;
		if(e && null == t.textFill) {
			var n, i = e.useInsideStyle,
				a = t.insideRawTextPosition,
				o = e.autoColor;
			i !== !1 && (i === !0 || e.isRectText && a && "string" == typeof a && a.indexOf("inside") >= 0) ? (n = {
				textFill: null,
				textStroke: t.textStroke,
				textStrokeWidth: t.textStrokeWidth
			}, t.textFill = "#fff", null == t.textStroke && (t.textStroke = o, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != o && (n = {
				textFill: null
			}, t.textFill = o), n && (t.insideRollback = n)
		}
	}

	function Oo(t) {
		var e = t.insideRollback;
		e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
	}

	function No(t, e) {
		var n = e || e.getModel("textStyle");
		return N([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
	}

	function Eo(t, e, n, i, a, o) {
		"function" == typeof a && (o = a, a = null);
		var r = i && i.isAnimationEnabled();
		if(r) {
			var s = t ? "Update" : "",
				l = i.getShallow("animationDuration" + s),
				u = i.getShallow("animationEasing" + s),
				h = i.getShallow("animationDelay" + s);
			"function" == typeof h && (h = h(a, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, a) : null)), "function" == typeof l && (l = l(a)), l > 0 ? e.animateTo(n, l, h || 0, u, o, !!o) : (e.stopAnimation(), e.attr(n), o && o())
		} else e.stopAnimation(), e.attr(n), o && o()
	}

	function zo(t, e, n, i, a) {
		Eo(!0, t, e, n, i, a)
	}

	function Ro(t, e, n, i, a) {
		Eo(!1, t, e, n, i, a)
	}

	function Bo(t, e) {
		for(var n = Te([]); t && t !== e;) De(n, t.getLocalTransform(), n), t = t.parent;
		return n
	}

	function Vo(t, e, n) {
		return e && !d(e) && (e = kb.getLocalTransform(e)), n && (e = Pe([], e)), oe([], t, e)
	}

	function Go(t, e, n) {
		var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
			a = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
			o = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -a : "bottom" === t ? a : 0];
		return o = Vo(o, e, n), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
	}

	function Fo(t, e, n) {
		function i(t) {
			var e = {};
			return t.traverse(function(t) {
				!t.isGroup && t.anid && (e[t.anid] = t)
			}), e
		}

		function a(t) {
			var e = {
				position: H(t.position),
				rotation: t.rotation
			};
			return t.shape && (e.shape = r({}, t.shape)), e
		}
		if(t && e) {
			var o = i(t);
			e.traverse(function(t) {
				if(!t.isGroup && t.anid) {
					var e = o[t.anid];
					if(e) {
						var i = a(t);
						t.attr(a(e)), zo(t, i, n, t.dataIndex)
					}
				}
			})
		}
	}

	function Wo(t, e) {
		return p(t, function(t) {
			var n = t[0];
			n = WI(n, e.x), n = HI(n, e.x + e.width);
			var i = t[1];
			return i = WI(i, e.y), i = HI(i, e.y + e.height), [n, i]
		})
	}

	function Ho(t, e) {
		var n = WI(t.x, e.x),
			i = HI(t.x + t.width, e.x + e.width),
			a = WI(t.y, e.y),
			o = HI(t.y + t.height, e.y + e.height);
		return i >= n && o >= a ? {
			x: n,
			y: a,
			width: i - n,
			height: o - a
		} : void 0
	}

	function Zo(t, e, n) {
		e = r({
			rectHover: !0
		}, e);
		var i = e.style = {
			strokeNoScale: !0
		};
		return n = n || {
			x: -1,
			y: -1,
			width: 2,
			height: 2
		}, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new _i(e)) : no(t.replace("path://", ""), e, n, "center") : void 0
	}

	function Xo(t, e, n) {
		this.parentModel = e, this.ecModel = n, this.option = t
	}

	function Yo(t, e, n) {
		for(var i = 0; i < e.length && (!e[i] || (t = t && "object" == typeof t ? t[e[i]] : null, null != t)); i++);
		return null == t && n && (t = n.get(e)), t
	}

	function Uo(t, e) {
		var n = eT(t).getParent;
		return n ? n.call(t, e) : t.parentModel
	}

	function jo(t) {
		return [t || "", nT++, Math.random().toFixed(5)].join("_")
	}

	function qo(t) {
		var e = {};
		return t.registerSubTypeDefaulter = function(t, n) {
			t = ta(t), e[t.main] = n
		}, t.determineSubType = function(n, i) {
			var a = i.type;
			if(!a) {
				var o = ta(n).main;
				t.hasSubTypes(n) && e[o] && (a = e[o](i))
			}
			return a
		}, t
	}

	function Ko(t, e) {
		function n(t) {
			var n = {},
				o = [];
			return f(t, function(r) {
				var s = i(n, r),
					l = s.originalDeps = e(r),
					h = a(l, t);
				s.entryCount = h.length, 0 === s.entryCount && o.push(r), f(h, function(t) {
					u(s.predecessor, t) < 0 && s.predecessor.push(t);
					var e = i(n, t);
					u(e.successor, t) < 0 && e.successor.push(r)
				})
			}), {
				graph: n,
				noEntryList: o
			}
		}

		function i(t, e) {
			return t[e] || (t[e] = {
				predecessor: [],
				successor: []
			}), t[e]
		}

		function a(t, e) {
			var n = [];
			return f(t, function(t) {
				u(e, t) >= 0 && n.push(t)
			}), n
		}
		t.topologicalTravel = function(t, e, i, a) {
			function o(t) {
				l[t].entryCount--, 0 === l[t].entryCount && u.push(t)
			}

			function r(t) {
				h[t] = !0, o(t)
			}
			if(t.length) {
				var s = n(e),
					l = s.graph,
					u = s.noEntryList,
					h = {};
				for(f(t, function(t) {
						h[t] = !0
					}); u.length;) {
					var c = u.pop(),
						d = l[c],
						p = !!h[c];
					p && (i.call(a, c, d.originalDeps.slice()), delete h[c]), f(d.successor, p ? r : o)
				}
				f(h, function() {
					throw new Error("Circle dependency may exists")
				})
			}
		}
	}

	function $o(t) {
		return t.replace(/^\s+/, "").replace(/\s+$/, "")
	}

	function Jo(t, e, n, i) {
		var a = e[1] - e[0],
			o = n[1] - n[0];
		if(0 === a) return 0 === o ? n[0] : (n[0] + n[1]) / 2;
		if(i)
			if(a > 0) {
				if(t <= e[0]) return n[0];
				if(t >= e[1]) return n[1]
			} else {
				if(t >= e[0]) return n[0];
				if(t <= e[1]) return n[1]
			}
		else {
			if(t === e[0]) return n[0];
			if(t === e[1]) return n[1]
		}
		return(t - e[0]) / a * o + n[0]
	}

	function Qo(t, e) {
		switch(t) {
			case "center":
			case "middle":
				t = "50%";
				break;
			case "left":
			case "top":
				t = "0%";
				break;
			case "right":
			case "bottom":
				t = "100%"
		}
		return "string" == typeof t ? $o(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t
	}

	function tr(t, e, n) {
		return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
	}

	function er(t) {
		return t.sort(function(t, e) {
			return t - e
		}), t
	}

	function nr(t) {
		if(t = +t, isNaN(t)) return 0;
		for(var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
		return n
	}

	function ir(t) {
		var e = t.toString(),
			n = e.indexOf("e");
		if(n > 0) {
			var i = +e.slice(n + 1);
			return 0 > i ? -i : 0
		}
		var a = e.indexOf(".");
		return 0 > a ? 0 : e.length - 1 - a
	}

	function ar(t, e) {
		var n = Math.log,
			i = Math.LN10,
			a = Math.floor(n(t[1] - t[0]) / i),
			o = Math.round(n(Math.abs(e[1] - e[0])) / i),
			r = Math.min(Math.max(-a + o, 0), 20);
		return isFinite(r) ? r : 20
	}

	function or(t, e, n) {
		if(!t[e]) return 0;
		var i = g(t, function(t, e) {
			return t + (isNaN(e) ? 0 : e)
		}, 0);
		if(0 === i) return 0;
		for(var a = Math.pow(10, n), o = p(t, function(t) {
				return(isNaN(t) ? 0 : t) / i * a * 100
			}), r = 100 * a, s = p(o, function(t) {
				return Math.floor(t)
			}), l = g(s, function(t, e) {
				return t + e
			}, 0), u = p(o, function(t, e) {
				return t - s[e]
			}); r > l;) {
			for(var h = Number.NEGATIVE_INFINITY, c = null, d = 0, f = u.length; f > d; ++d) u[d] > h && (h = u[d], c = d);
			++s[c], u[c] = 0, ++l
		}
		return s[e] / a
	}

	function rr(t) {
		var e = 2 * Math.PI;
		return(t % e + e) % e
	}

	function sr(t) {
		return t > -iT && iT > t
	}

	function lr(t) {
		if(t instanceof Date) return t;
		if("string" == typeof t) {
			var e = oT.exec(t);
			if(!e) return new Date(0 / 0);
			if(e[8]) {
				var n = +e[4] || 0;
				return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
			}
			return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
		}
		return new Date(null == t ? 0 / 0 : Math.round(t))
	}

	function ur(t) {
		return Math.pow(10, hr(t))
	}

	function hr(t) {
		return Math.floor(Math.log(t) / Math.LN10)
	}

	function cr(t, e) {
		var n, i = hr(t),
			a = Math.pow(10, i),
			o = t / a;
		return n = e ? 1.5 > o ? 1 : 2.5 > o ? 2 : 4 > o ? 3 : 7 > o ? 5 : 10 : 1 > o ? 1 : 2 > o ? 2 : 3 > o ? 3 : 5 > o ? 5 : 10, t = n * a, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t
	}

	function dr(t, e) {
		var n = (t.length - 1) * e + 1,
			i = Math.floor(n),
			a = +t[i - 1],
			o = n - i;
		return o ? a + o * (t[i] - a) : a
	}

	function fr(t) {
		function e(t, n, i) {
			return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1))
		}
		t.sort(function(t, n) {
			return e(t, n, 0) ? -1 : 1
		});
		for(var n = -1 / 0, i = 1, a = 0; a < t.length;) {
			for(var o = t[a].interval, r = t[a].close, s = 0; 2 > s; s++) o[s] <= n && (o[s] = n, r[s] = s ? 1 : 1 - i), n = o[s], i = r[s];
			o[0] === o[1] && r[0] * r[1] !== 1 ? t.splice(a, 1) : a++
		}
		return t
	}

	function pr(t) {
		return t - parseFloat(t) >= 0
	}

	function gr(t) {
		return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
	}

	function mr(t, e) {
		return t = (t || "").toLowerCase().replace(/-(.)/g, function(t, e) {
			return e.toUpperCase()
		}), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
	}

	function vr(t) {
		return null == t ? "" : (t + "").replace(lT, function(t, e) {
			return uT[e]
		})
	}

	function yr(t, e, n) {
		_(e) || (e = [e]);
		var i = e.length;
		if(!i) return "";
		for(var a = e[0].$vars || [], o = 0; o < a.length; o++) {
			var r = hT[o];
			t = t.replace(cT(r), cT(r, 0))
		}
		for(var s = 0; i > s; s++)
			for(var l = 0; l < a.length; l++) {
				var u = e[s][a[l]];
				t = t.replace(cT(hT[l], s), n ? vr(u) : u)
			}
		return t
	}

	function xr(t, e, n) {
		return f(e, function(e, i) {
			t = t.replace("{" + i + "}", n ? vr(e) : e)
		}), t
	}

	function _r(t, e) {
		t = b(t) ? {
			color: t,
			extraCssText: e
		} : t || {};
		var n = t.color,
			i = t.type,
			e = t.extraCssText,
			a = t.renderMode || "html",
			o = t.markerId || "X";
		return n ? "html" === a ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + vr(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + vr(n) + ";" + (e || "") + '"></span>' : {
			renderMode: a,
			content: "{marker" + o + "|}  ",
			style: {
				color: n
			}
		} : ""
	}

	function wr(t, e) {
		return t += "", "0000".substr(0, e - t.length) + t
	}

	function br(t, e, n) {
		("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
		var i = lr(e),
			a = n ? "UTC" : "",
			o = i["get" + a + "FullYear"](),
			r = i["get" + a + "Month"]() + 1,
			s = i["get" + a + "Date"](),
			l = i["get" + a + "Hours"](),
			u = i["get" + a + "Minutes"](),
			h = i["get" + a + "Seconds"](),
			c = i["get" + a + "Milliseconds"]();
		return t = t.replace("MM", wr(r, 2)).replace("M", r).replace("yyyy", o).replace("yy", o % 100).replace("dd", wr(s, 2)).replace("d", s).replace("hh", wr(l, 2)).replace("h", l).replace("mm", wr(u, 2)).replace("m", u).replace("ss", wr(h, 2)).replace("s", h).replace("SSS", wr(c, 3))
	}

	function Sr(t) {
		return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
	}

	function Mr(t) {
		return Bn(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate)
	}

	function Ir(t, e, n, i, a, o, r, s) {
		return Bn(t, e, n, i, a, s, o, r)
	}

	function Tr(t, e, n, i, a) {
		var o = 0,
			r = 0;
		null == i && (i = 1 / 0), null == a && (a = 1 / 0);
		var s = 0;
		e.eachChild(function(l, u) {
			var h, c, d = l.position,
				f = l.getBoundingRect(),
				p = e.childAt(u + 1),
				g = p && p.getBoundingRect();
			if("horizontal" === t) {
				var m = f.width + (g ? -g.x + f.x : 0);
				h = o + m, h > i || l.newline ? (o = 0, h = m, r += s + n, s = f.height) : s = Math.max(s, f.height)
			} else {
				var v = f.height + (g ? -g.y + f.y : 0);
				c = r + v, c > a || l.newline ? (o += s + n, r = 0, c = v, s = f.width) : s = Math.max(s, f.width)
			}
			l.newline || (d[0] = o, d[1] = r, "horizontal" === t ? o = h + n : r = c + n)
		})
	}

	function Ar(t, e, n) {
		var i = e.width,
			a = e.height,
			o = Qo(t.x, i),
			r = Qo(t.y, a),
			s = Qo(t.x2, i),
			l = Qo(t.y2, a);
		return(isNaN(o) || isNaN(parseFloat(t.x))) && (o = 0), (isNaN(s) || isNaN(parseFloat(t.x2))) && (s = i), (isNaN(r) || isNaN(parseFloat(t.y))) && (r = 0), (isNaN(l) || isNaN(parseFloat(t.y2))) && (l = a), n = sT(n || 0), {
			width: Math.max(s - o - n[1] - n[3], 0),
			height: Math.max(l - r - n[0] - n[2], 0)
		}
	}

	function Dr(t, e, n) {
		n = sT(n || 0);
		var i = e.width,
			a = e.height,
			o = Qo(t.left, i),
			r = Qo(t.top, a),
			s = Qo(t.right, i),
			l = Qo(t.bottom, a),
			u = Qo(t.width, i),
			h = Qo(t.height, a),
			c = n[2] + n[0],
			d = n[1] + n[3],
			f = t.aspect;
		switch(isNaN(u) && (u = i - s - d - o), isNaN(h) && (h = a - l - c - r), null != f && (isNaN(u) && isNaN(h) && (f > i / a ? u = .8 * i : h = .8 * a), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(o) && (o = i - s - u - d), isNaN(r) && (r = a - l - h - c), t.left || t.right) {
			case "center":
				o = i / 2 - u / 2 - n[3];
				break;
			case "right":
				o = i - u - d
		}
		switch(t.top || t.bottom) {
			case "middle":
			case "center":
				r = a / 2 - h / 2 - n[0];
				break;
			case "bottom":
				r = a - h - c
		}
		o = o || 0, r = r || 0, isNaN(u) && (u = i - d - o - (s || 0)), isNaN(h) && (h = a - c - r - (l || 0));
		var p = new xn(o + n[3], r + n[0], u, h);
		return p.margin = n, p
	}

	function Cr(t, e, n, i, a) {
		var o = !a || !a.hv || a.hv[0],
			r = !a || !a.hv || a.hv[1],
			l = a && a.boundingMode || "all";
		if(o || r) {
			var u;
			if("raw" === l) u = "group" === t.type ? new xn(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect();
			else if(u = t.getBoundingRect(), t.needLocalTransform()) {
				var h = t.getLocalTransform();
				u = u.clone(), u.applyTransform(h)
			}
			e = Dr(s({
				width: u.width,
				height: u.height
			}, e), n, i);
			var c = t.position,
				d = o ? e.x - u.x : 0,
				f = r ? e.y - u.y : 0;
			t.attr("position", "raw" === l ? [d, f] : [c[0] + d, c[1] + f])
		}
	}

	function Lr(t, e) {
		return null != t[mT[e][0]] || null != t[mT[e][1]] && null != t[mT[e][2]]
	}

	function kr(t, e, n) {
		function i(n, i) {
			var r = {},
				l = 0,
				u = {},
				h = 0,
				c = 2;
			if(pT(n, function(e) {
					u[e] = t[e]
				}), pT(n, function(t) {
					a(e, t) && (r[t] = u[t] = e[t]), o(r, t) && l++, o(u, t) && h++
				}), s[i]) return o(e, n[1]) ? u[n[2]] = null : o(e, n[2]) && (u[n[1]] = null), u;
			if(h !== c && l) {
				if(l >= c) return r;
				for(var d = 0; d < n.length; d++) {
					var f = n[d];
					if(!a(r, f) && a(t, f)) {
						r[f] = t[f];
						break
					}
				}
				return r
			}
			return u
		}

		function a(t, e) {
			return t.hasOwnProperty(e)
		}

		function o(t, e) {
			return null != t[e] && "auto" !== t[e]
		}

		function r(t, e, n) {
			pT(t, function(t) {
				e[t] = n[t]
			})
		}!S(n) && (n = {});
		var s = n.ignoreSize;
		!_(s) && (s = [s, s]);
		var l = i(mT[0], 0),
			u = i(mT[1], 1);
		r(mT[0], t, l), r(mT[1], t, u)
	}

	function Pr(t) {
		return Or({}, t)
	}

	function Or(t, e) {
		return e && t && pT(gT, function(n) {
			e.hasOwnProperty(n) && (t[n] = e[n])
		}), t
	}

	function Nr(t) {
		var e = [];
		return f(_T.getClassesByMainType(t), function(t) {
			e = e.concat(t.prototype.dependencies || [])
		}), e = p(e, function(t) {
			return ta(t).main
		}), "dataset" !== t && u(e, "dataset") <= 0 && e.unshift("dataset"), e
	}

	function Er(t, e) {
		for(var n = t.length, i = 0; n > i; i++)
			if(t[i].length > e) return t[i];
		return t[n - 1]
	}

	function zr(t) {
		var e = t.get("coordinateSystem"),
			n = {
				coordSysName: e,
				coordSysDims: [],
				axisMap: B(),
				categoryAxisMap: B()
			},
			i = IT[e];
		return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0
	}

	function Rr(t) {
		return "category" === t.get("type")
	}

	function Br(t) {
		this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === CT ? {} : []), this.sourceFormat = t.sourceFormat || LT, this.seriesLayoutBy = t.seriesLayoutBy || PT, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && B(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
	}

	function Vr(t) {
		var e = t.option.source,
			n = LT;
		if(I(e)) n = kT;
		else if(_(e)) {
			0 === e.length && (n = AT);
			for(var i = 0, a = e.length; a > i; i++) {
				var o = e[i];
				if(null != o) {
					if(_(o)) {
						n = AT;
						break
					}
					if(S(o)) {
						n = DT;
						break
					}
				}
			}
		} else if(S(e)) {
			for(var r in e)
				if(e.hasOwnProperty(r) && d(e[r])) {
					n = CT;
					break
				}
		} else if(null != e) throw new Error("Invalid data");
		NT(t).sourceFormat = n
	}

	function Gr(t) {
		return NT(t).source
	}

	function Fr(t) {
		NT(t).datasetMap = B()
	}

	function Wr(t) {
		var e = t.option,
			n = e.data,
			i = I(n) ? kT : TT,
			a = !1,
			o = e.seriesLayoutBy,
			r = e.sourceHeader,
			s = e.dimensions,
			l = jr(t);
		if(l) {
			var u = l.option;
			n = u.source, i = NT(l).sourceFormat, a = !0, o = o || u.seriesLayoutBy, null == r && (r = u.sourceHeader), s = s || u.dimensions
		}
		var h = Hr(n, i, o, r, s),
			c = e.encode;
		!c && l && (c = Ur(t, l, n, i, o, h)), NT(t).source = new Br({
			data: n,
			fromDataset: a,
			seriesLayoutBy: o,
			sourceFormat: i,
			dimensionsDefine: h.dimensionsDefine,
			startIndex: h.startIndex,
			dimensionsDetectCount: h.dimensionsDetectCount,
			encodeDefine: c
		})
	}

	function Hr(t, e, n, i, a) {
		if(!t) return {
			dimensionsDefine: Zr(a)
		};
		var o, r, s;
		if(e === AT) "auto" === i || null == i ? Xr(function(t) {
			null != t && "-" !== t && (b(t) ? null == r && (r = 1) : r = 0)
		}, n, t, 10) : r = i ? 1 : 0, a || 1 !== r || (a = [], Xr(function(t, e) {
			a[e] = null != t ? t : ""
		}, n, t)), o = a ? a.length : n === OT ? t.length : t[0] ? t[0].length : null;
		else if(e === DT) a || (a = Yr(t), s = !0);
		else if(e === CT) a || (a = [], s = !0, f(t, function(t, e) {
			a.push(e)
		}));
		else if(e === TT) {
			var l = Vi(t[0]);
			o = _(l) && l.length || 1
		}
		var u;
		return s && f(a, function(t, e) {
			"name" === (S(t) ? t.name : t) && (u = e)
		}), {
			startIndex: r,
			dimensionsDefine: Zr(a),
			dimensionsDetectCount: o,
			potentialNameDimIndex: u
		}
	}

	function Zr(t) {
		if(t) {
			var e = B();
			return p(t, function(t) {
				if(t = r({}, S(t) ? t : {
						name: t
					}), null == t.name) return t;
				t.name += "", null == t.displayName && (t.displayName = t.name);
				var n = e.get(t.name);
				return n ? t.name += "-" + n.count++ : e.set(t.name, {
					count: 1
				}), t
			})
		}
	}

	function Xr(t, e, n, i) {
		if(null == i && (i = 1 / 0), e === OT)
			for(var a = 0; a < n.length && i > a; a++) t(n[a] ? n[a][0] : null, a);
		else
			for(var o = n[0] || [], a = 0; a < o.length && i > a; a++) t(o[a], a)
	}

	function Yr(t) {
		for(var e, n = 0; n < t.length && !(e = t[n++]););
		if(e) {
			var i = [];
			return f(e, function(t, e) {
				i.push(e)
			}), i
		}
	}

	function Ur(t, e, n, i, a, o) {
		var r = zr(t),
			s = {},
			l = [],
			u = [],
			h = t.subType,
			c = B(["pie", "map", "funnel"]),
			d = B(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
		if(r && null != d.get(h)) {
			var p = t.ecModel,
				g = NT(p).datasetMap,
				m = e.uid + "_" + a,
				v = g.get(m) || g.set(m, {
					categoryWayDim: 1,
					valueWayDim: 0
				});
			f(r.coordSysDims, function(t) {
				if(null == r.firstCategoryDimIndex) {
					var e = v.valueWayDim++;
					s[t] = e, u.push(e)
				} else if(r.categoryAxisMap.get(t)) s[t] = 0, l.push(0);
				else {
					var e = v.categoryWayDim++;
					s[t] = e, u.push(e)
				}
			})
		} else if(null != c.get(h)) {
			for(var y, x = 0; 5 > x && null == y; x++) Kr(n, i, a, o.dimensionsDefine, o.startIndex, x) || (y = x);
			if(null != y) {
				s.value = y;
				var _ = o.potentialNameDimIndex || Math.max(y - 1, 0);
				u.push(_), l.push(_)
			}
		}
		return l.length && (s.itemName = l), u.length && (s.seriesName = u), s
	}

	function jr(t) {
		var e = t.option,
			n = e.data;
		return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0)
	}

	function qr(t, e) {
		return Kr(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
	}

	function Kr(t, e, n, i, a, o) {
		function r(t) {
			return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0
		}
		var s, l = 5;
		if(I(t)) return !1;
		var u;
		if(i && (u = i[o], u = S(u) ? u.name : u), e === AT)
			if(n === OT) {
				for(var h = t[o], c = 0; c < (h || []).length && l > c; c++)
					if(null != (s = r(h[a + c]))) return s
			} else
				for(var c = 0; c < t.length && l > c; c++) {
					var d = t[a + c];
					if(d && null != (s = r(d[o]))) return s
				} else if(e === DT) {
					if(!u) return;
					for(var c = 0; c < t.length && l > c; c++) {
						var f = t[c];
						if(f && null != (s = r(f[u]))) return s
					}
				} else if(e === CT) {
			if(!u) return;
			var h = t[u];
			if(!h || I(h)) return !1;
			for(var c = 0; c < h.length && l > c; c++)
				if(null != (s = r(h[c]))) return s
		} else if(e === TT)
			for(var c = 0; c < t.length && l > c; c++) {
				var f = t[c],
					p = Vi(f);
				if(!_(p)) return !1;
				if(null != (s = r(p[o]))) return s
			}
		return !1
	}

	function $r(t, e) {
		if(e) {
			var n = e.seiresIndex,
				i = e.seriesId,
				a = e.seriesName;
			return null != n && t.componentIndex !== n || null != i && t.id !== i || null != a && t.name !== a
		}
	}

	function Jr(t, e) {
		var n = t.color && !t.colorLayer;
		f(e, function(e, o) {
			"colorLayer" === o && n || _T.hasClass(o) || ("object" == typeof e ? t[o] = t[o] ? a(t[o], e, !1) : i(e) : null == t[o] && (t[o] = e))
		})
	}

	function Qr(t) {
		t = t, this.option = {}, this.option[ET] = 1, this._componentsMap = B({
			series: []
		}), this._seriesIndices, this._seriesIndicesMap, Jr(t, this._theme.option), a(t, bT, !1), this.mergeOption(t)
	}

	function ts(t, e) {
		_(e) || (e = e ? [e] : []);
		var n = {};
		return f(e, function(e) {
			n[e] = (t.get(e) || []).slice()
		}), n
	}

	function es(t, e, n) {
		var i = e.type ? e.type : n ? n.subType : _T.determineSubType(t, e);
		return i
	}

	function ns(t, e) {
		t._seriesIndicesMap = B(t._seriesIndices = p(e, function(t) {
			return t.componentIndex
		}) || [])
	}

	function is(t, e) {
		return e.hasOwnProperty("subType") ? m(t, function(t) {
			return t.subType === e.subType
		}) : t
	}

	function as(t) {
		f(RT, function(e) {
			this[e] = y(t[e], t)
		}, this)
	}

	function os() {
		this._coordinateSystems = []
	}

	function rs(t) {
		this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
	}

	function ss(t, e, n) {
		var i, a, o = [],
			r = [],
			s = t.timeline;
		if(t.baseOption && (a = t.baseOption), (s || t.options) && (a = a || {}, o = (t.options || []).slice()), t.media) {
			a = a || {};
			var l = t.media;
			VT(l, function(t) {
				t && t.option && (t.query ? r.push(t) : i || (i = t))
			})
		}
		return a || (a = t), a.timeline || (a.timeline = s), VT([a].concat(o).concat(p(r, function(t) {
			return t.option
		})), function(t) {
			VT(e, function(e) {
				e(t, n)
			})
		}), {
			baseOption: a,
			timelineOptions: o,
			mediaDefault: i,
			mediaList: r
		}
	}

	function ls(t, e, n) {
		var i = {
				width: e,
				height: n,
				aspectratio: e / n
			},
			a = !0;
		return f(t, function(t, e) {
			var n = e.match(HT);
			if(n && n[1] && n[2]) {
				var o = n[1],
					r = n[2].toLowerCase();
				us(i[r], t, o) || (a = !1)
			}
		}), a
	}

	function us(t, e, n) {
		return "min" === n ? t >= e : "max" === n ? e >= t : t === e
	}

	function hs(t, e) {
		return t.join(",") === e.join(",")
	}

	function cs(t, e) {
		e = e || {}, VT(e, function(e, n) {
			if(null != e) {
				var i = t[n];
				if(_T.hasClass(n)) {
					e = Ri(e), i = Ri(i);
					var a = Fi(i, e);
					t[n] = FT(a, function(t) {
						return t.option && t.exist ? WT(t.exist, t.option, !0) : t.exist || t.option
					})
				} else t[n] = WT(i, e, !0)
			}
		})
	}

	function ds(t) {
		var e = t && t.itemStyle;
		if(e)
			for(var n = 0, i = YT.length; i > n; n++) {
				var o = YT[n],
					r = e.normal,
					s = e.emphasis;
				r && r[o] && (t[o] = t[o] || {}, t[o].normal ? a(t[o].normal, r[o]) : t[o].normal = r[o], r[o] = null), s && s[o] && (t[o] = t[o] || {}, t[o].emphasis ? a(t[o].emphasis, s[o]) : t[o].emphasis = s[o], s[o] = null)
			}
	}

	function fs(t, e, n) {
		if(t && t[e] && (t[e].normal || t[e].emphasis)) {
			var i = t[e].normal,
				a = t[e].emphasis;
			i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), a && (t.emphasis = t.emphasis || {}, t.emphasis[e] = a)
		}
	}

	function ps(t) {
		fs(t, "itemStyle"), fs(t, "lineStyle"), fs(t, "areaStyle"), fs(t, "label"), fs(t, "labelLine"), fs(t, "upperLabel"), fs(t, "edgeLabel")
	}

	function gs(t, e) {
		var n = XT(t) && t[e],
			i = XT(n) && n.textStyle;
		if(i)
			for(var a = 0, o = rM.length; o > a; a++) {
				var e = rM[a];
				i.hasOwnProperty(e) && (n[e] = i[e])
			}
	}

	function ms(t) {
		t && (ps(t), gs(t, "label"), t.emphasis && gs(t.emphasis, "label"))
	}

	function vs(t) {
		if(XT(t)) {
			ds(t), ps(t), gs(t, "label"), gs(t, "upperLabel"), gs(t, "edgeLabel"), t.emphasis && (gs(t.emphasis, "label"), gs(t.emphasis, "upperLabel"), gs(t.emphasis, "edgeLabel"));
			var e = t.markPoint;
			e && (ds(e), ms(e));
			var n = t.markLine;
			n && (ds(n), ms(n));
			var i = t.markArea;
			i && ms(i);
			var a = t.data;
			if("graph" === t.type) {
				a = a || t.nodes;
				var o = t.links || t.edges;
				if(o && !I(o))
					for(var r = 0; r < o.length; r++) ms(o[r]);
				f(t.categories, function(t) {
					ps(t)
				})
			}
			if(a && !I(a))
				for(var r = 0; r < a.length; r++) ms(a[r]);
			var e = t.markPoint;
			if(e && e.data)
				for(var s = e.data, r = 0; r < s.length; r++) ms(s[r]);
			var n = t.markLine;
			if(n && n.data)
				for(var l = n.data, r = 0; r < l.length; r++) _(l[r]) ? (ms(l[r][0]), ms(l[r][1])) : ms(l[r]);
			"gauge" === t.type ? (gs(t, "axisLabel"), gs(t, "title"), gs(t, "detail")) : "treemap" === t.type ? (fs(t.breadcrumb, "itemStyle"), f(t.levels, function(t) {
				ps(t)
			})) : "tree" === t.type && ps(t.leaves)
		}
	}

	function ys(t) {
		return _(t) ? t : t ? [t] : []
	}

	function xs(t) {
		return(_(t) ? t[0] : t) || {}
	}

	function _s(t, e) {
		e = e.split(",");
		for(var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++);
		return n
	}

	function ws(t, e, n, i) {
		e = e.split(",");
		for(var a, o = t, r = 0; r < e.length - 1; r++) a = e[r], null == o[a] && (o[a] = {}), o = o[a];
		(i || null == o[e[r]]) && (o[e[r]] = n)
	}

	function bs(t) {
		f(jT, function(e) {
			e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
		})
	}

	function Ss(t) {
		f(t, function(e, n) {
			var i = [],
				a = [0 / 0, 0 / 0],
				o = [e.stackResultDimension, e.stackedOverDimension],
				r = e.data,
				s = e.isStackedByIndex,
				l = r.map(o, function(o, l, u) {
					var h = r.get(e.stackedDimension, u);
					if(isNaN(h)) return a;
					var c, d;
					s ? d = r.getRawIndex(u) : c = r.get(e.stackedByDimension, u);
					for(var f = 0 / 0, p = n - 1; p >= 0; p--) {
						var g = t[p];
						if(s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
							var m = g.data.getByRawIndex(g.stackResultDimension, d);
							if(h >= 0 && m > 0 || 0 >= h && 0 > m) {
								h += m, f = m;
								break
							}
						}
					}
					return i[0] = h, i[1] = f, i
				});
			r.hostModel.setData(l), e.data = l
		})
	}

	function Ms(t, e) {
		Br.isInstance(t) || (t = Br.seriesDataToSource(t)), this._source = t;
		var n = this._data = t.data,
			i = t.sourceFormat;
		i === kT && (this._offset = 0, this._dimSize = e, this._data = n);
		var a = QT[i === AT ? i + "_" + t.seriesLayoutBy : i];
		r(this, a)
	}

	function Is() {
		return this._data.length
	}

	function Ts(t) {
		return this._data[t]
	}

	function As(t) {
		for(var e = 0; e < t.length; e++) this._data.push(t[e])
	}

	function Ds(t, e, n) {
		return null != n ? t[n] : t
	}

	function Cs(t, e, n, i) {
		return Ls(t[i], this._dimensionInfos[e])
	}

	function Ls(t, e) {
		var n = e && e.type;
		if("ordinal" === n) {
			var i = e && e.ordinalMeta;
			return i ? i.parseAndCollect(t) : t
		}
		return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +lr(t)), null == t || "" === t ? 0 / 0 : +t
	}

	function ks(t, e, n) {
		if(t) {
			var i = t.getRawDataItem(e);
			if(null != i) {
				var a, o, r = t.getProvider().getSource().sourceFormat,
					s = t.getDimensionInfo(n);
				return s && (a = s.name, o = s.index), tA[r](i, e, o, a)
			}
		}
	}

	function Ps(t, e, n) {
		if(t) {
			var i = t.getProvider().getSource().sourceFormat;
			if(i === TT || i === DT) {
				var a = t.getRawDataItem(e);
				return i !== TT || S(a) || (a = null), a ? a[n] : void 0
			}
		}
	}

	function Os(t) {
		return new Ns(t)
	}

	function Ns(t) {
		t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
	}

	function Es(t, e, n, i, a, o) {
		oA.reset(n, i, a, o), t._callingProgress = e, t._callingProgress({
			start: n,
			end: i,
			count: i - n,
			next: oA.next
		}, t.context)
	}

	function zs(t, e) {
		t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
		var n, i;
		!e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), _(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
		var a = t._downstream;
		return a && a.dirty(), i
	}

	function Rs(t) {
		var e = t.name;
		Hi(t) || (t.name = Bs(t) || e)
	}

	function Bs(t) {
		var e = t.getRawData(),
			n = e.mapDimension("seriesName", !0),
			i = [];
		return f(n, function(t) {
			var n = e.getDimensionInfo(t);
			n.displayName && i.push(n.displayName)
		}), i.join(" ")
	}

	function Vs(t) {
		return t.model.getRawData().count()
	}

	function Gs(t) {
		var e = t.model;
		return e.setData(e.getRawData().cloneShallow()), Fs
	}

	function Fs(t, e) {
		t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
	}

	function Ws(t, e) {
		f(t.CHANGABLE_METHODS, function(n) {
			t.wrapMethod(n, x(Hs, e))
		})
	}

	function Hs(t) {
		var e = Zs(t);
		e && e.setOutputEnd(this.count())
	}

	function Zs(t) {
		var e = (t.ecModel || {}).scheduler,
			n = e && e.getPipeline(t.uid);
		if(n) {
			var i = n.currentTask;
			if(i) {
				var a = i.agentStubMap;
				a && (i = a.get(t.uid))
			}
			return i
		}
	}

	function Xs() {
		this.group = new rS, this.uid = jo("viewChart"), this.renderTask = Os({
			plan: js,
			reset: qs
		}), this.renderTask.context = {
			view: this
		}
	}

	function Ys(t, e) {
		if(t && (t.trigger(e), "group" === t.type))
			for(var n = 0; n < t.childCount(); n++) Ys(t.childAt(n), e)
	}

	function Us(t, e, n) {
		var i = Yi(t, e);
		null != i ? f(Ri(i), function(e) {
			Ys(t.getItemGraphicEl(e), n)
		}) : t.eachItemGraphicEl(function(t) {
			Ys(t, n)
		})
	}

	function js(t) {
		return dA(t.model)
	}

	function qs(t) {
		var e = t.model,
			n = t.ecModel,
			i = t.api,
			a = t.payload,
			o = e.pipelineContext.progressiveRender,
			r = t.view,
			s = a && cA(a).updateMethod,
			l = o ? "incrementalPrepareRender" : s && r[s] ? s : "render";
		return "render" !== l && r[l](e, n, i, a), pA[l]
	}

	function Ks(t, e, n) {
		function i() {
			h = (new Date).getTime(), c = null, t.apply(r, s || [])
		}
		var a, o, r, s, l, u = 0,
			h = 0,
			c = null;
		e = e || 0;
		var d = function() {
			a = (new Date).getTime(), r = this, s = arguments;
			var t = l || e,
				d = l || n;
			l = null, o = a - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(i, t) : o >= 0 ? i() : c = setTimeout(i, -o), u = a
		};
		return d.clear = function() {
			c && (clearTimeout(c), c = null)
		}, d.debounceNextCall = function(t) {
			l = t
		}, d
	}

	function $s(t, e, n, i) {
		var a = t[e];
		if(a) {
			var o = a[gA] || a,
				r = a[vA],
				s = a[mA];
			if(s !== n || r !== i) {
				if(null == n || !i) return t[e] = o;
				a = t[e] = Ks(o, n, "debounce" === i), a[gA] = o, a[vA] = i, a[mA] = n
			}
			return a
		}
	}

	function Js(t, e) {
		var n = t[e];
		n && n[gA] && (t[e] = n[gA])
	}

	function Qs(t, e, n, i) {
		this.ecInstance = t, this.api = e, this.unfinished;
		var n = this._dataProcessorHandlers = n.slice(),
			i = this._visualHandlers = i.slice();
		this._allHandlers = n.concat(i), this._stageTaskMap = B()
	}

	function tl(t, e, n, i, a) {
		function o(t, e) {
			return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
		}
		a = a || {};
		var r;
		f(e, function(e) {
			if(!a.visualType || a.visualType === e.visualType) {
				var s = t._stageTaskMap.get(e.uid),
					l = s.seriesTaskMap,
					u = s.overallTask;
				if(u) {
					var h, c = u.agentStubMap;
					c.each(function(t) {
						o(a, t) && (t.dirty(), h = !0)
					}), h && u.dirty(), MA(u, i);
					var d = t.getPerformArgs(u, a.block);
					c.each(function(t) {
						t.perform(d)
					}), r |= u.perform(d)
				} else l && l.each(function(s) {
					o(a, s) && s.dirty();
					var l = t.getPerformArgs(s, a.block);
					l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), MA(s, i), r |= s.perform(l)
				})
			}
		}), t.unfinished |= r
	}

	function el(t, e, n, i, a) {
		function o(n) {
			var o = n.uid,
				s = r.get(o) || r.set(o, Os({
					plan: sl,
					reset: ll,
					count: hl
				}));
			s.context = {
				model: n,
				ecModel: i,
				api: a,
				useClearVisual: e.isVisual && !e.isLayout,
				plan: e.plan,
				reset: e.reset,
				scheduler: t
			}, cl(t, n, s)
		}
		var r = n.seriesTaskMap || (n.seriesTaskMap = B()),
			s = e.seriesType,
			l = e.getTargetSeries;
		e.createOnAllSeries ? i.eachRawSeries(o) : s ? i.eachRawSeriesByType(s, o) : l && l(i, a).each(o);
		var u = t._pipelineMap;
		r.each(function(t, e) {
			u.get(e) || (t.dispose(), r.removeKey(e))
		})
	}

	function nl(t, e, n, i, a) {
		function o(e) {
			var n = e.uid,
				i = s.get(n);
			i || (i = s.set(n, Os({
				reset: al,
				onDirty: rl
			})), r.dirty()), i.context = {
				model: e,
				overallProgress: h,
				modifyOutputEnd: c
			}, i.agent = r, i.__block = h, cl(t, e, i)
		}
		var r = n.overallTask = n.overallTask || Os({
			reset: il
		});
		r.context = {
			ecModel: i,
			api: a,
			overallReset: e.overallReset,
			scheduler: t
		};
		var s = r.agentStubMap = r.agentStubMap || B(),
			l = e.seriesType,
			u = e.getTargetSeries,
			h = !0,
			c = e.modifyOutputEnd;
		l ? i.eachRawSeriesByType(l, o) : u ? u(i, a).each(o) : (h = !1, f(i.getSeries(), o));
		var d = t._pipelineMap;
		s.each(function(t, e) {
			d.get(e) || (t.dispose(), r.dirty(), s.removeKey(e))
		})
	}

	function il(t) {
		t.overallReset(t.ecModel, t.api, t.payload)
	}

	function al(t) {
		return t.overallProgress && ol
	}

	function ol() {
		this.agent.dirty(), this.getDownstream().dirty()
	}

	function rl() {
		this.agent && this.agent.dirty()
	}

	function sl(t) {
		return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
	}

	function ll(t) {
		t.useClearVisual && t.data.clearAllVisual();
		var e = t.resetDefines = Ri(t.reset(t.model, t.ecModel, t.api, t.payload));
		return e.length > 1 ? p(e, function(t, e) {
			return ul(e)
		}) : IA
	}

	function ul(t) {
		return function(e, n) {
			var i = n.data,
				a = n.resetDefines[t];
			if(a && a.dataEach)
				for(var o = e.start; o < e.end; o++) a.dataEach(i, o);
			else a && a.progress && a.progress(e, i)
		}
	}

	function hl(t) {
		return t.data.count()
	}

	function cl(t, e, n) {
		var i = e.uid,
			a = t._pipelineMap.get(i);
		!a.head && (a.head = n), a.tail && a.tail.pipe(n), a.tail = n, n.__idxInPipeline = a.count++, n.__pipeline = a
	}

	function dl(t) {
		TA = null;
		try {
			t(AA, DA)
		} catch(e) {}
		return TA
	}

	function fl(t, e) {
		for(var n in e.prototype) t[n] = G
	}

	function pl(t) {
		if(b(t)) {
			var e = new DOMParser;
			t = e.parseFromString(t, "text/xml")
		}
		for(9 === t.nodeType && (t = t.firstChild);
			"svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
		return t
	}

	function gl() {
		this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
	}

	function ml(t, e) {
		for(var n = t.firstChild; n;) {
			if(1 === n.nodeType) {
				var i = n.getAttribute("offset");
				i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
				var a = n.getAttribute("stop-color") || "#000000";
				e.addColorStop(i, a)
			}
			n = n.nextSibling
		}
	}

	function vl(t, e) {
		t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle))
	}

	function yl(t) {
		for(var e = N(t).split(zA), n = [], i = 0; i < e.length; i += 2) {
			var a = parseFloat(e[i]),
				o = parseFloat(e[i + 1]);
			n.push([a, o])
		}
		return n
	}

	function xl(t, e, n, i) {
		var a = e.__inheritedStyle || {},
			o = "text" === e.type;
		if(1 === t.nodeType && (wl(t, e), r(a, bl(t)), !i))
			for(var s in VA)
				if(VA.hasOwnProperty(s)) {
					var l = t.getAttribute(s);
					null != l && (a[VA[s]] = l)
				}
		var u = o ? "textFill" : "fill",
			h = o ? "textStroke" : "stroke";
		e.style = e.style || new gS;
		var c = e.style;
		null != a.fill && c.set(u, _l(a.fill, n)), null != a.stroke && c.set(h, _l(a.stroke, n)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function(t) {
			var e = "lineWidth" === t && o ? "textStrokeWidth" : t;
			null != a[t] && c.set(e, parseFloat(a[t]))
		}), a.textBaseline && "auto" !== a.textBaseline || (a.textBaseline = "alphabetic"), "alphabetic" === a.textBaseline && (a.textBaseline = "bottom"), "start" === a.textAlign && (a.textAlign = "left"), "end" === a.textAlign && (a.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function(t) {
			null != a[t] && c.set(t, a[t])
		}), a.lineDash && (e.style.lineDash = N(a.lineDash).split(zA)), c[h] && "none" !== c[h] && (e[h] = !0), e.__inheritedStyle = a
	}

	function _l(t, e) {
		var n = e && t && t.match(GA);
		if(n) {
			var i = N(n[1]),
				a = e[i];
			return a
		}
		return t
	}

	function wl(t, e) {
		var n = t.getAttribute("transform");
		if(n) {
			n = n.replace(/,/g, " ");
			var i = null,
				a = [];
			n.replace(FA, function(t, e, n) {
				a.push(e, n)
			});
			for(var o = a.length - 1; o > 0; o -= 2) {
				var r = a[o],
					s = a[o - 1];
				switch(i = i || Ie(), s) {
					case "translate":
						r = N(r).split(zA), Ce(i, i, [parseFloat(r[0]), parseFloat(r[1] || 0)]);
						break;
					case "scale":
						r = N(r).split(zA), ke(i, i, [parseFloat(r[0]), parseFloat(r[1] || r[0])]);
						break;
					case "rotate":
						r = N(r).split(zA), Le(i, i, parseFloat(r[0]));
						break;
					case "skew":
						r = N(r).split(zA), console.warn("Skew transform is not supported yet");
						break;
					case "matrix":
						var r = N(r).split(zA);
						i[0] = parseFloat(r[0]), i[1] = parseFloat(r[1]), i[2] = parseFloat(r[2]), i[3] = parseFloat(r[3]), i[4] = parseFloat(r[4]), i[5] = parseFloat(r[5])
				}
			}
			e.setLocalTransform(i)
		}
	}

	function bl(t) {
		var e = t.getAttribute("style"),
			n = {};
		if(!e) return n;
		var i = {};
		WA.lastIndex = 0;
		for(var a; null != (a = WA.exec(e));) i[a[1]] = a[2];
		for(var o in VA) VA.hasOwnProperty(o) && null != i[o] && (n[VA[o]] = i[o]);
		return n
	}

	function Sl(t, e, n) {
		var i = e / t.width,
			a = n / t.height,
			o = Math.min(i, a),
			r = [o, o],
			s = [-(t.x + t.width / 2) * o + e / 2, -(t.y + t.height / 2) * o + n / 2];
		return {
			scale: r,
			position: s
		}
	}

	function Ml(t, e) {
		var n = new gl;
		return n.parse(t, e)
	}

	function Il(t) {
		return function(e, n, i) {
			e = e && e.toLowerCase(), yb.prototype[t].call(this, e, n, i)
		}
	}

	function Tl() {
		yb.call(this)
	}

	function Al(t, e, n) {
		function a(t, e) {
			return t.__prio - e.__prio
		}
		n = n || {}, "string" == typeof e && (e = _D[e]), this.id, this.group, this._dom = t;
		var o = "canvas",
			r = this._zr = Pi(t, {
				renderer: n.renderer || o,
				devicePixelRatio: n.devicePixelRatio,
				width: n.width,
				height: n.height
			});
		this._throttledZrFlush = Ks(y(r.flush, r), 17);
		var e = i(e);
		e && KT(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new os;
		var s = this._api = Xl(this);
		An(xD, a), An(mD, a), this._scheduler = new Qs(this, s, mD, xD), yb.call(this, this._ecEventProcessor = new Yl), this._messageCenter = new Tl, this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], r.animation.on("frame", this._onframe, this), El(r, this), E(this)
	}

	function Dl(t, e, n) {
		var i, a = this._model,
			o = this._coordSysMgr.getCoordinateSystems();
		e = ji(a, e);
		for(var r = 0; r < o.length; r++) {
			var s = o[r];
			if(s[t] && null != (i = s[t](a, e, n))) return i
		}
	}

	function Cl(t) {
		var e = t._model,
			n = t._scheduler;
		n.restorePipelines(e), n.prepareStageTasks(), zl(t, "component", e, n), zl(t, "chart", e, n), n.plan()
	}

	function Ll(t, e, n, i, a) {
		function o(i) {
			i && i.__alive && i[e] && i[e](i.__model, r, t._api, n)
		}
		var r = t._model;
		if(!i) return void UA(t._componentsViews.concat(t._chartsViews), o);
		var s = {};
		s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
		var l = {
			mainType: i,
			query: s
		};
		a && (l.subType = a);
		var u = n.excludeSeriesId;
		null != u && (u = B(Ri(u))), r && r.eachComponent(l, function(e) {
			u && null != u.get(e.id) || o(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
		}, t)
	}

	function kl(t, e) {
		var n = t._chartsMap,
			i = t._scheduler;
		e.eachSeries(function(t) {
			i.updateStreamModes(t, n[t.__viewId])
		})
	}

	function Pl(t, e) {
		var n = t.type,
			i = t.escapeConnect,
			a = pD[n],
			o = a.actionInfo,
			l = (o.update || "update").split(":"),
			u = l.pop();
		l = null != l[0] && KA(l[0]), this[lD] = !0;
		var h = [t],
			c = !1;
		t.batch && (c = !0, h = p(t.batch, function(e) {
			return e = s(r({}, e), t), e.batch = null, e
		}));
		var d, f = [],
			g = "highlight" === n || "downplay" === n;
		UA(h, function(t) {
			d = a.action(t, this._model, this._api), d = d || r({}, t), d.type = o.event || d.type, f.push(d), g ? Ll(this, u, t, "series") : l && Ll(this, u, t, l.main, l.sub)
		}, this), "none" === u || g || l || (this[uD] ? (Cl(this), dD.update.call(this, t), this[uD] = !1) : dD[u].call(this, t)), d = c ? {
			type: o.event || n,
			escapeConnect: i,
			batch: f
		} : f[0], this[lD] = !1, !e && this._messageCenter.trigger(d.type, d)
	}

	function Ol(t) {
		for(var e = this._pendingActions; e.length;) {
			var n = e.shift();
			Pl.call(this, n, t)
		}
	}

	function Nl(t) {
		!t && this.trigger("updated")
	}

	function El(t, e) {
		t.on("rendered", function() {
			e.trigger("rendered"), !t.animation.isFinished() || e[uD] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
		})
	}

	function zl(t, e, n, i) {
		function a(t) {
			var e = "_ec_" + t.id + "_" + t.type,
				a = s[e];
			if(!a) {
				var h = KA(t.type),
					c = o ? lA.getClass(h.main, h.sub) : Xs.getClass(h.sub);
				a = new c, a.init(n, u), s[e] = a, r.push(a), l.add(a.group)
			}
			t.__viewId = a.__id = e, a.__alive = !0, a.__model = t, a.group.__ecComponentInfo = {
				mainType: t.mainType,
				index: t.componentIndex
			}, !o && i.prepareView(a, t, n, u)
		}
		for(var o = "component" === e, r = o ? t._componentsViews : t._chartsViews, s = o ? t._componentsMap : t._chartsMap, l = t._zr, u = t._api, h = 0; h < r.length; h++) r[h].__alive = !1;
		o ? n.eachComponent(function(t, e) {
			"series" !== t && a(e)
		}) : n.eachSeries(a);
		for(var h = 0; h < r.length;) {
			var c = r[h];
			c.__alive ? h++ : (!o && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), r.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
		}
	}

	function Rl(t) {
		t.clearColorPalette(), t.eachSeries(function(t) {
			t.clearColorPalette()
		})
	}

	function Bl(t, e, n, i) {
		Vl(t, e, n, i), UA(t._chartsViews, function(t) {
			t.__alive = !1
		}), Gl(t, e, n, i), UA(t._chartsViews, function(t) {
			t.__alive || t.remove(e, n)
		})
	}

	function Vl(t, e, n, i, a) {
		UA(a || t._componentsViews, function(t) {
			var a = t.__model;
			t.render(a, e, n, i), Zl(a, t)
		})
	}

	function Gl(t, e, n, i, a) {
		var o, r = t._scheduler;
		e.eachSeries(function(e) {
			var n = t._chartsMap[e.__viewId];
			n.__alive = !0;
			var s = n.renderTask;
			r.updatePayload(s, i), a && a.get(e.uid) && s.dirty(), o |= s.perform(r.getPerformArgs(s)), n.group.silent = !!e.get("silent"), Zl(e, n), Hl(e, n)
		}), r.unfinished |= o, Wl(t._zr, e), _A(t._zr.dom, e)
	}

	function Fl(t, e) {
		UA(yD, function(n) {
			n(t, e)
		})
	}

	function Wl(t, e) {
		var n = t.storage,
			i = 0;
		n.traverse(function(t) {
			t.isGroup || i++
		}), i > e.get("hoverLayerThreshold") && !Kw.node && n.traverse(function(t) {
			t.isGroup || (t.useHoverLayer = !0)
		})
	}

	function Hl(t, e) {
		var n = t.get("blendMode") || null;
		e.group.traverse(function(t) {
			t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
				t.setStyle("blend", n)
			})
		})
	}

	function Zl(t, e) {
		var n = t.get("z"),
			i = t.get("zlevel");
		e.group.traverse(function(t) {
			"group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
		})
	}

	function Xl(t) {
		var e = t._coordSysMgr;
		return r(new as(t), {
			getCoordinateSystems: y(e.getCoordinateSystems, e),
			getComponentByElement: function(e) {
				for(; e;) {
					var n = e.__ecComponentInfo;
					if(null != n) return t._model.getComponent(n.mainType, n.index);
					e = e.parent
				}
			}
		})
	}

	function Yl() {
		this.eventInfo
	}

	function Ul(t) {
		function e(t, e) {
			for(var n = 0; n < t.length; n++) {
				var i = t[n];
				i[o] = e
			}
		}
		var n = 0,
			i = 1,
			a = 2,
			o = "__connectUpdateStatus";
		UA(gD, function(r, s) {
			t._messageCenter.on(s, function(r) {
				if(SD[t.group] && t[o] !== n) {
					if(r && r.escapeConnect) return;
					var s = t.makeActionFromEvent(r),
						l = [];
					UA(bD, function(e) {
						e !== t && e.group === t.group && l.push(e)
					}), e(l, n), UA(l, function(t) {
						t[o] !== i && t.dispatchAction(s)
					}), e(l, a)
				}
			})
		})
	}

	function jl(t, e, n) {
		var i = Jl(t);
		if(i) return i;
		var a = new Al(t, e, n);
		return a.id = "ec_" + MD++, bD[a.id] = a, Ki(t, TD, a.id), Ul(a), a
	}

	function ql(t) {
		if(_(t)) {
			var e = t;
			t = null, UA(e, function(e) {
				null != e.group && (t = e.group)
			}), t = t || "g_" + ID++, UA(e, function(e) {
				e.group = t
			})
		}
		return SD[t] = !0, t
	}

	function Kl(t) {
		SD[t] = !1
	}

	function $l(t) {
		"string" == typeof t ? t = bD[t] : t instanceof Al || (t = Jl(t)), t instanceof Al && !t.isDisposed() && t.dispose()
	}

	function Jl(t) {
		return bD[$i(t, TD)]
	}

	function Ql(t) {
		return bD[t]
	}

	function tu(t, e) {
		_D[t] = e
	}

	function eu(t) {
		vD.push(t)
	}

	function nu(t, e) {
		uu(mD, t, e, tD)
	}

	function iu(t) {
		yD.push(t)
	}

	function au(t, e, n) {
		"function" == typeof e && (n = e, e = "");
		var i = qA(t) ? t.type : [t, t = {
			event: e
		}][0];
		t.event = (t.event || i).toLowerCase(), e = t.event, YA(hD.test(i) && hD.test(e)), pD[i] || (pD[i] = {
			action: n,
			actionInfo: t
		}), gD[e] = i
	}

	function ou(t, e) {
		os.register(t, e)
	}

	function ru(t) {
		var e = os.get(t);
		return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
	}

	function su(t, e) {
		uu(xD, t, e, nD, "layout")
	}

	function lu(t, e) {
		uu(xD, t, e, aD, "visual")
	}

	function uu(t, e, n, i, a) {
		(jA(e) || qA(e)) && (n = e, e = i);
		var o = Qs.wrapStageHandler(n, a);
		return o.__prio = e, o.__raw = n, t.push(o), o
	}

	function hu(t, e) {
		wD[t] = e
	}

	function cu(t) {
		return _T.extend(t)
	}

	function du(t) {
		return lA.extend(t)
	}

	function fu(t) {
		return sA.extend(t)
	}

	function pu(t) {
		return Xs.extend(t)
	}

	function gu(t) {
		n("createCanvas", t)
	}

	function mu(t, e, n) {
		ZA.registerMap(t, e, n)
	}

	function vu(t) {
		var e = ZA.retrieveMap(t);
		return e && e[0] && {
			geoJson: e[0].geoJSON,
			specialAreas: e[0].specialAreas
		}
	}

	function yu(t) {
		return t
	}

	function xu(t, e, n, i, a) {
		this._old = t, this._new = e, this._oldKeyGetter = n || yu, this._newKeyGetter = i || yu, this.context = a
	}

	function _u(t, e, n, i, a) {
		for(var o = 0; o < t.length; o++) {
			var r = "_ec_" + a[i](t[o], o),
				s = e[r];
			null == s ? (n.push(r), e[r] = o) : (s.length || (e[r] = s = [s]), s.push(o))
		}
	}

	function wu(t) {
		var e = {},
			n = e.encode = {},
			i = B(),
			a = [],
			o = [];
		f(t.dimensions, function(e) {
			var r = t.getDimensionInfo(e),
				s = r.coordDim;
			if(s) {
				var l = n[s];
				n.hasOwnProperty(s) || (l = n[s] = []), l[r.coordDimIndex] = e, r.isExtraCoord || (i.set(s, 1), Su(r.type) && (a[0] = e)), r.defaultTooltip && o.push(e)
			}
			CD.each(function(t, e) {
				var i = n[e];
				n.hasOwnProperty(e) || (i = n[e] = []);
				var a = r.otherDims[e];
				null != a && a !== !1 && (i[a] = r.name)
			})
		});
		var r = [],
			s = {};
		i.each(function(t, e) {
			var i = n[e];
			s[e] = i[0], r = r.concat(i)
		}), e.dataDimsOnCoord = r, e.encodeFirstDimNotExtra = s;
		var l = n.label;
		l && l.length && (a = l.slice());
		var u = n.tooltip;
		return u && u.length ? o = u.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, e
	}

	function bu(t) {
		return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
	}

	function Su(t) {
		return !("ordinal" === t || "time" === t)
	}

	function Mu(t) {
		return t._rawCount > 65535 ? ED : RD
	}

	function Iu(t) {
		var e = t.constructor;
		return e === Array ? t.slice() : new e(t)
	}

	function Tu(t, e) {
		f(BD.concat(e.__wrappedMethods || []), function(n) {
			e.hasOwnProperty(n) && (t[n] = e[n])
		}), t.__wrappedMethods = e.__wrappedMethods, f(VD, function(n) {
			t[n] = i(e[n])
		}), t._calculationInfo = r(e._calculationInfo)
	}

	function Au(t, e, n, i, a) {
		var o = ND[e.type],
			r = i - 1,
			s = e.name,
			l = t[s][r];
		if(l && l.length < n) {
			for(var u = new o(Math.min(a - r * n, n)), h = 0; h < l.length; h++) u[h] = l[h];
			t[s][r] = u
		}
		for(var c = i * n; a > c; c += n) t[s].push(new o(Math.min(a - c, n)))
	}

	function Du(t) {
		var e = t._invertedIndicesMap;
		f(e, function(n, i) {
			var a = t._dimensionInfos[i],
				o = a.ordinalMeta;
			if(o) {
				n = e[i] = new zD(o.categories.length);
				for(var r = 0; r < n.length; r++) n[r] = PD;
				for(var r = 0; r < t._count; r++) n[t.get(i, r)] = r
			}
		})
	}

	function Cu(t, e, n) {
		var i;
		if(null != e) {
			var a = t._chunkSize,
				o = Math.floor(n / a),
				r = n % a,
				s = t.dimensions[e],
				l = t._storage[s][o];
			if(l) {
				i = l[r];
				var u = t._dimensionInfos[s].ordinalMeta;
				u && u.categories.length && (i = u.categories[i])
			}
		}
		return i
	}

	function Lu(t) {
		return t
	}

	function ku(t) {
		return t < this._count && t >= 0 ? this._indices[t] : -1
	}

	function Pu(t, e) {
		var n = t._idList[e];
		return null == n && (n = Cu(t, t._idDimIdx, e)), null == n && (n = OD + e), n
	}

	function Ou(t) {
		return _(t) || (t = [t]), t
	}

	function Nu(t, e) {
		var n = t.dimensions,
			i = new GD(p(n, t.getDimensionInfo, t), t.hostModel);
		Tu(i, t);
		for(var a = i._storage = {}, o = t._storage, r = 0; r < n.length; r++) {
			var s = n[r];
			o[s] && (u(e, s) >= 0 ? (a[s] = Eu(o[s]), i._rawExtent[s] = zu(), i._extent[s] = null) : a[s] = o[s])
		}
		return i
	}

	function Eu(t) {
		for(var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = Iu(t[n]);
		return e
	}

	function zu() {
		return [1 / 0, -1 / 0]
	}

	function Ru(t, e, n) {
		function a(t, e, n) {
			null != CD.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, h.set(e, !0))
		}
		Br.isInstance(e) || (e = Br.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();
		for(var o = (n.dimsDef || []).slice(), l = B(n.encodeDef), u = B(), h = B(), c = [], d = Bu(e, t, o, n.dimCount), p = 0; d > p; p++) {
			var g = o[p] = r({}, S(o[p]) ? o[p] : {
					name: o[p]
				}),
				m = g.name,
				v = c[p] = {
					otherDims: {}
				};
			null != m && null == u.get(m) && (v.name = v.displayName = m, u.set(m, p)), null != g.type && (v.type = g.type), null != g.displayName && (v.displayName = g.displayName)
		}
		l.each(function(t, e) {
			if(t = Ri(t).slice(), 1 === t.length && t[0] < 0) return void l.set(e, !1);
			var n = l.set(e, []);
			f(t, function(t, i) {
				b(t) && (t = u.get(t)), null != t && d > t && (n[i] = t, a(c[t], e, i))
			})
		});
		var y = 0;
		f(t, function(t) {
			var e, t, n, o;
			if(b(t)) e = t, t = {};
			else {
				e = t.name;
				var r = t.ordinalMeta;
				t.ordinalMeta = null, t = i(t), t.ordinalMeta = r, n = t.dimsDef, o = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
			}
			var u = l.get(e);
			if(u !== !1) {
				var u = Ri(u);
				if(!u.length)
					for(var h = 0; h < (n && n.length || 1); h++) {
						for(; y < c.length && null != c[y].coordDim;) y++;
						y < c.length && u.push(y++)
					}
				f(u, function(i, r) {
					var l = c[i];
					if(a(s(l, t), e, r), null == l.name && n) {
						var u = n[r];
						!S(u) && (u = {
							name: u
						}), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip
					}
					o && s(l.otherDims, o)
				})
			}
		});
		var x = n.generateCoord,
			_ = n.generateCoordCount,
			w = null != _;
		_ = x ? _ || 1 : 0;
		for(var M = x || "value", I = 0; d > I; I++) {
			var v = c[I] = c[I] || {},
				T = v.coordDim;
			null == T && (v.coordDim = Vu(M, h, w), v.coordDimIndex = 0, (!x || 0 >= _) && (v.isExtraCoord = !0), _--), null == v.name && (v.name = Vu(v.coordDim, u)), null == v.type && qr(e, I, v.name) && (v.type = "ordinal")
		}
		return c
	}

	function Bu(t, e, n, i) {
		var a = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
		return f(e, function(t) {
			var e = t.dimsDef;
			e && (a = Math.max(a, e.length))
		}), a
	}

	function Vu(t, e, n) {
		if(n || null != e.get(t)) {
			for(var i = 0; null != e.get(t + i);) i++;
			t += i
		}
		return e.set(t, !0), t
	}

	function Gu(t, e, n) {
		n = n || {};
		var i, a, o, r, s = n.byIndex,
			l = n.stackedCoordDimension,
			u = !(!t || !t.get("stack"));
		if(f(e, function(t, n) {
				b(t) && (e[n] = t = {
					name: t
				}), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), a || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (a = t))
			}), !a || s || i || (s = !0), a) {
			o = "__\x00ecstackresult", r = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);
			var h = a.coordDim,
				c = a.type,
				d = 0;
			f(e, function(t) {
				t.coordDim === h && d++
			}), e.push({
				name: o,
				coordDim: h,
				coordDimIndex: d,
				type: c,
				isExtraCoord: !0,
				isCalculationCoord: !0
			}), d++, e.push({
				name: r,
				coordDim: r,
				coordDimIndex: d,
				type: c,
				isExtraCoord: !0,
				isCalculationCoord: !0
			})
		}
		return {
			stackedDimension: a && a.name,
			stackedByDimension: i && i.name,
			isStackedByIndex: s,
			stackedOverDimension: r,
			stackResultDimension: o
		}
	}

	function Fu(t, e) {
		return !!e && e === t.getCalculationInfo("stackedDimension")
	}

	function Wu(t, e) {
		return Fu(t, e) ? t.getCalculationInfo("stackResultDimension") : e
	}

	function Hu(t, e, n) {
		n = n || {}, Br.isInstance(t) || (t = Br.seriesDataToSource(t));
		var i, a = e.get("coordinateSystem"),
			o = os.get(a),
			r = zr(e);
		r && (i = p(r.coordSysDims, function(t) {
			var e = {
					name: t
				},
				n = r.axisMap.get(t);
			if(n) {
				var i = n.get("type");
				e.type = bu(i)
			}
			return e
		})), i || (i = o && (o.getDimensionsInfo ? o.getDimensionsInfo() : o.dimensions.slice()) || ["x", "y"]);
		var s, l, u = HD(t, {
			coordDimensions: i,
			generateCoord: n.generateCoord
		});
		r && f(u, function(t, e) {
			var n = t.coordDim,
				i = r.categoryAxisMap.get(n);
			i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0)
		}), l || null == s || (u[s].otherDims.itemName = 0);
		var h = Gu(e, u),
			c = new GD(u, e);
		c.setCalculationInfo(h);
		var d = null != s && Zu(t) ? function(t, e, n, i) {
			return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
		} : null;
		return c.hasItemOption = !1, c.initData(t, null, d), c
	}

	function Zu(t) {
		if(t.sourceFormat === TT) {
			var e = Xu(t.data || []);
			return null != e && !_(Vi(e))
		}
	}

	function Xu(t) {
		for(var e = 0; e < t.length && null == t[e];) e++;
		return t[e]
	}

	function Yu(t) {
		this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
	}

	function Uu(t) {
		this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
	}

	function ju(t) {
		return t._map || (t._map = B(t.categories))
	}

	function qu(t) {
		return S(t) && null != t.value ? t.value : t + ""
	}

	function Ku(t, e, n, i) {
		var a = {},
			o = t[1] - t[0],
			r = a.interval = cr(o / e, !0);
		null != n && n > r && (r = a.interval = n), null != i && r > i && (r = a.interval = i);
		var s = a.intervalPrecision = $u(r),
			l = a.niceTickExtent = [UD(Math.ceil(t[0] / r) * r, s), UD(Math.floor(t[1] / r) * r, s)];
		return Qu(l, t), a
	}

	function $u(t) {
		return ir(t) + 2
	}

	function Ju(t, e, n) {
		t[e] = Math.max(Math.min(t[e], n[1]), n[0])
	}

	function Qu(t, e) {
		!isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), Ju(t, 0, e), Ju(t, 1, e), t[0] > t[1] && (t[0] = t[1])
	}

	function th(t, e, n, i) {
		var a = [];
		if(!t) return a;
		var o = 1e4;
		e[0] < n[0] && a.push(e[0]);
		for(var r = n[0]; r <= n[1] && (a.push(r), r = UD(r + t, i), r !== a[a.length - 1]);)
			if(a.length > o) return [];
		return e[1] > (a.length ? a[a.length - 1] : n[1]) && a.push(e[1]), a
	}

	function eh(t) {
		return t.get("stack") || KD + t.seriesIndex
	}

	function nh(t) {
		return t.dim + t.index
	}

	function ih(t) {
		var e = [],
			n = t.axis,
			i = "axis0";
		if("category" === n.type) {
			for(var a = n.getBandWidth(), o = 0; o < t.count; o++) e.push(s({
				bandWidth: a,
				axisKey: i,
				stackId: KD + o
			}, t));
			for(var r = rh(e), l = [], o = 0; o < t.count; o++) {
				var u = r[i][KD + o];
				u.offsetCenter = u.offset + u.width / 2, l.push(u)
			}
			return l
		}
	}

	function ah(t, e) {
		var n = [];
		return e.eachSeriesByType(t, function(t) {
			uh(t) && !hh(t) && n.push(t)
		}), n
	}

	function oh(t) {
		var e = [];
		return f(t, function(t) {
			var n = t.getData(),
				i = t.coordinateSystem,
				a = i.getBaseAxis(),
				o = a.getExtent(),
				r = "category" === a.type ? a.getBandWidth() : Math.abs(o[1] - o[0]) / n.count(),
				s = Qo(t.get("barWidth"), r),
				l = Qo(t.get("barMaxWidth"), r),
				u = t.get("barGap"),
				h = t.get("barCategoryGap");
			e.push({
				bandWidth: r,
				barWidth: s,
				barMaxWidth: l,
				barGap: u,
				barCategoryGap: h,
				axisKey: nh(a),
				stackId: eh(t)
			})
		}), rh(e)
	}

	function rh(t) {
		var e = {};
		f(t, function(t) {
			var n = t.axisKey,
				i = t.bandWidth,
				a = e[n] || {
					bandWidth: i,
					remainedWidth: i,
					autoWidthCount: 0,
					categoryGap: "20%",
					gap: "30%",
					stacks: {}
				},
				o = a.stacks;
			e[n] = a;
			var r = t.stackId;
			o[r] || a.autoWidthCount++, o[r] = o[r] || {
				width: 0,
				maxWidth: 0
			};
			var s = t.barWidth;
			s && !o[r].width && (o[r].width = s, s = Math.min(a.remainedWidth, s), a.remainedWidth -= s);
			var l = t.barMaxWidth;
			l && (o[r].maxWidth = l);
			var u = t.barGap;
			null != u && (a.gap = u);
			var h = t.barCategoryGap;
			null != h && (a.categoryGap = h)
		});
		var n = {};
		return f(e, function(t, e) {
			n[e] = {};
			var i = t.stacks,
				a = t.bandWidth,
				o = Qo(t.categoryGap, a),
				r = Qo(t.gap, 1),
				s = t.remainedWidth,
				l = t.autoWidthCount,
				u = (s - o) / (l + (l - 1) * r);
			u = Math.max(u, 0), f(i, function(t) {
				var e = t.maxWidth;
				e && u > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--)
			}), u = (s - o) / (l + (l - 1) * r), u = Math.max(u, 0);
			var h, c = 0;
			f(i, function(t) {
				t.width || (t.width = u), h = t, c += t.width * (1 + r)
			}), h && (c -= h.width * r);
			var d = -c / 2;
			f(i, function(t, i) {
				n[e][i] = n[e][i] || {
					offset: d,
					width: t.width
				}, d += t.width * (1 + r)
			})
		}), n
	}

	function sh(t, e, n) {
		if(t && e) {
			var i = t[nh(e)];
			return null != i && null != n && (i = i[eh(n)]), i
		}
	}

	function lh(t, e) {
		var n = ah(t, e),
			i = oh(n),
			a = {};
		f(n, function(t) {
			var e = t.getData(),
				n = t.coordinateSystem,
				o = n.getBaseAxis(),
				r = eh(t),
				s = i[nh(o)][r],
				l = s.offset,
				u = s.width,
				h = n.getOtherAxis(o),
				c = t.get("barMinHeight") || 0;
			a[r] = a[r] || [], e.setLayout({
				offset: l,
				size: u
			});
			for(var d = e.mapDimension(h.dim), f = e.mapDimension(o.dim), p = Fu(e, d), g = h.isHorizontal(), m = ch(o, h, p), v = 0, y = e.count(); y > v; v++) {
				var x = e.get(d, v),
					_ = e.get(f, v);
				if(!isNaN(x)) {
					var w = x >= 0 ? "p" : "n",
						b = m;
					p && (a[r][_] || (a[r][_] = {
						p: m,
						n: m
					}), b = a[r][_][w]);
					var S, M, I, T;
					if(g) {
						var A = n.dataToPoint([x, _]);
						S = b, M = A[1] + l, I = A[0] - m, T = u, Math.abs(I) < c && (I = (0 > I ? -1 : 1) * c), p && (a[r][_][w] += I)
					} else {
						var A = n.dataToPoint([_, x]);
						S = A[0] + l, M = b, I = u, T = A[1] - m, Math.abs(T) < c && (T = (0 >= T ? -1 : 1) * c), p && (a[r][_][w] += T)
					}
					e.setItemLayout(v, {
						x: S,
						y: M,
						width: I,
						height: T
					})
				}
			}
		}, this)
	}

	function uh(t) {
		return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
	}

	function hh(t) {
		return t.pipelineContext && t.pipelineContext.large
	}

	function ch(t, e) {
		var n, i, a = e.getGlobalExtent();
		a[0] > a[1] ? (n = a[1], i = a[0]) : (n = a[0], i = a[1]);
		var o = e.toGlobalCoord(e.dataToCoord(0));
		return n > o && (o = n), o > i && (o = i), o
	}

	function dh(t, e) {
		return fC(t, dC(e))
	}

	function fh(t, e) {
		var n, i, a, o = t.type,
			r = e.getMin(),
			s = e.getMax(),
			l = null != r,
			u = null != s,
			h = t.getExtent();
		"ordinal" === o ? n = e.getCategories().length : (i = e.get("boundaryGap"), _(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = Qo(i[0], 1), i[1] = Qo(i[1], 1), a = h[1] - h[0] || Math.abs(h[0])), null == r && (r = "ordinal" === o ? n ? 0 : 0 / 0 : h[0] - i[0] * a), null == s && (s = "ordinal" === o ? n ? n - 1 : 0 / 0 : h[1] + i[1] * a), "dataMin" === r ? r = h[0] : "function" == typeof r && (r = r({
			min: h[0],
			max: h[1]
		})), "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({
			min: h[0],
			max: h[1]
		})), (null == r || !isFinite(r)) && (r = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(A(r) || A(s) || "ordinal" === o && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (r > 0 && s > 0 && !l && (r = 0), 0 > r && 0 > s && !u && (s = 0));
		var c = e.ecModel;
		if(c && "time" === o) {
			var d, p = ah("bar", c);
			if(f(p, function(t) {
					d |= t.getBaseAxis() === e.axis
				}), d) {
				var g = oh(p),
					m = ph(r, s, e, g);
				r = m.min, s = m.max
			}
		}
		return [r, s]
	}

	function ph(t, e, n, i) {
		var a = n.axis.getExtent(),
			o = a[1] - a[0],
			r = sh(i, n.axis);
		if(void 0 === r) return {
			min: t,
			max: e
		};
		var s = 1 / 0;
		f(r, function(t) {
			s = Math.min(t.offset, s)
		});
		var l = -1 / 0;
		f(r, function(t) {
			l = Math.max(t.offset + t.width, l)
		}), s = Math.abs(s), l = Math.abs(l);
		var u = s + l,
			h = e - t,
			c = 1 - (s + l) / o,
			d = h / c - h;
		return e += d * (l / u), t -= d * (s / u), {
			min: t,
			max: e
		}
	}

	function gh(t, e) {
		var n = fh(t, e),
			i = null != e.getMin(),
			a = null != e.getMax(),
			o = e.get("splitNumber");
		"log" === t.type && (t.base = e.get("logBase"));
		var r = t.type;
		t.setExtent(n[0], n[1]), t.niceExtent({
			splitNumber: o,
			fixMin: i,
			fixMax: a,
			minInterval: "interval" === r || "time" === r ? e.get("minInterval") : null,
			maxInterval: "interval" === r || "time" === r ? e.get("maxInterval") : null
		});
		var s = e.get("interval");
		null != s && t.setInterval && t.setInterval(s)
	}

	function mh(t, e) {
		if(e = e || t.get("type")) switch(e) {
			case "category":
				return new YD(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
			case "value":
				return new qD;
			default:
				return(Yu.getClass(e) || qD).create(t)
		}
	}

	function vh(t) {
		var e = t.scale.getExtent(),
			n = e[0],
			i = e[1];
		return !(n > 0 && i > 0 || 0 > n && 0 > i)
	}

	function yh(t) {
		var e = t.getLabelModel().get("formatter"),
			n = "category" === t.type ? t.scale.getExtent()[0] : null;
		return "string" == typeof e ? e = function(e) {
			return function(n) {
				return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "")
			}
		}(e) : "function" == typeof e ? function(i, a) {
			return null != n && (a = i - n), e(xh(t, i), a)
		} : function(e) {
			return t.scale.getLabel(e)
		}
	}

	function xh(t, e) {
		return "category" === t.type ? t.scale.getLabel(e) : e
	}

	function _h(t) {
		var e = t.model,
			n = t.scale;
		if(e.get("axisLabel.show") && !n.isBlank()) {
			var i, a, o = "category" === t.type,
				r = n.getExtent();
			o ? a = n.count() : (i = n.getTicks(), a = i.length);
			var s, l = t.getLabelModel(),
				u = yh(t),
				h = 1;
			a > 40 && (h = Math.ceil(a / 40));
			for(var c = 0; a > c; c += h) {
				var d = i ? i[c] : r[0] + c,
					f = u(d),
					p = l.getTextRect(f),
					g = wh(p, l.get("rotate") || 0);
				s ? s.union(g) : s = g
			}
			return s
		}
	}

	function wh(t, e) {
		var n = e * Math.PI / 180,
			i = t.plain(),
			a = i.width,
			o = i.height,
			r = a * Math.cos(n) + o * Math.sin(n),
			s = a * Math.sin(n) + o * Math.cos(n),
			l = new xn(i.x, i.y, r, s);
		return l
	}

	function bh(t) {
		var e = t.get("interval");
		return null == e ? "auto" : e
	}

	function Sh(t) {
		return "category" === t.type && 0 === bh(t.getLabelModel())
	}

	function Mh(t, e) {
		if("image" !== this.type) {
			var n = this.style,
				i = this.shape;
			i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
		}
	}

	function Ih(t, e, n, i, a, o, r) {
		var s = 0 === t.indexOf("empty");
		s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
		var l;
		return l = 0 === t.indexOf("image://") ? io(t.slice(8), new xn(e, n, i, a), r ? "center" : "cover") : 0 === t.indexOf("path://") ? no(t.slice(7), {}, new xn(e, n, i, a), r ? "center" : "cover") : new AC({
			shape: {
				symbolType: t,
				x: e,
				y: n,
				width: i,
				height: a
			}
		}), l.__isEmptyBrush = s, l.setColor = Mh, l.setColor(o), l
	}

	function Th(t) {
		return Hu(t.getSource(), t)
	}

	function Ah(t, e) {
		var n = e;
		Xo.isInstance(e) || (n = new Xo(e), c(n, xC));
		var i = mh(n);
		return i.setExtent(t[0], t[1]), gh(i, n), i
	}

	function Dh(t) {
		c(t, xC)
	}

	function Ch(t, e) {
		return Math.abs(t - e) < LC
	}

	function Lh(t, e, n) {
		var i = 0,
			a = t[0];
		if(!a) return !1;
		for(var o = 1; o < t.length; o++) {
			var r = t[o];
			i += ka(a[0], a[1], r[0], r[1], e, n), a = r
		}
		var s = t[0];
		return Ch(a[0], s[0]) && Ch(a[1], s[1]) || (i += ka(a[0], a[1], s[0], s[1], e, n)), 0 !== i
	}

	function kh(t, e, n) {
		if(this.name = t, this.geometries = e, n) n = [n[0], n[1]];
		else {
			var i = this.getBoundingRect();
			n = [i.x + i.width / 2, i.y + i.height / 2]
		}
		this.center = n
	}

	function Ph(t) {
		if(!t.UTF8Encoding) return t;
		var e = t.UTF8Scale;
		null == e && (e = 1024);
		for(var n = t.features, i = 0; i < n.length; i++)
			for(var a = n[i], o = a.geometry, r = o.coordinates, s = o.encodeOffsets, l = 0; l < r.length; l++) {
				var u = r[l];
				if("Polygon" === o.type) r[l] = Oh(u, s[l], e);
				else if("MultiPolygon" === o.type)
					for(var h = 0; h < u.length; h++) {
						var c = u[h];
						u[h] = Oh(c, s[l][h], e)
					}
			}
		return t.UTF8Encoding = !1, t
	}

	function Oh(t, e, n) {
		for(var i = [], a = e[0], o = e[1], r = 0; r < t.length; r += 2) {
			var s = t.charCodeAt(r) - 64,
				l = t.charCodeAt(r + 1) - 64;
			s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += a, l += o, a = s, o = l, i.push([s / n, l / n])
		}
		return i
	}

	function Nh(t) {
		return "category" === t.type ? zh(t) : Vh(t)
	}

	function Eh(t, e) {
		return "category" === t.type ? Bh(t, e) : {
			ticks: t.scale.getTicks()
		}
	}

	function zh(t) {
		var e = t.getLabelModel(),
			n = Rh(t, e);
		return !e.get("show") || t.scale.isBlank() ? {
			labels: [],
			labelCategoryInterval: n.labelCategoryInterval
		} : n
	}

	function Rh(t, e) {
		var n = Gh(t, "labels"),
			i = bh(e),
			a = Fh(n, i);
		if(a) return a;
		var o, r;
		return w(i) ? o = Uh(t, i) : (r = "auto" === i ? Hh(t) : i, o = Yh(t, r)), Wh(n, i, {
			labels: o,
			labelCategoryInterval: r
		})
	}

	function Bh(t, e) {
		var n = Gh(t, "ticks"),
			i = bh(e),
			a = Fh(n, i);
		if(a) return a;
		var o, r;
		if((!e.get("show") || t.scale.isBlank()) && (o = []), w(i)) o = Uh(t, i, !0);
		else if("auto" === i) {
			var s = Rh(t, t.getLabelModel());
			r = s.labelCategoryInterval, o = p(s.labels, function(t) {
				return t.tickValue
			})
		} else r = i, o = Yh(t, r, !0);
		return Wh(n, i, {
			ticks: o,
			tickCategoryInterval: r
		})
	}

	function Vh(t) {
		var e = t.scale.getTicks(),
			n = yh(t);
		return {
			labels: p(e, function(e, i) {
				return {
					formattedLabel: n(e, i),
					rawLabel: t.scale.getLabel(e),
					tickValue: e
				}
			})
		}
	}

	function Gh(t, e) {
		return PC(t)[e] || (PC(t)[e] = [])
	}

	function Fh(t, e) {
		for(var n = 0; n < t.length; n++)
			if(t[n].key === e) return t[n].value
	}

	function Wh(t, e, n) {
		return t.push({
			key: e,
			value: n
		}), n
	}

	function Hh(t) {
		var e = PC(t).autoInterval;
		return null != e ? e : PC(t).autoInterval = t.calculateCategoryInterval()
	}

	function Zh(t) {
		var e = Xh(t),
			n = yh(t),
			i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
			a = t.scale,
			o = a.getExtent(),
			r = a.count();
		if(o[1] - o[0] < 1) return 0;
		var s = 1;
		r > 40 && (s = Math.max(1, Math.floor(r / 40)));
		for(var l = o[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), d = 0, f = 0; l <= o[1]; l += s) {
			var p = 0,
				g = 0,
				m = Bn(n(l), e.font, "center", "top");
			p = 1.3 * m.width, g = 1.3 * m.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7)
		}
		var v = d / h,
			y = f / c;
		isNaN(v) && (v = 1 / 0), isNaN(y) && (y = 1 / 0);
		var x = Math.max(0, Math.floor(Math.min(v, y))),
			_ = PC(t.model),
			w = _.lastAutoInterval,
			b = _.lastTickCount;
		return null != w && null != b && Math.abs(w - x) <= 1 && Math.abs(b - r) <= 1 && w > x ? x = w : (_.lastTickCount = r, _.lastAutoInterval = x), x
	}

	function Xh(t) {
		var e = t.getLabelModel();
		return {
			axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
			labelRotate: e.get("rotate") || 0,
			font: e.getFont()
		}
	}

	function Yh(t, e, n) {
		function i(t) {
			l.push(n ? t : {
				formattedLabel: a(t),
				rawLabel: o.getLabel(t),
				tickValue: t
			})
		}
		var a = yh(t),
			o = t.scale,
			r = o.getExtent(),
			s = t.getLabelModel(),
			l = [],
			u = Math.max((e || 0) + 1, 1),
			h = r[0],
			c = o.count();
		0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
		var d = Sh(t),
			f = s.get("showMinLabel") || d,
			p = s.get("showMaxLabel") || d;
		f && h !== r[0] && i(r[0]);
		for(var g = h; g <= r[1]; g += u) i(g);
		return p && g !== r[1] && i(r[1]), l
	}

	function Uh(t, e, n) {
		var i = t.scale,
			a = yh(t),
			o = [];
		return f(i.getTicks(), function(t) {
			var r = i.getLabel(t);
			e(t, r) && o.push(n ? t : {
				formattedLabel: a(t),
				rawLabel: r,
				tickValue: t
			})
		}), o
	}

	function jh(t, e) {
		var n = t[1] - t[0],
			i = e,
			a = n / i / 2;
		t[0] += a, t[1] -= a
	}

	function qh(t, e, n, i, a) {
		function o(t, e) {
			return h ? t > e : e > t
		}
		var r = e.length;
		if(t.onBand && !i && r) {
			var s, l = t.getExtent();
			if(1 === r) e[0].coord = l[0], s = e[1] = {
				coord: l[0]
			};
			else {
				var u = e[1].coord - e[0].coord;
				f(e, function(t) {
					t.coord -= u / 2;
					var e = e || 0;
					e % 2 > 0 && (t.coord -= u / (2 * (e + 1)))
				}), s = {
					coord: e[r - 1].coord + u
				}, e.push(s)
			}
			var h = l[0] > l[1];
			o(e[0].coord, l[0]) && (a ? e[0].coord = l[0] : e.shift()), a && o(l[0], e[0].coord) && e.unshift({
				coord: l[0]
			}), o(l[1], s.coord) && (a ? s.coord = l[1] : e.pop()), a && o(s.coord, l[1]) && e.push({
				coord: l[1]
			})
		}
	}

	function Kh(t) {
		return this._axes[t]
	}

	function $h(t) {
		BC.call(this, t)
	}

	function Jh(t, e) {
		return e.type || (e.data ? "category" : "value")
	}

	function Qh(t, e) {
		return t.getCoordSysModel() === e
	}

	function tc(t, e, n) {
		this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t
	}

	function ec(t, e, n, i) {
		function a(t) {
			return t.dim + "_" + t.index
		}
		n.getAxesOnZeroOf = function() {
			return o ? [o] : []
		};
		var o, r = t[e],
			s = n.model,
			l = s.get("axisLine.onZero"),
			u = s.get("axisLine.onZeroAxisIndex");
		if(l) {
			if(null != u) nc(r[u]) && (o = r[u]);
			else
				for(var h in r)
					if(r.hasOwnProperty(h) && nc(r[h]) && !i[a(r[h])]) {
						o = r[h];
						break
					}
			o && (i[a(o)] = !0)
		}
	}

	function nc(t) {
		return t && "category" !== t.type && "time" !== t.type && vh(t)
	}

	function ic(t, e) {
		var n = t.getExtent(),
			i = n[0] + n[1];
		t.toGlobalCoord = "x" === t.dim ? function(t) {
			return t + e
		} : function(t) {
			return i - t + e
		}, t.toLocalCoord = "x" === t.dim ? function(t) {
			return t - e
		} : function(t) {
			return i - t + e
		}
	}

	function ac(t) {
		return p(UC, function(e) {
			var n = t.getReferringComponents(e)[0];
			return n
		})
	}

	function oc(t) {
		return "cartesian2d" === t.get("coordinateSystem")
	}

	function rc(t, e) {
		var n = t.mapDimension("defaultedLabel", !0),
			i = n.length;
		if(1 === i) return ks(t, e, n[0]);
		if(i) {
			for(var a = [], o = 0; o < n.length; o++) {
				var r = ks(t, e, n[o]);
				a.push(r)
			}
			return a.join(" ")
		}
	}

	function sc(t, e, n, i, a, o) {
		var r = n.getModel("label"),
			s = n.getModel("emphasis.label");
		Io(t, e, r, s, {
			labelFetcher: a,
			labelDataIndex: o,
			defaultText: rc(a.getData(), o),
			isRectText: !0,
			autoColor: i
		}), lc(t), lc(e)
	}

	function lc(t, e) {
		"outside" === t.textPosition && (t.textPosition = e)
	}

	function uc(t, e, n) {
		n.style.text = null, zo(n, {
			shape: {
				width: 0
			}
		}, e, t, function() {
			n.parent && n.parent.remove(n)
		})
	}

	function hc(t, e, n) {
		n.style.text = null, zo(n, {
			shape: {
				r: n.shape.r0
			}
		}, e, t, function() {
			n.parent && n.parent.remove(n)
		})
	}

	function cc(t, e, n, i, a, o, r, l) {
		var u = e.getItemVisual(n, "color"),
			h = e.getItemVisual(n, "opacity"),
			c = i.getModel("itemStyle"),
			d = i.getModel("emphasis.itemStyle").getBarItemStyle();
		l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(s({
			fill: u,
			opacity: h
		}, c.getBarItemStyle()));
		var f = i.getShallow("cursor");
		f && t.attr("cursor", f);
		var p = r ? a.height > 0 ? "bottom" : "top" : a.width > 0 ? "left" : "right";
		l || sc(t.style, d, i, u, o, n, p), So(t, d)
	}

	function dc(t, e) {
		var n = t.get($C) || 0;
		return Math.min(n, Math.abs(e.width), Math.abs(e.height))
	}

	function fc(t, e, n) {
		var i = t.getData(),
			a = [],
			o = i.getLayout("valueAxisHorizontal") ? 1 : 0;
		a[1 - o] = i.getLayout("valueAxisStart");
		var r = new tL({
			shape: {
				points: i.getLayout("largePoints")
			},
			incremental: !!n,
			__startPoint: a,
			__valueIdx: o
		});
		e.add(r), pc(r, t, i)
	}

	function pc(t, e, n) {
		var i = n.getVisual("borderColor") || n.getVisual("color"),
			a = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
		t.useStyle(a), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth")
	}

	function gc(t) {
		var e = {
			componentType: t.mainType,
			componentIndex: t.componentIndex
		};
		return e[t.mainType + "Index"] = t.componentIndex, e
	}

	function mc(t, e, n, i) {
		var a, o, r = rr(n - t.rotation),
			s = i[0] > i[1],
			l = "start" === e && !s || "start" !== e && s;
		return sr(r - eL / 2) ? (o = l ? "bottom" : "top", a = "center") : sr(r - 1.5 * eL) ? (o = l ? "top" : "bottom", a = "center") : (o = "middle", a = 1.5 * eL > r && r > eL / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
			rotation: r,
			textAlign: a,
			textVerticalAlign: o
		}
	}

	function vc(t) {
		var e = t.get("tooltip");
		return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
	}

	function yc(t, e, n) {
		if(!Sh(t.axis)) {
			var i = t.get("axisLabel.showMinLabel"),
				a = t.get("axisLabel.showMaxLabel");
			e = e || [], n = n || [];
			var o = e[0],
				r = e[1],
				s = e[e.length - 1],
				l = e[e.length - 2],
				u = n[0],
				h = n[1],
				c = n[n.length - 1],
				d = n[n.length - 2];
			i === !1 ? (xc(o), xc(u)) : _c(o, r) && (i ? (xc(r), xc(h)) : (xc(o), xc(u))), a === !1 ? (xc(s), xc(c)) : _c(l, s) && (a ? (xc(l), xc(d)) : (xc(s), xc(c)))
		}
	}

	function xc(t) {
		t && (t.ignore = !0)
	}

	function _c(t, e) {
		var n = t && t.getBoundingRect().clone(),
			i = e && e.getBoundingRect().clone();
		if(n && i) {
			var a = Te([]);
			return Le(a, a, -t.rotation), n.applyTransform(De([], a, t.getLocalTransform())), i.applyTransform(De([], a, e.getLocalTransform())), n.intersect(i)
		}
	}

	function wc(t) {
		return "middle" === t || "center" === t
	}

	function bc(t, e, n) {
		var i = e.axis;
		if(e.get("axisTick.show") && !i.scale.isBlank()) {
			for(var a = e.getModel("axisTick"), o = a.getModel("lineStyle"), r = a.get("length"), l = i.getTicksCoords(), u = [], h = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
				var p = l[f].coord;
				u[0] = p, u[1] = 0, h[0] = p, h[1] = n.tickDirection * r, c && (oe(u, u, c), oe(h, h, c));
				var g = new PI(ro({
					anid: "tick_" + l[f].tickValue,
					shape: {
						x1: u[0],
						y1: u[1],
						x2: h[0],
						y2: h[1]
					},
					style: s(o.getLineStyle(), {
						stroke: e.get("axisLine.lineStyle.color")
					}),
					z2: 2,
					silent: !0
				}));
				t.group.add(g), d.push(g)
			}
			return d
		}
	}

	function Sc(t, e, n) {
		var i = e.axis,
			a = D(n.axisLabelShow, e.get("axisLabel.show"));
		if(a && !i.scale.isBlank()) {
			var o = e.getModel("axisLabel"),
				r = o.get("margin"),
				s = i.getViewLabels(),
				l = (D(n.labelRotate, o.get("rotate")) || 0) * eL / 180,
				u = aL(n.rotation, l, n.labelDirection),
				h = e.getCategories(!0),
				c = [],
				d = vc(e),
				p = e.get("triggerEvent");
			return f(s, function(a, s) {
				var l = a.tickValue,
					f = a.formattedLabel,
					g = a.rawLabel,
					m = o;
				h && h[l] && h[l].textStyle && (m = new Xo(h[l].textStyle, o, e.ecModel));
				var v = m.getTextColor() || e.get("axisLine.lineStyle.color"),
					y = i.dataToCoord(l),
					x = [y, n.labelOffset + n.labelDirection * r],
					_ = new yI({
						anid: "label_" + l,
						position: x,
						rotation: u.rotation,
						silent: d,
						z2: 10
					});
				To(_.style, m, {
					text: f,
					textAlign: m.getShallow("align", !0) || u.textAlign,
					textVerticalAlign: m.getShallow("verticalAlign", !0) || m.getShallow("baseline", !0) || u.textVerticalAlign,
					textFill: "function" == typeof v ? v("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : v
				}), p && (_.eventData = gc(e), _.eventData.targetType = "axisLabel", _.eventData.value = g), t._dumbGroup.add(_), _.updateTransform(), c.push(_), t.group.add(_), _.decomposeTransform()
			}), c
		}
	}

	function Mc(t, e) {
		var n = {
			axesInfo: {},
			seriesInvolved: !1,
			coordSysAxesInfo: {},
			coordSysMap: {}
		};
		return Ic(n, t, e), n.seriesInvolved && Ac(n, t), n
	}

	function Ic(t, e, n) {
		var i = e.getComponent("tooltip"),
			a = e.getComponent("axisPointer"),
			o = a.get("link", !0) || [],
			r = [];
		oL(n.getCoordinateSystems(), function(n) {
			function s(i, s, l) {
				var h = l.model.getModel("axisPointer", a),
					d = h.get("show");
				if(d && ("auto" !== d || i || Oc(h))) {
					null == s && (s = h.get("triggerTooltip")), h = i ? Tc(l, c, a, e, i, s) : h;
					var f = h.get("snap"),
						p = Nc(l.model),
						g = s || f || "category" === l.type,
						m = t.axesInfo[p] = {
							key: p,
							axis: l,
							coordSys: n,
							axisPointerModel: h,
							triggerTooltip: s,
							involveSeries: g,
							snap: f,
							useHandle: Oc(h),
							seriesModels: []
						};
					u[p] = m, t.seriesInvolved |= g;
					var v = Dc(o, l);
					if(null != v) {
						var y = r[v] || (r[v] = {
							axesInfo: {}
						});
						y.axesInfo[p] = m, y.mapper = o[v].mapper, m.linkGroup = y
					}
				}
			}
			if(n.axisPointerEnabled) {
				var l = Nc(n.model),
					u = t.coordSysAxesInfo[l] = {};
				t.coordSysMap[l] = n;
				var h = n.model,
					c = h.getModel("tooltip", i);
				if(oL(n.getAxes(), rL(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {
					var d = "axis" === c.get("trigger"),
						f = "cross" === c.get("axisPointer.type"),
						p = n.getTooltipAxes(c.get("axisPointer.axis"));
					(d || f) && oL(p.baseAxes, rL(s, f ? "cross" : !0, d)), f && oL(p.otherAxes, rL(s, "cross", !1))
				}
			}
		})
	}

	function Tc(t, e, n, a, o, r) {
		var l = e.getModel("axisPointer"),
			u = {};
		oL(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function(t) {
			u[t] = i(l.get(t))
		}), u.snap = "category" !== t.type && !!r, "cross" === l.get("type") && (u.type = "line");
		var h = u.label || (u.label = {});
		if(null == h.show && (h.show = !1), "cross" === o) {
			var c = l.get("label.show");
			if(h.show = null != c ? c : !0, !r) {
				var d = u.lineStyle = l.get("crossStyle");
				d && s(h, d.textStyle)
			}
		}
		return t.model.getModel("axisPointer", new Xo(u, n, a))
	}

	function Ac(t, e) {
		e.eachSeries(function(e) {
			var n = e.coordinateSystem,
				i = e.get("tooltip.trigger", !0),
				a = e.get("tooltip.show", !0);
			n && "none" !== i && i !== !1 && "item" !== i && a !== !1 && e.get("axisPointer.show", !0) !== !1 && oL(t.coordSysAxesInfo[Nc(n.model)], function(t) {
				var i = t.axis;
				n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
			})
		}, this)
	}

	function Dc(t, e) {
		for(var n = e.model, i = e.dim, a = 0; a < t.length; a++) {
			var o = t[a] || {};
			if(Cc(o[i + "AxisId"], n.id) || Cc(o[i + "AxisIndex"], n.componentIndex) || Cc(o[i + "AxisName"], n.name)) return a
		}
	}

	function Cc(t, e) {
		return "all" === t || _(t) && u(t, e) >= 0 || t === e
	}

	function Lc(t) {
		var e = kc(t);
		if(e) {
			var n = e.axisPointerModel,
				i = e.axis.scale,
				a = n.option,
				o = n.get("status"),
				r = n.get("value");
			null != r && (r = i.parse(r));
			var s = Oc(n);
			null == o && (a.status = s ? "show" : "hide");
			var l = i.getExtent().slice();
			l[0] > l[1] && l.reverse(), (null == r || r > l[1]) && (r = l[1]), r < l[0] && (r = l[0]), a.value = r, s && (a.status = e.axis.scale.isBlank() ? "hide" : "show")
		}
	}

	function kc(t) {
		var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
		return e && e.axesInfo[Nc(t)]
	}

	function Pc(t) {
		var e = kc(t);
		return e && e.axisPointerModel
	}

	function Oc(t) {
		return !!t.get("handle.show")
	}

	function Nc(t) {
		return t.type + "||" + t.id
	}

	function Ec(t, e, n, i, a, o) {
		var r = sL.getAxisPointerClass(t.axisPointerClass);
		if(r) {
			var s = Pc(e);
			s ? (t._axisPointer || (t._axisPointer = new r)).render(e, s, i, o) : zc(t, i)
		}
	}

	function zc(t, e, n) {
		var i = t._axisPointer;
		i && i.dispose(e, n), t._axisPointer = null
	}

	function Rc(t, e, n) {
		n = n || {};
		var i = t.coordinateSystem,
			a = e.axis,
			o = {},
			r = a.getAxesOnZeroOf()[0],
			s = a.position,
			l = r ? "onZero" : s,
			u = a.dim,
			h = i.getRect(),
			c = [h.x, h.x + h.width, h.y, h.y + h.height],
			d = {
				left: 0,
				right: 1,
				top: 0,
				bottom: 1,
				onZero: 2
			},
			f = e.get("offset") || 0,
			p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
		if(r) {
			var g = r.toGlobalCoord(r.dataToCoord(0));
			p[d.onZero] = Math.max(Math.min(g, p[1]), p[0])
		}
		o.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], o.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
		var m = {
			top: -1,
			bottom: 1,
			left: -1,
			right: 1
		};
		o.labelDirection = o.tickDirection = o.nameDirection = m[s], o.labelOffset = r ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (o.tickDirection = -o.tickDirection), D(n.labelInside, e.get("axisLabel.inside")) && (o.labelDirection = -o.labelDirection);
		var v = e.get("axisLabel.rotate");
		return o.labelRotate = "top" === l ? -v : v, o.z2 = 1, o
	}

	function Bc(t, e, n) {
		rS.call(this), this.updateData(t, e, n)
	}

	function Vc(t) {
		return [t[0] / 2, t[1] / 2]
	}

	function Gc(t, e) {
		this.parent.drift(t, e)
	}

	function Fc() {
		!yo(this) && Hc.call(this)
	}

	function Wc() {
		!yo(this) && Zc.call(this)
	}

	function Hc() {
		if(!this.incremental && !this.useHoverLayer) {
			var t = this.__symbolOriginalScale,
				e = t[1] / t[0];
			this.animateTo({
				scale: [Math.max(1.1 * t[0], t[0] + 3), Math.max(1.1 * t[1], t[1] + 3 * e)]
			}, 400, "elasticOut")
		}
	}

	function Zc() {
		this.incremental || this.useHoverLayer || this.animateTo({
			scale: this.__symbolOriginalScale
		}, 400, "elasticOut")
	}

	function Xc(t) {
		this.group = new rS, this._symbolCtor = t || Bc
	}

	function Yc(t, e, n, i) {
		return !(!e || isNaN(e[0]) || isNaN(e[1]) || i.isIgnore && i.isIgnore(n) || i.clipShape && !i.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(n, "symbol"))
	}

	function Uc(t) {
		return null == t || S(t) || (t = {
			isIgnore: t
		}), t || {}
	}

	function jc(t) {
		var e = t.hostModel;
		return {
			itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
			hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
			symbolRotate: e.get("symbolRotate"),
			symbolOffset: e.get("symbolOffset"),
			hoverAnimation: e.get("hoverAnimation"),
			labelModel: e.getModel("label"),
			hoverLabelModel: e.getModel("emphasis.label"),
			cursorStyle: e.get("cursor")
		}
	}

	function qc(t, e, n) {
		var i, a = t.getBaseAxis(),
			o = t.getOtherAxis(a),
			r = Kc(o, n),
			s = a.dim,
			l = o.dim,
			u = e.mapDimension(l),
			h = e.mapDimension(s),
			c = "x" === l || "radius" === l ? 1 : 0,
			d = p(t.dimensions, function(t) {
				return e.mapDimension(t)
			}),
			f = e.getCalculationInfo("stackResultDimension");
		return(i |= Fu(e, d[0])) && (d[0] = f), (i |= Fu(e, d[1])) && (d[1] = f), {
			dataDimsForPoint: d,
			valueStart: r,
			valueAxisDim: l,
			baseAxisDim: s,
			stacked: !!i,
			valueDim: u,
			baseDim: h,
			baseDataOffset: c,
			stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
		}
	}

	function Kc(t, e) {
		var n = 0,
			i = t.scale.getExtent();
		return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n
	}

	function $c(t, e, n, i) {
		var a = 0 / 0;
		t.stacked && (a = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(a) && (a = t.valueStart);
		var o = t.baseDataOffset,
			r = [];
		return r[o] = n.get(t.baseDim, i), r[1 - o] = a, e.dataToPoint(r)
	}

	function Jc(t, e) {
		var n = [];
		return e.diff(t).add(function(t) {
			n.push({
				cmd: "+",
				idx: t
			})
		}).update(function(t, e) {
			n.push({
				cmd: "=",
				idx: e,
				idx1: t
			})
		}).remove(function(t) {
			n.push({
				cmd: "-",
				idx: t
			})
		}).execute(), n
	}

	function Qc(t) {
		return isNaN(t[0]) || isNaN(t[1])
	}

	function td(t, e, n, i, a, o, r, s, l, u) {
		return "none" !== u && u ? ed.apply(this, arguments) : nd.apply(this, arguments)
	}

	function ed(t, e, n, i, a, o, r, s, l, u, h) {
		for(var c = 0, d = n, f = 0; i > f; f++) {
			var p = e[d];
			if(d >= a || 0 > d) break;
			if(Qc(p)) {
				if(h) {
					d += o;
					continue
				}
				break
			}
			if(d === n) t[o > 0 ? "moveTo" : "lineTo"](p[0], p[1]);
			else if(l > 0) {
				var g = e[c],
					m = "y" === u ? 1 : 0,
					v = (p[m] - g[m]) * l;
				SL(IL, g), IL[m] = g[m] + v, SL(TL, p), TL[m] = p[m] - v, t.bezierCurveTo(IL[0], IL[1], TL[0], TL[1], p[0], p[1])
			} else t.lineTo(p[0], p[1]);
			c = d, d += o
		}
		return f
	}

	function nd(t, e, n, i, a, o, r, s, l, u, h) {
		for(var c = 0, d = n, f = 0; i > f; f++) {
			var p = e[d];
			if(d >= a || 0 > d) break;
			if(Qc(p)) {
				if(h) {
					d += o;
					continue
				}
				break
			}
			if(d === n) t[o > 0 ? "moveTo" : "lineTo"](p[0], p[1]), SL(IL, p);
			else if(l > 0) {
				var g = d + o,
					m = e[g];
				if(h)
					for(; m && Qc(e[g]);) g += o, m = e[g];
				var v = .5,
					y = e[c],
					m = e[g];
				if(!m || Qc(m)) SL(TL, p);
				else {
					Qc(m) && !h && (m = p), U(ML, m, y);
					var x, _;
					if("x" === u || "y" === u) {
						var w = "x" === u ? 0 : 1;
						x = Math.abs(p[w] - y[w]), _ = Math.abs(p[w] - m[w])
					} else x = pb(p, y), _ = pb(p, m);
					v = _ / (_ + x), bL(TL, p, ML, -l * (1 - v))
				}
				_L(IL, IL, s), wL(IL, IL, r), _L(TL, TL, s), wL(TL, TL, r), t.bezierCurveTo(IL[0], IL[1], TL[0], TL[1], p[0], p[1]), bL(IL, p, ML, l * v)
			} else t.lineTo(p[0], p[1]);
			c = d, d += o
		}
		return f
	}

	function id(t, e) {
		var n = [1 / 0, 1 / 0],
			i = [-1 / 0, -1 / 0];
		if(e)
			for(var a = 0; a < t.length; a++) {
				var o = t[a];
				o[0] < n[0] && (n[0] = o[0]), o[1] < n[1] && (n[1] = o[1]), o[0] > i[0] && (i[0] = o[0]), o[1] > i[1] && (i[1] = o[1])
			}
		return {
			min: e ? n : i,
			max: e ? i : n
		}
	}

	function ad(t, e) {
		if(t.length === e.length) {
			for(var n = 0; n < t.length; n++) {
				var i = t[n],
					a = e[n];
				if(i[0] !== a[0] || i[1] !== a[1]) return
			}
			return !0
		}
	}

	function od(t) {
		return "number" == typeof t ? t : t ? .5 : 0
	}

	function rd(t) {
		var e = t.getGlobalExtent();
		if(t.onBand) {
			var n = t.getBandWidth() / 2 - 1,
				i = e[1] > e[0] ? 1 : -1;
			e[0] += i * n, e[1] -= i * n
		}
		return e
	}

	function sd(t, e, n) {
		if(!n.valueDim) return [];
		for(var i = [], a = 0, o = e.count(); o > a; a++) i.push($c(n, t, e, a));
		return i
	}

	function ld(t, e, n, i) {
		var a = rd(t.getAxis("x")),
			o = rd(t.getAxis("y")),
			r = t.getBaseAxis().isHorizontal(),
			s = Math.min(a[0], a[1]),
			l = Math.min(o[0], o[1]),
			u = Math.max(a[0], a[1]) - s,
			h = Math.max(o[0], o[1]) - l;
		if(n) s -= .5, u += .5, l -= .5, h += .5;
		else {
			var c = i.get("lineStyle.width") || 2,
				d = i.get("clipOverflow") ? c / 2 : Math.max(u, h);
			r ? (l -= d, h += 2 * d) : (s -= d, u += 2 * d)
		}
		var f = new LI({
			shape: {
				x: s,
				y: l,
				width: u,
				height: h
			}
		});
		return e && (f.shape[r ? "width" : "height"] = 0, Ro(f, {
			shape: {
				width: u,
				height: h
			}
		}, i)), f
	}

	function ud(t, e, n, i) {
		var a = t.getAngleAxis(),
			o = t.getRadiusAxis(),
			r = o.getExtent().slice();
		r[0] > r[1] && r.reverse();
		var s = a.getExtent(),
			l = Math.PI / 180;
		n && (r[0] -= .5, r[1] += .5);
		var u = new bI({
			shape: {
				cx: tr(t.cx, 1),
				cy: tr(t.cy, 1),
				r0: tr(r[0], 1),
				r: tr(r[1], 1),
				startAngle: -s[0] * l,
				endAngle: -s[1] * l,
				clockwise: a.inverse
			}
		});
		return e && (u.shape.endAngle = -s[0] * l, Ro(u, {
			shape: {
				endAngle: -s[1] * l
			}
		}, i)), u
	}

	function hd(t, e, n, i) {
		return "polar" === t.type ? ud(t, e, n, i) : ld(t, e, n, i)
	}

	function cd(t, e, n) {
		for(var i = e.getBaseAxis(), a = "x" === i.dim || "radius" === i.dim ? 0 : 1, o = [], r = 0; r < t.length - 1; r++) {
			var s = t[r + 1],
				l = t[r];
			o.push(l);
			var u = [];
			switch(n) {
				case "end":
					u[a] = s[a], u[1 - a] = l[1 - a], o.push(u);
					break;
				case "middle":
					var h = (l[a] + s[a]) / 2,
						c = [];
					u[a] = c[a] = h, u[1 - a] = l[1 - a], c[1 - a] = s[1 - a], o.push(u), o.push(c);
					break;
				default:
					u[a] = l[a], u[1 - a] = s[1 - a], o.push(u)
			}
		}
		return t[r] && o.push(t[r]), o
	}

	function dd(t, e) {
		var n = t.getVisual("visualMeta");
		if(n && n.length && t.count() && "cartesian2d" === e.type) {
			for(var i, a, o = n.length - 1; o >= 0; o--) {
				var r = n[o].dimension,
					s = t.dimensions[r],
					l = t.getDimensionInfo(s);
				if(i = l && l.coordDim, "x" === i || "y" === i) {
					a = n[o];
					break
				}
			}
			if(a) {
				var u = e.getAxis(i),
					h = p(a.stops, function(t) {
						return {
							coord: u.toGlobalCoord(u.dataToCoord(t.value)),
							color: t.color
						}
					}),
					c = h.length,
					d = a.outerColors.slice();
				c && h[0].coord > h[c - 1].coord && (h.reverse(), d.reverse());
				var g = 10,
					m = h[0].coord - g,
					v = h[c - 1].coord + g,
					y = v - m;
				if(.001 > y) return "transparent";
				f(h, function(t) {
					t.offset = (t.coord - m) / y
				}), h.push({
					offset: c ? h[c - 1].offset : .5,
					color: d[1] || "transparent"
				}), h.unshift({
					offset: c ? h[0].offset : .5,
					color: d[0] || "transparent"
				});
				var x = new BI(0, 0, 0, 0, h, !0);
				return x[i] = m, x[i + "2"] = v, x
			}
		}
	}

	function fd(t, e, n) {
		var i = t.get("showAllSymbol"),
			a = "auto" === i;
		if(!i || a) {
			var o = n.getAxesByScale("ordinal")[0];
			if(o && (!a || !pd(o, e))) {
				var r = e.mapDimension(o.dim),
					s = {};
				return f(o.getViewLabels(), function(t) {
						s[t.tickValue] = 1
					}),
					function(t) {
						return !s.hasOwnProperty(e.get(r, t))
					}
			}
		}
	}

	function pd(t, e) {
		var n = t.getExtent(),
			i = Math.abs(n[1] - n[0]) / t.scale.count();
		isNaN(i) && (i = 0);
		for(var a = e.count(), o = Math.max(1, Math.round(a / 5)), r = 0; a > r; r += o)
			if(1.5 * Bc.getSymbolSize(e, r)[t.isHorizontal() ? 1 : 0] > i) return !1;
		return !0
	}

	function gd(t, e, n, i) {
		var a = e.getData(),
			o = this.dataIndex,
			r = a.getName(o),
			s = e.get("selectedOffset");
		i.dispatchAction({
			type: "pieToggleSelect",
			from: t,
			name: r,
			seriesId: e.id
		}), a.each(function(t) {
			md(a.getItemGraphicEl(t), a.getItemLayout(t), e.isSelected(a.getName(t)), s, n)
		})
	}

	function md(t, e, n, i, a) {
		var o = (e.startAngle + e.endAngle) / 2,
			r = Math.cos(o),
			s = Math.sin(o),
			l = n ? i : 0,
			u = [r * l, s * l];
		a ? t.animate().when(200, {
			position: u
		}).start("bounceOut") : t.attr("position", u)
	}

	function vd(t, e) {
		function n() {
			o.ignore = o.hoverIgnore, r.ignore = r.hoverIgnore
		}

		function i() {
			o.ignore = o.normalIgnore, r.ignore = r.normalIgnore
		}
		rS.call(this);
		var a = new bI({
				z2: 2
			}),
			o = new AI,
			r = new yI;
		this.add(a), this.add(o), this.add(r), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
	}

	function yd(t, e, n, i, a, o, r) {
		function s(e, n, i) {
			for(var a = e; n > a; a++)
				if(t[a].y += i, a > e && n > a + 1 && t[a + 1].y > t[a].y + t[a].height) return void l(a, i / 2);
			l(n - 1, i / 2)
		}

		function l(e, n) {
			for(var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--);
		}

		function u(t, e, n, i, a, o) {
			for(var r = o > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++) {
				var u = Math.abs(t[s].y - i),
					h = t[s].len,
					c = t[s].len2,
					d = a + h > u ? Math.sqrt((a + h + c) * (a + h + c) - u * u) : Math.abs(t[s].x - n);
				e && d >= r && (d = r - 10), !e && r >= d && (d = r + 10), t[s].x = n + d * o, r = d
			}
		}
		t.sort(function(t, e) {
			return t.y - e.y
		});
		for(var h, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++) h = t[g].y - c, 0 > h && s(g, d, -h, a), c = t[g].y + t[g].height;
		0 > r - c && l(d - 1, c - r);
		for(var g = 0; d > g; g++) t[g].y >= n ? p.push(t[g]) : f.push(t[g]);
		u(f, !1, e, n, i, a), u(p, !0, e, n, i, a)
	}

	function xd(t, e, n, i, a, o) {
		for(var r = [], s = [], l = 0; l < t.length; l++) _d(t[l]) || (t[l].x < e ? r.push(t[l]) : s.push(t[l]));
		yd(s, e, n, i, 1, a, o), yd(r, e, n, i, -1, a, o);
		for(var l = 0; l < t.length; l++)
			if(!_d(t[l])) {
				var u = t[l].linePoints;
				if(u) {
					var h = u[1][0] - u[2][0];
					u[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3, u[1][1] = u[2][1] = t[l].y, u[1][0] = u[2][0] + h
				}
			}
	}

	function _d(t) {
		return "center" === t.position
	}

	function wd() {
		this.group = new rS
	}

	function bd(t) {
		return _(t) || (t = [+t, +t]), t
	}

	function Sd(t, e) {
		t.eachChild(function(t) {
			t.attr({
				z: e.z,
				zlevel: e.zlevel,
				style: {
					stroke: "stroke" === e.brushType ? e.color : null,
					fill: "fill" === e.brushType ? e.color : null
				}
			})
		})
	}

	function Md(t, e) {
		rS.call(this);
		var n = new Bc(t, e),
			i = new rS;
		this.add(n), this.add(i), i.beforeUpdate = function() {
			this.attr(n.getScale())
		}, this.updateData(t, e)
	}

	function Id(t, e, n) {
		var i = t.ends;
		return new ek({
			shape: {
				points: n ? Ad(i, t) : i
			},
			z2: 100
		})
	}

	function Td(t, e, n, i) {
		var a = e.getItemModel(n),
			o = a.getModel(JL),
			r = e.getItemVisual(n, "color"),
			s = e.getItemVisual(n, "borderColor") || r,
			l = o.getItemStyle(tk);
		t.useStyle(l), t.style.strokeNoScale = !0, t.style.fill = r, t.style.stroke = s, t.__simpleBox = i;
		var u = a.getModel(QL).getItemStyle();
		So(t, u)
	}

	function Ad(t, e) {
		return p(t, function(t) {
			return t = t.slice(), t[1] = e.initBaseline, t
		})
	}

	function Dd(t, e, n) {
		var i = t.getData(),
			a = i.getLayout("largePoints"),
			o = new nk({
				shape: {
					points: a
				},
				__sign: 1
			});
		e.add(o);
		var r = new nk({
			shape: {
				points: a
			},
			__sign: -1
		});
		e.add(r), Cd(1, o, t, i), Cd(-1, r, t, i), n && (o.incremental = !0, r.incremental = !0)
	}

	function Cd(t, e, n, i) {
		var a = t > 0 ? "P" : "N",
			o = i.getVisual("borderColor" + a) || i.getVisual("color" + a),
			r = n.getModel(JL).getItemStyle(tk);
		e.useStyle(r), e.style.fill = null, e.style.stroke = o
	}

	function Ld(t, e, n, i, a) {
		var o;
		return o = n > i ? -1 : i > n ? 1 : e > 0 ? t.get(a, e - 1) <= i ? 1 : -1 : 1
	}

	function kd(t, e) {
		var n, i = t.getBaseAxis(),
			a = "category" === i.type ? i.getBandWidth() : (n = i.getExtent(), Math.abs(n[1] - n[0]) / e.count()),
			o = Qo(C(t.get("barMaxWidth"), a), a),
			r = Qo(C(t.get("barMinWidth"), 1), a),
			s = t.get("barWidth");
		return null != s ? Qo(s, a) : Math.max(Math.min(a / 2, o), r)
	}

	function Pd(t, e, n) {
		NC.call(this, t, e, n), this.type = "value", this.angle = 0, this.name = "", this.model
	}

	function Od(t, e, n) {
		this._model = t, this.dimensions = [], this._indicatorAxes = p(t.getIndicatorModels(), function(t, e) {
			var n = "indicator_" + e,
				i = new Pd(n, new qD);
			return i.name = t.get("name"), i.model = t, t.axis = i, this.dimensions.push(n), i
		}, this), this.resize(t, n), this.cx, this.cy, this.r, this.r0, this.startAngle
	}

	function Nd(t, e) {
		return s({
			show: e
		}, t)
	}

	function Ed(t) {
		return _(t) || (t = [+t, +t]), t
	}

	function zd() {
		var t = sb();
		this.canvas = t, this.blurSize = 30, this.pointSize = 20, this.maxOpacity = 1, this.minOpacity = 0, this._gradientPixels = {}
	}

	function Rd(t, e, n) {
		var i = t[1] - t[0];
		e = p(e, function(e) {
			return {
				interval: [(e.interval[0] - t[0]) / i, (e.interval[1] - t[0]) / i]
			}
		});
		var a = e.length,
			o = 0;
		return function(t) {
			for(var i = o; a > i; i++) {
				var r = e[i].interval;
				if(r[0] <= t && t <= r[1]) {
					o = i;
					break
				}
			}
			if(i === a)
				for(var i = o - 1; i >= 0; i--) {
					var r = e[i].interval;
					if(r[0] <= t && t <= r[1]) {
						o = i;
						break
					}
				}
			return i >= 0 && a > i && n[i]
		}
	}

	function Bd(t, e) {
		var n = t[1] - t[0];
		return e = [(e[0] - t[0]) / n, (e[1] - t[0]) / n],
			function(t) {
				return t >= e[0] && t <= e[1]
			}
	}

	function Vd(t) {
		var e = t.dimensions;
		return "lng" === e[0] && "lat" === e[1]
	}

	function Gd(t) {
		var e = t.mainData,
			n = t.datas;
		n || (n = {
			main: e
		}, t.datasAttr = {
			main: "data"
		}), t.datas = t.mainData = null, Yd(e, n, t), vk(n, function(n) {
			vk(e.TRANSFERABLE_METHODS, function(e) {
				n.wrapMethod(e, x(Fd, t))
			})
		}), e.wrapMethod("cloneShallow", x(Hd, t)), vk(e.CHANGABLE_METHODS, function(n) {
			e.wrapMethod(n, x(Wd, t))
		}), O(n[e.dataType] === e)
	}

	function Fd(t, e) {
		if(Xd(this)) {
			var n = r({}, this[yk]);
			n[this.dataType] = e, Yd(e, n, t)
		} else Ud(e, this.dataType, this[xk], t);
		return e
	}

	function Wd(t, e) {
		return t.struct && t.struct.update(this), e
	}

	function Hd(t, e) {
		return vk(e[yk], function(n, i) {
			n !== e && Ud(n.cloneShallow(), i, e, t)
		}), e
	}

	function Zd(t) {
		var e = this[xk];
		return null == t || null == e ? e : e[yk][t]
	}

	function Xd(t) {
		return t[xk] === t
	}

	function Yd(t, e, n) {
		t[yk] = {}, vk(e, function(e, i) {
			Ud(e, i, t, n)
		})
	}

	function Ud(t, e, n, i) {
		n[yk][e] = t, t[xk] = n, t.dataType = e, i.struct && (t[i.structAttr] = i.struct, i.struct[i.datasAttr[e]] = t), t.getLinkedData = Zd
	}

	function jd(t, e, n) {
		this.root, this.data, this._nodes = [], this.hostModel = t, this.levelModels = p(e || [], function(e) {
			return new Xo(e, t, t.ecModel)
		}), this.leavesModel = new Xo(n || {}, t, t.ecModel)
	}

	function qd(t, e) {
		var n = e.children;
		t.parentNode !== e && (n.push(t), t.parentNode = e)
	}

	function Kd(t) {
		t.hierNode = {
			defaultAncestor: null,
			ancestor: t,
			prelim: 0,
			modifier: 0,
			change: 0,
			shift: 0,
			i: 0,
			thread: null
		};
		for(var e, n, i = [t]; e = i.pop();)
			if(n = e.children, e.isExpand && n.length)
				for(var a = n.length, o = a - 1; o >= 0; o--) {
					var r = n[o];
					r.hierNode = {
						defaultAncestor: null,
						ancestor: r,
						prelim: 0,
						modifier: 0,
						change: 0,
						shift: 0,
						i: o,
						thread: null
					}, i.push(r)
				}
	}

	function $d(t, e) {
		var n = t.isExpand ? t.children : [],
			i = t.parentNode.children,
			a = t.hierNode.i ? i[t.hierNode.i - 1] : null;
		if(n.length) {
			nf(t);
			var o = (n[0].hierNode.prelim + n[n.length - 1].hierNode.prelim) / 2;
			a ? (t.hierNode.prelim = a.hierNode.prelim + e(t, a), t.hierNode.modifier = t.hierNode.prelim - o) : t.hierNode.prelim = o
		} else a && (t.hierNode.prelim = a.hierNode.prelim + e(t, a));
		t.parentNode.hierNode.defaultAncestor = af(t, a, t.parentNode.hierNode.defaultAncestor || i[0], e)
	}

	function Jd(t) {
		var e = t.hierNode.prelim + t.parentNode.hierNode.modifier;
		t.setLayout({
			x: e
		}, !0), t.hierNode.modifier += t.parentNode.hierNode.modifier
	}

	function Qd(t) {
		return arguments.length ? t : uf
	}

	function tf(t, e) {
		var n = {};
		return t -= Math.PI / 2, n.x = e * Math.cos(t), n.y = e * Math.sin(t), n
	}

	function ef(t, e) {
		return Dr(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		})
	}

	function nf(t) {
		for(var e = t.children, n = e.length, i = 0, a = 0; --n >= 0;) {
			var o = e[n];
			o.hierNode.prelim += i, o.hierNode.modifier += i, a += o.hierNode.change, i += o.hierNode.shift + a
		}
	}

	function af(t, e, n, i) {
		if(e) {
			for(var a = t, o = t, r = o.parentNode.children[0], s = e, l = a.hierNode.modifier, u = o.hierNode.modifier, h = r.hierNode.modifier, c = s.hierNode.modifier; s = of (s), o = rf(o), s && o;) {
				a = of (a), r = rf(r), a.hierNode.ancestor = t;
				var d = s.hierNode.prelim + c - o.hierNode.prelim - u + i(s, o);
				d > 0 && (lf(sf(s, t, n), t, d), u += d, l += d), c += s.hierNode.modifier, u += o.hierNode.modifier, l += a.hierNode.modifier, h += r.hierNode.modifier
			}
			s && ! of (a) && (a.hierNode.thread = s, a.hierNode.modifier += c - l), o && !rf(r) && (r.hierNode.thread = o, r.hierNode.modifier += u - h, n = t)
		}
		return n
	}

	function of (t) {
		var e = t.children;
		return e.length && t.isExpand ? e[e.length - 1] : t.hierNode.thread
	}

	function rf(t) {
		var e = t.children;
		return e.length && t.isExpand ? e[0] : t.hierNode.thread
	}

	function sf(t, e, n) {
		return t.hierNode.ancestor.parentNode === e.parentNode ? t.hierNode.ancestor : n
	}

	function lf(t, e, n) {
		var i = n / (e.hierNode.i - t.hierNode.i);
		e.hierNode.change -= i, e.hierNode.shift += n, e.hierNode.modifier += n, e.hierNode.prelim += n, t.hierNode.change += i
	}

	function uf(t, e) {
		return t.parentNode === e.parentNode ? 1 : 2
	}

	function hf() {
		kb.call(this)
	}

	function cf(t) {
		this.name = t, this.zoomLimit, kb.call(this), this._roamTransformable = new hf, this._rawTransformable = new hf, this._center, this._zoom
	}

	function df(t, e, n, i) {
		var a = n.seriesModel,
			o = a ? a.coordinateSystem : null;
		return o === this ? o[t](i) : null
	}

	function ff(t, e, n) {
		var i = t.target,
			a = i.position;
		a[0] += e, a[1] += n, i.dirty()
	}

	function pf(t, e, n, i) {
		var a = t.target,
			o = t.zoomLimit,
			r = a.position,
			s = a.scale,
			l = t.zoom = t.zoom || 1;
		if(l *= e, o) {
			var u = o.min || 0,
				h = o.max || 1 / 0;
			l = Math.max(Math.min(h, l), u)
		}
		var c = l / t.zoom;
		t.zoom = l, r[0] -= (n - r[0]) * (c - 1), r[1] -= (i - r[1]) * (c - 1), s[0] *= c, s[1] *= c, a.dirty()
	}

	function gf(t, e, n) {
		var i = yf(t);
		i[e] = n
	}

	function mf(t, e, n) {
		var i = yf(t),
			a = i[e];
		a === n && (i[e] = null)
	}

	function vf(t, e) {
		return !!yf(t)[e]
	}

	function yf(t) {
		return t[bk] || (t[bk] = {})
	}

	function xf(t) {
		this.pointerChecker, this._zr = t, this._opt = {};
		var e = y,
			n = e(_f, this),
			a = e(wf, this),
			o = e(bf, this),
			r = e(Sf, this),
			l = e(Mf, this);
		yb.call(this), this.setPointerChecker = function(t) {
			this.pointerChecker = t
		}, this.enable = function(e, u) {
			this.disable(), this._opt = s(i(u) || {}, {
				zoomOnMouseWheel: !0,
				moveOnMouseMove: !0,
				moveOnMouseWheel: !1,
				preventDefaultMouseMove: !0
			}), null == e && (e = !0), (e === !0 || "move" === e || "pan" === e) && (t.on("mousedown", n), t.on("mousemove", a), t.on("mouseup", o)), (e === !0 || "scale" === e || "zoom" === e) && (t.on("mousewheel", r), t.on("pinch", l))
		}, this.disable = function() {
			t.off("mousedown", n), t.off("mousemove", a), t.off("mouseup", o), t.off("mousewheel", r), t.off("pinch", l)
		}, this.dispose = this.disable, this.isDragging = function() {
			return this._dragging
		}, this.isPinching = function() {
			return this._pinching
		}
	}

	function _f(t) {
		if(!(ye(t) || t.target && t.target.draggable)) {
			var e = t.offsetX,
				n = t.offsetY;
			this.pointerChecker && this.pointerChecker(t, e, n) && (this._x = e, this._y = n, this._dragging = !0)
		}
	}

	function wf(t) {
		if(this._dragging && Af("moveOnMouseMove", t, this._opt) && "pinch" !== t.gestureEvent && !vf(this._zr, "globalPan")) {
			var e = t.offsetX,
				n = t.offsetY,
				i = this._x,
				a = this._y,
				o = e - i,
				r = n - a;
			this._x = e, this._y = n, this._opt.preventDefaultMouseMove && wb(t.event), Tf(this, "pan", "moveOnMouseMove", t, {
				dx: o,
				dy: r,
				oldX: i,
				oldY: a,
				newX: e,
				newY: n
			})
		}
	}

	function bf(t) {
		ye(t) || (this._dragging = !1)
	}

	function Sf(t) {
		var e = Af("zoomOnMouseWheel", t, this._opt),
			n = Af("moveOnMouseWheel", t, this._opt),
			i = t.wheelDelta,
			a = Math.abs(i),
			o = t.offsetX,
			r = t.offsetY;
		if(0 !== i && (e || n)) {
			if(e) {
				var s = a > 3 ? 1.4 : a > 1 ? 1.2 : 1.1,
					l = i > 0 ? s : 1 / s;
				If(this, "zoom", "zoomOnMouseWheel", t, {
					scale: l,
					originX: o,
					originY: r
				})
			}
			if(n) {
				var u = Math.abs(i),
					h = (i > 0 ? 1 : -1) * (u > 3 ? .4 : u > 1 ? .15 : .05);
				If(this, "scrollMove", "moveOnMouseWheel", t, {
					scrollDelta: h,
					originX: o,
					originY: r
				})
			}
		}
	}

	function Mf(t) {
		if(!vf(this._zr, "globalPan")) {
			var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
			If(this, "zoom", null, t, {
				scale: e,
				originX: t.pinchX,
				originY: t.pinchY
			})
		}
	}

	function If(t, e, n, i, a) {
		t.pointerChecker && t.pointerChecker(i, a.originX, a.originY) && (wb(i.event), Tf(t, e, n, i, a))
	}

	function Tf(t, e, n, i, a) {
		a.isAvailableBehavior = y(Af, null, n, i), t.trigger(e, a)
	}

	function Af(t, e, n) {
		var i = n[t];
		return !t || i && (!b(i) || e.event[i + "Key"])
	}

	function Df(t, e, n) {
		var i = e.getComponentByElement(t.topTarget),
			a = i && i.coordinateSystem;
		return i && i !== n && !Sk[i.mainType] && a && a.model !== n
	}

	function Cf(t, e) {
		var n = t.getItemLayout(e);
		return n && !isNaN(n.x) && !isNaN(n.y) && "none" !== t.getItemVisual(e, "symbol")
	}

	function Lf(t, e, n) {
		return n.itemModel = e, n.itemStyle = e.getModel("itemStyle").getItemStyle(), n.hoverItemStyle = e.getModel("emphasis.itemStyle").getItemStyle(), n.lineStyle = e.getModel("lineStyle").getLineStyle(), n.labelModel = e.getModel("label"), n.hoverLabelModel = e.getModel("emphasis.label"), n.symbolInnerColor = t.isExpand === !1 && 0 !== t.children.length ? n.itemStyle.fill : "#fff", n
	}

	function kf(t, e, n, i, a, o) {
		var r = !n,
			l = t.tree.getNodeByDataIndex(e),
			u = l.getModel(),
			o = Lf(l, u, o),
			h = t.tree.root,
			c = l.parentNode === h ? l : l.parentNode || l,
			d = t.getItemGraphicEl(c.dataIndex),
			f = c.getLayout(),
			p = d ? {
				x: d.position[0],
				y: d.position[1],
				rawX: d.__radialOldRawX,
				rawY: d.__radialOldRawY
			} : f,
			g = l.getLayout();
		r ? (n = new Bc(t, e, o), n.attr("position", [p.x, p.y])) : n.updateData(t, e, o), n.__radialOldRawX = n.__radialRawX, n.__radialOldRawY = n.__radialRawY, n.__radialRawX = g.rawX, n.__radialRawY = g.rawY, i.add(n), t.setItemGraphicEl(e, n), zo(n, {
			position: [g.x, g.y]
		}, a);
		var m = n.getSymbolPath();
		if("radial" === o.layout) {
			var v, y, x = h.children[0],
				_ = x.getLayout(),
				w = x.children.length;
			if(g.x === _.x && l.isExpand === !0) {
				var b = {};
				b.x = (x.children[0].getLayout().x + x.children[w - 1].getLayout().x) / 2, b.y = (x.children[0].getLayout().y + x.children[w - 1].getLayout().y) / 2, v = Math.atan2(b.y - _.y, b.x - _.x), 0 > v && (v = 2 * Math.PI + v), y = b.x < _.x, y && (v -= Math.PI)
			} else v = Math.atan2(g.y - _.y, g.x - _.x), 0 > v && (v = 2 * Math.PI + v), 0 === l.children.length || 0 !== l.children.length && l.isExpand === !1 ? (y = g.x < _.x, y && (v -= Math.PI)) : (y = g.x > _.x, y || (v -= Math.PI));
			var S = y ? "left" : "right";
			m.setStyle({
				textPosition: S,
				textRotation: -v,
				textOrigin: "center",
				verticalAlign: "middle"
			})
		}
		if(l.parentNode && l.parentNode !== h) {
			var M = n.__edge;
			M || (M = n.__edge = new NI({
				shape: Of(o, p, p),
				style: s({
					opacity: 0,
					strokeNoScale: !0
				}, o.lineStyle)
			})), zo(M, {
				shape: Of(o, f, g),
				style: {
					opacity: 1
				}
			}, a), i.add(M)
		}
	}

	function Pf(t, e, n, i, a, o) {
		for(var r, s = t.tree.getNodeByDataIndex(e), l = t.tree.root, u = s.getModel(), o = Lf(s, u, o), h = s.parentNode === l ? s : s.parentNode || s; r = h.getLayout(), null == r;) h = h.parentNode === l ? h : h.parentNode || h;
		zo(n, {
			position: [r.x + 1, r.y + 1]
		}, a, function() {
			i.remove(n), t.setItemGraphicEl(e, null)
		}), n.fadeOut(null, {
			keepLabel: !0
		});
		var c = n.__edge;
		c && zo(c, {
			shape: Of(o, r, r),
			style: {
				opacity: 0
			}
		}, a, function() {
			i.remove(c)
		})
	}

	function Of(t, e, n) {
		var i, a, o, r, s, l, u, h, c = t.orient;
		if("radial" === t.layout) {
			s = e.rawX, u = e.rawY, l = n.rawX, h = n.rawY;
			var d = tf(s, u),
				f = tf(s, u + (h - u) * t.curvature),
				p = tf(l, h + (u - h) * t.curvature),
				g = tf(l, h);
			return {
				x1: d.x,
				y1: d.y,
				x2: g.x,
				y2: g.y,
				cpx1: f.x,
				cpy1: f.y,
				cpx2: p.x,
				cpy2: p.y
			}
		}
		return s = e.x, u = e.y, l = n.x, h = n.y, ("LR" === c || "RL" === c) && (i = s + (l - s) * t.curvature, a = u, o = l + (s - l) * t.curvature, r = h), ("TB" === c || "BT" === c) && (i = s, a = u + (h - u) * t.curvature, o = l, r = h + (u - h) * t.curvature), {
			x1: s,
			y1: u,
			x2: l,
			y2: h,
			cpx1: i,
			cpy1: a,
			cpx2: o,
			cpy2: r
		}
	}

	function Nf(t, e, n) {
		var i = t.getZoom(),
			a = t.getCenter(),
			o = e.zoom,
			r = t.dataToPoint(a);
		if(null != e.dx && null != e.dy) {
			r[0] -= e.dx, r[1] -= e.dy;
			var a = t.pointToData(r);
			t.setCenter(a)
		}
		if(null != o) {
			if(n) {
				var s = n.min || 0,
					l = n.max || 1 / 0;
				o = Math.max(Math.min(i * o, l), s) / i
			}
			t.scale[0] *= o, t.scale[1] *= o;
			var u = t.position,
				h = (e.originX - u[0]) * (o - 1),
				c = (e.originY - u[1]) * (o - 1);
			u[0] -= h, u[1] -= c, t.updateTransform();
			var a = t.pointToData(r);
			t.setCenter(a), t.setZoom(o * i)
		}
		return {
			center: t.getCenter(),
			zoom: t.getZoom()
		}
	}

	function Ef(t, e, n) {
		for(var i, a = [t], o = []; i = a.pop();)
			if(o.push(i), i.isExpand) {
				var r = i.children;
				if(r.length)
					for(var s = 0; s < r.length; s++) a.push(r[s])
			}
		for(; i = o.pop();) e(i, n)
	}

	function zf(t, e) {
		for(var n, i = [t]; n = i.pop();)
			if(e(n), n.isExpand) {
				var a = n.children;
				if(a.length)
					for(var o = a.length - 1; o >= 0; o--) i.push(a[o])
			}
	}

	function Rf(t, e) {
		var n = ef(t, e);
		t.layoutInfo = n;
		var i = t.get("layout"),
			a = 0,
			o = 0,
			r = null;
		"radial" === i ? (a = 2 * Math.PI, o = Math.min(n.height, n.width) / 2, r = Qd(function(t, e) {
			return(t.parentNode === e.parentNode ? 1 : 2) / t.depth
		})) : (a = n.width, o = n.height, r = Qd());
		var s = t.getData().tree.root,
			l = s.children[0];
		if(l) {
			Kd(s), Ef(l, $d, r), s.hierNode.modifier = -l.hierNode.prelim, zf(l, Jd);
			var u = l,
				h = l,
				c = l;
			zf(l, function(t) {
				var e = t.getLayout().x;
				e < u.getLayout().x && (u = t), e > h.getLayout().x && (h = t), t.depth > c.depth && (c = t)
			});
			var d = u === h ? 1 : r(u, h) / 2,
				f = d - u.getLayout().x,
				p = 0,
				g = 0,
				m = 0,
				v = 0;
			if("radial" === i) p = a / (h.getLayout().x + d + f), g = o / (c.depth - 1 || 1), zf(l, function(t) {
				m = (t.getLayout().x + f) * p, v = (t.depth - 1) * g;
				var e = tf(m, v);
				t.setLayout({
					x: e.x,
					y: e.y,
					rawX: m,
					rawY: v
				}, !0)
			});
			else {
				var y = t.getOrient();
				"RL" === y || "LR" === y ? (g = o / (h.getLayout().x + d + f), p = a / (c.depth - 1 || 1), zf(l, function(t) {
					v = (t.getLayout().x + f) * g, m = "LR" === y ? (t.depth - 1) * p : a - (t.depth - 1) * p, t.setLayout({
						x: m,
						y: v
					}, !0)
				})) : ("TB" === y || "BT" === y) && (p = a / (h.getLayout().x + d + f), g = o / (c.depth - 1 || 1), zf(l, function(t) {
					m = (t.getLayout().x + f) * p, v = "TB" === y ? (t.depth - 1) * g : o - (t.depth - 1) * g, t.setLayout({
						x: m,
						y: v
					}, !0)
				}))
			}
		}
	}

	function Bf(t, e, n) {
		if(t && u(e, t.type) >= 0) {
			var i = n.getData().tree.root,
				a = t.targetNode;
			if("string" == typeof a && (a = i.getNodeById(a)), a && i.contains(a)) return {
				node: a
			};
			var o = t.targetNodeId;
			if(null != o && (a = i.getNodeById(o))) return {
				node: a
			}
		}
	}

	function Vf(t) {
		for(var e = []; t;) t = t.parentNode, t && e.push(t);
		return e.reverse()
	}

	function Gf(t, e) {
		var n = Vf(t);
		return u(n, e) >= 0
	}

	function Ff(t, e) {
		for(var n = []; t;) {
			var i = t.dataIndex;
			n.push({
				name: t.name,
				dataIndex: i,
				value: e.getRawValue(i)
			}), t = t.parentNode
		}
		return n.reverse(), n
	}

	function Wf(t) {
		var e = 0;
		f(t.children, function(t) {
			Wf(t);
			var n = t.value;
			_(n) && (n = n[0]), e += n
		});
		var n = t.value;
		_(n) && (n = n[0]), (null == n || isNaN(n)) && (n = e), 0 > n && (n = 0), _(t.value) ? t.value[0] = n : t.value = n
	}

	function Hf(t, e) {
		var n = e.get("color");
		if(n) {
			t = t || [];
			var i;
			if(f(t, function(t) {
					var e = new Xo(t),
						n = e.get("color");
					(e.get("itemStyle.color") || n && "none" !== n) && (i = !0)
				}), !i) {
				var a = t[0] || (t[0] = {});
				a.color = n.slice()
			}
			return t
		}
	}

	function Zf(t) {
		this.group = new rS, t.add(this.group)
	}

	function Xf(t, e, n, i, a, o) {
		var r = [
			[a ? t : t - Ak, e],
			[t + n, e],
			[t + n, e + i],
			[a ? t : t - Ak, e + i]
		];
		return !o && r.splice(2, 0, [t + n + Ak, e + i / 2]), !a && r.push([t, e + i / 2]), r
	}

	function Yf(t, e, n) {
		t.eventData = {
			componentType: "series",
			componentSubType: "treemap",
			componentIndex: e.componentIndex,
			seriesIndex: e.componentIndex,
			seriesName: e.name,
			seriesType: "treemap",
			selfType: "breadcrumb",
			nodeData: {
				dataIndex: n && n.dataIndex,
				name: n && n.name
			},
			treePathInfo: n && Ff(n, e)
		}
	}

	function Uf() {
		var t, e = [],
			n = {};
		return {
			add: function(t, i, a, o, r) {
				return b(o) && (r = o, o = 0), n[t.id] ? !1 : (n[t.id] = 1, e.push({
					el: t,
					target: i,
					time: a,
					delay: o,
					easing: r
				}), !0)
			},
			done: function(e) {
				return t = e, this
			},
			start: function() {
				function i() {
					a--, a || (e.length = 0, n = {}, t && t())
				}
				for(var a = e.length, o = 0, r = e.length; r > o; o++) {
					var s = e[o];
					s.el.animateTo(s.target, s.time, s.delay, s.easing, i)
				}
				return this
			}
		}
	}

	function jf() {
		return {
			nodeGroup: [],
			background: [],
			content: []
		}
	}

	function qf(t, e, n, a, o, s, l, u, h, c) {
		function d(e, n, i) {
			n.dataIndex = l.dataIndex, n.seriesIndex = t.seriesIndex, n.setShape({
				x: 0,
				y: 0,
				width: _,
				height: w
			});
			var a = l.getVisual("borderColor", !0),
				o = k.get("borderColor");
			p(n, function() {
				var t = Fk(L);
				t.fill = a;
				var e = Gk(k);
				if(e.fill = o, i) {
					var r = _ - 2 * b;
					g(t, e, a, r, A, {
						x: b,
						y: 0,
						width: r,
						height: A
					})
				} else t.text = e.text = null;
				n.setStyle(t), So(n, e)
			}), e.add(n)
		}

		function f(e, n) {
			n.dataIndex = l.dataIndex, n.seriesIndex = t.seriesIndex;
			var i = Math.max(_ - 2 * b, 0),
				a = Math.max(w - 2 * b, 0);
			n.culling = !0, n.setShape({
				x: b,
				y: b,
				width: i,
				height: a
			});
			var o = l.getVisual("color", !0);
			p(n, function() {
				var t = Fk(L);
				t.fill = o;
				var e = Gk(k);
				g(t, e, o, i, a), n.setStyle(t), So(n, e)
			}), e.add(n)
		}

		function p(t, e) {
			S ? !t.invisible && s.push(t) : (e(), t.__tmWillVisible || (t.invisible = !1))
		}

		function g(e, n, a, o, r, s) {
			var u = l.getModel(),
				h = D(t.getFormattedLabel(l.dataIndex, "normal", null, null, s ? "upperLabel" : "label"), u.get("name"));
			if(!s && x.isLeafRoot) {
				var c = t.get("drillDownIcon", !0);
				h = c ? c + " " + h : h
			}
			var d = u.getModel(s ? Ek : Ok),
				f = u.getModel(s ? zk : Nk),
				p = d.getShallow("show");
			Io(e, n, d, f, {
				defaultText: p ? h : null,
				autoColor: a,
				isRectText: !0
			}), s && (e.textRect = i(s)), e.truncate = p && d.get("ellipsis") ? {
				outerWidth: o,
				outerHeight: r,
				minChar: 2
			} : null
		}

		function m(t, i, a, r) {
			var s = null != I && n[t][I],
				l = o[t];
			return s ? (n[t][I] = null, v(l, s, t)) : S || (s = new i({
				z: Kf(a, r)
			}), s.__tmDepth = a, s.__tmStorageName = t, y(l, s, t)), e[t][M] = s
		}

		function v(t, e, n) {
			var i = t[M] = {};
			i.old = "nodeGroup" === n ? e.position.slice() : r({}, e.shape)
		}

		function y(t, e, n) {
			var i = t[M] = {},
				r = l.parentNode;
			if(r && (!a || "drillDown" === a.direction)) {
				var s = 0,
					u = 0,
					h = o.background[r.getRawIndex()];
				!a && h && h.old && (s = h.old.width, u = h.old.height), i.old = "nodeGroup" === n ? [0, u] : {
					x: s,
					y: u,
					width: 0,
					height: 0
				}
			}
			i.fadein = "nodeGroup" !== n
		}
		if(l) {
			var x = l.getLayout();
			if(x && x.isInView) {
				var _ = x.width,
					w = x.height,
					b = x.borderWidth,
					S = x.invisible,
					M = l.getRawIndex(),
					I = u && u.getRawIndex(),
					T = l.viewChildren,
					A = x.upperHeight,
					C = T && T.length,
					L = l.getModel("itemStyle"),
					k = l.getModel("emphasis.itemStyle"),
					P = m("nodeGroup", Ck);
				if(P) {
					if(h.add(P), P.attr("position", [x.x || 0, x.y || 0]), P.__tmNodeWidth = _, P.__tmNodeHeight = w, x.isAboveViewRoot) return P;
					var O = m("background", Lk, c, Bk);
					if(O && d(P, O, C && x.upperHeight), !C) {
						var N = m("content", Lk, c, Vk);
						N && f(P, N)
					}
					return P
				}
			}
		}
	}

	function Kf(t, e) {
		var n = t * Rk + e;
		return(n - 1) / n
	}

	function $f(t) {
		var e = t.pieceList;
		t.hasSpecialVisual = !1, f(e, function(e, n) {
			e.originIndex = n, null != e.visual && (t.hasSpecialVisual = !0)
		})
	}

	function Jf(t) {
		var e = t.categories,
			n = t.visual,
			i = t.categoryMap = {};
		if(Xk(e, function(t, e) {
				i[t] = e
			}), !_(n)) {
			var a = [];
			S(n) ? Xk(n, function(t, e) {
				var n = i[e];
				a[null != n ? n : Uk] = t
			}) : a[Uk] = n, n = sp(t, a)
		}
		for(var o = e.length - 1; o >= 0; o--) null == n[o] && (delete i[e[o]], e.pop())
	}

	function Qf(t, e) {
		var n = t.visual,
			i = [];
		S(n) ? Xk(n, function(t) {
			i.push(t)
		}) : null != n && i.push(n);
		var a = {
			color: 1,
			symbol: 1
		};
		e || 1 !== i.length || a.hasOwnProperty(t.type) || (i[1] = i[0]), sp(t, i)
	}

	function tp(t) {
		return {
			applyVisual: function(e, n, i) {
				e = this.mapValueToVisual(e), i("color", t(n("color"), e))
			},
			_doMap: op([0, 1])
		}
	}

	function ep(t) {
		var e = this.option.visual;
		return e[Math.round(Jo(t, [0, 1], [0, e.length - 1], !0))] || {}
	}

	function np(t) {
		return function(e, n, i) {
			i(t, this.mapValueToVisual(e))
		}
	}

	function ip(t) {
		var e = this.option.visual;
		return e[this.option.loop && t !== Uk ? t % e.length : t]
	}

	function ap() {
		return this.option.visual[0]
	}

	function op(t) {
		return {
			linear: function(e) {
				return Jo(e, t, this.option.visual, !0)
			},
			category: ip,
			piecewise: function(e, n) {
				var i = rp.call(this, n);
				return null == i && (i = Jo(e, t, this.option.visual, !0)), i
			},
			fixed: ap
		}
	}

	function rp(t) {
		var e = this.option,
			n = e.pieceList;
		if(e.hasSpecialVisual) {
			var i = jk.findPieceIndex(t, n),
				a = n[i];
			if(a && a.visual) return a.visual[this.type]
		}
	}

	function sp(t, e) {
		return t.visual = e, "color" === t.type && (t.parsedVisual = p(e, function(t) {
			return Ye(t)
		})), e
	}

	function lp(t, e, n) {
		return t ? n >= e : n > e
	}

	function up(t, e, n, i, a, o) {
		var r = t.getModel(),
			s = t.getLayout();
		if(s && !s.invisible && s.isInView) {
			var l, u = t.getModel(Jk),
				h = n[t.depth],
				c = hp(u, e, h, i),
				d = u.get("borderColor"),
				p = u.get("borderColorSaturation");
			null != p && (l = cp(c, t), d = dp(p, l)), t.setVisual("borderColor", d);
			var g = t.viewChildren;
			if(g && g.length) {
				var m = pp(t, r, s, u, c, g);
				f(g, function(t, e) {
					if(t.depth >= a.length || t === a[t.depth]) {
						var s = mp(r, c, t, e, m, o);
						up(t, s, n, i, a, o)
					}
				})
			} else l = cp(c, t), t.setVisual("color", l)
		}
	}

	function hp(t, e, n, i) {
		var a = r({}, e);
		return f(["color", "colorAlpha", "colorSaturation"], function(o) {
			var r = t.get(o, !0);
			null == r && n && (r = n[o]), null == r && (r = e[o]), null == r && (r = i.get(o)), null != r && (a[o] = r)
		}), a
	}

	function cp(t) {
		var e = fp(t, "color");
		if(e) {
			var n = fp(t, "colorAlpha"),
				i = fp(t, "colorSaturation");
			return i && (e = Qe(e, null, null, i)), n && (e = tn(e, n)), e
		}
	}

	function dp(t, e) {
		return null != e ? Qe(e, null, null, t) : null
	}

	function fp(t, e) {
		var n = t[e];
		return null != n && "none" !== n ? n : void 0
	}

	function pp(t, e, n, i, a, o) {
		if(o && o.length) {
			var r = gp(e, "color") || null != a.color && "none" !== a.color && (gp(e, "colorAlpha") || gp(e, "colorSaturation"));
			if(r) {
				var s = e.get("visualMin"),
					l = e.get("visualMax"),
					u = n.dataExtent.slice();
				null != s && s < u[0] && (u[0] = s), null != l && l > u[1] && (u[1] = l);
				var h = e.get("colorMappingBy"),
					c = {
						type: r.name,
						dataExtent: u,
						visual: r.range
					};
				"color" !== c.type || "index" !== h && "id" !== h ? c.mappingMethod = "linear" : (c.mappingMethod = "category", c.loop = !0);
				var d = new jk(c);
				return d.__drColorMappingBy = h, d
			}
		}
	}

	function gp(t, e) {
		var n = t.get(e);
		return $k(n) && n.length ? {
			name: e,
			range: n
		} : null
	}

	function mp(t, e, n, i, a, o) {
		var s = r({}, e);
		if(a) {
			var l = a.type,
				u = "color" === l && a.__drColorMappingBy,
				h = "index" === u ? i : "id" === u ? o.mapIdToIndex(n.getId()) : n.getValue(t.get("visualDimension"));
			s[l] = a.mapValueToVisual(h)
		}
		return s
	}

	function vp(t, e, n, i) {
		var a, o;
		if(!t.isRemoved()) {
			var r = t.getLayout();
			a = r.width, o = r.height;
			var s = t.getModel(),
				l = s.get(aP),
				u = s.get(oP) / 2,
				h = Ap(s),
				c = Math.max(l, h),
				d = l - u,
				f = c - u,
				s = t.getModel();
			t.setLayout({
				borderWidth: l,
				upperHeight: c,
				upperLabelHeight: h
			}, !0), a = tP(a - 2 * d, 0), o = tP(o - d - f, 0);
			var p = a * o,
				g = yp(t, s, p, e, n, i);
			if(g.length) {
				var m = {
						x: d,
						y: f,
						width: a,
						height: o
					},
					v = eP(a, o),
					y = 1 / 0,
					x = [];
				x.area = 0;
				for(var _ = 0, w = g.length; w > _;) {
					var b = g[_];
					x.push(b), x.area += b.getLayout().area;
					var S = bp(x, v, e.squareRatio);
					y >= S ? (_++, y = S) : (x.area -= x.pop().getLayout().area, Sp(x, v, m, u, !1), v = eP(m.width, m.height), x.length = x.area = 0, y = 1 / 0)
				}
				if(x.length && Sp(x, v, m, u, !0), !n) {
					var M = s.get("childrenVisibleMin");
					null != M && M > p && (n = !0)
				}
				for(var _ = 0, w = g.length; w > _; _++) vp(g[_], e, n, i + 1)
			}
		}
	}

	function yp(t, e, n, i, a, o) {
		var r = t.children || [],
			s = i.sort;
		"asc" !== s && "desc" !== s && (s = null);
		var l = null != i.leafDepth && i.leafDepth <= o;
		if(a && !l) return t.viewChildren = [];
		r = m(r, function(t) {
			return !t.isRemoved()
		}), _p(r, s);
		var u = wp(e, r, s);
		if(0 === u.sum) return t.viewChildren = [];
		if(u.sum = xp(e, n, u.sum, s, r), 0 === u.sum) return t.viewChildren = [];
		for(var h = 0, c = r.length; c > h; h++) {
			var d = r[h].getValue() / u.sum * n;
			r[h].setLayout({
				area: d
			})
		}
		return l && (r.length && t.setLayout({
			isLeafRoot: !0
		}, !0), r.length = 0), t.viewChildren = r, t.setLayout({
			dataExtent: u.dataExtent
		}, !0), r
	}

	function xp(t, e, n, i, a) {
		if(!i) return n;
		for(var o = t.get("visibleMin"), r = a.length, s = r, l = r - 1; l >= 0; l--) {
			var u = a["asc" === i ? r - l - 1 : l].getValue();
			o > u / n * e && (s = l, n -= u)
		}
		return "asc" === i ? a.splice(0, r - s) : a.splice(s, r - s), n
	}

	function _p(t, e) {
		return e && t.sort(function(t, n) {
			var i = "asc" === e ? t.getValue() - n.getValue() : n.getValue() - t.getValue();
			return 0 === i ? "asc" === e ? t.dataIndex - n.dataIndex : n.dataIndex - t.dataIndex : i
		}), t
	}

	function wp(t, e, n) {
		for(var i = 0, a = 0, o = e.length; o > a; a++) i += e[a].getValue();
		var r, s = t.get("visualDimension");
		if(e && e.length)
			if("value" === s && n) r = [e[e.length - 1].getValue(), e[0].getValue()], "asc" === n && r.reverse();
			else {
				var r = [1 / 0, -1 / 0];
				iP(e, function(t) {
					var e = t.getValue(s);
					e < r[0] && (r[0] = e), e > r[1] && (r[1] = e)
				})
			}
		else r = [0 / 0, 0 / 0];
		return {
			sum: i,
			dataExtent: r
		}
	}

	function bp(t, e, n) {
		for(var i, a = 0, o = 1 / 0, r = 0, s = t.length; s > r; r++) i = t[r].getLayout().area, i && (o > i && (o = i), i > a && (a = i));
		var l = t.area * t.area,
			u = e * e * n;
		return l ? tP(u * a / l, l / (u * o)) : 1 / 0
	}

	function Sp(t, e, n, i, a) {
		var o = e === n.width ? 0 : 1,
			r = 1 - o,
			s = ["x", "y"],
			l = ["width", "height"],
			u = n[s[o]],
			h = e ? t.area / e : 0;
		(a || h > n[l[r]]) && (h = n[l[r]]);
		for(var c = 0, d = t.length; d > c; c++) {
			var f = t[c],
				p = {},
				g = h ? f.getLayout().area / h : 0,
				m = p[l[r]] = tP(h - 2 * i, 0),
				v = n[s[o]] + n[l[o]] - u,
				y = c === d - 1 || g > v ? v : g,
				x = p[l[o]] = tP(y - 2 * i, 0);
			p[s[r]] = n[s[r]] + eP(i, m / 2), p[s[o]] = u + eP(i, x / 2), u += y, f.setLayout(p, !0)
		}
		n[s[r]] += h, n[l[r]] -= h
	}

	function Mp(t, e, n, i, a) {
		var o = (e || {}).node,
			r = [i, a];
		if(!o || o === n) return r;
		for(var s, l = i * a, u = l * t.option.zoomToNodeRatio; s = o.parentNode;) {
			for(var h = 0, c = s.children, d = 0, f = c.length; f > d; d++) h += c[d].getValue();
			var p = o.getValue();
			if(0 === p) return r;
			u *= h / p;
			var g = s.getModel(),
				m = g.get(aP),
				v = Math.max(m, Ap(g, m));
			u += 4 * m * m + (3 * m + v) * Math.pow(u, .5), u > aT && (u = aT), o = s
		}
		l > u && (u = l);
		var y = Math.pow(u / l, .5);
		return [i * y, a * y]
	}

	function Ip(t, e, n) {
		if(e) return {
			x: e.x,
			y: e.y
		};
		var i = {
			x: 0,
			y: 0
		};
		if(!n) return i;
		var a = n.node,
			o = a.getLayout();
		if(!o) return i;
		for(var r = [o.width / 2, o.height / 2], s = a; s;) {
			var l = s.getLayout();
			r[0] += l.x, r[1] += l.y, s = s.parentNode
		}
		return {
			x: t.width / 2 - r[0],
			y: t.height / 2 - r[1]
		}
	}

	function Tp(t, e, n, i, a) {
		var o = t.getLayout(),
			r = n[a],
			s = r && r === t;
		if(!(r && !s || a === n.length && t !== i)) {
			t.setLayout({
				isInView: !0,
				invisible: !s && !e.intersect(o),
				isAboveViewRoot: s
			}, !0);
			var l = new xn(e.x - o.x, e.y - o.y, e.width, e.height);
			iP(t.viewChildren || [], function(t) {
				Tp(t, l, n, i, a + 1)
			})
		}
	}

	function Ap(t) {
		return t.get(rP) ? t.get(sP) : 0
	}

	function Dp(t) {
		var e = 0;
		f(t.children, function(t) {
			Dp(t);
			var n = t.value;
			_(n) && (n = n[0]), e += n
		});
		var n = t.value;
		_(n) && (n = n[0]), (null == n || isNaN(n)) && (n = e), 0 > n && (n = 0), _(t.value) ? t.value[0] = n : t.value = n
	}

	function Cp(t, e, n) {
		function i() {
			r.ignore = r.hoverIgnore
		}

		function a() {
			r.ignore = r.normalIgnore
		}
		rS.call(this);
		var o = new bI({
			z2: hP
		});
		o.seriesIndex = e.seriesIndex;
		var r = new yI({
			z2: cP,
			silent: t.getModel("label").get("silent")
		});
		this.add(o), this.add(r), this.updateData(!0, t, "normal", e, n), this.on("emphasis", i).on("normal", a).on("mouseover", i).on("mouseout", a)
	}

	function Lp(t, e, n) {
		var i = t.getVisual("color"),
			a = t.getVisual("visualMeta");
		a && 0 !== a.length || (i = null);
		var o = t.getModel("itemStyle").get("color");
		if(o) return o;
		if(i) return i;
		if(0 === t.depth) return n.option.color[0];
		var r = n.option.color.length;
		return o = n.option.color[kp(t) % r]
	}

	function kp(t) {
		for(var e = t; e.depth > 1;) e = e.parentNode;
		var n = t.getAncestors()[0];
		return u(n.children, e)
	}

	function Pp(t, e, n) {
		return n === uP.NONE ? !1 : n === uP.SELF ? t === e : n === uP.ANCESTOR ? t === e || t.isAncestorOf(e) : t === e || t.isDescendantOf(e)
	}

	function Op(t, e, n) {
		var i = e.getData();
		i.setItemVisual(t.dataIndex, "color", n)
	}

	function Np(t, e) {
		var n = t.children || [];
		t.children = Ep(n, e), n.length && f(t.children, function(t) {
			Np(t, e)
		})
	}

	function Ep(t, e) {
		if("function" == typeof e) return t.sort(e);
		var n = "asc" === e;
		return t.sort(function(t, e) {
			var i = (t.getValue() - e.getValue()) * (n ? 1 : -1);
			return 0 === i ? (t.dataIndex - e.dataIndex) * (n ? -1 : 1) : i
		})
	}

	function zp(t) {
		for(var e, n = 0; n < t.length; n++) {
			var i = t[n].getBoundingRect();
			e = e || i.clone(), e.union(i)
		}
		return e
	}

	function Rp(t, e) {
		var n, i, a = t.svgXML;
		try {
			n = a && Ml(a, {
				ignoreViewBox: !0,
				ignoreRootClip: !0
			}) || {}, i = n.root, O(null != i)
		} catch(o) {
			throw new Error("Invalid svg format\n" + o.message)
		}
		var r = n.width,
			s = n.height,
			l = n.viewBoxRect;
		if(e || (e = null == r || null == s ? i.getBoundingRect() : new xn(0, 0, 0, 0), null != r && (e.width = r), null != s && (e.height = s)), l) {
			var u = Sl(l, e.width, e.height),
				h = i;
			i = new rS, i.add(h), h.scale = u.scale, h.position = u.position
		}
		return i.setClipPath(new LI({
			shape: e.plain()
		})), {
			root: i,
			boundingRect: e
		}
	}

	function Bp(t) {
		return function(e, n) {
			var i = Vp(e),
				a = [];
			return f(i, function(i) {
				var o = NP[i.type][t];
				o && a.push(o(e, i, n))
			}), a
		}
	}

	function Vp(t) {
		var e = ZA.retrieveMap(t) || [];
		return e
	}

	function Gp(t) {
		var e = t.getItemStyle(),
			n = t.get("areaColor");
		return null != n && (e.fill = n), e
	}

	function Fp(t, e, n, i, a) {
		n.off("click"), n.off("mousedown"), e.get("selectedMode") && (n.on("mousedown", function() {
			t._mouseDownFlag = !0
		}), n.on("click", function(o) {
			if(t._mouseDownFlag) {
				t._mouseDownFlag = !1;
				for(var r = o.target; !r.__regions;) r = r.parent;
				if(r) {
					var s = {
						type: ("geo" === e.mainType ? "geo" : "map") + "ToggleSelect",
						batch: p(r.__regions, function(t) {
							return {
								name: t.name,
								from: a.uid
							}
						})
					};
					s[e.mainType + "Id"] = e.id, i.dispatchAction(s), Wp(e, n)
				}
			}
		}))
	}

	function Wp(t, e) {
		e.eachChild(function(e) {
			f(e.__regions, function(n) {
				e.trigger(t.isSelected(n.name) ? "emphasis" : "normal")
			})
		})
	}

	function Hp(t, e) {
		var n = new rS;
		this.uid = jo("ec_map_draw"), this._controller = new xf(t.getZr()), this._controllerHost = {
			target: e ? n : null
		}, this.group = n, this._updateGroup = e, this._mouseDownFlag, this._mapName, this._initialized, n.add(this._regionsGroup = new rS), n.add(this._backgroundGroup = new rS)
	}

	function Zp(t) {
		var e = this[RP];
		e && e.recordVersion === this[BP] && Xp(e, t)
	}

	function Xp(t, e) {
		var n = t.circle,
			i = t.labelModel,
			a = t.hoverLabelModel,
			o = t.emphasisText,
			r = t.normalText;
		e ? (n.style.extendFrom(To({}, a, {
			text: a.get("show") ? o : null
		}, {
			isRectText: !0,
			useInsideStyle: !1
		}, !0)), n.__mapOriginalZ2 = n.z2, n.z2 += XI) : (To(n.style, i, {
			text: i.get("show") ? r : null,
			textPosition: i.getShallow("position") || "bottom"
		}, {
			isRectText: !0,
			useInsideStyle: !1
		}), n.dirty(!1), null != n.__mapOriginalZ2 && (n.z2 = n.__mapOriginalZ2, n.__mapOriginalZ2 = null))
	}

	function Yp(t, e, n, i) {
		cf.call(this, t), this.map = e;
		var a = EP.load(e, n);
		this._nameCoordMap = a.nameCoordMap, this._regionsMap = a.regionsMap, this._invertLongitute = null == i ? !0 : i, this.regions = a.regions, this._rect = a.boundingRect
	}

	function Up(t, e, n, i) {
		var a = n.geoModel,
			o = n.seriesModel,
			r = a ? a.coordinateSystem : o ? o.coordinateSystem || (o.getReferringComponents("geo")[0] || {}).coordinateSystem : null;
		return r === this ? r[t](i) : null
	}

	function jp(t, e) {
		var n = t.get("boundingCoords");
		if(null != n) {
			var i = n[0],
				a = n[1];
			isNaN(i[0]) || isNaN(i[1]) || isNaN(a[0]) || isNaN(a[1]) || this.setBoundingRect(i[0], i[1], a[0] - i[0], a[1] - i[1])
		}
		var o, r = this.getBoundingRect(),
			s = t.get("layoutCenter"),
			l = t.get("layoutSize"),
			u = e.getWidth(),
			h = e.getHeight(),
			c = r.width / r.height * this.aspectScale,
			d = !1;
		s && l && (s = [Qo(s[0], u), Qo(s[1], h)], l = Qo(l, Math.min(u, h)), isNaN(s[0]) || isNaN(s[1]) || isNaN(l) || (d = !0));
		var f;
		if(d) {
			var f = {};
			c > 1 ? (f.width = l, f.height = l / c) : (f.height = l, f.width = l * c), f.y = s[1] - f.height / 2, f.x = s[0] - f.width / 2
		} else o = t.getBoxLayoutParams(), o.aspect = c, f = Dr(o, {
			width: u,
			height: h
		});
		this.setViewRect(f.x, f.y, f.width, f.height), this.setCenter(t.get("center")), this.setZoom(t.get("zoom"))
	}

	function qp(t, e) {
		f(e.get("geoCoord"), function(e, n) {
			t.addGeoCoord(n, e)
		})
	}

	function Kp(t, e) {
		var n = {};
		return f(t, function(t) {
			t.each(t.mapDimension("value"), function(e, i) {
				var a = "ec-" + t.getName(i);
				n[a] = n[a] || [], isNaN(e) || n[a].push(e)
			})
		}), t[0].map(t[0].mapDimension("value"), function(i, a) {
			for(var o = "ec-" + t[0].getName(a), r = 0, s = 1 / 0, l = -1 / 0, u = n[o].length, h = 0; u > h; h++) s = Math.min(s, n[o][h]), l = Math.max(l, n[o][h]), r += n[o][h];
			var c;
			return c = "min" === e ? s : "max" === e ? l : "average" === e ? r / u : r, 0 === u ? 0 / 0 : c
		})
	}

	function $p(t) {
		var e = t.data;
		e && e[0] && e[0][0] && e[0][0].coord && (t.data = p(e, function(t) {
			var e = [t[0].coord, t[1].coord],
				n = {
					coords: e
				};
			return t[0].name && (n.fromName = t[0].name), t[1].name && (n.toName = t[1].name), o([n, t[0], t[1]])
		}))
	}

	function Jp(t) {
		return isNaN(+t.cpx1) || isNaN(+t.cpy1)
	}

	function Qp(t) {
		return "_" + t + "Type"
	}

	function tg(t, e, n) {
		var i = e.getItemVisual(n, "color"),
			a = e.getItemVisual(n, t),
			o = e.getItemVisual(n, t + "Size");
		if(a && "none" !== a) {
			_(o) || (o = [o, o]);
			var r = Ih(a, -o[0] / 2, -o[1] / 2, o[0], o[1], i);
			return r.name = t, r
		}
	}

	function eg(t) {
		var e = new qP({
			name: "line"
		});
		return ng(e.shape, t), e
	}

	function ng(t, e) {
		var n = e[0],
			i = e[1],
			a = e[2];
		t.x1 = n[0], t.y1 = n[1], t.x2 = i[0], t.y2 = i[1], t.percent = 1, a ? (t.cpx1 = a[0], t.cpy1 = a[1]) : (t.cpx1 = 0 / 0, t.cpy1 = 0 / 0)
	}

	function ig() {
		var t = this,
			e = t.childOfName("fromSymbol"),
			n = t.childOfName("toSymbol"),
			i = t.childOfName("label");
		if(e || n || !i.ignore) {
			for(var a = 1, o = this.parent; o;) o.scale && (a /= o.scale[0]), o = o.parent;
			var r = t.childOfName("line");
			if(this.__dirty || r.__dirty) {
				var s = r.shape.percent,
					l = r.pointAt(0),
					u = r.pointAt(s),
					h = U([], u, l);
				if(te(h, h), e) {
					e.attr("position", l);
					var c = r.tangentAt(0);
					e.attr("rotation", Math.PI / 2 - Math.atan2(c[1], c[0])), e.attr("scale", [a * s, a * s])
				}
				if(n) {
					n.attr("position", u);
					var c = r.tangentAt(1);
					n.attr("rotation", -Math.PI / 2 - Math.atan2(c[1], c[0])), n.attr("scale", [a * s, a * s])
				}
				if(!i.ignore) {
					i.attr("position", u);
					var d, f, p, g = 5 * a;
					if("end" === i.__position) d = [h[0] * g + u[0], h[1] * g + u[1]], f = h[0] > .8 ? "left" : h[0] < -.8 ? "right" : "center", p = h[1] > .8 ? "top" : h[1] < -.8 ? "bottom" : "middle";
					else if("middle" === i.__position) {
						var m = s / 2,
							c = r.tangentAt(m),
							v = [c[1], -c[0]],
							y = r.pointAt(m);
						v[1] > 0 && (v[0] = -v[0], v[1] = -v[1]), d = [y[0] + v[0] * g, y[1] + v[1] * g], f = "center", p = "bottom";
						var x = -Math.atan2(c[1], c[0]);
						u[0] < l[0] && (x = Math.PI + x), i.attr("rotation", x)
					} else d = [-h[0] * g + l[0], -h[1] * g + l[1]], f = h[0] > .8 ? "right" : h[0] < -.8 ? "left" : "center", p = h[1] > .8 ? "bottom" : h[1] < -.8 ? "top" : "middle";
					i.attr({
						style: {
							textVerticalAlign: i.__verticalAlign || p,
							textAlign: i.__textAlign || f
						},
						position: d,
						scale: [a, a]
					})
				}
			}
		}
	}

	function ag(t, e, n) {
		rS.call(this), this._createLine(t, e, n)
	}

	function og(t) {
		this._ctor = t || ag, this.group = new rS
	}

	function rg(t, e, n, i) {
		var a = e.getItemLayout(n);
		if(hg(a)) {
			var o = new t._ctor(e, n, i);
			e.setItemGraphicEl(n, o), t.group.add(o)
		}
	}

	function sg(t, e, n, i, a, o) {
		var r = e.getItemGraphicEl(i);
		return hg(n.getItemLayout(a)) ? (r ? r.updateData(n, a, o) : r = new t._ctor(n, a, o), n.setItemGraphicEl(a, r), void t.group.add(r)) : void t.group.remove(r)
	}

	function lg(t) {
		var e = t.hostModel;
		return {
			lineStyle: e.getModel("lineStyle").getLineStyle(),
			hoverLineStyle: e.getModel("emphasis.lineStyle").getLineStyle(),
			labelModel: e.getModel("label"),
			hoverLabelModel: e.getModel("emphasis.label")
		}
	}

	function ug(t) {
		return isNaN(t[0]) || isNaN(t[1])
	}

	function hg(t) {
		return !ug(t[0]) && !ug(t[1])
	}

	function cg(t, e, n) {
		rS.call(this), this.add(this.createLine(t, e, n)), this._updateEffectSymbol(t, e)
	}

	function dg(t, e, n) {
		rS.call(this), this._createPolyline(t, e, n)
	}

	function fg(t, e, n) {
		cg.call(this, t, e, n), this._lastFrame = 0, this._lastFramePercent = 0
	}

	function pg() {
		this.group = new rS
	}

	function gg(t) {
		return t instanceof Array || (t = [t, t]), t
	}

	function mg(t) {
		return "_EC_" + t
	}

	function vg(t, e) {
		this.id = null == t ? "" : t, this.inEdges = [], this.outEdges = [], this.edges = [], this.hostGraph, this.dataIndex = null == e ? -1 : e
	}

	function yg(t, e, n) {
		this.node1 = t, this.node2 = e, this.dataIndex = null == n ? -1 : n
	}

	function xg(t, e, n) {
		for(var i, a = t[0], o = t[1], r = t[2], s = 1 / 0, l = n * n, u = .1, h = .1; .9 >= h; h += .1) {
			dO[0] = gO(a[0], o[0], r[0], h), dO[1] = gO(a[1], o[1], r[1], h);
			var c = vO(mO(dO, e) - l);
			s > c && (s = c, i = h)
		}
		for(var d = 0; 32 > d; d++) {
			var f = i + u;
			fO[0] = gO(a[0], o[0], r[0], i), fO[1] = gO(a[1], o[1], r[1], i), pO[0] = gO(a[0], o[0], r[0], f), pO[1] = gO(a[1], o[1], r[1], f);
			var c = mO(fO, e) - l;
			if(vO(c) < .01) break;
			var p = mO(pO, e) - l;
			u /= 2, 0 > c ? p >= 0 ? i += u : i -= u : p >= 0 ? i -= u : i += u
		}
		return i
	}

	function _g(t, e) {
		return t.getVisual("opacity") || t.getModel().get(e)
	}

	function wg(t, e, n) {
		var i = t.getGraphicEl(),
			a = _g(t, e);
		null != n && (null == a && (a = 1), a *= n), i.downplay && i.downplay(), i.traverse(function(t) {
			if("group" !== t.type) {
				var e = t.lineLabelOriginalOpacity;
				(null == e || null != n) && (e = a), t.setStyle("opacity", e)
			}
		})
	}

	function bg(t, e) {
		var n = _g(t, e),
			i = t.getGraphicEl();
		i.highlight && i.highlight(), i.traverse(function(t) {
			"group" !== t.type && t.setStyle("opacity", n)
		})
	}

	function Sg(t) {
		return t instanceof Array || (t = [t, t]), t
	}

	function Mg(t) {
		var e = t.coordinateSystem;
		if(!e || "view" === e.type) {
			var n = t.getGraph();
			n.eachNode(function(t) {
				var e = t.getModel();
				t.setLayout([+e.get("x"), +e.get("y")])
			}), Ig(n)
		}
	}

	function Ig(t) {
		t.eachEdge(function(t) {
			var e = t.getModel().get("lineStyle.curveness") || 0,
				n = H(t.node1.getLayout()),
				i = H(t.node2.getLayout()),
				a = [n, i]; + e && a.push([(n[0] + i[0]) / 2 - (n[1] - i[1]) * e, (n[1] + i[1]) / 2 - (i[0] - n[0]) * e]), t.setLayout(a)
		})
	}

	function Tg(t) {
		var e = t.coordinateSystem;
		if(!e || "view" === e.type) {
			var n = e.getBoundingRect(),
				i = t.getData(),
				a = i.graph,
				o = 0,
				r = i.getSum("value"),
				s = 2 * Math.PI / (r || i.count()),
				l = n.width / 2 + n.x,
				u = n.height / 2 + n.y,
				h = Math.min(n.width, n.height) / 2;
			a.eachNode(function(t) {
				var e = t.getValue("value");
				o += s * (r ? e : 1) / 2, t.setLayout([h * Math.cos(o) + l, h * Math.sin(o) + u]), o += s * (r ? e : 1) / 2
			}), i.setLayout({
				cx: l,
				cy: u
			}), a.eachEdge(function(t) {
				var e, n = t.getModel().get("lineStyle.curveness") || 0,
					i = H(t.node1.getLayout()),
					a = H(t.node2.getLayout()),
					o = (i[0] + a[0]) / 2,
					r = (i[1] + a[1]) / 2; + n && (n *= 3, e = [l * n + o * (1 - n), u * n + r * (1 - n)]), t.setLayout([i, a, e])
			})
		}
	}

	function Ag(t, e, n) {
		for(var i = n.rect, a = i.width, o = i.height, r = [i.x + a / 2, i.y + o / 2], s = null == n.gravity ? .1 : n.gravity, l = 0; l < t.length; l++) {
			var u = t[l];
			u.p || (u.p = F(a * (Math.random() - .5) + r[0], o * (Math.random() - .5) + r[1])), u.pp = H(u.p), u.edges = null
		}
		var h = .6;
		return {
			warmUp: function() {
				h = .5
			},
			setFixed: function(e) {
				t[e].fixed = !0
			},
			setUnfixed: function(e) {
				t[e].fixed = !1
			},
			step: function(n) {
				for(var i = [], a = t.length, o = 0; o < e.length; o++) {
					var l = e[o],
						u = l.n1,
						c = l.n2;
					U(i, c.p, u.p);
					var d = j(i) - l.d,
						f = c.w / (u.w + c.w);
					isNaN(f) && (f = 0), te(i, i), !u.fixed && CO(u.p, u.p, i, f * d * h), !c.fixed && CO(c.p, c.p, i, -(1 - f) * d * h)
				}
				for(var o = 0; a > o; o++) {
					var p = t[o];
					p.fixed || (U(i, r, p.p), CO(p.p, p.p, i, s * h))
				}
				for(var o = 0; a > o; o++)
					for(var u = t[o], g = o + 1; a > g; g++) {
						var c = t[g];
						U(i, c.p, u.p);
						var d = j(i);
						0 === d && (Z(i, Math.random() - .5, Math.random() - .5), d = 1);
						var m = (u.rep + c.rep) / d / d;
						!u.fixed && CO(u.pp, u.pp, i, m), !c.fixed && CO(c.pp, c.pp, i, -m)
					}
				for(var v = [], o = 0; a > o; o++) {
					var p = t[o];
					p.fixed || (U(v, p.p, p.pp), CO(p.p, p.p, v, h), W(p.pp, p.p))
				}
				h = .992 * h, n && n(t, e, .01 > h)
			}
		}
	}

	function Dg(t, e, n) {
		var i = t.getBoxLayoutParams();
		return i.aspect = n, Dr(i, {
			width: e.getWidth(),
			height: e.getHeight()
		})
	}

	function Cg(t, e, n, i, a) {
		var o = t.ends,
			r = new EO({
				shape: {
					points: a ? kg(o, i, t) : o
				}
			});
		return Lg(t, r, e, n, a), r
	}

	function Lg(t, e, n, i, a) {
		var o = n.hostModel,
			r = qI[a ? "initProps" : "updateProps"];
		r(e, {
			shape: {
				points: t.ends
			}
		}, o, i);
		var s = n.getItemModel(i),
			l = s.getModel(OO),
			u = n.getItemVisual(i, "color"),
			h = l.getItemStyle(["borderColor"]);
		h.stroke = u, h.strokeNoScale = !0, e.useStyle(h), e.z2 = 100;
		var c = s.getModel(NO).getItemStyle();
		So(e, c)
	}

	function kg(t, e, n) {
		return p(t, function(t) {
			return t = t.slice(), t[e] = n.initBaseline, t
		})
	}

	function Pg(t) {
		var e = [],
			n = [];
		return t.eachSeriesByType("boxplot", function(t) {
			var i = t.getBaseAxis(),
				a = u(n, i);
			0 > a && (a = n.length, n[a] = i, e[a] = {
				axis: i,
				seriesModels: []
			}), e[a].seriesModels.push(t)
		}), e
	}

	function Og(t) {
		var e, n, i = t.axis,
			a = t.seriesModels,
			o = a.length,
			r = t.boxWidthList = [],
			s = t.boxOffsetList = [],
			l = [];
		if("category" === i.type) n = i.getBandWidth();
		else {
			var u = 0;
			BO(a, function(t) {
				u = Math.max(u, t.getData().count())
			}), e = i.getExtent(), Math.abs(e[1] - e[0]) / u
		}
		BO(a, function(t) {
			var e = t.get("boxWidth");
			_(e) || (e = [e, e]), l.push([Qo(e[0], n) || 0, Qo(e[1], n) || 0])
		});
		var h = .8 * n - 2,
			c = h / o * .3,
			d = (h - c * (o - 1)) / o,
			f = d / 2 - h / 2;
		BO(a, function(t, e) {
			s.push(f), f += c + d, r.push(Math.min(Math.max(d, l[e][0]), l[e][1]))
		})
	}

	function Ng(t, e, n) {
		function i(t, n, i) {
			var a = s.get(n, i),
				o = [];
			o[u] = t, o[h] = a;
			var l;
			return isNaN(t) || isNaN(a) ? l = [0 / 0, 0 / 0] : (l = r.dataToPoint(o), l[u] += e), l
		}

		function a(t, e, n) {
			var i = e.slice(),
				a = e.slice();
			i[u] += l, a[u] -= l, n ? t.push(i, a) : t.push(a, i)
		}

		function o(t, e) {
			var n = e.slice(),
				i = e.slice();
			n[u] -= l, i[u] += l, t.push(n, i)
		}
		var r = t.coordinateSystem,
			s = t.getData(),
			l = n / 2,
			u = "horizontal" === t.get("layout") ? 0 : 1,
			h = 1 - u,
			c = ["x", "y"],
			d = s.mapDimension(c[u]),
			f = s.mapDimension(c[h], !0);
		if(!(null == d || f.length < 5))
			for(var p = 0; p < s.count(); p++) {
				var g = s.get(d, p),
					m = i(g, f[2], p),
					v = i(g, f[0], p),
					y = i(g, f[1], p),
					x = i(g, f[3], p),
					_ = i(g, f[4], p),
					w = [];
				a(w, y, 0), a(w, x, 1), w.push(v, y, _, x), o(w, v), o(w, _), o(w, m), s.setItemLayout(p, {
					initBaseline: m[h],
					ends: w
				})
			}
	}

	function Eg(t) {
		if(!t.parallel) {
			var e = !1;
			f(t.series, function(t) {
				t && "parallel" === t.type && (e = !0)
			}), e && (t.parallel = [{}])
		}
	}

	function zg(t) {
		var e = Ri(t.parallelAxis);
		f(e, function(e) {
			if(S(e)) {
				var n = e.parallelIndex || 0,
					i = Ri(t.parallel)[n];
				i && i.parallelAxisDefault && a(e, i.parallelAxisDefault, !1)
			}
		})
	}

	function Rg(t, e) {
		var n = t[e] - t[1 - e];
		return {
			span: Math.abs(n),
			sign: n > 0 ? -1 : 0 > n ? 1 : e ? -1 : 1
		}
	}

	function Bg(t, e) {
		return Math.min(e[1], Math.max(e[0], t))
	}

	function Vg(t, e, n) {
		this._axesMap = B(), this._axesLayout = {}, this.dimensions = t.dimensions, this._rect, this._model = t, this._init(t, e, n)
	}

	function Gg(t, e) {
		return ZO(XO(t, e[0]), e[1])
	}

	function Fg(t, e) {
		var n = e.layoutLength / (e.axisCount - 1);
		return {
			position: n * t,
			axisNameAvailableWidth: n,
			axisLabelShow: !0
		}
	}

	function Wg(t, e) {
		var n, i, a = e.layoutLength,
			o = e.axisExpandWidth,
			r = e.axisCount,
			s = e.axisCollapseWidth,
			l = e.winInnerIndices,
			u = s,
			h = !1;
		return t < l[0] ? (n = t * s, i = s) : t <= l[1] ? (n = e.axisExpandWindow0Pos + t * o - e.axisExpandWindow[0], u = o, h = !0) : (n = a - (r - 1 - t) * s, i = s), {
			position: n,
			axisNameAvailableWidth: u,
			axisLabelShow: h,
			nameTruncateMaxWidth: i
		}
	}

	function Hg(t, e) {
		var n = [];
		return t.eachComponent("parallel", function(i, a) {
			var o = new Vg(i, t, e);
			o.name = "parallel_" + a, o.resize(i, e), i.coordinateSystem = o, o.model = i, n.push(o)
		}), t.eachSeries(function(e) {
			if("parallel" === e.get("coordinateSystem")) {
				var n = t.queryComponents({
					mainType: "parallel",
					index: e.get("parallelIndex"),
					id: e.get("parallelId")
				})[0];
				e.coordinateSystem = n.coordinateSystem
			}
		}), n
	}

	function Zg(t, e) {
		return e.type || (e.data ? "category" : "value")
	}

	function Xg(t) {
		yb.call(this), this._zr = t, this.group = new rS, this._brushType, this._brushOption, this._panels, this._track = [], this._dragging, this._covers = [], this._creatingCover, this._creatingPanel, this._enableGlobalPan, this._uid = "brushController_" + dN++, this._handlers = {}, tN(fN, function(t, e) {
			this._handlers[e] = y(t, this)
		}, this)
	}

	function Yg(t, e) {
		var n = t._zr;
		t._enableGlobalPan || gf(n, lN, t._uid), tN(t._handlers, function(t, e) {
			n.on(e, t)
		}), t._brushType = e.brushType, t._brushOption = a(i(cN), e, !0)
	}

	function Ug(t) {
		var e = t._zr;
		mf(e, lN, t._uid), tN(t._handlers, function(t, n) {
			e.off(n, t)
		}), t._brushType = t._brushOption = null
	}

	function jg(t, e) {
		var n = pN[e.brushType].createCover(t, e);
		return n.__brushOption = e, $g(n, e), t.group.add(n), n
	}

	function qg(t, e) {
		var n = Qg(e);
		return n.endCreating && (n.endCreating(t, e), $g(e, e.__brushOption)), e
	}

	function Kg(t, e) {
		var n = e.__brushOption;
		Qg(e).updateCoverShape(t, e, n.range, n)
	}

	function $g(t, e) {
		var n = e.z;
		null == n && (n = oN), t.traverse(function(t) {
			t.z = n, t.z2 = n
		})
	}

	function Jg(t, e) {
		Qg(e).updateCommon(t, e), Kg(t, e)
	}

	function Qg(t) {
		return pN[t.__brushOption.brushType]
	}

	function tm(t, e, n) {
		var i = t._panels;
		if(!i) return !0;
		var a, o = t._transform;
		return tN(i, function(t) {
			t.isTargetByCursor(e, n, o) && (a = t)
		}), a
	}

	function em(t, e) {
		var n = t._panels;
		if(!n) return !0;
		var i = e.__brushOption.panelId;
		return null != i ? n[i] : !0
	}

	function nm(t) {
		var e = t._covers,
			n = e.length;
		return tN(e, function(e) {
			t.group.remove(e)
		}, t), e.length = 0, !!n
	}

	function im(t, e) {
		var n = eN(t._covers, function(t) {
			var e = t.__brushOption,
				n = i(e.range);
			return {
				brushType: e.brushType,
				panelId: e.panelId,
				range: n
			}
		});
		t.trigger("brush", n, {
			isEnd: !!e.isEnd,
			removeOnClick: !!e.removeOnClick
		})
	}

	function am(t) {
		var e = t._track;
		if(!e.length) return !1;
		var n = e[e.length - 1],
			i = e[0],
			a = n[0] - i[0],
			o = n[1] - i[1],
			r = aN(a * a + o * o, .5);
		return r > rN
	}

	function om(t) {
		var e = t.length - 1;
		return 0 > e && (e = 0), [t[0], t[e]]
	}

	function rm(t, e, n, i) {
		var a = new rS;
		return a.add(new LI({
			name: "main",
			style: hm(n),
			silent: !0,
			draggable: !0,
			cursor: "move",
			drift: QO(t, e, a, "nswe"),
			ondragend: QO(im, e, {
				isEnd: !0
			})
		})), tN(i, function(n) {
			a.add(new LI({
				name: n,
				style: {
					opacity: 0
				},
				draggable: !0,
				silent: !0,
				invisible: !0,
				drift: QO(t, e, a, n),
				ondragend: QO(im, e, {
					isEnd: !0
				})
			}))
		}), a
	}

	function sm(t, e, n, i) {
		var a = i.brushStyle.lineWidth || 0,
			o = iN(a, sN),
			r = n[0][0],
			s = n[1][0],
			l = r - a / 2,
			u = s - a / 2,
			h = n[0][1],
			c = n[1][1],
			d = h - o + a / 2,
			f = c - o + a / 2,
			p = h - r,
			g = c - s,
			m = p + a,
			v = g + a;
		um(t, e, "main", r, s, p, g), i.transformable && (um(t, e, "w", l, u, o, v), um(t, e, "e", d, u, o, v), um(t, e, "n", l, u, m, o), um(t, e, "s", l, f, m, o), um(t, e, "nw", l, u, o, o), um(t, e, "ne", d, u, o, o), um(t, e, "sw", l, f, o, o), um(t, e, "se", d, f, o, o))
	}

	function lm(t, e) {
		var n = e.__brushOption,
			i = n.transformable,
			a = e.childAt(0);
		a.useStyle(hm(n)), a.attr({
			silent: !i,
			cursor: i ? "move" : "default"
		}), tN(["w", "e", "n", "s", "se", "sw", "ne", "nw"], function(n) {
			var a = e.childOfName(n),
				o = fm(t, n);
			a && a.attr({
				silent: !i,
				invisible: !i,
				cursor: i ? hN[o] + "-resize" : null
			})
		})
	}

	function um(t, e, n, i, a, o, r) {
		var s = e.childOfName(n);
		s && s.setShape(ym(vm(t, e, [
			[i, a],
			[i + o, a + r]
		])))
	}

	function hm(t) {
		return s({
			strokeNoScale: !0
		}, t.brushStyle)
	}

	function cm(t, e, n, i) {
		var a = [nN(t, n), nN(e, i)],
			o = [iN(t, n), iN(e, i)];
		return [
			[a[0], o[0]],
			[a[1], o[1]]
		]
	}

	function dm(t) {
		return Bo(t.group)
	}

	function fm(t, e) {
		if(e.length > 1) {
			e = e.split("");
			var n = [fm(t, e[0]), fm(t, e[1])];
			return("e" === n[0] || "w" === n[0]) && n.reverse(), n.join("")
		}
		var i = {
				w: "left",
				e: "right",
				n: "top",
				s: "bottom"
			},
			a = {
				left: "w",
				right: "e",
				top: "n",
				bottom: "s"
			},
			n = Go(i[e], dm(t));
		return a[n]
	}

	function pm(t, e, n, i, a, o, r) {
		var s = i.__brushOption,
			l = t(s.range),
			u = mm(n, o, r);
		tN(a.split(""), function(t) {
			var e = uN[t];
			l[e[0]][e[1]] += u[e[0]]
		}), s.range = e(cm(l[0][0], l[1][0], l[0][1], l[1][1])), Jg(n, i), im(n, {
			isEnd: !1
		})
	}

	function gm(t, e, n, i) {
		var a = e.__brushOption.range,
			o = mm(t, n, i);
		tN(a, function(t) {
			t[0] += o[0], t[1] += o[1]
		}), Jg(t, e), im(t, {
			isEnd: !1
		})
	}

	function mm(t, e, n) {
		var i = t.group,
			a = i.transformCoordToLocal(e, n),
			o = i.transformCoordToLocal(0, 0);
		return [a[0] - o[0], a[1] - o[1]]
	}

	function vm(t, e, n) {
		var a = em(t, e);
		return a && a !== !0 ? a.clipPath(n, t._transform) : i(n)
	}

	function ym(t) {
		var e = nN(t[0][0], t[1][0]),
			n = nN(t[0][1], t[1][1]),
			i = iN(t[0][0], t[1][0]),
			a = iN(t[0][1], t[1][1]);
		return {
			x: e,
			y: n,
			width: i - e,
			height: a - n
		}
	}

	function xm(t, e, n) {
		if(t._brushType) {
			var i = t._zr,
				a = t._covers,
				o = tm(t, e, n);
			if(!t._dragging)
				for(var r = 0; r < a.length; r++) {
					var s = a[r].__brushOption;
					if(o && (o === !0 || s.panelId === o.panelId) && pN[s.brushType].contain(a[r], n[0], n[1])) return
				}
			o && i.setCursorStyle("crosshair")
		}
	}

	function _m(t) {
		var e = t.event;
		e.preventDefault && e.preventDefault()
	}

	function wm(t, e, n) {
		return t.childOfName("main").contain(e, n)
	}

	function bm(t, e, n, a) {
		var o, r = t._creatingCover,
			s = t._creatingPanel,
			l = t._brushOption;
		if(t._track.push(n.slice()), am(t) || r) {
			if(s && !r) {
				"single" === l.brushMode && nm(t);
				var u = i(l);
				u.brushType = Sm(u.brushType, s), u.panelId = s === !0 ? null : s.panelId, r = t._creatingCover = jg(t, u), t._covers.push(r)
			}
			if(r) {
				var h = pN[Sm(t._brushType, s)],
					c = r.__brushOption;
				c.range = h.getCreatingRange(vm(t, r, t._track)), a && (qg(t, r), h.updateCommon(t, r)), Kg(t, r), o = {
					isEnd: a
				}
			}
		} else a && "single" === l.brushMode && l.removeOnClick && tm(t, e, n) && nm(t) && (o = {
			isEnd: a,
			removeOnClick: !0
		});
		return o
	}

	function Sm(t, e) {
		return "auto" === t ? e.defaultBrushType : t
	}

	function Mm(t) {
		if(this._dragging) {
			_m(t);
			var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY),
				n = bm(this, t, e, !0);
			this._dragging = !1, this._track = [], this._creatingCover = null, n && im(this, n)
		}
	}

	function Im(t) {
		return {
			createCover: function(e, n) {
				return rm(QO(pm, function(e) {
					var n = [e, [0, 100]];
					return t && n.reverse(), n
				}, function(e) {
					return e[t]
				}), e, n, [
					["w", "e"],
					["n", "s"]
				][t])
			},
			getCreatingRange: function(e) {
				var n = om(e),
					i = nN(n[0][t], n[1][t]),
					a = iN(n[0][t], n[1][t]);
				return [i, a]
			},
			updateCoverShape: function(e, n, i, a) {
				var o, r = em(e, n);
				if(r !== !0 && r.getLinearBrushOtherExtent) o = r.getLinearBrushOtherExtent(t, e._transform);
				else {
					var s = e._zr;
					o = [0, [s.getWidth(), s.getHeight()][1 - t]]
				}
				var l = [i, o];
				t && l.reverse(), sm(e, n, l, a)
			},
			updateCommon: lm,
			contain: wm
		}
	}

	function Tm(t) {
		return t = Cm(t),
			function(e) {
				return Wo(e, t)
			}
	}

	function Am(t, e) {
		return t = Cm(t),
			function(n) {
				var i = null != e ? e : n,
					a = i ? t.width : t.height,
					o = i ? t.x : t.y;
				return [o, o + (a || 0)]
			}
	}

	function Dm(t, e, n) {
		return t = Cm(t),
			function(i, a) {
				return t.contain(a[0], a[1]) && !Df(i, e, n)
			}
	}

	function Cm(t) {
		return xn.create(t)
	}

	function Lm(t, e, n) {
		return n && "axisAreaSelect" === n.type && e.findComponents({
			mainType: "parallelAxis",
			query: n
		})[0] === t
	}

	function km(t) {
		var e = t.axis;
		return p(t.activeIntervals, function(t) {
			return {
				brushType: "lineX",
				panelId: "pl",
				range: [e.dataToCoord(t[0], !0), e.dataToCoord(t[1], !0)]
			}
		})
	}

	function Pm(t, e) {
		return e.getComponent("parallel", t.get("parallelIndex"))
	}

	function Om(t, e) {
		var n = t._model;
		return n.get("axisExpandable") && n.get("axisExpandTriggerOn") === e
	}

	function Nm(t, e) {
		if(!t.encodeDefine) {
			var n = e.ecModel.getComponent("parallel", e.get("parallelIndex"));
			if(n) {
				var i = t.encodeDefine = B();
				f(n.dimensions, function(t) {
					var e = Em(t);
					i.set(t, e)
				})
			}
		}
	}

	function Em(t) {
		return +t.replace("dim", "")
	}

	function zm(t, e, n) {
		var i = t.model,
			a = t.getRect(),
			o = new LI({
				shape: {
					x: a.x,
					y: a.y,
					width: a.width,
					height: a.height
				}
			}),
			r = "horizontal" === i.get("layout") ? "width" : "height";
		return o.setShape(r, 0), Ro(o, {
			shape: {
				width: a.width,
				height: a.height
			}
		}, e, n), o
	}

	function Rm(t, e, n, i) {
		for(var a = [], o = 0; o < n.length; o++) {
			var r = n[o],
				s = t.get(t.mapDimension(r), e);
			Fm(s, i.getAxis(r).type) || a.push(i.dataToPoint(s, r))
		}
		return a
	}

	function Bm(t, e, n, i, a) {
		var o = Rm(t, n, i, a),
			r = new AI({
				shape: {
					points: o
				},
				silent: !0,
				z2: 10
			});
		return e.add(r), t.setItemGraphicEl(n, r), r
	}

	function Vm(t) {
		var e = t.get("smooth", !0);
		return e === !0 && (e = xN), {
			lineStyle: t.getModel("lineStyle").getLineStyle(),
			smooth: null != e ? e : xN
		}
	}

	function Gm(t, e, n, i) {
		var a = i.lineStyle;
		if(e.hasItemOption) {
			var o = e.getItemModel(n).getModel("lineStyle");
			a = o.getLineStyle()
		}
		t.useStyle(a);
		var r = t.style;
		r.fill = null, r.stroke = e.getItemVisual(n, "color"), r.opacity = e.getItemVisual(n, "opacity"), i.smooth && (t.shape.smooth = i.smooth)
	}

	function Fm(t, e) {
		return "category" === e ? null == t : null == t || isNaN(t)
	}

	function Wm(t, e) {
		var n = t.get("center"),
			i = e.getWidth(),
			a = e.getHeight(),
			o = Math.min(i, a),
			r = Qo(n[0], e.getWidth()),
			s = Qo(n[1], e.getHeight()),
			l = Qo(t.get("radius"), o / 2);
		return {
			cx: r,
			cy: s,
			r: l
		}
	}

	function Hm(t, e) {
		return e && ("string" == typeof e ? t = e.replace("{value}", null != t ? t : "") : "function" == typeof e && (t = e(t))), t
	}

	function Zm(t, e) {
		function n() {
			o.ignore = o.hoverIgnore, r.ignore = r.hoverIgnore
		}

		function i() {
			o.ignore = o.normalIgnore, r.ignore = r.normalIgnore
		}
		rS.call(this);
		var a = new TI,
			o = new AI,
			r = new yI;
		this.add(a), this.add(o), this.add(r), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
	}

	function Xm(t, e) {
		return Dr(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		})
	}

	function Ym(t, e) {
		for(var n = t.mapDimension("value"), i = t.mapArray(n, function(t) {
				return t
			}), a = [], o = "ascending" === e, r = 0, s = t.count(); s > r; r++) a[r] = r;
		return "function" == typeof e ? a.sort(e) : "none" !== e && a.sort(function(t, e) {
			return o ? i[t] - i[e] : i[e] - i[t]
		}), a
	}

	function Um(t) {
		t.each(function(e) {
			var n, i, a, o, r = t.getItemModel(e),
				s = r.getModel("label"),
				l = s.get("position"),
				u = r.getModel("labelLine"),
				h = t.getItemLayout(e),
				c = h.points,
				d = "inner" === l || "inside" === l || "center" === l;
			if(d) i = (c[0][0] + c[1][0] + c[2][0] + c[3][0]) / 4, a = (c[0][1] + c[1][1] + c[2][1] + c[3][1]) / 4, n = "center", o = [
				[i, a],
				[i, a]
			];
			else {
				var f, p, g, m = u.get("length");
				"left" === l ? (f = (c[3][0] + c[0][0]) / 2, p = (c[3][1] + c[0][1]) / 2, g = f - m, i = g - 5, n = "right") : (f = (c[1][0] + c[2][0]) / 2, p = (c[1][1] + c[2][1]) / 2, g = f + m, i = g + 5, n = "left");
				var v = p;
				o = [
					[f, p],
					[g, v]
				], a = v
			}
			h.label = {
				linePoints: o,
				x: i,
				y: a,
				verticalAlign: "middle",
				textAlign: n,
				inside: d
			}
		})
	}

	function jm(t, e) {
		return t.getVisual("opacity") || t.getModel().get(e)
	}

	function qm(t, e, n) {
		var i = t.getGraphicEl(),
			a = jm(t, e);
		null != n && (null == a && (a = 1), a *= n), i.downplay && i.downplay(), i.traverse(function(t) {
			"group" !== t.type && t.setStyle("opacity", a)
		})
	}

	function Km(t, e) {
		var n = jm(t, e),
			i = t.getGraphicEl();
		i.highlight && i.highlight(), i.traverse(function(t) {
			"group" !== t.type && t.setStyle("opacity", n)
		})
	}

	function $m(t, e, n) {
		var i = new LI({
			shape: {
				x: t.x - 10,
				y: t.y - 10,
				width: 0,
				height: t.height + 20
			}
		});
		return Ro(i, {
			shape: {
				width: t.width + 20,
				height: t.height + 20
			}
		}, e, n), i
	}

	function Jm(t, e) {
		return Dr(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		})
	}

	function Qm(t, e, n, i, a, o, r, s) {
		ev(t, e, n, a, o, s), av(t, e, o, a, i, r, s), gv(t, s)
	}

	function tv(t) {
		f(t, function(t) {
			var e = fv(t.outEdges, dv),
				n = fv(t.inEdges, dv),
				i = Math.max(e, n);
			t.setLayout({
				value: i
			}, !0)
		})
	}

	function ev(t, e, n, i, a, o) {
		for(var r = [], s = [], l = [], u = [], h = 0, c = 0, d = 0; d < e.length; d++) r[d] = 1;
		for(d = 0; d < t.length; d++) s[d] = t[d].inEdges.length, 0 === s[d] && l.push(t[d]);
		for(; l.length;) {
			for(var f = 0; f < l.length; f++) {
				var p = l[f];
				"vertical" === o ? (p.setLayout({
					y: h
				}, !0), p.setLayout({
					dy: n
				}, !0)) : (p.setLayout({
					x: h
				}, !0), p.setLayout({
					dx: n
				}, !0));
				for(var g = 0; g < p.outEdges.length; g++) {
					var m = p.outEdges[g],
						v = e.indexOf(m);
					r[v] = 0;
					var y = m.node2,
						x = t.indexOf(y);
					0 === --s[x] && u.push(y)
				}
			}++h, l = u, u = []
		}
		for(d = 0; d < r.length; d++);
		nv(t, h, o), c = "vertical" === o ? (a - n) / (h - 1) : (i - n) / (h - 1), iv(t, c, o)
	}

	function nv(t, e, n) {
		f(t, function(t) {
			t.outEdges.length || ("vertical" === n ? t.setLayout({
				y: e - 1
			}, !0) : t.setLayout({
				x: e - 1
			}, !0))
		})
	}

	function iv(t, e, n) {
		f(t, function(t) {
			if("vertical" === n) {
				var i = t.getLayout().y * e;
				t.setLayout({
					y: i
				}, !0)
			} else {
				var a = t.getLayout().x * e;
				t.setLayout({
					x: a
				}, !0)
			}
		})
	}

	function av(t, e, n, i, a, o, r) {
		var s = ov(t, r);
		rv(t, s, e, n, i, a, r), sv(s, a, n, i, r);
		for(var l = 1; o > 0; o--) l *= .99, lv(s, l, r), sv(s, a, n, i, r), pv(s, l, r), sv(s, a, n, i, r)
	}

	function ov(t, e) {
		var n = [],
			i = "vertical" === e ? "y" : "x",
			a = Qi(t, function(t) {
				return t.getLayout()[i]
			});
		return a.keys.sort(function(t, e) {
			return t - e
		}), f(a.keys, function(t) {
			n.push(a.buckets.get(t))
		}), n
	}

	function rv(t, e, n, i, a, o, r) {
		var s = [];
		f(e, function(t) {
			var e = t.length,
				n = 0,
				l = 0;
			f(t, function(t) {
				n += t.getLayout().value
			}), l = "vertical" === r ? (a - (e - 1) * o) / n : (i - (e - 1) * o) / n, s.push(l)
		}), s.sort(function(t, e) {
			return t - e
		});
		var l = s[0];
		f(e, function(t) {
			f(t, function(t, e) {
				var n = t.getLayout().value * l;
				"vertical" === r ? (t.setLayout({
					x: e
				}, !0), t.setLayout({
					dx: n
				}, !0)) : (t.setLayout({
					y: e
				}, !0), t.setLayout({
					dy: n
				}, !0))
			})
		}), f(n, function(t) {
			var e = +t.getValue() * l;
			t.setLayout({
				dy: e
			}, !0)
		})
	}

	function sv(t, e, n, i, a) {
		f(t, function(t) {
			var o, r, s, l = 0,
				u = t.length;
			if("vertical" === a) {
				var h;
				for(t.sort(function(t, e) {
						return t.getLayout().x - e.getLayout().x
					}), s = 0; u > s; s++) o = t[s], r = l - o.getLayout().x, r > 0 && (h = o.getLayout().x + r, o.setLayout({
					x: h
				}, !0)), l = o.getLayout().x + o.getLayout().dx + e;
				if(r = l - e - i, r > 0)
					for(h = o.getLayout().x - r, o.setLayout({
							x: h
						}, !0), l = h, s = u - 2; s >= 0; --s) o = t[s], r = o.getLayout().x + o.getLayout().dx + e - l, r > 0 && (h = o.getLayout().x - r, o.setLayout({
						x: h
					}, !0)), l = o.getLayout().x
			} else {
				var c;
				for(t.sort(function(t, e) {
						return t.getLayout().y - e.getLayout().y
					}), s = 0; u > s; s++) o = t[s], r = l - o.getLayout().y, r > 0 && (c = o.getLayout().y + r, o.setLayout({
					y: c
				}, !0)), l = o.getLayout().y + o.getLayout().dy + e;
				if(r = l - e - n, r > 0)
					for(c = o.getLayout().y - r, o.setLayout({
							y: c
						}, !0), l = c, s = u - 2; s >= 0; --s) o = t[s], r = o.getLayout().y + o.getLayout().dy + e - l, r > 0 && (c = o.getLayout().y - r, o.setLayout({
						y: c
					}, !0)), l = o.getLayout().y
			}
		})
	}

	function lv(t, e, n) {
		f(t.slice().reverse(), function(t) {
			f(t, function(t) {
				if(t.outEdges.length) {
					var i = fv(t.outEdges, uv, n) / fv(t.outEdges, dv, n);
					if("vertical" === n) {
						var a = t.getLayout().x + (i - cv(t, n)) * e;
						t.setLayout({
							x: a
						}, !0)
					} else {
						var o = t.getLayout().y + (i - cv(t, n)) * e;
						t.setLayout({
							y: o
						}, !0)
					}
				}
			})
		})
	}

	function uv(t, e) {
		return cv(t.node2, e) * t.getValue()
	}

	function hv(t, e) {
		return cv(t.node1, e) * t.getValue()
	}

	function cv(t, e) {
		return "vertical" === e ? t.getLayout().x + t.getLayout().dx / 2 : t.getLayout().y + t.getLayout().dy / 2
	}

	function dv(t) {
		return t.getValue()
	}

	function fv(t, e, n) {
		for(var i = 0, a = t.length, o = -1; ++o < a;) {
			var r = +e.call(t, t[o], n);
			isNaN(r) || (i += r)
		}
		return i
	}

	function pv(t, e, n) {
		f(t, function(t) {
			f(t, function(t) {
				if(t.inEdges.length) {
					var i = fv(t.inEdges, hv, n) / fv(t.inEdges, dv, n);
					if("vertical" === n) {
						var a = t.getLayout().x + (i - cv(t, n)) * e;
						t.setLayout({
							x: a
						}, !0)
					} else {
						var o = t.getLayout().y + (i - cv(t, n)) * e;
						t.setLayout({
							y: o
						}, !0)
					}
				}
			})
		})
	}

	function gv(t, e) {
		f(t, function(t) {
			"vertical" === e ? (t.outEdges.sort(function(t, e) {
				return t.node2.getLayout().x - e.node2.getLayout().x
			}), t.inEdges.sort(function(t, e) {
				return t.node1.getLayout().x - e.node1.getLayout().x
			})) : (t.outEdges.sort(function(t, e) {
				return t.node2.getLayout().y - e.node2.getLayout().y
			}), t.inEdges.sort(function(t, e) {
				return t.node1.getLayout().y - e.node1.getLayout().y
			}))
		}), f(t, function(t) {
			var e = 0,
				n = 0;
			f(t.outEdges, function(t) {
				t.setLayout({
					sy: e
				}, !0), e += t.getLayout().dy
			}), f(t.inEdges, function(t) {
				t.setLayout({
					ty: n
				}, !0), n += t.getLayout().dy
			})
		})
	}

	function mv(t, e, n) {
		this.dimension = "single", this.dimensions = ["single"], this._axis = null, this._rect, this._init(t, e, n), this.model = t
	}

	function vv(t, e) {
		var n = [];
		return t.eachComponent("singleAxis", function(i, a) {
			var o = new mv(i, t, e);
			o.name = "single_" + a, o.resize(i, e), i.coordinateSystem = o, n.push(o)
		}), t.eachSeries(function(e) {
			if("singleAxis" === e.get("coordinateSystem")) {
				var n = t.queryComponents({
					mainType: "singleAxis",
					index: e.get("singleAxisIndex"),
					id: e.get("singleAxisId")
				})[0];
				e.coordinateSystem = n && n.coordinateSystem
			}
		}), n
	}

	function yv(t, e) {
		e = e || {};
		var n = t.coordinateSystem,
			i = t.axis,
			a = {},
			o = i.position,
			r = i.orient,
			s = n.getRect(),
			l = [s.x, s.x + s.width, s.y, s.y + s.height],
			u = {
				horizontal: {
					top: l[2],
					bottom: l[3]
				},
				vertical: {
					left: l[0],
					right: l[1]
				}
			};
		a.position = ["vertical" === r ? u.vertical[o] : l[0], "horizontal" === r ? u.horizontal[o] : l[3]];
		var h = {
			horizontal: 0,
			vertical: 1
		};
		a.rotation = Math.PI / 2 * h[r];
		var c = {
			top: -1,
			bottom: 1,
			right: 1,
			left: -1
		};
		a.labelDirection = a.tickDirection = a.nameDirection = c[o], t.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), D(e.labelInside, t.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
		var d = e.rotate;
		return null == d && (d = t.get("axisLabel.rotate")), a.labelRotation = "top" === o ? -d : d, a.z2 = 1, a
	}

	function xv(t, e) {
		return e.type || (e.data ? "category" : "value")
	}

	function _v(t, e, n, i, a) {
		var o = t.axis;
		if(!o.scale.isBlank() && o.containData(e)) {
			if(!t.involveSeries) return void n.showPointer(t, e);
			var s = wv(e, t),
				l = s.payloadBatch,
				u = s.snapToValue;
			l[0] && null == a.seriesIndex && r(a, l[0]), !i && t.snap && o.containData(u) && null != u && (e = u), n.showPointer(t, e, l, a), n.showTooltip(t, s, u)
		}
	}

	function wv(t, e) {
		var n = e.axis,
			i = n.dim,
			a = t,
			o = [],
			r = Number.MAX_VALUE,
			s = -1;
		return FN(e.seriesModels, function(e) {
			var l, u, h = e.getData().mapDimension(i, !0);
			if(e.getAxisTooltipData) {
				var c = e.getAxisTooltipData(h, t, n);
				u = c.dataIndices, l = c.nestestValue
			} else {
				if(u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null), !u.length) return;
				l = e.getData().get(h[0], u[0])
			}
			if(null != l && isFinite(l)) {
				var d = t - l,
					f = Math.abs(d);
				r >= f && ((r > f || d >= 0 && 0 > s) && (r = f, s = d, a = l, o.length = 0), FN(u, function(t) {
					o.push({
						seriesIndex: e.seriesIndex,
						dataIndexInside: t,
						dataIndex: e.getData().getRawIndex(t)
					})
				}))
			}
		}), {
			payloadBatch: o,
			snapToValue: a
		}
	}

	function bv(t, e, n, i) {
		t[e.key] = {
			value: n,
			payloadBatch: i
		}
	}

	function Sv(t, e, n, i) {
		var a = n.payloadBatch,
			o = e.axis,
			r = o.model,
			s = e.axisPointerModel;
		if(e.triggerTooltip && a.length) {
			var l = e.coordSys.model,
				u = Nc(l),
				h = t.map[u];
			h || (h = t.map[u] = {
				coordSysId: l.id,
				coordSysIndex: l.componentIndex,
				coordSysType: l.type,
				coordSysMainType: l.mainType,
				dataByAxis: []
			}, t.list.push(h)), h.dataByAxis.push({
				axisDim: o.dim,
				axisIndex: r.componentIndex,
				axisType: r.type,
				axisId: r.id,
				value: i,
				valueLabelOpt: {
					precision: s.get("label.precision"),
					formatter: s.get("label.formatter")
				},
				seriesDataIndices: a.slice()
			})
		}
	}

	function Mv(t, e, n) {
		var i = n.axesInfo = [];
		FN(e, function(e, n) {
			var a = e.axisPointerModel.option,
				o = t[n];
			o ? (!e.useHandle && (a.status = "show"), a.value = o.value, a.seriesDataIndices = (o.payloadBatch || []).slice()) : !e.useHandle && (a.status = "hide"), "show" === a.status && i.push({
				axisDim: e.axis.dim,
				axisIndex: e.axis.model.componentIndex,
				value: a.value
			})
		})
	}

	function Iv(t, e, n, i) {
		if(Cv(e) || !t.list.length) return void i({
			type: "hideTip"
		});
		var a = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
		i({
			type: "showTip",
			escapeConnect: !0,
			x: e[0],
			y: e[1],
			tooltipOption: n.tooltipOption,
			position: n.position,
			dataIndexInside: a.dataIndexInside,
			dataIndex: a.dataIndex,
			seriesIndex: a.seriesIndex,
			dataByCoordSys: t.list
		})
	}

	function Tv(t, e, n) {
		var i = n.getZr(),
			a = "axisPointerLastHighlights",
			o = HN(i)[a] || {},
			r = HN(i)[a] = {};
		FN(t, function(t) {
			var e = t.axisPointerModel.option;
			"show" === e.status && FN(e.seriesDataIndices, function(t) {
				var e = t.seriesIndex + " | " + t.dataIndex;
				r[e] = t
			})
		});
		var s = [],
			l = [];
		f(o, function(t, e) {
			!r[e] && l.push(t)
		}), f(r, function(t, e) {
			!o[e] && s.push(t)
		}), l.length && n.dispatchAction({
			type: "downplay",
			escapeConnect: !0,
			batch: l
		}), s.length && n.dispatchAction({
			type: "highlight",
			escapeConnect: !0,
			batch: s
		})
	}

	function Av(t, e) {
		for(var n = 0; n < (t || []).length; n++) {
			var i = t[n];
			if(e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
		}
	}

	function Dv(t) {
		var e = t.axis.model,
			n = {},
			i = n.axisDim = t.axis.dim;
		return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n
	}

	function Cv(t) {
		return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
	}

	function Lv(t, e, n) {
		if(!Kw.node) {
			var i = e.getZr();
			XN(i).records || (XN(i).records = {}), kv(i, e);
			var a = XN(i).records[t] || (XN(i).records[t] = {});
			a.handler = n
		}
	}

	function kv(t, e) {
		function n(n, i) {
			t.on(n, function(n) {
				var a = Ev(e);
				YN(XN(t).records, function(t) {
					t && i(t, n, a.dispatchAction)
				}), Pv(a.pendings, e)
			})
		}
		XN(t).initialized || (XN(t).initialized = !0, n("click", x(Nv, "click")), n("mousemove", x(Nv, "mousemove")), n("globalout", Ov))
	}

	function Pv(t, e) {
		var n, i = t.showTip.length,
			a = t.hideTip.length;
		i ? n = t.showTip[i - 1] : a && (n = t.hideTip[a - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
	}

	function Ov(t, e, n) {
		t.handler("leave", null, n)
	}

	function Nv(t, e, n, i) {
		e.handler(t, n, i)
	}

	function Ev(t) {
		var e = {
				showTip: [],
				hideTip: []
			},
			n = function(i) {
				var a = e[i.type];
				a ? a.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
			};
		return {
			dispatchAction: n,
			pendings: e
		}
	}

	function zv(t, e) {
		if(!Kw.node) {
			var n = e.getZr(),
				i = (XN(n).records || {})[t];
			i && (XN(n).records[t] = null)
		}
	}

	function Rv() {}

	function Bv(t, e, n, i) {
		Vv(jN(n).lastProp, i) || (jN(n).lastProp = i, e ? zo(n, i, t) : (n.stopAnimation(), n.attr(i)))
	}

	function Vv(t, e) {
		if(S(t) && S(e)) {
			var n = !0;
			return f(e, function(e, i) {
				n = n && Vv(t[i], e)
			}), !!n
		}
		return t === e
	}

	function Gv(t, e) {
		t[e.get("label.show") ? "show" : "hide"]()
	}

	function Fv(t) {
		return {
			position: t.position.slice(),
			rotation: t.rotation || 0
		}
	}

	function Wv(t, e, n) {
		var i = e.get("z"),
			a = e.get("zlevel");
		t && t.traverse(function(t) {
			"group" !== t.type && (null != i && (t.z = i), null != a && (t.zlevel = a), t.silent = n)
		})
	}

	function Hv(t) {
		var e, n = t.get("type"),
			i = t.getModel(n + "Style");
		return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e
	}

	function Zv(t, e, n, i, a) {
		var o = n.get("value"),
			r = Yv(o, e.axis, e.ecModel, n.get("seriesDataIndices"), {
				precision: n.get("label.precision"),
				formatter: n.get("label.formatter")
			}),
			s = n.getModel("label"),
			l = sT(s.get("padding") || 0),
			u = s.getFont(),
			h = Bn(r, u),
			c = a.position,
			d = h.width + l[1] + l[3],
			f = h.height + l[0] + l[2],
			p = a.align;
		"right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
		var g = a.verticalAlign;
		"bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), Xv(c, d, f, i);
		var m = s.get("backgroundColor");
		m && "auto" !== m || (m = e.get("axisLine.lineStyle.color")), t.label = {
			shape: {
				x: 0,
				y: 0,
				width: d,
				height: f,
				r: s.get("borderRadius")
			},
			position: c.slice(),
			style: {
				text: r,
				textFont: u,
				textFill: s.getTextColor(),
				textPosition: "inside",
				fill: m,
				stroke: s.get("borderColor") || "transparent",
				lineWidth: s.get("borderWidth") || 0,
				shadowBlur: s.get("shadowBlur"),
				shadowColor: s.get("shadowColor"),
				shadowOffsetX: s.get("shadowOffsetX"),
				shadowOffsetY: s.get("shadowOffsetY")
			},
			z2: 10
		}
	}

	function Xv(t, e, n, i) {
		var a = i.getWidth(),
			o = i.getHeight();
		t[0] = Math.min(t[0] + e, a) - e, t[1] = Math.min(t[1] + n, o) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
	}

	function Yv(t, e, n, i, a) {
		t = e.scale.parse(t);
		var o = e.scale.getLabel(t, {
				precision: a.precision
			}),
			r = a.formatter;
		if(r) {
			var s = {
				value: xh(e, t),
				seriesData: []
			};
			f(i, function(t) {
				var e = n.getSeriesByIndex(t.seriesIndex),
					i = t.dataIndexInside,
					a = e && e.getDataParams(i);
				a && s.seriesData.push(a)
			}), b(r) ? o = r.replace("{value}", o) : w(r) && (o = r(s))
		}
		return o
	}

	function Uv(t, e, n) {
		var i = Ie();
		return Le(i, i, n.rotation), Ce(i, i, n.position), Vo([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
	}

	function jv(t, e, n, i, a, o) {
		var r = nL.innerTextLayout(n.rotation, 0, n.labelDirection);
		n.labelMargin = a.get("label.margin"), Zv(e, i, a, o, {
			position: Uv(i.axis, t, n),
			align: r.textAlign,
			verticalAlign: r.textVerticalAlign
		})
	}

	function qv(t, e, n) {
		return n = n || 0, {
			x1: t[n],
			y1: t[1 - n],
			x2: e[n],
			y2: e[1 - n]
		}
	}

	function Kv(t, e, n) {
		return n = n || 0, {
			x: t[n],
			y: t[1 - n],
			width: e[n],
			height: e[1 - n]
		}
	}

	function $v(t, e, n, i, a, o) {
		return {
			cx: t,
			cy: e,
			r0: n,
			r: i,
			startAngle: a,
			endAngle: o,
			clockwise: !0
		}
	}

	function Jv(t, e) {
		var n = {};
		return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
	}

	function Qv(t) {
		return "x" === t.dim ? 0 : 1
	}

	function ty(t) {
		return t.isHorizontal() ? 0 : 1
	}

	function ey(t, e) {
		var n = t.getRect();
		return [n[QN[e]], n[QN[e]] + n[tE[e]]]
	}

	function ny(t, e, n) {
		var i = new LI({
			shape: {
				x: t.x - 10,
				y: t.y - 10,
				width: 0,
				height: t.height + 20
			}
		});
		return Ro(i, {
			shape: {
				width: t.width + 20,
				height: t.height + 20
			}
		}, e, n), i
	}

	function iy(t, e, n) {
		if(t.count())
			for(var i, a = e.coordinateSystem, o = e.getLayerSeries(), r = t.mapDimension("single"), s = t.mapDimension("value"), l = p(o, function(e) {
					return p(e.indices, function(e) {
						var n = a.dataToPoint(t.get(r, e));
						return n[1] = t.get(s, e), n
					})
				}), u = ay(l), h = u.y0, c = n / u.max, d = o.length, f = o[0].indices.length, g = 0; f > g; ++g) {
				i = h[g] * c, t.setItemLayout(o[0].indices[g], {
					layerIndex: 0,
					x: l[0][g][0],
					y0: i,
					y: l[0][g][1] * c
				});
				for(var m = 1; d > m; ++m) i += l[m - 1][g][1] * c, t.setItemLayout(o[m].indices[g], {
					layerIndex: m,
					x: l[m][g][0],
					y0: i,
					y: l[m][g][1] * c
				})
			}
	}

	function ay(t) {
		for(var e, n = t.length, i = t[0].length, a = [], o = [], r = 0, s = {}, l = 0; i > l; ++l) {
			for(var u = 0, e = 0; n > u; ++u) e += t[u][l][1];
			e > r && (r = e), a.push(e)
		}
		for(var h = 0; i > h; ++h) o[h] = (r - a[h]) / 2;
		r = 0;
		for(var c = 0; i > c; ++c) {
			var d = a[c] + o[c];
			d > r && (r = d)
		}
		return s.y0 = o, s.max = r, s
	}

	function oy(t, e, n, i) {
		var a = t.getItemLayout(e),
			o = n.get("symbolRepeat"),
			r = n.get("symbolClip"),
			s = n.get("symbolPosition") || "start",
			l = n.get("symbolRotate"),
			u = (l || 0) * Math.PI / 180 || 0,
			h = n.get("symbolPatternSize") || 2,
			c = n.isAnimationEnabled(),
			d = {
				dataIndex: e,
				layout: a,
				itemModel: n,
				symbolType: t.getItemVisual(e, "symbol") || "circle",
				color: t.getItemVisual(e, "color"),
				symbolClip: r,
				symbolRepeat: o,
				symbolRepeatDirection: n.get("symbolRepeatDirection"),
				symbolPatternSize: h,
				rotation: u,
				animationModel: c ? n : null,
				hoverAnimation: c && n.get("hoverAnimation"),
				z2: n.getShallow("z", !0) || 0
			};
		ry(n, o, a, i, d), ly(t, e, a, o, r, d.boundingLength, d.pxSign, h, i, d), uy(n, d.symbolScale, u, i, d);
		var f = d.symbolSize,
			p = n.get("symbolOffset");
		return _(p) && (p = [Qo(p[0], f[0]), Qo(p[1], f[1])]), hy(n, f, a, o, r, p, s, d.valueLineWidth, d.boundingLength, d.repeatCutLength, i, d), d
	}

	function ry(t, e, n, i, a) {
		var o, r = i.valueDim,
			s = t.get("symbolBoundingData"),
			l = i.coordSys.getOtherAxis(i.coordSys.getBaseAxis()),
			u = l.toGlobalCoord(l.dataToCoord(0)),
			h = 1 - +(n[r.wh] <= 0);
		if(_(s)) {
			var c = [sy(l, s[0]) - u, sy(l, s[1]) - u];
			c[1] < c[0] && c.reverse(), o = c[h]
		} else o = null != s ? sy(l, s) - u : e ? i.coordSysExtent[r.index][h] - u : n[r.wh];
		a.boundingLength = o, e && (a.repeatCutLength = n[r.wh]), a.pxSign = o > 0 ? 1 : 0 > o ? -1 : 0
	}

	function sy(t, e) {
		return t.toGlobalCoord(t.dataToCoord(t.scale.parse(e)))
	}

	function ly(t, e, n, i, a, o, r, s, l, u) {
		var h = l.valueDim,
			c = l.categoryDim,
			d = Math.abs(n[c.wh]),
			f = t.getItemVisual(e, "symbolSize");
		_(f) ? f = f.slice() : (null == f && (f = "100%"), f = [f, f]), f[c.index] = Qo(f[c.index], d), f[h.index] = Qo(f[h.index], i ? d : Math.abs(o)), u.symbolSize = f;
		var p = u.symbolScale = [f[0] / s, f[1] / s];
		p[h.index] *= (l.isHorizontal ? -1 : 1) * r
	}

	function uy(t, e, n, i, a) {
		var o = t.get(lE) || 0;
		o && (hE.attr({
			scale: e.slice(),
			rotation: n
		}), hE.updateTransform(), o /= hE.getLineScale(), o *= e[i.valueDim.index]), a.valueLineWidth = o
	}

	function hy(t, e, n, i, a, o, s, l, u, h, c, d) {
		var f = c.categoryDim,
			p = c.valueDim,
			g = d.pxSign,
			m = Math.max(e[p.index] + l, 0),
			v = m;
		if(i) {
			var y = Math.abs(u),
				x = D(t.get("symbolMargin"), "15%") + "",
				_ = !1;
			x.lastIndexOf("!") === x.length - 1 && (_ = !0, x = x.slice(0, x.length - 1)), x = Qo(x, e[p.index]);
			var w = Math.max(m + 2 * x, 0),
				b = _ ? 0 : 2 * x,
				S = pr(i),
				M = S ? i : Ay((y + b) / w),
				I = y - M * m;
			x = I / 2 / (_ ? M : M - 1), w = m + 2 * x, b = _ ? 0 : 2 * x, S || "fixed" === i || (M = h ? Ay((Math.abs(h) + b) / w) : 0), v = M * w - b, d.repeatTimes = M, d.symbolMargin = x
		}
		var T = g * (v / 2),
			A = d.pathPosition = [];
		A[f.index] = n[f.wh] / 2, A[p.index] = "start" === s ? T : "end" === s ? u - T : u / 2, o && (A[0] += o[0], A[1] += o[1]);
		var C = d.bundlePosition = [];
		C[f.index] = n[f.xy], C[p.index] = n[p.xy];
		var L = d.barRectShape = r({}, n);
		L[p.wh] = g * Math.max(Math.abs(n[p.wh]), Math.abs(A[p.index] + T)), L[f.wh] = n[f.wh];
		var k = d.clipShape = {};
		k[f.xy] = -n[f.xy], k[f.wh] = c.ecSize[f.wh], k[p.xy] = 0, k[p.wh] = n[p.wh]
	}

	function cy(t) {
		var e = t.symbolPatternSize,
			n = Ih(t.symbolType, -e / 2, -e / 2, e, e, t.color);
		return n.attr({
			culling: !0
		}), "image" !== n.type && n.setStyle({
			strokeNoScale: !0
		}), n
	}

	function dy(t, e, n, i) {
		function a(t) {
			var e = h.slice(),
				i = n.pxSign,
				a = t;
			return("start" === n.symbolRepeatDirection ? i > 0 : 0 > i) && (a = d - 1 - t), e[c.index] = p * (a - d / 2 + .5) + h[c.index], {
				position: e,
				scale: n.symbolScale.slice(),
				rotation: n.rotation
			}
		}

		function o() {
			My(t, function(t) {
				t.trigger("emphasis")
			})
		}

		function r() {
			My(t, function(t) {
				t.trigger("normal")
			})
		}
		var s = t.__pictorialBundle,
			l = n.symbolSize,
			u = n.valueLineWidth,
			h = n.pathPosition,
			c = e.valueDim,
			d = n.repeatTimes || 0,
			f = 0,
			p = l[e.valueDim.index] + u + 2 * n.symbolMargin;
		for(My(t, function(t) {
				t.__pictorialAnimationIndex = f, t.__pictorialRepeatTimes = d, d > f ? Iy(t, null, a(f), n, i) : Iy(t, null, {
					scale: [0, 0]
				}, n, i, function() {
					s.remove(t)
				}), xy(t, n), f++
			}); d > f; f++) {
			var g = cy(n);
			g.__pictorialAnimationIndex = f, g.__pictorialRepeatTimes = d, s.add(g);
			var m = a(f);
			Iy(g, {
				position: m.position,
				scale: [0, 0]
			}, {
				scale: m.scale,
				rotation: m.rotation
			}, n, i), g.on("mouseover", o).on("mouseout", r), xy(g, n)
		}
	}

	function fy(t, e, n, i) {
		function a() {
			this.trigger("emphasis")
		}

		function o() {
			this.trigger("normal")
		}
		var r = t.__pictorialBundle,
			s = t.__pictorialMainPath;
		s ? Iy(s, null, {
			position: n.pathPosition.slice(),
			scale: n.symbolScale.slice(),
			rotation: n.rotation
		}, n, i) : (s = t.__pictorialMainPath = cy(n), r.add(s), Iy(s, {
			position: n.pathPosition.slice(),
			scale: [0, 0],
			rotation: n.rotation
		}, {
			scale: n.symbolScale.slice()
		}, n, i), s.on("mouseover", a).on("mouseout", o)), xy(s, n)
	}

	function py(t, e, n) {
		var i = r({}, e.barRectShape),
			a = t.__pictorialBarRect;
		a ? Iy(a, null, {
			shape: i
		}, e, n) : (a = t.__pictorialBarRect = new LI({
			z2: 2,
			shape: i,
			silent: !0,
			style: {
				stroke: "transparent",
				fill: "transparent",
				lineWidth: 0
			}
		}), t.add(a))
	}

	function gy(t, e, n, i) {
		if(n.symbolClip) {
			var a = t.__pictorialClipPath,
				o = r({}, n.clipShape),
				s = e.valueDim,
				l = n.animationModel,
				u = n.dataIndex;
			if(a) zo(a, {
				shape: o
			}, l, u);
			else {
				o[s.wh] = 0, a = new LI({
					shape: o
				}), t.__pictorialBundle.setClipPath(a), t.__pictorialClipPath = a;
				var h = {};
				h[s.wh] = n.clipShape[s.wh], qI[i ? "updateProps" : "initProps"](a, {
					shape: h
				}, l, u)
			}
		}
	}

	function my(t, e) {
		var n = t.getItemModel(e);
		return n.getAnimationDelayParams = vy, n.isAnimationEnabled = yy, n
	}

	function vy(t) {
		return {
			index: t.__pictorialAnimationIndex,
			count: t.__pictorialRepeatTimes
		}
	}

	function yy() {
		return this.parentModel.isAnimationEnabled() && !!this.getShallow("animation")
	}

	function xy(t, e) {
		t.off("emphasis").off("normal");
		var n = e.symbolScale.slice();
		e.hoverAnimation && t.on("emphasis", function() {
			this.animateTo({
				scale: [1.1 * n[0], 1.1 * n[1]]
			}, 400, "elasticOut")
		}).on("normal", function() {
			this.animateTo({
				scale: n.slice()
			}, 400, "elasticOut")
		})
	}

	function _y(t, e, n, i) {
		var a = new rS,
			o = new rS;
		return a.add(o), a.__pictorialBundle = o, o.attr("position", n.bundlePosition.slice()), n.symbolRepeat ? dy(a, e, n) : fy(a, e, n), py(a, n, i), gy(a, e, n, i), a.__pictorialShapeStr = Sy(t, n), a.__pictorialSymbolMeta = n, a
	}

	function wy(t, e, n) {
		var i = n.animationModel,
			a = n.dataIndex,
			o = t.__pictorialBundle;
		zo(o, {
			position: n.bundlePosition.slice()
		}, i, a), n.symbolRepeat ? dy(t, e, n, !0) : fy(t, e, n, !0), py(t, n, !0), gy(t, e, n, !0)
	}

	function by(t, e, n, i) {
		var a = i.__pictorialBarRect;
		a && (a.style.text = null);
		var o = [];
		My(i, function(t) {
			o.push(t)
		}), i.__pictorialMainPath && o.push(i.__pictorialMainPath), i.__pictorialClipPath && (n = null), f(o, function(t) {
			zo(t, {
				scale: [0, 0]
			}, n, e, function() {
				i.parent && i.parent.remove(i)
			})
		}), t.setItemGraphicEl(e, null)
	}

	function Sy(t, e) {
		return [t.getItemVisual(e.dataIndex, "symbol") || "none", !!e.symbolRepeat, !!e.symbolClip].join(":")
	}

	function My(t, e, n) {
		f(t.__pictorialBundle.children(), function(i) {
			i !== t.__pictorialBarRect && e.call(n, i)
		})
	}

	function Iy(t, e, n, i, a, o) {
		e && t.attr(e), i.symbolClip && !a ? n && t.attr(n) : n && qI[a ? "updateProps" : "initProps"](t, n, i.animationModel, i.dataIndex, o)
	}

	function Ty(t, e, n) {
		var i = n.color,
			a = n.dataIndex,
			o = n.itemModel,
			r = o.getModel("itemStyle").getItemStyle(["color"]),
			l = o.getModel("emphasis.itemStyle").getItemStyle(),
			u = o.getShallow("cursor");
		My(t, function(t) {
			t.setColor(i), t.setStyle(s({
				fill: i,
				opacity: n.opacity
			}, r)), So(t, l), u && (t.cursor = u), t.z2 = n.z2
		});
		var h = {},
			c = e.valueDim.posDesc[+(n.boundingLength > 0)],
			d = t.__pictorialBarRect;
		sc(d.style, h, o, i, e.seriesModel, a, c), So(d, h)
	}

	function Ay(t) {
		var e = Math.round(t);
		return Math.abs(t - e) < 1e-4 ? e : Math.ceil(t)
	}

	function Dy(t, e) {
		return e = e || [0, 0], p(["x", "y"], function(n, i) {
			var a = this.getAxis(n),
				o = e[i],
				r = t[i] / 2;
			return "category" === a.type ? a.getBandWidth() : Math.abs(a.dataToCoord(o - r) - a.dataToCoord(o + r))
		}, this)
	}

	function Cy(t, e) {
		return e = e || [0, 0], p([0, 1], function(n) {
			var i = e[n],
				a = t[n] / 2,
				o = [],
				r = [];
			return o[n] = i - a, r[n] = i + a, o[1 - n] = r[1 - n] = e[1 - n], Math.abs(this.dataToPoint(o)[n] - this.dataToPoint(r)[n])
		}, this)
	}

	function Ly(t, e) {
		var n = this.getAxis(),
			i = e instanceof Array ? e[0] : e,
			a = (t instanceof Array ? t[0] : t) / 2;
		return "category" === n.type ? n.getBandWidth() : Math.abs(n.dataToCoord(i - a) - n.dataToCoord(i + a))
	}

	function ky(t, e) {
		return p(["Radius", "Angle"], function(n, i) {
			var a = this["get" + n + "Axis"](),
				o = e[i],
				r = t[i] / 2,
				s = "dataTo" + n,
				l = "category" === a.type ? a.getBandWidth() : Math.abs(a[s](o - r) - a[s](o + r));
			return "Angle" === n && (l = l * Math.PI / 180), l
		}, this)
	}

	function Py(t) {
		var e, n = t.type;
		if("path" === n) {
			var i = t.shape,
				a = null != i.width && null != i.height ? {
					x: i.x || 0,
					y: i.y || 0,
					width: i.width,
					height: i.height
				} : null,
				o = Zy(i);
			e = no(o, null, a, i.layout || "center"), e.__customPathData = o
		} else if("image" === n) e = new _i({}), e.__customImagePath = t.style.image;
		else if("text" === n) e = new yI({}), e.__customText = t.style.text;
		else {
			var r = qI[n.charAt(0).toUpperCase() + n.slice(1)];
			e = new r
		}
		return e.__customGraphicType = n, e.name = t.name, e
	}

	function Oy(t, e, n, a, o, r, s) {
		var l = {},
			u = n.style || {};
		if(n.shape && (l.shape = i(n.shape)), n.position && (l.position = n.position.slice()), n.scale && (l.scale = n.scale.slice()), n.origin && (l.origin = n.origin.slice()), n.rotation && (l.rotation = n.rotation), "image" === t.type && n.style) {
			var h = l.style = {};
			f(["x", "y", "width", "height"], function(e) {
				Ny(e, h, u, t.style, r)
			})
		}
		if("text" === t.type && n.style) {
			var h = l.style = {};
			f(["x", "y"], function(e) {
				Ny(e, h, u, t.style, r)
			}), !u.hasOwnProperty("textFill") && u.fill && (u.textFill = u.fill), !u.hasOwnProperty("textStroke") && u.stroke && (u.textStroke = u.stroke)
		}
		if("group" !== t.type && (t.useStyle(u), r)) {
			t.style.opacity = 0;
			var c = u.opacity;
			null == c && (c = 1), Ro(t, {
				style: {
					opacity: c
				}
			}, a, e)
		}
		r ? t.attr(l) : zo(t, l, a, e), n.hasOwnProperty("z2") && t.attr("z2", n.z2 || 0), n.hasOwnProperty("silent") && t.attr("silent", n.silent), n.hasOwnProperty("invisible") && t.attr("invisible", n.invisible), n.hasOwnProperty("ignore") && t.attr("ignore", n.ignore), n.hasOwnProperty("info") && t.attr("info", n.info);
		var d = n.styleEmphasis,
			p = d === !1;
		t.__cusHasEmphStl && null == d || !t.__cusHasEmphStl && p || (vo(t, d), t.__cusHasEmphStl = !p), s && Mo(t, !p)
	}

	function Ny(t, e, n, i, a) {
		null == n[t] || a || (e[t] = n[t], n[t] = i[t])
	}

	function Ey(t, e, n, i) {
		function a(t) {
			null == t && (t = v), M && (y = e.getItemModel(t), x = y.getModel(yE), _ = y.getModel(xE), w = e.getItemVisual(t, "color"), M = !1)
		}

		function o(t, n) {
			return null == n && (n = v), e.get(e.getDimension(t || 0), n)
		}

		function l(n, i) {
			null == i && (i = v), a(i);
			var o = y.getModel(mE).getItemStyle();
			null != w && (o.fill = w);
			var s = e.getItemVisual(i, "opacity");
			return null != s && (o.opacity = s), To(o, x, null, {
				autoColor: w,
				isRectText: !0
			}), o.text = x.getShallow("show") ? C(t.getFormattedLabel(i, "normal"), rc(e, i)) : null, n && r(o, n), o
		}

		function u(n, i) {
			null == i && (i = v), a(i);
			var o = y.getModel(vE).getItemStyle();
			return To(o, _, null, {
				isRectText: !0
			}, !0), o.text = _.getShallow("show") ? L(t.getFormattedLabel(i, "emphasis"), t.getFormattedLabel(i, "normal"), rc(e, i)) : null, n && r(o, n), o
		}

		function h(t, n) {
			return null == n && (n = v), e.getItemVisual(n, t)
		}

		function c(t) {
			if(g.getBaseAxis) {
				var e = g.getBaseAxis();
				return ih(s({
					axis: e
				}, t), i)
			}
		}

		function d() {
			return n.getCurrentSeriesIndices()
		}

		function f(t) {
			return No(t, n)
		}
		var p = t.get("renderItem"),
			g = t.coordinateSystem,
			m = {};
		g && (m = g.prepareCustoms ? g.prepareCustoms() : wE[g.type](g));
		var v, y, x, _, w, b = s({
				getWidth: i.getWidth,
				getHeight: i.getHeight,
				getZr: i.getZr,
				getDevicePixelRatio: i.getDevicePixelRatio,
				value: o,
				style: l,
				styleEmphasis: u,
				visual: h,
				barLayout: c,
				currentSeriesIndices: d,
				font: f
			}, m.api || {}),
			S = {
				context: {},
				seriesId: t.id,
				seriesName: t.name,
				seriesIndex: t.seriesIndex,
				coordSys: m.coordSys,
				dataInsideLength: e.count(),
				encode: zy(t.getData())
			},
			M = !0;
		return function(t, n) {
			return v = t, M = !0, p && p(s({
				dataIndexInside: t,
				dataIndex: e.getRawIndex(t),
				actionType: n ? n.type : null
			}, S), b)
		}
	}

	function zy(t) {
		var e = {};
		return f(t.dimensions, function(n, i) {
			var a = t.getDimensionInfo(n);
			if(!a.isExtraCoord) {
				var o = a.coordDim,
					r = e[o] = e[o] || [];
				r[a.coordDimIndex] = i
			}
		}), e
	}

	function Ry(t, e, n, i, a, o) {
		return t = By(t, e, n, i, a, o, !0), t && o.setItemGraphicEl(e, t), t
	}

	function By(t, e, n, i, a, o, r) {
		var s = !n;
		n = n || {};
		var l = n.type,
			u = n.shape,
			h = n.style;
		if(t && (s || null != l && l !== t.__customGraphicType || "path" === l && Xy(u) && Zy(u) !== t.__customPathData || "image" === l && Yy(h, "image") && h.image !== t.__customImagePath || "text" === l && Yy(u, "text") && h.text !== t.__customText) && (a.remove(t), t = null), !s) {
			var c = !t;
			return !t && (t = Py(n)), Oy(t, e, n, i, o, c, r), "group" === l && Vy(t, e, n, i, o), a.add(t), t
		}
	}

	function Vy(t, e, n, i, a) {
		var o = n.children,
			r = o ? o.length : 0,
			s = n.$mergeChildren,
			l = "byName" === s || n.diffChildrenByName,
			u = s === !1;
		if(r || l || u) {
			if(l) return void Gy({
				oldChildren: t.children() || [],
				newChildren: o || [],
				dataIndex: e,
				animatableModel: i,
				group: t,
				data: a
			});
			u && t.removeAll();
			for(var h = 0; r > h; h++) o[h] && By(t.childAt(h), e, o[h], i, t, a)
		}
	}

	function Gy(t) {
		new xu(t.oldChildren, t.newChildren, Fy, Fy, t).add(Wy).update(Wy).remove(Hy).execute()
	}

	function Fy(t, e) {
		var n = t && t.name;
		return null != n ? n : _E + e
	}

	function Wy(t, e) {
		var n = this.context,
			i = null != t ? n.newChildren[t] : null,
			a = null != e ? n.oldChildren[e] : null;
		By(a, n.dataIndex, i, n.animatableModel, n.group, n.data)
	}

	function Hy(t) {
		var e = this.context,
			n = e.oldChildren[t];
		n && e.group.remove(n)
	}

	function Zy(t) {
		return t && (t.pathData || t.d)
	}

	function Xy(t) {
		return t && (t.hasOwnProperty("pathData") || t.hasOwnProperty("d"))
	}

	function Yy(t, e) {
		return t && t.hasOwnProperty(e)
	}

	function Uy(t) {
		return t.get("stack") || "__ec_stack_" + t.seriesIndex
	}

	function jy(t) {
		return t.dim
	}

	function qy(t, e, n) {
		var i = (n.getWidth(), n.getHeight(), {}),
			a = Ky(m(e.getSeriesByType(t), function(t) {
				return !e.isSeriesFiltered(t) && t.coordinateSystem && "polar" === t.coordinateSystem.type
			}));
		e.eachSeriesByType(t, function(t) {
			if("polar" === t.coordinateSystem.type) {
				var e = t.getData(),
					n = t.coordinateSystem,
					o = n.getBaseAxis(),
					r = Uy(t),
					s = a[jy(o)][r],
					l = s.offset,
					u = s.width,
					h = n.getOtherAxis(o),
					c = t.coordinateSystem.cx,
					d = t.coordinateSystem.cy,
					f = t.get("barMinHeight") || 0,
					p = t.get("barMinAngle") || 0;
				i[r] = i[r] || [];
				for(var g = e.mapDimension(h.dim), m = e.mapDimension(o.dim), v = Fu(e, g), y = h.getExtent()[0], x = 0, _ = e.count(); _ > x; x++) {
					var w = e.get(g, x),
						b = e.get(m, x);
					if(!isNaN(w)) {
						var S = w >= 0 ? "p" : "n",
							M = y;
						v && (i[r][b] || (i[r][b] = {
							p: y,
							n: y
						}), M = i[r][b][S]);
						var I, T, A, D;
						if("radius" === h.dim) {
							var C = h.dataToRadius(w) - y,
								L = o.dataToAngle(b);
							Math.abs(C) < f && (C = (0 > C ? -1 : 1) * f), I = M, T = M + C, A = L - l, D = A - u, v && (i[r][b][S] = T)
						} else {
							var k = h.dataToAngle(w, !0) - y,
								P = o.dataToRadius(b);
							Math.abs(k) < p && (k = (0 > k ? -1 : 1) * p), I = P + l, T = I + u, A = M, D = M + k, v && (i[r][b][S] = D)
						}
						e.setItemLayout(x, {
							cx: c,
							cy: d,
							r0: I,
							r: T,
							startAngle: -A * Math.PI / 180,
							endAngle: -D * Math.PI / 180
						})
					}
				}
			}
		}, this)
	}

	function Ky(t) {
		var e = {};
		f(t, function(t) {
			var n = t.getData(),
				i = t.coordinateSystem,
				a = i.getBaseAxis(),
				o = a.getExtent(),
				r = "category" === a.type ? a.getBandWidth() : Math.abs(o[1] - o[0]) / n.count(),
				s = e[jy(a)] || {
					bandWidth: r,
					remainedWidth: r,
					autoWidthCount: 0,
					categoryGap: "20%",
					gap: "30%",
					stacks: {}
				},
				l = s.stacks;
			e[jy(a)] = s;
			var u = Uy(t);
			l[u] || s.autoWidthCount++, l[u] = l[u] || {
				width: 0,
				maxWidth: 0
			};
			var h = Qo(t.get("barWidth"), r),
				c = Qo(t.get("barMaxWidth"), r),
				d = t.get("barGap"),
				f = t.get("barCategoryGap");
			h && !l[u].width && (h = Math.min(s.remainedWidth, h), l[u].width = h, s.remainedWidth -= h), c && (l[u].maxWidth = c), null != d && (s.gap = d), null != f && (s.categoryGap = f)
		});
		var n = {};
		return f(e, function(t, e) {
			n[e] = {};
			var i = t.stacks,
				a = t.bandWidth,
				o = Qo(t.categoryGap, a),
				r = Qo(t.gap, 1),
				s = t.remainedWidth,
				l = t.autoWidthCount,
				u = (s - o) / (l + (l - 1) * r);
			u = Math.max(u, 0), f(i, function(t) {
				var e = t.maxWidth;
				e && u > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--)
			}), u = (s - o) / (l + (l - 1) * r), u = Math.max(u, 0);
			var h, c = 0;
			f(i, function(t) {
				t.width || (t.width = u), h = t, c += t.width * (1 + r)
			}), h && (c -= h.width * r);
			var d = -c / 2;
			f(i, function(t, i) {
				n[e][i] = n[e][i] || {
					offset: d,
					width: t.width
				}, d += t.width * (1 + r)
			})
		}), n
	}

	function $y(t, e) {
		NC.call(this, "radius", t, e), this.type = "category"
	}

	function Jy(t, e) {
		e = e || [0, 360], NC.call(this, "angle", t, e), this.type = "category"
	}

	function Qy(t, e) {
		return e.type || (e.data ? "category" : "value")
	}

	function tx(t, e, n) {
		var i = e.get("center"),
			a = n.getWidth(),
			o = n.getHeight();
		t.cx = Qo(i[0], a), t.cy = Qo(i[1], o);
		var r = t.getRadiusAxis(),
			s = Math.min(a, o) / 2,
			l = Qo(e.get("radius"), s);
		r.inverse ? r.setExtent(l, 0) : r.setExtent(0, l)
	}

	function ex(t) {
		var e = this,
			n = e.getAngleAxis(),
			i = e.getRadiusAxis();
		if(n.scale.setExtent(1 / 0, -1 / 0), i.scale.setExtent(1 / 0, -1 / 0), t.eachSeries(function(t) {
				if(t.coordinateSystem === e) {
					var a = t.getData();
					f(a.mapDimension("radius", !0), function(t) {
						i.scale.unionExtentFromData(a, Wu(a, t))
					}), f(a.mapDimension("angle", !0), function(t) {
						n.scale.unionExtentFromData(a, Wu(a, t))
					})
				}
			}), gh(n.scale, n.model), gh(i.scale, i.model), "category" === n.type && !n.onBand) {
			var a = n.getExtent(),
				o = 360 / n.scale.count();
			n.inverse ? a[1] += o : a[1] -= o, n.setExtent(a[0], a[1])
		}
	}

	function nx(t, e) {
		if(t.type = e.get("type"), t.scale = mh(e), t.onBand = e.get("boundaryGap") && "category" === t.type, t.inverse = e.get("inverse"), "angleAxis" === e.mainType) {
			t.inverse ^= e.get("clockwise");
			var n = e.get("startAngle");
			t.setExtent(n, n + (t.inverse ? -360 : 360))
		}
		e.axis = t, t.model = e
	}

	function ix(t, e, n) {
		e[1] > e[0] && (e = e.slice().reverse());
		var i = t.coordToPoint([e[0], n]),
			a = t.coordToPoint([e[1], n]);
		return {
			x1: i[0],
			y1: i[1],
			x2: a[0],
			y2: a[1]
		}
	}

	function ax(t) {
		var e = t.getRadiusAxis();
		return e.inverse ? 0 : 1
	}

	function ox(t) {
		var e = t[0],
			n = t[t.length - 1];
		e && n && Math.abs(Math.abs(e.coord - n.coord) - 360) < 1e-4 && t.pop()
	}

	function rx(t, e, n) {
		return {
			position: [t.cx, t.cy],
			rotation: n / 180 * Math.PI,
			labelDirection: -1,
			tickDirection: -1,
			nameDirection: 1,
			labelRotate: e.getModel("axisLabel").get("rotate"),
			z2: 1
		}
	}

	function sx(t, e, n, i, a) {
		var o = e.axis,
			r = o.dataToCoord(t),
			s = i.getAngleAxis().getExtent()[0];
		s = s / 180 * Math.PI;
		var l, u, h, c = i.getRadiusAxis().getExtent();
		if("radius" === o.dim) {
			var d = Ie();
			Le(d, d, s), Ce(d, d, [i.cx, i.cy]), l = Vo([r, -a], d);
			var f = e.getModel("axisLabel").get("rotate") || 0,
				p = nL.innerTextLayout(s, f * Math.PI / 180, -1);
			u = p.textAlign, h = p.textVerticalAlign
		} else {
			var g = c[1];
			l = i.coordToPoint([g + a, r]);
			var m = i.cx,
				v = i.cy;
			u = Math.abs(l[0] - m) / g < .3 ? "center" : l[0] > m ? "left" : "right", h = Math.abs(l[1] - v) / g < .3 ? "middle" : l[1] > v ? "top" : "bottom"
		}
		return {
			position: l,
			align: u,
			verticalAlign: h
		}
	}

	function lx(t, e) {
		e.update = "updateView", au(e, function(e, n) {
			var i = {};
			return n.eachComponent({
				mainType: "geo",
				query: e
			}, function(n) {
				n[t](e.name);
				var a = n.coordinateSystem;
				f(a.regions, function(t) {
					i[t.name] = n.isSelected(t.name) || !1
				})
			}), {
				selected: i,
				name: e.name
			}
		})
	}

	function ux(t) {
		this._model = t
	}

	function hx(t, e, n, i) {
		var a = n.calendarModel,
			o = n.seriesModel,
			r = a ? a.coordinateSystem : o ? o.coordinateSystem : null;
		return r === this ? r[t](i) : null
	}

	function cx(t, e) {
		var n = t.cellSize;
		_(n) ? 1 === n.length && (n[1] = n[0]) : n = t.cellSize = [n, n];
		var i = p([0, 1], function(t) {
			return Lr(e, t) && (n[t] = "auto"), null != n[t] && "auto" !== n[t]
		});
		kr(t, e, {
			type: "box",
			ignoreSize: i
		})
	}

	function dx(t, e, n) {
		var i, a = {},
			o = "toggleSelected" === t;
		return n.eachComponent("legend", function(n) {
			o && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name), i = n.isSelected(e.name));
			var r = n.getData();
			f(r, function(t) {
				var e = t.get("name");
				if("\n" !== e && "" !== e) {
					var i = n.isSelected(e);
					a[e] = a.hasOwnProperty(e) ? a[e] && i : i
				}
			})
		}), {
			name: e.name,
			selected: a
		}
	}

	function fx(t, e, n) {
		var i = e.getBoxLayoutParams(),
			a = e.get("padding"),
			o = {
				width: n.getWidth(),
				height: n.getHeight()
			},
			r = Dr(i, o, a);
		vT(e.get("orient"), t, e.get("itemGap"), r.width, r.height), Cr(t, i, o, a)
	}

	function px(t, e) {
		var n = sT(e.get("padding")),
			i = e.getItemStyle(["color", "opacity"]);
		i.fill = e.get("backgroundColor");
		var t = new LI({
			shape: {
				x: t.x - n[3],
				y: t.y - n[0],
				width: t.width + n[1] + n[3],
				height: t.height + n[0] + n[2],
				r: e.get("borderRadius")
			},
			style: i,
			silent: !0,
			z2: -1
		});
		return t
	}

	function gx(t, e) {
		e.dispatchAction({
			type: "legendToggleSelect",
			name: t
		})
	}

	function mx(t, e, n, i) {
		var a = n.getZr().storage.getDisplayList()[0];
		a && a.useHoverLayer || n.dispatchAction({
			type: "highlight",
			seriesName: t,
			name: e,
			excludeSeriesId: i
		})
	}

	function vx(t, e, n, i) {
		var a = n.getZr().storage.getDisplayList()[0];
		a && a.useHoverLayer || n.dispatchAction({
			type: "downplay",
			seriesName: t,
			name: e,
			excludeSeriesId: i
		})
	}

	function yx(t, e, n) {
		var i = t.getOrient(),
			a = [1, 1];
		a[i.index] = 0, kr(e, n, {
			type: "box",
			ignoreSize: a
		})
	}

	function xx(t) {
		var e = "cubic-bezier(0.23, 1, 0.32, 1)",
			n = "left " + t + "s " + e + ",top " + t + "s " + e;
		return p(KE, function(t) {
			return t + "transition:" + n
		}).join(";")
	}

	function _x(t) {
		var e = [],
			n = t.get("fontSize"),
			i = t.getTextColor();
		return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), jE(["decoration", "align"], function(n) {
			var i = t.get(n);
			i && e.push("text-" + n + ":" + i)
		}), e.join(";")
	}

	function bx(t) {
		var e = [],
			n = t.get("transitionDuration"),
			i = t.get("backgroundColor"),
			a = t.getModel("textStyle"),
			o = t.get("padding");
		return n && e.push(xx(n)), i && (Kw.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + Ke(i)), e.push("filter:alpha(opacity=70)"))), jE(["width", "color", "radius"], function(n) {
			var i = "border-" + n,
				a = qE(i),
				o = t.get(a);
			null != o && e.push(i + ":" + o + ("color" === n ? "" : "px"))
		}), e.push(_x(a)), null != o && e.push("padding:" + sT(o).join("px ") + "px"), e.join(";") + ";"
	}

	function Sx(t, e) {
		if(Kw.wxa) return null;
		var n = document.createElement("div"),
			i = this._zr = e.getZr();
		this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;
		var a = this;
		n.onmouseenter = function() {
			a._enterable && (clearTimeout(a._hideTimeout), a._show = !0), a._inContent = !0
		}, n.onmousemove = function(e) {
			if(e = e || window.event, !a._enterable) {
				var n = i.handler;
				ge(t, e, !0), n.dispatch("mousemove", e)
			}
		}, n.onmouseleave = function() {
			a._enterable && a._show && a.hideLater(a._hideDelay), a._inContent = !1
		}
	}

	function Mx(t) {
		this._zr = t.getZr(), this._show = !1, this._hideTimeout
	}

	function Ix(t) {
		for(var e = t.pop(); t.length;) {
			var n = t.pop();
			n && (Xo.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {
				formatter: n
			}), e = new Xo(n, e, e.ecModel))
		}
		return e
	}

	function Tx(t, e) {
		return t.dispatchAction || y(e.dispatchAction, e)
	}

	function Ax(t, e, n, i, a, o, r) {
		var s = n.getOuterSize(),
			l = s.width,
			u = s.height;
		return null != o && (t + l + o > i ? t -= l + o : t += o), null != r && (e + u + r > a ? e -= u + r : e += r), [t, e]
	}

	function Dx(t, e, n, i, a) {
		var o = n.getOuterSize(),
			r = o.width,
			s = o.height;
		return t = Math.min(t + r, i) - r, e = Math.min(e + s, a) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
	}

	function Cx(t, e, n) {
		var i = n[0],
			a = n[1],
			o = 5,
			r = 0,
			s = 0,
			l = e.width,
			u = e.height;
		switch(t) {
			case "inside":
				r = e.x + l / 2 - i / 2, s = e.y + u / 2 - a / 2;
				break;
			case "top":
				r = e.x + l / 2 - i / 2, s = e.y - a - o;
				break;
			case "bottom":
				r = e.x + l / 2 - i / 2, s = e.y + u + o;
				break;
			case "left":
				r = e.x - i - o, s = e.y + u / 2 - a / 2;
				break;
			case "right":
				r = e.x + l + o, s = e.y + u / 2 - a / 2
		}
		return [r, s]
	}

	function Lx(t) {
		return "center" === t || "middle" === t
	}

	function kx(t) {
		Bi(t, "label", ["show"])
	}

	function Px(t) {
		return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
	}

	function Ox(t) {
		return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
	}

	function Nx(t, e, n, i, a, o) {
		var r = [],
			s = Fu(e, i),
			l = s ? e.getCalculationInfo("stackResultDimension") : i,
			u = Gx(e, l, t),
			h = e.indicesOfNearest(l, u)[0];
		r[a] = e.get(n, h), r[o] = e.get(i, h);
		var c = nr(e.get(i, h));
		return c = Math.min(c, 20), c >= 0 && (r[o] = +r[o].toFixed(c)), r
	}

	function Ex(t, e) {
		var n = t.getData(),
			a = t.coordinateSystem;
		if(e && !Ox(e) && !_(e.coord) && a) {
			var o = a.dimensions,
				r = zx(e, n, a, t);
			if(e = i(e), e.type && sz[e.type] && r.baseAxis && r.valueAxis) {
				var s = oz(o, r.baseAxis.dim),
					l = oz(o, r.valueAxis.dim);
				e.coord = sz[e.type](n, r.baseDataDim, r.valueDataDim, s, l), e.value = e.coord[l]
			} else {
				for(var u = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis], h = 0; 2 > h; h++) sz[u[h]] && (u[h] = Gx(n, n.mapDimension(o[h]), u[h]));
				e.coord = u
			}
		}
		return e
	}

	function zx(t, e, n, i) {
		var a = {};
		return null != t.valueIndex || null != t.valueDim ? (a.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, a.valueAxis = n.getAxis(Rx(i, a.valueDataDim)), a.baseAxis = n.getOtherAxis(a.valueAxis), a.baseDataDim = e.mapDimension(a.baseAxis.dim)) : (a.baseAxis = i.getBaseAxis(), a.valueAxis = n.getOtherAxis(a.baseAxis), a.baseDataDim = e.mapDimension(a.baseAxis.dim), a.valueDataDim = e.mapDimension(a.valueAxis.dim)), a
	}

	function Rx(t, e) {
		var n = t.getData(),
			i = n.dimensions;
		e = n.getDimension(e);
		for(var a = 0; a < i.length; a++) {
			var o = n.getDimensionInfo(i[a]);
			if(o.name === e) return o.coordDim
		}
	}

	function Bx(t, e) {
		return t && t.containData && e.coord && !Px(e) ? t.containData(e.coord) : !0
	}

	function Vx(t, e, n, i) {
		return 2 > i ? t.coord && t.coord[i] : t.value
	}

	function Gx(t, e, n) {
		if("average" === n) {
			var i = 0,
				a = 0;
			return t.each(e, function(t) {
				isNaN(t) || (i += t, a++)
			}), i / a
		}
		return "median" === n ? t.getMedian(e) : t.getDataExtent(e, !0)["max" === n ? 1 : 0]
	}

	function Fx(t, e, n) {
		var i = e.coordinateSystem;
		t.each(function(a) {
			var o, r = t.getItemModel(a),
				s = Qo(r.get("x"), n.getWidth()),
				l = Qo(r.get("y"), n.getHeight());
			if(isNaN(s) || isNaN(l)) {
				if(e.getMarkerPosition) o = e.getMarkerPosition(t.getValues(t.dimensions, a));
				else if(i) {
					var u = t.get(i.dimensions[0], a),
						h = t.get(i.dimensions[1], a);
					o = i.dataToPoint([u, h])
				}
			} else o = [s, l];
			isNaN(s) || (o[0] = s), isNaN(l) || (o[1] = l), t.setItemLayout(a, o)
		})
	}

	function Wx(t, e, n) {
		var i;
		i = t ? p(t && t.dimensions, function(t) {
			var n = e.getData().getDimensionInfo(e.getData().mapDimension(t)) || {};
			return s({
				name: t
			}, n)
		}) : [{
			name: "value",
			type: "float"
		}];
		var a = new GD(i, n),
			o = p(n.get("data"), x(Ex, e));
		return t && (o = m(o, x(Bx, t))), a.initData(o, null, t ? Vx : function(t) {
			return t.value
		}), a
	}

	function Hx(t) {
		return !isNaN(t) && !isFinite(t)
	}

	function Zx(t, e, n, i) {
		var a = 1 - t,
			o = i.dimensions[t];
		return Hx(e[a]) && Hx(n[a]) && e[t] === n[t] && i.getAxis(o).containData(e[t])
	}

	function Xx(t, e) {
		if("cartesian2d" === t.type) {
			var n = e[0].coord,
				i = e[1].coord;
			if(n && i && (Zx(1, n, i, t) || Zx(0, n, i, t))) return !0
		}
		return Bx(t, e[0]) && Bx(t, e[1])
	}

	function Yx(t, e, n, i, a) {
		var o, r = i.coordinateSystem,
			s = t.getItemModel(e),
			l = Qo(s.get("x"), a.getWidth()),
			u = Qo(s.get("y"), a.getHeight());
		if(isNaN(l) || isNaN(u)) {
			if(i.getMarkerPosition) o = i.getMarkerPosition(t.getValues(t.dimensions, e));
			else {
				var h = r.dimensions,
					c = t.get(h[0], e),
					d = t.get(h[1], e);
				o = r.dataToPoint([c, d])
			}
			if("cartesian2d" === r.type) {
				var f = r.getAxis("x"),
					p = r.getAxis("y"),
					h = r.dimensions;
				Hx(t.get(h[0], e)) ? o[0] = f.toGlobalCoord(f.getExtent()[n ? 0 : 1]) : Hx(t.get(h[1], e)) && (o[1] = p.toGlobalCoord(p.getExtent()[n ? 0 : 1]))
			}
			isNaN(l) || (o[0] = l), isNaN(u) || (o[1] = u)
		} else o = [l, u];
		t.setItemLayout(e, o)
	}

	function Ux(t, e, n) {
		var i;
		i = t ? p(t && t.dimensions, function(t) {
			var n = e.getData().getDimensionInfo(e.getData().mapDimension(t)) || {};
			return s({
				name: t
			}, n)
		}) : [{
			name: "value",
			type: "float"
		}];
		var a = new GD(i, n),
			o = new GD(i, n),
			r = new GD([], n),
			l = p(n.get("data"), x(uz, e, t, n));
		t && (l = m(l, x(Xx, t)));
		var u = t ? Vx : function(t) {
			return t.value
		};
		return a.initData(p(l, function(t) {
			return t[0]
		}), null, u), o.initData(p(l, function(t) {
			return t[1]
		}), null, u), r.initData(p(l, function(t) {
			return t[2]
		})), r.hasItemOption = !0, {
			from: a,
			to: o,
			line: r
		}
	}

	function jx(t) {
		return !isNaN(t) && !isFinite(t)
	}

	function qx(t, e, n) {
		var i = 1 - t;
		return jx(e[i]) && jx(n[i])
	}

	function Kx(t, e) {
		var n = e.coord[0],
			i = e.coord[1];
		return "cartesian2d" === t.type && n && i && (qx(1, n, i, t) || qx(0, n, i, t)) ? !0 : Bx(t, {
			coord: n,
			x: e.x0,
			y: e.y0
		}) || Bx(t, {
			coord: i,
			x: e.x1,
			y: e.y1
		})
	}

	function $x(t, e, n, i, a) {
		var o, r = i.coordinateSystem,
			s = t.getItemModel(e),
			l = Qo(s.get(n[0]), a.getWidth()),
			u = Qo(s.get(n[1]), a.getHeight());
		if(isNaN(l) || isNaN(u)) {
			if(i.getMarkerPosition) o = i.getMarkerPosition(t.getValues(n, e));
			else {
				var h = t.get(n[0], e),
					c = t.get(n[1], e),
					d = [h, c];
				r.clampData && r.clampData(d, d), o = r.dataToPoint(d, !0)
			}
			if("cartesian2d" === r.type) {
				var f = r.getAxis("x"),
					p = r.getAxis("y"),
					h = t.get(n[0], e),
					c = t.get(n[1], e);
				jx(h) ? o[0] = f.toGlobalCoord(f.getExtent()["x0" === n[0] ? 0 : 1]) : jx(c) && (o[1] = p.toGlobalCoord(p.getExtent()["y0" === n[1] ? 0 : 1]))
			}
			isNaN(l) || (o[0] = l), isNaN(u) || (o[1] = u)
		} else o = [l, u];
		return o
	}

	function Jx(t, e, n) {
		var i, a, o = ["x0", "y0", "x1", "y1"];
		t ? (i = p(t && t.dimensions, function(t) {
			var n = e.getData(),
				i = n.getDimensionInfo(n.mapDimension(t)) || {};
			return s({
				name: t
			}, i)
		}), a = new GD(p(o, function(t, e) {
			return {
				name: t,
				type: i[e % 2].type
			}
		}), n)) : (i = [{
			name: "value",
			type: "float"
		}], a = new GD(i, n));
		var r = p(n.get("data"), x(hz, e, t, n));
		t && (r = m(r, x(Kx, t)));
		var l = t ? function(t, e, n, i) {
			return t.coord[Math.floor(i / 2)][i % 2]
		} : function(t) {
			return t.value
		};
		return a.initData(r, null, l), a.hasItemOption = !0, a
	}

	function Qx(t) {
		var e = t.type,
			n = {
				number: "value",
				time: "time"
			};
		if(n[e] && (t.axisType = n[e], delete t.type), t_(t), e_(t, "controlPosition")) {
			var i = t.controlStyle || (t.controlStyle = {});
			e_(i, "position") || (i.position = t.controlPosition), "none" !== i.position || e_(i, "show") || (i.show = !1, delete i.position), delete t.controlPosition
		}
		f(t.data || [], function(t) {
			S(t) && !_(t) && (!e_(t, "value") && e_(t, "name") && (t.value = t.name), t_(t))
		})
	}

	function t_(t) {
		var e = t.itemStyle || (t.itemStyle = {}),
			n = e.emphasis || (e.emphasis = {}),
			i = t.label || t.label || {},
			a = i.normal || (i.normal = {}),
			o = {
				normal: 1,
				emphasis: 1
			};
		f(i, function(t, e) {
			o[e] || e_(a, e) || (a[e] = t)
		}), n.label && !e_(i, "emphasis") && (i.emphasis = n.label, delete n.label)
	}

	function e_(t, e) {
		return t.hasOwnProperty(e)
	}

	function n_(t, e) {
		return Dr(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		}, t.get("padding"))
	}

	function i_(t, e, n, a) {
		var o = no(t.get(e).replace(/^path:\/\//, ""), i(a || {}), new xn(n[0], n[1], n[2], n[3]), "center");
		return o
	}

	function a_(t, e, n, i, o, r) {
		var s = e.get("color");
		if(o) o.setColor(s), n.add(o), r && r.onUpdate(o);
		else {
			var l = t.get("symbol");
			o = Ih(l, -1, -1, 2, 2, s), o.setStyle("strokeNoScale", !0), n.add(o), r && r.onCreate(o)
		}
		var u = e.getItemStyle(["color", "symbol", "symbolSize"]);
		o.setStyle(u), i = a({
			rectHover: !0,
			z2: 100
		}, i, !0);
		var h = t.get("symbolSize");
		h = h instanceof Array ? h.slice() : [+h, +h], h[0] /= 2, h[1] /= 2, i.scale = h;
		var c = t.get("symbolOffset");
		if(c) {
			var d = i.position = i.position || [0, 0];
			d[0] += Qo(c[0], h[0]), d[1] += Qo(c[1], h[1])
		}
		var f = t.get("symbolRotate");
		return i.rotation = (f || 0) * Math.PI / 180 || 0, o.attr(i), o.updateTransform(), o
	}

	function o_(t, e, n, i, a) {
		if(!t.dragging) {
			var o = i.getModel("checkpointStyle"),
				r = n.dataToCoord(i.getData().get(["value"], e));
			a || !o.get("animation", !0) ? t.attr({
				position: [r, 0]
			}) : (t.stopAnimation(!0), t.animateTo({
				position: [r, 0]
			}, o.get("animationDuration", !0), o.get("animationEasing", !0)))
		}
	}

	function r_(t) {
		return u(wz, t) >= 0
	}

	function s_(t, e) {
		t = t.slice();
		var n = p(t, Sr);
		e = (e || []).slice();
		var i = p(e, Sr);
		return function(a, o) {
			f(t, function(t, r) {
				for(var s = {
						name: t,
						capital: n[r]
					}, l = 0; l < e.length; l++) s[e[l]] = t + i[l];
				a.call(o, s)
			})
		}
	}

	function l_(t, e, n) {
		function i(t, e) {
			return u(e.nodes, t) >= 0
		}

		function a(t, i) {
			var a = !1;
			return e(function(e) {
				f(n(t, e) || [], function(t) {
					i.records[e.name][t] && (a = !0)
				})
			}), a
		}

		function o(t, i) {
			i.nodes.push(t), e(function(e) {
				f(n(t, e) || [], function(t) {
					i.records[e.name][t] = !0
				})
			})
		}
		return function(n) {
			function r(t) {
				!i(t, s) && a(t, s) && (o(t, s), l = !0)
			}
			var s = {
				nodes: [],
				records: {}
			};
			if(e(function(t) {
					s.records[t.name] = {}
				}), !n) return s;
			o(n, s);
			var l;
			do l = !1, t(r); while (l);
			return s
		}
	}

	function u_(t, e, n) {
		var i = [1 / 0, -1 / 0];
		return Sz(n, function(t) {
			var n = t.getData();
			n && Sz(n.mapDimension(e, !0), function(t) {
				var e = n.getApproximateExtent(t);
				e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
			})
		}), i[1] < i[0] && (i = [0 / 0, 0 / 0]), h_(t, i), i
	}

	function h_(t, e) {
		var n = t.getAxisModel(),
			i = n.getMin(!0),
			a = "category" === n.get("type"),
			o = a && n.getCategories().length;
		null != i && "dataMin" !== i && "function" != typeof i ? e[0] = i : a && (e[0] = o > 0 ? 0 : 0 / 0);
		var r = n.getMax(!0);
		return null != r && "dataMax" !== r && "function" != typeof r ? e[1] = r : a && (e[1] = o > 0 ? o - 1 : 0 / 0), n.get("scale", !0) || (e[0] > 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0)), e
	}

	function c_(t, e) {
		var n = t.getAxisModel(),
			i = t._percentWindow,
			a = t._valueWindow;
		if(i) {
			var o = ar(a, [0, 500]);
			o = Math.min(o, 20);
			var r = e || 0 === i[0] && 100 === i[1];
			n.setRange(r ? null : +a[0].toFixed(o), r ? null : +a[1].toFixed(o))
		}
	}

	function d_(t) {
		var e = t._minMaxSpan = {},
			n = t._dataZoomModel;
		Sz(["min", "max"], function(i) {
			e[i + "Span"] = n.get(i + "Span");
			var a = n.get(i + "ValueSpan");
			if(null != a && (e[i + "ValueSpan"] = a, a = t.getAxisModel().axis.scale.parse(a), null != a)) {
				var o = t._dataExtent;
				e[i + "Span"] = Jo(o[0] + a, o, [0, 100], !0)
			}
		})
	}

	function f_(t) {
		var e = {};
		return Tz(["start", "end", "startValue", "endValue", "throttle"], function(n) {
			t.hasOwnProperty(n) && (e[n] = t[n])
		}), e
	}

	function p_(t, e) {
		var n = t._rangePropMode,
			i = t.get("rangeMode");
		Tz([
			["start", "startValue"],
			["end", "endValue"]
		], function(t, a) {
			var o = null != e[t[0]],
				r = null != e[t[1]];
			o && !r ? n[a] = "percent" : !o && r ? n[a] = "value" : i ? n[a] = i[a] : o && (n[a] = "percent")
		})
	}

	function g_(t) {
		var e = {
			x: "y",
			y: "x",
			radius: "angle",
			angle: "radius"
		};
		return e[t]
	}

	function m_(t) {
		return "vertical" === t ? "ns-resize" : "ew-resize"
	}

	function v_(t, e) {
		var n = __(t),
			i = e.dataZoomId,
			a = e.coordId;
		f(n, function(t) {
			var n = t.dataZoomInfos;
			n[i] && u(e.allCoordIds, a) < 0 && (delete n[i], t.count--)
		}), b_(n);
		var o = n[a];
		o || (o = n[a] = {
			coordId: a,
			dataZoomInfos: {},
			count: 0
		}, o.controller = w_(t, o), o.dispatchAction = x(S_, t)), !o.dataZoomInfos[i] && o.count++, o.dataZoomInfos[i] = e;
		var r = M_(o.dataZoomInfos);
		o.controller.enable(r.controlType, r.opt), o.controller.setPointerChecker(e.containsPoint), $s(o, "dispatchAction", e.dataZoomModel.get("throttle", !0), "fixRate")
	}

	function y_(t, e) {
		var n = __(t);
		f(n, function(t) {
			t.controller.dispose();
			var n = t.dataZoomInfos;
			n[e] && (delete n[e], t.count--)
		}), b_(n)
	}

	function x_(t) {
		return t.type + "\x00_" + t.id
	}

	function __(t) {
		var e = t.getZr();
		return e[Hz] || (e[Hz] = {})
	}

	function w_(t, e) {
		var n = new xf(t.getZr());
		return f(["pan", "zoom", "scrollMove"], function(t) {
			n.on(t, function(n) {
				var i = [];
				f(e.dataZoomInfos, function(a) {
					if(n.isAvailableBehavior(a.dataZoomModel.option)) {
						var o = (a.getRange || {})[t],
							r = o && o(e.controller, n);
						!a.dataZoomModel.get("disabled", !0) && r && i.push({
							dataZoomId: a.dataZoomId,
							start: r[0],
							end: r[1]
						})
					}
				}), i.length && e.dispatchAction(i)
			})
		}), n
	}

	function b_(t) {
		f(t, function(e, n) {
			e.count || (e.controller.dispose(), delete t[n])
		})
	}

	function S_(t, e) {
		t.dispatchAction({
			type: "dataZoom",
			batch: e
		})
	}

	function M_(t) {
		var e, n = "type_",
			i = {
				type_true: 2,
				type_move: 1,
				type_false: 0,
				type_undefined: -1
			},
			a = !0;
		return f(t, function(t) {
			var o = t.dataZoomModel,
				r = o.get("disabled", !0) ? !1 : o.get("zoomLock", !0) ? "move" : !0;
			i[n + r] > i[n + e] && (e = r), a &= o.get("preventDefaultMouseMove", !0)
		}), {
			controlType: e,
			opt: {
				zoomOnMouseWheel: !0,
				moveOnMouseMove: !0,
				moveOnMouseWheel: !0,
				preventDefaultMouseMove: !!a
			}
		}
	}

	function I_(t) {
		return function(e, n, i, a) {
			var o = this._range,
				r = o.slice(),
				s = e.axisModels[0];
			if(s) {
				var l = t(r, s, e, n, i, a);
				return WO(l, r, [0, 100], "all"), this._range = r, o[0] !== r[0] || o[1] !== r[1] ? r : void 0
			}
		}
	}

	function T_(t) {
		var e = {};
		f(t, function(t) {
			e[t] = 1
		}), t.length = 0, f(e, function(e, n) {
			t.push(n)
		})
	}

	function A_(t) {
		if(t)
			for(var e in t)
				if(t.hasOwnProperty(e)) return !0
	}

	function D_(t, e, n) {
		function a() {
			var t = function() {};
			t.prototype.__hidden = t.prototype;
			var e = new t;
			return e
		}
		var o = {};
		return Kz(e, function(e) {
			var r = o[e] = a();
			Kz(t[e], function(t, a) {
				if(jk.isValidType(a)) {
					var o = {
						type: a,
						visual: t
					};
					n && n(o, e), r[a] = new jk(o), "opacity" === a && (o = i(o), o.type = "colorAlpha", r.__hidden.__alphaForOpacity = new jk(o))
				}
			})
		}), o
	}

	function C_(t, e, n) {
		var a;
		f(n, function(t) {
			e.hasOwnProperty(t) && A_(e[t]) && (a = !0)
		}), a && f(n, function(n) {
			e.hasOwnProperty(n) && A_(e[n]) ? t[n] = i(e[n]) : delete t[n]
		})
	}

	function L_(t, e, n, i, a, o) {
		function r(t) {
			return n.getItemVisual(h, t)
		}

		function s(t, e) {
			n.setItemVisual(h, t, e)
		}

		function l(t, l) {
			h = null == o ? t : l;
			var c = n.getRawDataItem(h);
			if(!c || c.visualMap !== !1)
				for(var d = i.call(a, t), f = e[d], p = u[d], g = 0, m = p.length; m > g; g++) {
					var v = p[g];
					f[v] && f[v].applyVisual(t, r, s)
				}
		}
		var u = {};
		f(t, function(t) {
			var n = jk.prepareVisualTypes(e[t]);
			u[t] = n
		});
		var h;
		null == o ? n.each(l) : n.each([o], l)
	}

	function k_(t, e, n, i) {
		function a(t, a) {
			function r(t) {
				return a.getItemVisual(l, t)
			}

			function s(t, e) {
				a.setItemVisual(l, t, e)
			}
			null != i && (i = a.getDimension(i));
			for(var l; null != (l = t.next());) {
				var u = a.getRawDataItem(l);
				if(!u || u.visualMap !== !1)
					for(var h = null != i ? a.get(i, l, !0) : l, c = n(h), d = e[c], f = o[c], p = 0, g = f.length; g > p; p++) {
						var m = f[p];
						d[m] && d[m].applyVisual(h, r, s)
					}
			}
		}
		var o = {};
		return f(t, function(t) {
			var n = jk.prepareVisualTypes(e[t]);
			o[t] = n
		}), {
			progress: a
		}
	}

	function P_(t) {
		var e = ["x", "y"],
			n = ["width", "height"];
		return {
			point: function(e, n, i) {
				if(e) {
					var a = i.range,
						o = e[t];
					return O_(o, a)
				}
			},
			rect: function(i, a, o) {
				if(i) {
					var r = o.range,
						s = [i[e[t]], i[e[t]] + i[n[t]]];
					return s[1] < s[0] && s.reverse(), O_(s[0], r) || O_(s[1], r) || O_(r[0], s) || O_(r[1], s)
				}
			}
		}
	}

	function O_(t, e) {
		return e[0] <= t && t <= e[1]
	}

	function N_(t, e, n, i, a) {
		for(var o = 0, r = a[a.length - 1]; o < a.length; o++) {
			var s = a[o];
			if(E_(t, e, n, i, s[0], s[1], r[0], r[1])) return !0;
			r = s
		}
	}

	function E_(t, e, n, i, a, o, r, s) {
		var l = R_(n - t, a - r, i - e, o - s);
		if(z_(l)) return !1;
		var u = R_(a - t, a - r, o - e, o - s) / l;
		if(0 > u || u > 1) return !1;
		var h = R_(n - t, a - t, i - e, o - e) / l;
		return 0 > h || h > 1 ? !1 : !0
	}

	function z_(t) {
		return 1e-6 >= t && t >= -1e-6
	}

	function R_(t, e, n, i) {
		return t * i - e * n
	}

	function B_(t, e, n) {
		var i = this._targetInfoList = [],
			a = {},
			o = G_(e, t);
		Jz(aR, function(t, e) {
			(!n || !n.include || Qz(n.include, e) >= 0) && t(o, i, a)
		})
	}

	function V_(t) {
		return t[0] > t[1] && t.reverse(), t
	}

	function G_(t, e) {
		return ji(t, e, {
			includeMainTypes: nR
		})
	}

	function F_(t, e, n, i) {
		var a = n.getAxis(["x", "y"][t]),
			o = V_(p([0, 1], function(t) {
				return e ? a.coordToData(a.toLocalCoord(i[t])) : a.toGlobalCoord(a.dataToCoord(i[t]))
			})),
			r = [];
		return r[t] = o, r[1 - t] = [0 / 0, 0 / 0], {
			values: o,
			xyMinMax: r
		}
	}

	function W_(t, e, n, i) {
		return [e[0] - i[t] * n[0], e[1] - i[t] * n[1]]
	}

	function H_(t, e) {
		var n = Z_(t),
			i = Z_(e),
			a = [n[0] / i[0], n[1] / i[1]];
		return isNaN(a[0]) && (a[0] = 1), isNaN(a[1]) && (a[1] = 1), a
	}

	function Z_(t) {
		return t ? [t[0][1] - t[0][0], t[1][1] - t[1][0]] : [0 / 0, 0 / 0]
	}

	function X_(t, e, n, i, a) {
		if(a) {
			var o = t.getZr();
			if(!o[cR]) {
				o[hR] || (o[hR] = Y_);
				var r = $s(o, hR, n, e);
				r(t, i)
			}
		}
	}

	function Y_(t, e) {
		if(!t.isDisposed()) {
			var n = t.getZr();
			n[cR] = !0, t.dispatchAction({
				type: "brushSelect",
				batch: e
			}), n[cR] = !1
		}
	}

	function U_(t, e, n, i) {
		for(var a = 0, o = e.length; o > a; a++) {
			var r = e[a];
			if(t[r.brushType](i, n, r.selectors, r)) return !0
		}
	}

	function j_(t) {
		var e = t.brushSelector;
		if(b(e)) {
			var n = [];
			return f($z, function(t, i) {
				n[i] = function(n, i, a, o) {
					var r = i.getItemLayout(n);
					return t[e](r, a, o)
				}
			}), n
		}
		if(w(e)) {
			var i = {};
			return f($z, function(t, n) {
				i[n] = e
			}), i
		}
		return e
	}

	function q_(t, e) {
		var n = t.option.seriesIndex;
		return null != n && "all" !== n && (_(n) ? u(n, e) < 0 : e !== n)
	}

	function K_(t) {
		var e = t.selectors = {};
		return f($z[t.brushType], function(n, i) {
			e[i] = function(i) {
				return n(i, e, t)
			}
		}), t
	}

	function $_(t) {
		return new xn(t[0][0], t[1][0], t[0][1] - t[0][0], t[1][1] - t[1][0])
	}

	function J_(t, e) {
		return a({
			brushType: t.brushType,
			brushMode: t.brushMode,
			transformable: t.transformable,
			brushStyle: new Xo(t.brushStyle).getItemStyle(),
			removeOnClick: t.removeOnClick,
			z: t.z
		}, e, !0)
	}

	function Q_(t, e, n, i) {
		(!i || i.$from !== t.id) && this._brushController.setPanels(t.brushTargetManager.makePanelOpts(n)).enableBrush(t.brushOption).updateCovers(t.areas.slice())
	}

	function tw(t, e) {
		gR[t] = e
	}

	function ew(t) {
		return gR[t]
	}

	function nw(t, e, n) {
		this.model = t, this.ecModel = e, this.api = n, this._brushType, this._brushMode
	}

	function iw(t, e) {
		return t && t.hasOwnProperty && t.hasOwnProperty(e)
	}

	function aw(t, e, n, i) {
		function a(t) {
			return l[t]
		}

		function o(t, e) {
			l[t] = e
		}
		for(var r = e.targetVisuals[i], s = jk.prepareVisualTypes(r), l = {
				color: t.getData().getVisual("color")
			}, u = 0, h = s.length; h > u; u++) {
			var c = s[u],
				d = r["opacity" === c ? "__alphaForOpacity" : c];
			d && d.applyVisual(n, a, o)
		}
		return l.color
	}

	function ow(t, e, n) {
		if(n[0] === n[1]) return n.slice();
		for(var i = 200, a = (n[1] - n[0]) / i, o = n[0], r = [], s = 0; i >= s && o < n[1]; s++) r.push(o), o += a;
		return r.push(n[1]), r
	}

	function rw(t, e, n) {
		var i = t.option,
			a = i.align;
		if(null != a && "auto" !== a) return a;
		for(var o = {
				width: e.getWidth(),
				height: e.getHeight()
			}, r = "horizontal" === i.orient ? 1 : 0, s = [
				["left", "right", "width"],
				["top", "bottom", "height"]
			], l = s[r], u = [0, null, 10], h = {}, c = 0; 3 > c; c++) h[s[1 - r][c]] = u[c], h[l[c]] = 2 === c ? n[0] : i[l[c]];
		var d = [
				["x", "width", 3],
				["y", "height", 0]
			][r],
			f = Dr(h, o, i.padding);
		return l[(f.margin[d[2]] || 0) + f[d[0]] + .5 * f[d[1]] < .5 * o[d[1]] ? 0 : 1]
	}

	function sw(t) {
		return f(t || [], function() {
			null != t.dataIndex && (t.dataIndexInside = t.dataIndex, t.dataIndex = null)
		}), t
	}

	function lw(t, e, n, i) {
		return new TI({
			shape: {
				points: t
			},
			draggable: !!n,
			cursor: e,
			drift: n,
			onmousemove: function(t) {
				wb(t.event)
			},
			ondragend: i
		})
	}

	function uw(t, e) {
		return 0 === t ? [
			[0, 0],
			[e, 0],
			[e, -e]
		] : [
			[0, 0],
			[e, 0],
			[e, e]
		]
	}

	function hw(t, e, n, i) {
		return t ? [
			[0, -zR(e, RR(n, 0))],
			[VR, 0],
			[0, zR(e, RR(i - n, 0))]
		] : [
			[0, 0],
			[5, -5],
			[5, 5]
		]
	}

	function cw(t, e, n) {
		var i = BR / 2,
			a = t.get("hoverLinkDataSize");
		return a && (i = NR(a, e, n, !0) / 2), i
	}

	function dw(t) {
		var e = t.get("hoverLinkOnHandle");
		return !!(null == e ? t.get("realtime") : e)
	}

	function fw(t) {
		return "vertical" === t ? "ns-resize" : "ew-resize"
	}

	function pw(t, e) {
		var n = t.inverse;
		("vertical" === t.orient ? !n : n) && e.reverse()
	}

	function gw(t) {
		return 0 === t.indexOf("my")
	}

	function mw(t) {
		this.model = t
	}

	function vw(t) {
		this.model = t
	}

	function yw(t) {
		var e = {},
			n = [],
			i = [];
		return t.eachRawSeries(function(t) {
			var a = t.coordinateSystem;
			if(!a || "cartesian2d" !== a.type && "polar" !== a.type) n.push(t);
			else {
				var o = a.getBaseAxis();
				if("category" === o.type) {
					var r = o.dim + "_" + o.index;
					e[r] || (e[r] = {
						categoryAxis: o,
						valueAxis: a.getOtherAxis(o),
						series: []
					}, i.push({
						axisDim: o.dim,
						axisIndex: o.index
					})), e[r].series.push(t)
				} else n.push(t)
			}
		}), {
			seriesGroupByCategoryAxis: e,
			other: n,
			meta: i
		}
	}

	function xw(t) {
		var e = [];
		return f(t, function(t) {
			var n = t.categoryAxis,
				i = t.valueAxis,
				a = i.dim,
				o = [" "].concat(p(t.series, function(t) {
					return t.name
				})),
				r = [n.model.getCategories()];
			f(t.series, function(t) {
				r.push(t.getRawData().mapArray(a, function(t) {
					return t
				}))
			});
			for(var s = [o.join(QR)], l = 0; l < r[0].length; l++) {
				for(var u = [], h = 0; h < r.length; h++) u.push(r[h][l]);
				s.push(u.join(QR))
			}
			e.push(s.join("\n"))
		}), e.join("\n\n" + JR + "\n\n")
	}

	function _w(t) {
		return p(t, function(t) {
			var e = t.getRawData(),
				n = [t.name],
				i = [];
			return e.each(e.dimensions, function() {
				for(var t = arguments.length, a = arguments[t - 1], o = e.getName(a), r = 0; t - 1 > r; r++) i[r] = arguments[r];
				n.push((o ? o + QR : "") + i.join(QR))
			}), n.join("\n")
		}).join("\n\n" + JR + "\n\n")
	}

	function ww(t) {
		var e = yw(t);
		return {
			value: m([xw(e.seriesGroupByCategoryAxis), _w(e.other)], function(t) {
				return t.replace(/[\n\t\s]/g, "")
			}).join("\n\n" + JR + "\n\n"),
			meta: e.meta
		}
	}

	function bw(t) {
		return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
	}

	function Sw(t) {
		var e = t.slice(0, t.indexOf("\n"));
		return e.indexOf(QR) >= 0 ? !0 : void 0
	}

	function Mw(t) {
		for(var e = t.split(/\n+/g), n = bw(e.shift()).split(tB), i = [], a = p(n, function(t) {
				return {
					name: t,
					data: []
				}
			}), o = 0; o < e.length; o++) {
			var r = bw(e[o]).split(tB);
			i.push(r.shift());
			for(var s = 0; s < r.length; s++) a[s] && (a[s].data[o] = r[s])
		}
		return {
			series: a,
			categories: i
		}
	}

	function Iw(t) {
		for(var e = t.split(/\n+/g), n = bw(e.shift()), i = [], a = 0; a < e.length; a++) {
			var o, r = bw(e[a]).split(tB),
				s = "",
				l = !1;
			isNaN(r[0]) ? (l = !0, s = r[0], r = r.slice(1), i[a] = {
				name: s,
				value: []
			}, o = i[a].value) : o = i[a] = [];
			for(var u = 0; u < r.length; u++) o.push(+r[u]);
			1 === o.length && (l ? i[a].value = o[0] : i[a] = o[0])
		}
		return {
			name: n,
			data: i
		}
	}

	function Tw(t, e) {
		var n = t.split(new RegExp("\n*" + JR + "\n*", "g")),
			i = {
				series: []
			};
		return f(n, function(t, n) {
			if(Sw(t)) {
				var a = Mw(t),
					o = e[n],
					r = o.axisDim + "Axis";
				o && (i[r] = i[r] || [], i[r][o.axisIndex] = {
					data: a.categories
				}, i.series = i.series.concat(a.series))
			} else {
				var a = Iw(t);
				i.series.push(a)
			}
		}), i
	}

	function Aw(t) {
		this._dom = null, this.model = t
	}

	function Dw(t, e) {
		return p(t, function(t, n) {
			var i = e && e[n];
			return S(i) && !_(i) ? (S(t) && !_(t) && (t = t.value), s({
				value: t
			}, i)) : t
		})
	}

	function Cw(t, e) {
		var n = Ow(t);
		eB(e, function(e, i) {
			for(var a = n.length - 1; a >= 0; a--) {
				var o = n[a];
				if(o[i]) break
			}
			if(0 > a) {
				var r = t.queryComponents({
					mainType: "dataZoom",
					subType: "select",
					id: i
				})[0];
				if(r) {
					var s = r.getPercentRange();
					n[0][i] = {
						dataZoomId: i,
						start: s[0],
						end: s[1]
					}
				}
			}
		}), n.push(e)
	}

	function Lw(t) {
		var e = Ow(t),
			n = e[e.length - 1];
		e.length > 1 && e.pop();
		var i = {};
		return eB(n, function(t, n) {
			for(var a = e.length - 1; a >= 0; a--) {
				var t = e[a][n];
				if(t) {
					i[n] = t;
					break
				}
			}
		}), i
	}

	function kw(t) {
		t[nB] = null
	}

	function Pw(t) {
		return Ow(t).length
	}

	function Ow(t) {
		var e = t[nB];
		return e || (e = t[nB] = [{}]), e
	}

	function Nw(t, e, n) {
		(this._brushController = new Xg(n.getZr())).on("brush", y(this._onBrush, this)).mount(), this._isZoomActive
	}

	function Ew(t) {
		var e = {};
		return f(["xAxisIndex", "yAxisIndex"], function(n) {
			e[n] = t[n], null == e[n] && (e[n] = "all"), (e[n] === !1 || "none" === e[n]) && (e[n] = [])
		}), e
	}

	function zw(t, e) {
		t.setIconStatus("back", Pw(e) > 1 ? "emphasis" : "normal")
	}

	function Rw(t, e, n, i, a) {
		var o = n._isZoomActive;
		i && "takeGlobalCursor" === i.type && (o = "dataZoomSelect" === i.key ? i.dataZoomSelectActive : !1), n._isZoomActive = o, t.setIconStatus("zoom", o ? "emphasis" : "normal");
		var r = new B_(Ew(t.option), e, {
			include: ["grid"]
		});
		n._brushController.setPanels(r.makePanelOpts(a, function(t) {
			return t.xAxisDeclared && !t.yAxisDeclared ? "lineX" : !t.xAxisDeclared && t.yAxisDeclared ? "lineY" : "rect"
		})).enableBrush(o ? {
			brushType: "auto",
			brushStyle: {
				lineWidth: 0,
				fill: "rgba(0,0,0,0.2)"
			}
		} : !1)
	}

	function Bw(t) {
		this.model = t
	}

	function Vw(t, e, n, i) {
		var a = n.type,
			o = qI[a.charAt(0).toUpperCase() + a.slice(1)],
			r = new o(n);
		e.add(r), i.set(t, r), r.__ecGraphicId = t
	}

	function Gw(t, e) {
		var n = t && t.parent;
		n && ("group" === t.type && t.traverse(function(t) {
			Gw(t, e)
		}), e.removeKey(t.__ecGraphicId), n.remove(t))
	}

	function Fw(t) {
		return t = r({}, t), f(["id", "parentId", "$action", "hv", "bounding"].concat(gT), function(e) {
			delete t[e]
		}), t
	}

	function Ww(t, e) {
		var n;
		return f(e, function(e) {
			null != t[e] && "auto" !== t[e] && (n = !0)
		}), n
	}

	function Hw(t, e) {
		var n = t.exist;
		if(e.id = t.keyInfo.id, !e.type && n && (e.type = n.type), null == e.parentId) {
			var i = e.parentOption;
			i ? e.parentId = i.id : n && (e.parentId = n.parentId)
		}
		e.parentOption = null
	}

	function Zw(t, e, n) {
		var i = r({}, n),
			o = t[e],
			s = n.$action || "merge";
		"merge" === s ? o ? (a(o, i, !0), kr(o, i, {
			ignoreSize: !0
		}), Or(n, o)) : t[e] = i : "replace" === s ? t[e] = i : "remove" === s && o && (t[e] = null)
	}

	function Xw(t, e) {
		t && (t.hv = e.hv = [Ww(e, ["left", "right"]), Ww(e, ["top", "bottom"])], "group" === t.type && (null == t.width && (t.width = e.width = 0), null == t.height && (t.height = e.height = 0)))
	}

	function Yw(t, e) {
		var n = t.eventData;
		t.silent || t.ignore || n || (n = t.eventData = {
			componentType: "graphic",
			componentIndex: e.componentIndex,
			name: t.name
		}), n && (n.info = t.info)
	}
	var Uw = 2311,
		jw = function() {
			return Uw++
		},
		qw = {};
	qw = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
		browser: {},
		os: {},
		node: !1,
		wxa: !0,
		canvasSupported: !0,
		svgSupported: !1,
		touchEventsSupported: !0,
		domSupported: !1
	} : "undefined" == typeof document && "undefined" != typeof self ? {
		browser: {},
		os: {},
		node: !1,
		worker: !0,
		canvasSupported: !0,
		domSupported: !1
	} : "undefined" == typeof navigator ? {
		browser: {},
		os: {},
		node: !0,
		worker: !1,
		canvasSupported: !0,
		svgSupported: !0,
		domSupported: !1
	} : e(navigator.userAgent);
	var Kw = qw,
		$w = {
			"[object Function]": 1,
			"[object RegExp]": 1,
			"[object Date]": 1,
			"[object Error]": 1,
			"[object CanvasGradient]": 1,
			"[object CanvasPattern]": 1,
			"[object Image]": 1,
			"[object Canvas]": 1
		},
		Jw = {
			"[object Int8Array]": 1,
			"[object Uint8Array]": 1,
			"[object Uint8ClampedArray]": 1,
			"[object Int16Array]": 1,
			"[object Uint16Array]": 1,
			"[object Int32Array]": 1,
			"[object Uint32Array]": 1,
			"[object Float32Array]": 1,
			"[object Float64Array]": 1
		},
		Qw = Object.prototype.toString,
		tb = Array.prototype,
		eb = tb.forEach,
		nb = tb.filter,
		ib = tb.slice,
		ab = tb.map,
		ob = tb.reduce,
		rb = {},
		sb = function() {
			return rb.createCanvas()
		};
	rb.createCanvas = function() {
		return document.createElement("canvas")
	};
	var lb, ub = "__ec_primitive__";
	R.prototype = {
		constructor: R,
		get: function(t) {
			return this.data.hasOwnProperty(t) ? this.data[t] : null
		},
		set: function(t, e) {
			return this.data[t] = e
		},
		each: function(t, e) {
			void 0 !== e && (t = y(t, e));
			for(var n in this.data) this.data.hasOwnProperty(n) && t(this.data[n], n)
		},
		removeKey: function(t) {
			delete this.data[t]
		}
	};
	var hb = (Object.freeze || Object)({
			$override: n,
			clone: i,
			merge: a,
			mergeAll: o,
			extend: r,
			defaults: s,
			createCanvas: sb,
			getContext: l,
			indexOf: u,
			inherits: h,
			mixin: c,
			isArrayLike: d,
			each: f,
			map: p,
			reduce: g,
			filter: m,
			find: v,
			bind: y,
			curry: x,
			isArray: _,
			isFunction: w,
			isString: b,
			isObject: S,
			isBuiltInObject: M,
			isTypedArray: I,
			isDom: T,
			eqNaN: A,
			retrieve: D,
			retrieve2: C,
			retrieve3: L,
			slice: k,
			normalizeCssArray: P,
			assert: O,
			trim: N,
			setAsPrimitive: E,
			isPrimitive: z,
			createHashMap: B,
			concatArray: V,
			noop: G
		}),
		cb = "undefined" == typeof Float32Array ? Array : Float32Array,
		db = j,
		fb = q,
		pb = ee,
		gb = ne,
		mb = (Object.freeze || Object)({
			create: F,
			copy: W,
			clone: H,
			set: Z,
			add: X,
			scaleAndAdd: Y,
			sub: U,
			len: j,
			length: db,
			lenSquare: q,
			lengthSquare: fb,
			mul: K,
			div: $,
			dot: J,
			scale: Q,
			normalize: te,
			distance: ee,
			dist: pb,
			distanceSquare: ne,
			distSquare: gb,
			negate: ie,
			lerp: ae,
			applyTransform: oe,
			min: re,
			max: se
		});
	le.prototype = {
		constructor: le,
		_dragStart: function(t) {
			var e = t.target;
			e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(ue(e, t), "dragstart", t.event))
		},
		_drag: function(t) {
			var e = this._draggingTarget;
			if(e) {
				var n = t.offsetX,
					i = t.offsetY,
					a = n - this._x,
					o = i - this._y;
				this._x = n, this._y = i, e.drift(a, o, t), this.dispatchToElement(ue(e, t), "drag", t.event);
				var r = this.findHover(n, i, e).target,
					s = this._dropTarget;
				this._dropTarget = r, e !== r && (s && r !== s && this.dispatchToElement(ue(s, t), "dragleave", t.event), r && r !== s && this.dispatchToElement(ue(r, t), "dragenter", t.event))
			}
		},
		_dragEnd: function(t) {
			var e = this._draggingTarget;
			e && (e.dragging = !1), this.dispatchToElement(ue(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(ue(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
		}
	};
	var vb = Array.prototype.slice,
		yb = function(t) {
			this._$handlers = {}, this._$eventProcessor = t
		};
	yb.prototype = {
		constructor: yb,
		one: function(t, e, n, i) {
			return ce(this, t, e, n, i, !0)
		},
		on: function(t, e, n, i) {
			return ce(this, t, e, n, i, !1)
		},
		isSilent: function(t) {
			var e = this._$handlers;
			return !e[t] || !e[t].length
		},
		off: function(t, e) {
			var n = this._$handlers;
			if(!t) return this._$handlers = {}, this;
			if(e) {
				if(n[t]) {
					for(var i = [], a = 0, o = n[t].length; o > a; a++) n[t][a].h !== e && i.push(n[t][a]);
					n[t] = i
				}
				n[t] && 0 === n[t].length && delete n[t]
			} else delete n[t];
			return this
		},
		trigger: function(t) {
			var e = this._$handlers[t],
				n = this._$eventProcessor;
			if(e) {
				var i = arguments,
					a = i.length;
				a > 3 && (i = vb.call(i, 1));
				for(var o = e.length, r = 0; o > r;) {
					var s = e[r];
					if(n && n.filter && null != s.query && !n.filter(t, s.query)) r++;
					else {
						switch(a) {
							case 1:
								s.h.call(s.ctx);
								break;
							case 2:
								s.h.call(s.ctx, i[1]);
								break;
							case 3:
								s.h.call(s.ctx, i[1], i[2]);
								break;
							default:
								s.h.apply(s.ctx, i)
						}
						s.one ? (e.splice(r, 1), o--) : r++
					}
				}
			}
			return n && n.afterTrigger && n.afterTrigger(t), this
		},
		triggerWithContext: function(t) {
			var e = this._$handlers[t],
				n = this._$eventProcessor;
			if(e) {
				var i = arguments,
					a = i.length;
				a > 4 && (i = vb.call(i, 1, i.length - 1));
				for(var o = i[i.length - 1], r = e.length, s = 0; r > s;) {
					var l = e[s];
					if(n && n.filter && null != l.query && !n.filter(t, l.query)) s++;
					else {
						switch(a) {
							case 1:
								l.h.call(o);
								break;
							case 2:
								l.h.call(o, i[1]);
								break;
							case 3:
								l.h.call(o, i[1], i[2]);
								break;
							default:
								l.h.apply(o, i)
						}
						l.one ? (e.splice(s, 1), r--) : s++
					}
				}
			}
			return n && n.afterTrigger && n.afterTrigger(t), this
		}
	};
	var xb = "undefined" != typeof window && !!window.addEventListener,
		_b = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		wb = xb ? function(t) {
			t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
		} : function(t) {
			t.returnValue = !1, t.cancelBubble = !0
		},
		bb = function() {
			this._track = []
		};
	bb.prototype = {
		constructor: bb,
		recognize: function(t, e, n) {
			return this._doTrack(t, e, n), this._recognize(t)
		},
		clear: function() {
			return this._track.length = 0, this
		},
		_doTrack: function(t, e, n) {
			var i = t.touches;
			if(i) {
				for(var a = {
						points: [],
						touches: [],
						target: e,
						event: t
					}, o = 0, r = i.length; r > o; o++) {
					var s = i[o],
						l = fe(n, s, {});
					a.points.push([l.zrX, l.zrY]), a.touches.push(s)
				}
				this._track.push(a)
			}
		},
		_recognize: function(t) {
			for(var e in Sb)
				if(Sb.hasOwnProperty(e)) {
					var n = Sb[e](this._track, t);
					if(n) return n
				}
		}
	};
	var Sb = {
			pinch: function(t, e) {
				var n = t.length;
				if(n) {
					var i = (t[n - 1] || {}).points,
						a = (t[n - 2] || {}).points || i;
					if(a && a.length > 1 && i && i.length > 1) {
						var o = xe(i) / xe(a);
						!isFinite(o) && (o = 1), e.pinchScale = o;
						var r = _e(i);
						return e.pinchX = r[0], e.pinchY = r[1], {
							type: "pinch",
							target: t[0].target,
							event: e
						}
					}
				}
			}
		},
		Mb = "silent";
	Se.prototype.dispose = function() {};
	var Ib = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
		Tb = function(t, e, n, i) {
			yb.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new Se, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, this._gestureMgr, le.call(this), this.setHandlerProxy(n)
		};
	Tb.prototype = {
		constructor: Tb,
		setHandlerProxy: function(t) {
			this.proxy && this.proxy.dispose(), t && (f(Ib, function(e) {
				t.on && t.on(e, this[e], this)
			}, this), t.handler = this), this.proxy = t
		},
		mousemove: function(t) {
			var e = t.zrX,
				n = t.zrY,
				i = this._hovered,
				a = i.target;
			a && !a.__zr && (i = this.findHover(i.x, i.y), a = i.target);
			var o = this._hovered = this.findHover(e, n),
				r = o.target,
				s = this.proxy;
			s.setCursor && s.setCursor(r ? r.cursor : "default"), a && r !== a && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(o, "mousemove", t), r && r !== a && this.dispatchToElement(o, "mouseover", t)
		},
		mouseout: function(t) {
			this.dispatchToElement(this._hovered, "mouseout", t);
			var e, n = t.toElement || t.relatedTarget;
			do n = n && n.parentNode; while (n && 9 !== n.nodeType && !(e = n === this.painterRoot));
			!e && this.trigger("globalout", {
				event: t
			})
		},
		resize: function() {
			this._hovered = {}
		},
		dispatch: function(t, e) {
			var n = this[t];
			n && n.call(this, e)
		},
		dispose: function() {
			this.proxy.dispose(), this.storage = this.proxy = this.painter = null
		},
		setCursorStyle: function(t) {
			var e = this.proxy;
			e.setCursor && e.setCursor(t)
		},
		dispatchToElement: function(t, e, n) {
			t = t || {};
			var i = t.target;
			if(!i || !i.silent) {
				for(var a = "on" + e, o = we(e, t, n); i && (i[a] && (o.cancelBubble = i[a].call(i, o)), i.trigger(e, o), i = i.parent, !o.cancelBubble););
				o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer(function(t) {
					"function" == typeof t[a] && t[a].call(t, o), t.trigger && t.trigger(e, o)
				}))
			}
		},
		findHover: function(t, e, n) {
			for(var i = this.storage.getDisplayList(), a = {
					x: t,
					y: e
				}, o = i.length - 1; o >= 0; o--) {
				var r;
				if(i[o] !== n && !i[o].ignore && (r = Me(i[o], t, e)) && (!a.topTarget && (a.topTarget = i[o]), r !== Mb)) {
					a.target = i[o];
					break
				}
			}
			return a
		},
		processGesture: function(t, e) {
			this._gestureMgr || (this._gestureMgr = new bb);
			var n = this._gestureMgr;
			"start" === e && n.clear();
			var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
			if("end" === e && n.clear(), i) {
				var a = i.type;
				t.gestureEvent = a, this.dispatchToElement({
					target: i.target
				}, a, i.event)
			}
		}
	}, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
		Tb.prototype[t] = function(e) {
			var n = this.findHover(e.zrX, e.zrY),
				i = n.target;
			if("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;
			else if("mouseup" === t) this._upEl = i;
			else if("click" === t) {
				if(this._downEl !== this._upEl || !this._downPoint || pb(this._downPoint, [e.zrX, e.zrY]) > 4) return;
				this._downPoint = null
			}
			this.dispatchToElement(n, t, e)
		}
	}), c(Tb, yb), c(Tb, le);
	var Ab = "undefined" == typeof Float32Array ? Array : Float32Array,
		Db = (Object.freeze || Object)({
			create: Ie,
			identity: Te,
			copy: Ae,
			mul: De,
			translate: Ce,
			rotate: Le,
			scale: ke,
			invert: Pe,
			clone: Oe
		}),
		Cb = Te,
		Lb = 5e-5,
		kb = function(t) {
			t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
		},
		Pb = kb.prototype;
	Pb.transform = null, Pb.needLocalTransform = function() {
		return Ne(this.rotation) || Ne(this.position[0]) || Ne(this.position[1]) || Ne(this.scale[0] - 1) || Ne(this.scale[1] - 1)
	};
	var Ob = [];
	Pb.updateTransform = function() {
		var t = this.parent,
			e = t && t.transform,
			n = this.needLocalTransform(),
			i = this.transform;
		if(!n && !e) return void(i && Cb(i));
		i = i || Ie(), n ? this.getLocalTransform(i) : Cb(i), e && (n ? De(i, t.transform, i) : Ae(i, t.transform)), this.transform = i;
		var a = this.globalScaleRatio;
		if(null != a && 1 !== a) {
			this.getGlobalScale(Ob);
			var o = Ob[0] < 0 ? -1 : 1,
				r = Ob[1] < 0 ? -1 : 1,
				s = ((Ob[0] - o) * a + o) / Ob[0] || 0,
				l = ((Ob[1] - r) * a + r) / Ob[1] || 0;
			i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l
		}
		this.invTransform = this.invTransform || Ie(), Pe(this.invTransform, i)
	}, Pb.getLocalTransform = function(t) {
		return kb.getLocalTransform(this, t)
	}, Pb.setTransform = function(t) {
		var e = this.transform,
			n = t.dpr || 1;
		e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
	}, Pb.restoreTransform = function(t) {
		var e = t.dpr || 1;
		t.setTransform(e, 0, 0, e, 0, 0)
	};
	var Nb = [],
		Eb = Ie();
	Pb.setLocalTransform = function(t) {
		if(t) {
			var e = t[0] * t[0] + t[1] * t[1],
				n = t[2] * t[2] + t[3] * t[3],
				i = this.position,
				a = this.scale;
			Ne(e - 1) && (e = Math.sqrt(e)), Ne(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], a[0] = e, a[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e)
		}
	}, Pb.decomposeTransform = function() {
		if(this.transform) {
			var t = this.parent,
				e = this.transform;
			t && t.transform && (De(Nb, t.invTransform, e), e = Nb);
			var n = this.origin;
			n && (n[0] || n[1]) && (Eb[4] = n[0], Eb[5] = n[1], De(Nb, e, Eb), Nb[4] -= n[0], Nb[5] -= n[1], e = Nb), this.setLocalTransform(e)
		}
	}, Pb.getGlobalScale = function(t) {
		var e = this.transform;
		return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
	}, Pb.transformCoordToLocal = function(t, e) {
		var n = [t, e],
			i = this.invTransform;
		return i && oe(n, n, i), n
	}, Pb.transformCoordToGlobal = function(t, e) {
		var n = [t, e],
			i = this.transform;
		return i && oe(n, n, i), n
	}, kb.getLocalTransform = function(t, e) {
		e = e || [], Cb(e);
		var n = t.origin,
			i = t.scale || [1, 1],
			a = t.rotation || 0,
			o = t.position || [0, 0];
		return n && (e[4] -= n[0], e[5] -= n[1]), ke(e, e, i), a && Le(e, e, a), n && (e[4] += n[0], e[5] += n[1]), e[4] += o[0], e[5] += o[1], e
	};
	var zb = {
		linear: function(t) {
			return t
		},
		quadraticIn: function(t) {
			return t * t
		},
		quadraticOut: function(t) {
			return t * (2 - t)
		},
		quadraticInOut: function(t) {
			return(t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
		},
		cubicIn: function(t) {
			return t * t * t
		},
		cubicOut: function(t) {
			return --t * t * t + 1
		},
		cubicInOut: function(t) {
			return(t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
		},
		quarticIn: function(t) {
			return t * t * t * t
		},
		quarticOut: function(t) {
			return 1 - --t * t * t * t
		},
		quarticInOut: function(t) {
			return(t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
		},
		quinticIn: function(t) {
			return t * t * t * t * t
		},
		quinticOut: function(t) {
			return --t * t * t * t * t + 1
		},
		quinticInOut: function(t) {
			return(t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
		},
		sinusoidalIn: function(t) {
			return 1 - Math.cos(t * Math.PI / 2)
		},
		sinusoidalOut: function(t) {
			return Math.sin(t * Math.PI / 2)
		},
		sinusoidalInOut: function(t) {
			return .5 * (1 - Math.cos(Math.PI * t))
		},
		exponentialIn: function(t) {
			return 0 === t ? 0 : Math.pow(1024, t - 1)
		},
		exponentialOut: function(t) {
			return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
		},
		exponentialInOut: function(t) {
			return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
		},
		circularIn: function(t) {
			return 1 - Math.sqrt(1 - t * t)
		},
		circularOut: function(t) {
			return Math.sqrt(1 - --t * t)
		},
		circularInOut: function(t) {
			return(t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		},
		elasticIn: function(t) {
			var e, n = .1,
				i = .4;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)))
		},
		elasticOut: function(t) {
			var e, n = .1,
				i = .4;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1)
		},
		elasticInOut: function(t) {
			var e, n = .1,
				i = .4;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1)
		},
		backIn: function(t) {
			var e = 1.70158;
			return t * t * ((e + 1) * t - e)
		},
		backOut: function(t) {
			var e = 1.70158;
			return --t * t * ((e + 1) * t + e) + 1
		},
		backInOut: function(t) {
			var e = 2.5949095;
			return(t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
		},
		bounceIn: function(t) {
			return 1 - zb.bounceOut(1 - t)
		},
		bounceOut: function(t) {
			return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
		},
		bounceInOut: function(t) {
			return .5 > t ? .5 * zb.bounceIn(2 * t) : .5 * zb.bounceOut(2 * t - 1) + .5
		}
	};
	Ee.prototype = {
		constructor: Ee,
		step: function(t, e) {
			if(this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void(this._pausedTime += e);
			var n = (t - this._startTime - this._pausedTime) / this._life;
			if(!(0 > n)) {
				n = Math.min(n, 1);
				var i = this.easing,
					a = "string" == typeof i ? zb[i] : i,
					o = "function" == typeof a ? a(n) : n;
				return this.fire("frame", o), 1 === n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
			}
		},
		restart: function(t) {
			var e = (t - this._startTime - this._pausedTime) % this._life;
			this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
		},
		fire: function(t, e) {
			t = "on" + t, this[t] && this[t](this._target, e)
		},
		pause: function() {
			this._paused = !0
		},
		resume: function() {
			this._paused = !1
		}
	};
	var Rb = function() {
			this.head = null, this.tail = null, this._len = 0
		},
		Bb = Rb.prototype;
	Bb.insert = function(t) {
		var e = new Vb(t);
		return this.insertEntry(e), e
	}, Bb.insertEntry = function(t) {
		this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
	}, Bb.remove = function(t) {
		var e = t.prev,
			n = t.next;
		e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
	}, Bb.len = function() {
		return this._len
	}, Bb.clear = function() {
		this.head = this.tail = null, this._len = 0
	};
	var Vb = function(t) {
			this.value = t, this.next, this.prev
		},
		Gb = function(t) {
			this._list = new Rb, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
		},
		Fb = Gb.prototype;
	Fb.put = function(t, e) {
		var n = this._list,
			i = this._map,
			a = null;
		if(null == i[t]) {
			var o = n.len(),
				r = this._lastRemovedEntry;
			if(o >= this._maxSize && o > 0) {
				var s = n.head;
				n.remove(s), delete i[s.key], a = s.value, this._lastRemovedEntry = s
			}
			r ? r.value = e : r = new Vb(e), r.key = t, n.insertEntry(r), i[t] = r
		}
		return a
	}, Fb.get = function(t) {
		var e = this._map[t],
			n = this._list;
		return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0
	}, Fb.clear = function() {
		this._list.clear(), this._map = {}
	};
	var Wb = {
			transparent: [0, 0, 0, 0],
			aliceblue: [240, 248, 255, 1],
			antiquewhite: [250, 235, 215, 1],
			aqua: [0, 255, 255, 1],
			aquamarine: [127, 255, 212, 1],
			azure: [240, 255, 255, 1],
			beige: [245, 245, 220, 1],
			bisque: [255, 228, 196, 1],
			black: [0, 0, 0, 1],
			blanchedalmond: [255, 235, 205, 1],
			blue: [0, 0, 255, 1],
			blueviolet: [138, 43, 226, 1],
			brown: [165, 42, 42, 1],
			burlywood: [222, 184, 135, 1],
			cadetblue: [95, 158, 160, 1],
			chartreuse: [127, 255, 0, 1],
			chocolate: [210, 105, 30, 1],
			coral: [255, 127, 80, 1],
			cornflowerblue: [100, 149, 237, 1],
			cornsilk: [255, 248, 220, 1],
			crimson: [220, 20, 60, 1],
			cyan: [0, 255, 255, 1],
			darkblue: [0, 0, 139, 1],
			darkcyan: [0, 139, 139, 1],
			darkgoldenrod: [184, 134, 11, 1],
			darkgray: [169, 169, 169, 1],
			darkgreen: [0, 100, 0, 1],
			darkgrey: [169, 169, 169, 1],
			darkkhaki: [189, 183, 107, 1],
			darkmagenta: [139, 0, 139, 1],
			darkolivegreen: [85, 107, 47, 1],
			darkorange: [255, 140, 0, 1],
			darkorchid: [153, 50, 204, 1],
			darkred: [139, 0, 0, 1],
			darksalmon: [233, 150, 122, 1],
			darkseagreen: [143, 188, 143, 1],
			darkslateblue: [72, 61, 139, 1],
			darkslategray: [47, 79, 79, 1],
			darkslategrey: [47, 79, 79, 1],
			darkturquoise: [0, 206, 209, 1],
			darkviolet: [148, 0, 211, 1],
			deeppink: [255, 20, 147, 1],
			deepskyblue: [0, 191, 255, 1],
			dimgray: [105, 105, 105, 1],
			dimgrey: [105, 105, 105, 1],
			dodgerblue: [30, 144, 255, 1],
			firebrick: [178, 34, 34, 1],
			floralwhite: [255, 250, 240, 1],
			forestgreen: [34, 139, 34, 1],
			fuchsia: [255, 0, 255, 1],
			gainsboro: [220, 220, 220, 1],
			ghostwhite: [248, 248, 255, 1],
			gold: [255, 215, 0, 1],
			goldenrod: [218, 165, 32, 1],
			gray: [128, 128, 128, 1],
			green: [0, 128, 0, 1],
			greenyellow: [173, 255, 47, 1],
			grey: [128, 128, 128, 1],
			honeydew: [240, 255, 240, 1],
			hotpink: [255, 105, 180, 1],
			indianred: [205, 92, 92, 1],
			indigo: [75, 0, 130, 1],
			ivory: [255, 255, 240, 1],
			khaki: [240, 230, 140, 1],
			lavender: [230, 230, 250, 1],
			lavenderblush: [255, 240, 245, 1],
			lawngreen: [124, 252, 0, 1],
			lemonchiffon: [255, 250, 205, 1],
			lightblue: [173, 216, 230, 1],
			lightcoral: [240, 128, 128, 1],
			lightcyan: [224, 255, 255, 1],
			lightgoldenrodyellow: [250, 250, 210, 1],
			lightgray: [211, 211, 211, 1],
			lightgreen: [144, 238, 144, 1],
			lightgrey: [211, 211, 211, 1],
			lightpink: [255, 182, 193, 1],
			lightsalmon: [255, 160, 122, 1],
			lightseagreen: [32, 178, 170, 1],
			lightskyblue: [135, 206, 250, 1],
			lightslategray: [119, 136, 153, 1],
			lightslategrey: [119, 136, 153, 1],
			lightsteelblue: [176, 196, 222, 1],
			lightyellow: [255, 255, 224, 1],
			lime: [0, 255, 0, 1],
			limegreen: [50, 205, 50, 1],
			linen: [250, 240, 230, 1],
			magenta: [255, 0, 255, 1],
			maroon: [128, 0, 0, 1],
			mediumaquamarine: [102, 205, 170, 1],
			mediumblue: [0, 0, 205, 1],
			mediumorchid: [186, 85, 211, 1],
			mediumpurple: [147, 112, 219, 1],
			mediumseagreen: [60, 179, 113, 1],
			mediumslateblue: [123, 104, 238, 1],
			mediumspringgreen: [0, 250, 154, 1],
			mediumturquoise: [72, 209, 204, 1],
			mediumvioletred: [199, 21, 133, 1],
			midnightblue: [25, 25, 112, 1],
			mintcream: [245, 255, 250, 1],
			mistyrose: [255, 228, 225, 1],
			moccasin: [255, 228, 181, 1],
			navajowhite: [255, 222, 173, 1],
			navy: [0, 0, 128, 1],
			oldlace: [253, 245, 230, 1],
			olive: [128, 128, 0, 1],
			olivedrab: [107, 142, 35, 1],
			orange: [255, 165, 0, 1],
			orangered: [255, 69, 0, 1],
			orchid: [218, 112, 214, 1],
			palegoldenrod: [238, 232, 170, 1],
			palegreen: [152, 251, 152, 1],
			paleturquoise: [175, 238, 238, 1],
			palevioletred: [219, 112, 147, 1],
			papayawhip: [255, 239, 213, 1],
			peachpuff: [255, 218, 185, 1],
			peru: [205, 133, 63, 1],
			pink: [255, 192, 203, 1],
			plum: [221, 160, 221, 1],
			powderblue: [176, 224, 230, 1],
			purple: [128, 0, 128, 1],
			red: [255, 0, 0, 1],
			rosybrown: [188, 143, 143, 1],
			royalblue: [65, 105, 225, 1],
			saddlebrown: [139, 69, 19, 1],
			salmon: [250, 128, 114, 1],
			sandybrown: [244, 164, 96, 1],
			seagreen: [46, 139, 87, 1],
			seashell: [255, 245, 238, 1],
			sienna: [160, 82, 45, 1],
			silver: [192, 192, 192, 1],
			skyblue: [135, 206, 235, 1],
			slateblue: [106, 90, 205, 1],
			slategray: [112, 128, 144, 1],
			slategrey: [112, 128, 144, 1],
			snow: [255, 250, 250, 1],
			springgreen: [0, 255, 127, 1],
			steelblue: [70, 130, 180, 1],
			tan: [210, 180, 140, 1],
			teal: [0, 128, 128, 1],
			thistle: [216, 191, 216, 1],
			tomato: [255, 99, 71, 1],
			turquoise: [64, 224, 208, 1],
			violet: [238, 130, 238, 1],
			wheat: [245, 222, 179, 1],
			white: [255, 255, 255, 1],
			whitesmoke: [245, 245, 245, 1],
			yellow: [255, 255, 0, 1],
			yellowgreen: [154, 205, 50, 1]
		},
		Hb = new Gb(20),
		Zb = null,
		Xb = $e,
		Yb = Je,
		Ub = (Object.freeze || Object)({
			parse: Ye,
			lift: qe,
			toHex: Ke,
			fastLerp: $e,
			fastMapToColor: Xb,
			lerp: Je,
			mapToColor: Yb,
			modifyHSL: Qe,
			modifyAlpha: tn,
			stringify: en
		}),
		jb = Array.prototype.slice,
		qb = function(t, e, n, i) {
			this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || nn, this._setter = i || an, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
		};
	qb.prototype = {
		when: function(t, e) {
			var n = this._tracks;
			for(var i in e)
				if(e.hasOwnProperty(i)) {
					if(!n[i]) {
						n[i] = [];
						var a = this._getter(this._target, i);
						if(null == a) continue;
						0 !== t && n[i].push({
							time: 0,
							value: dn(a)
						})
					}
					n[i].push({
						time: t,
						value: e[i]
					})
				}
			return this
		},
		during: function(t) {
			return this._onframeList.push(t), this
		},
		pause: function() {
			for(var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
			this._paused = !0
		},
		resume: function() {
			for(var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
			this._paused = !1
		},
		isPaused: function() {
			return !!this._paused
		},
		_doneCallback: function() {
			this._tracks = {}, this._clipList.length = 0;
			for(var t = this._doneList, e = t.length, n = 0; e > n; n++) t[n].call(this)
		},
		start: function(t, e) {
			var n, i = this,
				a = 0,
				o = function() {
					a--, a || i._doneCallback()
				};
			for(var r in this._tracks)
				if(this._tracks.hasOwnProperty(r)) {
					var s = gn(this, t, o, this._tracks[r], r, e);
					s && (this._clipList.push(s), a++, this.animation && this.animation.addClip(s), n = s)
				}
			if(n) {
				var l = n.onframe;
				n.onframe = function(t, e) {
					l(t, e);
					for(var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
				}
			}
			return a || this._doneCallback(), this
		},
		stop: function(t) {
			for(var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
				var a = e[i];
				t && a.onframe(this._target, 1), n && n.removeClip(a)
			}
			e.length = 0
		},
		delay: function(t) {
			return this._delay = t, this
		},
		done: function(t) {
			return t && this._doneList.push(t), this
		},
		getClips: function() {
			return this._clipList
		}
	};
	var Kb = 1;
	"undefined" != typeof window && (Kb = Math.max(window.devicePixelRatio || 1, 1));
	var $b = 0,
		Jb = Kb,
		Qb = function() {};
	1 === $b ? Qb = function() {
		for(var t in arguments) throw new Error(arguments[t])
	} : $b > 1 && (Qb = function() {
		for(var t in arguments) console.log(arguments[t])
	});
	var tS = Qb,
		eS = function() {
			this.animators = []
		};
	eS.prototype = {
		constructor: eS,
		animate: function(t, e) {
			var n, i = !1,
				a = this,
				o = this.__zr;
			if(t) {
				var r = t.split("."),
					s = a;
				i = "shape" === r[0];
				for(var l = 0, h = r.length; h > l; l++) s && (s = s[r[l]]);
				s && (n = s)
			} else n = a;
			if(!n) return void tS('Property "' + t + '" is not existed in element ' + a.id);
			var c = a.animators,
				d = new qb(n, e);
			return d.during(function() {
				a.dirty(i)
			}).done(function() {
				c.splice(u(c, d), 1)
			}), c.push(d), o && o.animation.addAnimator(d), d
		},
		stopAnimation: function(t) {
			for(var e = this.animators, n = e.length, i = 0; n > i; i++) e[i].stop(t);
			return e.length = 0, this
		},
		animateTo: function(t, e, n, i, a, o) {
			mn(this, t, e, n, i, a, o)
		},
		animateFrom: function(t, e, n, i, a, o) {
			mn(this, t, e, n, i, a, o, !0)
		}
	};
	var nS = function(t) {
		kb.call(this, t), yb.call(this, t), eS.call(this, t), this.id = t.id || jw()
	};
	nS.prototype = {
		type: "element",
		name: "",
		__zr: null,
		ignore: !1,
		clipPath: null,
		isGroup: !1,
		drift: function(t, e) {
			switch(this.draggable) {
				case "horizontal":
					e = 0;
					break;
				case "vertical":
					t = 0
			}
			var n = this.transform;
			n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1)
		},
		beforeUpdate: function() {},
		afterUpdate: function() {},
		update: function() {
			this.updateTransform()
		},
		traverse: function() {},
		attrKV: function(t, e) {
			if("position" === t || "scale" === t || "origin" === t) {
				if(e) {
					var n = this[t];
					n || (n = this[t] = []), n[0] = e[0], n[1] = e[1]
				}
			} else this[t] = e
		},
		hide: function() {
			this.ignore = !0, this.__zr && this.__zr.refresh()
		},
		show: function() {
			this.ignore = !1, this.__zr && this.__zr.refresh()
		},
		attr: function(t, e) {
			if("string" == typeof t) this.attrKV(t, e);
			else if(S(t))
				for(var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
			return this.dirty(!1), this
		},
		setClipPath: function(t) {
			var e = this.__zr;
			e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
		},
		removeClipPath: function() {
			var t = this.clipPath;
			t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
		},
		addSelfToZr: function(t) {
			this.__zr = t;
			var e = this.animators;
			if(e)
				for(var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
			this.clipPath && this.clipPath.addSelfToZr(t)
		},
		removeSelfFromZr: function(t) {
			this.__zr = null;
			var e = this.animators;
			if(e)
				for(var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
			this.clipPath && this.clipPath.removeSelfFromZr(t)
		}
	}, c(nS, eS), c(nS, kb), c(nS, yb);
	var iS = oe,
		aS = Math.min,
		oS = Math.max;
	xn.prototype = {
		constructor: xn,
		union: function(t) {
			var e = aS(t.x, this.x),
				n = aS(t.y, this.y);
			this.width = oS(t.x + t.width, this.x + this.width) - e, this.height = oS(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n
		},
		applyTransform: function() {
			var t = [],
				e = [],
				n = [],
				i = [];
			return function(a) {
				if(a) {
					t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, iS(t, t, a), iS(e, e, a), iS(n, n, a), iS(i, i, a), this.x = aS(t[0], e[0], n[0], i[0]), this.y = aS(t[1], e[1], n[1], i[1]);
					var o = oS(t[0], e[0], n[0], i[0]),
						r = oS(t[1], e[1], n[1], i[1]);
					this.width = o - this.x, this.height = r - this.y
				}
			}
		}(),
		calculateTransform: function(t) {
			var e = this,
				n = t.width / e.width,
				i = t.height / e.height,
				a = Ie();
			return Ce(a, a, [-e.x, -e.y]), ke(a, a, [n, i]), Ce(a, a, [t.x, t.y]), a
		},
		intersect: function(t) {
			if(!t) return !1;
			t instanceof xn || (t = xn.create(t));
			var e = this,
				n = e.x,
				i = e.x + e.width,
				a = e.y,
				o = e.y + e.height,
				r = t.x,
				s = t.x + t.width,
				l = t.y,
				u = t.y + t.height;
			return !(r > i || n > s || l > o || a > u)
		},
		contain: function(t, e) {
			var n = this;
			return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
		},
		clone: function() {
			return new xn(this.x, this.y, this.width, this.height)
		},
		copy: function(t) {
			this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
		},
		plain: function() {
			return {
				x: this.x,
				y: this.y,
				width: this.width,
				height: this.height
			}
		}
	}, xn.create = function(t) {
		return new xn(t.x, t.y, t.width, t.height)
	};
	var rS = function(t) {
		t = t || {}, nS.call(this, t);
		for(var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
		this._children = [], this.__storage = null, this.__dirty = !0
	};
	rS.prototype = {
		constructor: rS,
		isGroup: !0,
		type: "group",
		silent: !1,
		children: function() {
			return this._children.slice()
		},
		childAt: function(t) {
			return this._children[t]
		},
		childOfName: function(t) {
			for(var e = this._children, n = 0; n < e.length; n++)
				if(e[n].name === t) return e[n]
		},
		childCount: function() {
			return this._children.length
		},
		add: function(t) {
			return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
		},
		addBefore: function(t, e) {
			if(t && t !== this && t.parent !== this && e && e.parent === this) {
				var n = this._children,
					i = n.indexOf(e);
				i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
			}
			return this
		},
		_doAdd: function(t) {
			t.parent && t.parent.remove(t), t.parent = this;
			var e = this.__storage,
				n = this.__zr;
			e && e !== t.__storage && (e.addToStorage(t), t instanceof rS && t.addChildrenToStorage(e)), n && n.refresh()
		},
		remove: function(t) {
			var e = this.__zr,
				n = this.__storage,
				i = this._children,
				a = u(i, t);
			return 0 > a ? this : (i.splice(a, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof rS && t.delChildrenFromStorage(n)), e && e.refresh(), this)
		},
		removeAll: function() {
			var t, e, n = this._children,
				i = this.__storage;
			for(e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof rS && t.delChildrenFromStorage(i)), t.parent = null;
			return n.length = 0, this
		},
		eachChild: function(t, e) {
			for(var n = this._children, i = 0; i < n.length; i++) {
				var a = n[i];
				t.call(e, a, i)
			}
			return this
		},
		traverse: function(t, e) {
			for(var n = 0; n < this._children.length; n++) {
				var i = this._children[n];
				t.call(e, i), "group" === i.type && i.traverse(t, e)
			}
			return this
		},
		addChildrenToStorage: function(t) {
			for(var e = 0; e < this._children.length; e++) {
				var n = this._children[e];
				t.addToStorage(n), n instanceof rS && n.addChildrenToStorage(t)
			}
		},
		delChildrenFromStorage: function(t) {
			for(var e = 0; e < this._children.length; e++) {
				var n = this._children[e];
				t.delFromStorage(n), n instanceof rS && n.delChildrenFromStorage(t)
			}
		},
		dirty: function() {
			return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
		},
		getBoundingRect: function(t) {
			for(var e = null, n = new xn(0, 0, 0, 0), i = t || this._children, a = [], o = 0; o < i.length; o++) {
				var r = i[o];
				if(!r.ignore && !r.invisible) {
					var s = r.getBoundingRect(),
						l = r.getLocalTransform(a);
					l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s))
				}
			}
			return e || n
		}
	}, h(rS, nS);
	var sS = 32,
		lS = 7,
		uS = function() {
			this._roots = [], this._displayList = [], this._displayListLen = 0
		};
	uS.prototype = {
		constructor: uS,
		traverse: function(t, e) {
			for(var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
		},
		getDisplayList: function(t, e) {
			return e = e || !1, t && this.updateDisplayList(e), this._displayList
		},
		updateDisplayList: function(t) {
			this._displayListLen = 0;
			for(var e = this._roots, n = this._displayList, i = 0, a = e.length; a > i; i++) this._updateAndAddDisplayable(e[i], null, t);
			n.length = this._displayListLen, Kw.canvasSupported && An(n, Dn)
		},
		_updateAndAddDisplayable: function(t, e, n) {
			if(!t.ignore || n) {
				t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
				var i = t.clipPath;
				if(i) {
					e = e ? e.slice() : [];
					for(var a = i, o = t; a;) a.parent = o, a.updateTransform(), e.push(a), o = a, a = a.clipPath
				}
				if(t.isGroup) {
					for(var r = t._children, s = 0; s < r.length; s++) {
						var l = r[s];
						t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n)
					}
					t.__dirty = !1
				} else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
			}
		},
		addRoot: function(t) {
			t.__storage !== this && (t instanceof rS && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
		},
		delRoot: function(t) {
			if(null == t) {
				for(var e = 0; e < this._roots.length; e++) {
					var n = this._roots[e];
					n instanceof rS && n.delChildrenFromStorage(this)
				}
				return this._roots = [], this._displayList = [], void(this._displayListLen = 0)
			}
			if(t instanceof Array)
				for(var e = 0, i = t.length; i > e; e++) this.delRoot(t[e]);
			else {
				var a = u(this._roots, t);
				a >= 0 && (this.delFromStorage(t), this._roots.splice(a, 1), t instanceof rS && t.delChildrenFromStorage(this))
			}
		},
		addToStorage: function(t) {
			return t && (t.__storage = this, t.dirty(!1)), this
		},
		delFromStorage: function(t) {
			return t && (t.__storage = null), this
		},
		dispose: function() {
			this._renderList = this._roots = null
		},
		displayableSortFunc: Dn
	};
	var hS = {
			shadowBlur: 1,
			shadowOffsetX: 1,
			shadowOffsetY: 1,
			textShadowBlur: 1,
			textShadowOffsetX: 1,
			textShadowOffsetY: 1,
			textBoxShadowBlur: 1,
			textBoxShadowOffsetX: 1,
			textBoxShadowOffsetY: 1
		},
		cS = function(t, e, n) {
			return hS.hasOwnProperty(e) ? n *= t.dpr : n
		},
		dS = {
			NONE: 0,
			STYLE_BIND: 1,
			PLAIN_TEXT: 2
		},
		fS = 9,
		pS = [
			["shadowBlur", 0],
			["shadowOffsetX", 0],
			["shadowOffsetY", 0],
			["shadowColor", "#000"],
			["lineCap", "butt"],
			["lineJoin", "miter"],
			["miterLimit", 10]
		],
		gS = function(t) {
			this.extendFrom(t, !1)
		};
	gS.prototype = {
		constructor: gS,
		fill: "#000",
		stroke: null,
		opacity: 1,
		fillOpacity: null,
		strokeOpacity: null,
		lineDash: null,
		lineDashOffset: 0,
		shadowBlur: 0,
		shadowOffsetX: 0,
		shadowOffsetY: 0,
		lineWidth: 1,
		strokeNoScale: !1,
		text: null,
		font: null,
		textFont: null,
		fontStyle: null,
		fontWeight: null,
		fontSize: null,
		fontFamily: null,
		textTag: null,
		textFill: "#000",
		textStroke: null,
		textWidth: null,
		textHeight: null,
		textStrokeWidth: 0,
		textLineHeight: null,
		textPosition: "inside",
		textRect: null,
		textOffset: null,
		textAlign: null,
		textVerticalAlign: null,
		textDistance: 5,
		textShadowColor: "transparent",
		textShadowBlur: 0,
		textShadowOffsetX: 0,
		textShadowOffsetY: 0,
		textBoxShadowColor: "transparent",
		textBoxShadowBlur: 0,
		textBoxShadowOffsetX: 0,
		textBoxShadowOffsetY: 0,
		transformText: !1,
		textRotation: 0,
		textOrigin: null,
		textBackgroundColor: null,
		textBorderColor: null,
		textBorderWidth: 0,
		textBorderRadius: 0,
		textPadding: null,
		rich: null,
		truncate: null,
		blend: null,
		bind: function(t, e, n) {
			var i = this,
				a = n && n.style,
				o = !a || t.__attrCachedBy !== dS.STYLE_BIND;
			t.__attrCachedBy = dS.STYLE_BIND;
			for(var r = 0; r < pS.length; r++) {
				var s = pS[r],
					l = s[0];
				(o || i[l] !== a[l]) && (t[l] = cS(t, l, i[l] || s[1]))
			}
			if((o || i.fill !== a.fill) && (t.fillStyle = i.fill), (o || i.stroke !== a.stroke) && (t.strokeStyle = i.stroke), (o || i.opacity !== a.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (o || i.blend !== a.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
				var u = i.lineWidth;
				t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
			}
		},
		hasFill: function() {
			var t = this.fill;
			return null != t && "none" !== t
		},
		hasStroke: function() {
			var t = this.stroke;
			return null != t && "none" !== t && this.lineWidth > 0
		},
		extendFrom: function(t, e) {
			if(t)
				for(var n in t) !t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
		},
		set: function(t, e) {
			"string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
		},
		clone: function() {
			var t = new this.constructor;
			return t.extendFrom(this, !0), t
		},
		getGradient: function(t, e, n) {
			for(var i = "radial" === e.type ? Ln : Cn, a = i(t, e, n), o = e.colorStops, r = 0; r < o.length; r++) a.addColorStop(o[r].offset, o[r].color);
			return a
		}
	};
	for(var mS = gS.prototype, vS = 0; vS < pS.length; vS++) {
		var yS = pS[vS];
		yS[0] in mS || (mS[yS[0]] = yS[1])
	}
	gS.getGradient = mS.getGradient;
	var xS = function(t, e) {
		this.image = t, this.repeat = e, this.type = "pattern"
	};
	xS.prototype.getCanvasPattern = function(t) {
		return t.createPattern(this.image, this.repeat || "repeat")
	};
	var _S = function(t, e, n) {
		var i;
		n = n || Jb, "string" == typeof t ? i = Pn(t, e, n) : S(t) && (i = t, t = i.id), this.id = t, this.dom = i;
		var a = i.style;
		a && (i.onselectstart = kn, a["-webkit-user-select"] = "none", a["user-select"] = "none", a["-webkit-touch-callout"] = "none", a["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", a.padding = 0, a.margin = 0, a["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n
	};
	_S.prototype = {
		constructor: _S,
		__dirty: !0,
		__used: !1,
		__drawIndex: 0,
		__startIndex: 0,
		__endIndex: 0,
		incremental: !1,
		getElementCount: function() {
			return this.__endIndex - this.__startIndex
		},
		initContext: function() {
			this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
		},
		createBackBuffer: function() {
			var t = this.dpr;
			this.domBack = Pn("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t)
		},
		resize: function(t, e) {
			var n = this.dpr,
				i = this.dom,
				a = i.style,
				o = this.domBack;
			a && (a.width = t + "px", a.height = e + "px"), i.width = t * n, i.height = e * n, o && (o.width = t * n, o.height = e * n, 1 !== n && this.ctxBack.scale(n, n))
		},
		clear: function(t, e) {
			var n = this.dom,
				i = this.ctx,
				a = n.width,
				o = n.height,
				e = e || this.clearColor,
				r = this.motionBlur && !t,
				s = this.lastFrameAlpha,
				l = this.dpr;
			if(r && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, a / l, o / l)), i.clearRect(0, 0, a, o), e && "transparent" !== e) {
				var u;
				e.colorStops ? (u = e.__canvasGradient || gS.getGradient(i, e, {
					x: 0,
					y: 0,
					width: a,
					height: o
				}), e.__canvasGradient = u) : e.image && (u = xS.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = u || e, i.fillRect(0, 0, a, o), i.restore()
			}
			if(r) {
				var h = this.domBack;
				i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, a, o), i.restore()
			}
		}
	};
	var wS = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
			setTimeout(t, 16)
		},
		bS = new Gb(50),
		SS = {},
		MS = 0,
		IS = 5e3,
		TS = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
		AS = "12px sans-serif",
		DS = {};
	DS.measureText = function(t, e) {
		var n = l();
		return n.font = e || AS, n.measureText(t)
	};
	var CS = AS,
		LS = {
			left: 1,
			right: 1,
			center: 1
		},
		kS = {
			top: 1,
			bottom: 1,
			middle: 1
		},
		PS = [
			["textShadowBlur", "shadowBlur", 0],
			["textShadowOffsetX", "shadowOffsetX", 0],
			["textShadowOffsetY", "shadowOffsetY", 0],
			["textShadowColor", "shadowColor", "transparent"]
		],
		OS = new xn,
		NS = function() {};
	NS.prototype = {
		constructor: NS,
		drawRectText: function(t, e) {
			var n = this.style;
			e = n.textRect || e, this.__dirty && ei(n, !0);
			var i = n.text;
			if(null != i && (i += ""), yi(i, n)) {
				t.save();
				var a = this.transform;
				n.transformText ? this.setTransform(t) : a && (OS.copy(e), OS.applyTransform(a), e = OS), ii(this, t, i, n, e, fS), t.restore()
			}
		}
	}, xi.prototype = {
		constructor: xi,
		type: "displayable",
		__dirty: !0,
		invisible: !1,
		z: 0,
		z2: 0,
		zlevel: 0,
		draggable: !1,
		dragging: !1,
		silent: !1,
		culling: !1,
		cursor: "pointer",
		rectHover: !1,
		progressive: !1,
		incremental: !1,
		globalScaleRatio: 1,
		beforeBrush: function() {},
		afterBrush: function() {},
		brush: function() {},
		getBoundingRect: function() {},
		contain: function(t, e) {
			return this.rectContain(t, e)
		},
		traverse: function(t, e) {
			t.call(e, this)
		},
		rectContain: function(t, e) {
			var n = this.transformCoordToLocal(t, e),
				i = this.getBoundingRect();
			return i.contain(n[0], n[1])
		},
		dirty: function() {
			this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
		},
		animateStyle: function(t) {
			return this.animate("style", t)
		},
		attrKV: function(t, e) {
			"style" !== t ? nS.prototype.attrKV.call(this, t, e) : this.style.set(e)
		},
		setStyle: function(t, e) {
			return this.style.set(t, e), this.dirty(!1), this
		},
		useStyle: function(t) {
			return this.style = new gS(t, this), this.dirty(!1), this
		}
	}, h(xi, nS), c(xi, NS), _i.prototype = {
		constructor: _i,
		type: "image",
		brush: function(t, e) {
			var n = this.style,
				i = n.image;
			n.bind(t, this, e);
			var a = this._image = Nn(i, this._image, this, this.onload);
			if(a && zn(a)) {
				var o = n.x || 0,
					r = n.y || 0,
					s = n.width,
					l = n.height,
					u = a.width / a.height;
				if(null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s && null == l && (s = a.width, l = a.height), this.setTransform(t), n.sWidth && n.sHeight) {
					var h = n.sx || 0,
						c = n.sy || 0;
					t.drawImage(a, h, c, n.sWidth, n.sHeight, o, r, s, l)
				} else if(n.sx && n.sy) {
					var h = n.sx,
						c = n.sy,
						d = s - h,
						f = l - c;
					t.drawImage(a, h, c, d, f, o, r, s, l)
				} else t.drawImage(a, o, r, s, l);
				null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
			}
		},
		getBoundingRect: function() {
			var t = this.style;
			return this._rect || (this._rect = new xn(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
		}
	}, h(_i, xi);
	var ES = 1e5,
		zS = 314159,
		RS = .01,
		BS = .001,
		VS = new xn(0, 0, 0, 0),
		GS = new xn(0, 0, 0, 0),
		FS = function(t, e, n) {
			this.type = "canvas";
			var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
			this._opts = n = r({}, n || {}), this.dpr = n.devicePixelRatio || Jb, this._singleCanvas = i, this.root = t;
			var a = t.style;
			a && (a["-webkit-tap-highlight-color"] = "transparent", a["-webkit-user-select"] = a["user-select"] = a["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
			var o = this._zlevelList = [],
				s = this._layers = {};
			if(this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
				var l = t.width,
					u = t.height;
				null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this._height = u;
				var h = new _S(t, this, this.dpr);
				h.__builtin__ = !0, h.initContext(), s[zS] = h, h.zlevel = zS, o.push(zS), this._domRoot = t
			} else {
				this._width = this._getSize(0), this._height = this._getSize(1);
				var c = this._domRoot = Ti(this._width, this._height);
				t.appendChild(c)
			}
			this._hoverlayer = null, this._hoverElements = []
		};
	FS.prototype = {
		constructor: FS,
		getType: function() {
			return "canvas"
		},
		isSingleCanvas: function() {
			return this._singleCanvas
		},
		getViewportRoot: function() {
			return this._domRoot
		},
		getViewportRootOffset: function() {
			var t = this.getViewportRoot();
			return t ? {
				offsetLeft: t.offsetLeft || 0,
				offsetTop: t.offsetTop || 0
			} : void 0
		},
		refresh: function(t) {
			var e = this.storage.getDisplayList(!0),
				n = this._zlevelList;
			this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
			for(var i = 0; i < n.length; i++) {
				var a = n[i],
					o = this._layers[a];
				if(!o.__builtin__ && o.refresh) {
					var r = 0 === i ? this._backgroundColor : null;
					o.refresh(r)
				}
			}
			return this.refreshHover(), this
		},
		addHover: function(t, e) {
			if(!t.__hoverMir) {
				var n = new t.constructor({
					style: t.style,
					shape: t.shape,
					z: t.z,
					z2: t.z2,
					silent: t.silent
				});
				return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n
			}
		},
		removeHover: function(t) {
			var e = t.__hoverMir,
				n = this._hoverElements,
				i = u(n, e);
			i >= 0 && n.splice(i, 1), t.__hoverMir = null
		},
		clearHover: function() {
			for(var t = this._hoverElements, e = 0; e < t.length; e++) {
				var n = t[e].__from;
				n && (n.__hoverMir = null)
			}
			t.length = 0
		},
		refreshHover: function() {
			var t = this._hoverElements,
				e = t.length,
				n = this._hoverlayer;
			if(n && n.clear(), e) {
				An(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(ES));
				var i = {};
				n.ctx.save();
				for(var a = 0; e > a;) {
					var o = t[a],
						r = o.__from;
					r && r.__zr ? (a++, r.invisible || (o.transform = r.transform, o.invTransform = r.invTransform, o.__clipPaths = r.__clipPaths, this._doPaintEl(o, n, !0, i))) : (t.splice(a, 1), r.__hoverMir = null, e--)
				}
				n.ctx.restore()
			}
		},
		getHoverLayer: function() {
			return this.getLayer(ES)
		},
		_paintList: function(t, e, n) {
			if(this._redrawId === n) {
				e = e || !1, this._updateLayerStatus(t);
				var i = this._doPaintList(t, e);
				if(this._needsManuallyCompositing && this._compositeManually(), !i) {
					var a = this;
					wS(function() {
						a._paintList(t, e, n)
					})
				}
			}
		},
		_compositeManually: function() {
			var t = this.getLayer(zS).ctx,
				e = this._domRoot.width,
				n = this._domRoot.height;
			t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
				i.virtual && t.drawImage(i.dom, 0, 0, e, n)
			})
		},
		_doPaintList: function(t, e) {
			for(var n = [], i = 0; i < this._zlevelList.length; i++) {
				var a = this._zlevelList[i],
					o = this._layers[a];
				o.__builtin__ && o !== this._hoverlayer && (o.__dirty || e) && n.push(o)
			}
			for(var r = !0, s = 0; s < n.length; s++) {
				var o = n[s],
					l = o.ctx,
					u = {};
				l.save();
				var h = e ? o.__startIndex : o.__drawIndex,
					c = !e && o.incremental && Date.now,
					d = c && Date.now(),
					p = o.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
				if(o.__startIndex === o.__endIndex) o.clear(!1, p);
				else if(h === o.__startIndex) {
					var g = t[h];
					g.incremental && g.notClear && !e || o.clear(!1, p)
				} - 1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = o.__startIndex);
				for(var m = h; m < o.__endIndex; m++) {
					var v = t[m];
					if(this._doPaintEl(v, o, e, u), v.__dirty = v.__dirtyText = !1, c) {
						var y = Date.now() - d;
						if(y > 15) break
					}
				}
				o.__drawIndex = m, o.__drawIndex < o.__endIndex && (r = !1), u.prevElClipPaths && l.restore(), l.restore()
			}
			return Kw.wxa && f(this._layers, function(t) {
				t && t.ctx && t.ctx.draw && t.ctx.draw()
			}), r
		},
		_doPaintEl: function(t, e, n, i) {
			var a = e.ctx,
				o = t.transform;
			if(!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || o && !o[0] && !o[3] || t.culling && Si(t, this._width, this._height))) {
				var r = t.__clipPaths;
				(!i.prevElClipPaths || Mi(r, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), r && (a.save(), Ii(r, a), i.prevElClipPaths = r)), t.beforeBrush && t.beforeBrush(a), t.brush(a, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(a)
			}
		},
		getLayer: function(t, e) {
			this._singleCanvas && !this._needsManuallyCompositing && (t = zS);
			var n = this._layers[t];
			return n || (n = new _S("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && a(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
		},
		insertLayer: function(t, e) {
			var n = this._layers,
				i = this._zlevelList,
				a = i.length,
				o = null,
				r = -1,
				s = this._domRoot;
			if(n[t]) return void tS("ZLevel " + t + " has been used already");
			if(!bi(e)) return void tS("Layer of zlevel " + t + " is not valid");
			if(a > 0 && t > i[0]) {
				for(r = 0; a - 1 > r && !(i[r] < t && i[r + 1] > t); r++);
				o = n[i[r]]
			}
			if(i.splice(r + 1, 0, t), n[t] = e, !e.virtual)
				if(o) {
					var l = o.dom;
					l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
				} else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
		},
		eachLayer: function(t, e) {
			var n, i, a = this._zlevelList;
			for(i = 0; i < a.length; i++) n = a[i], t.call(e, this._layers[n], n)
		},
		eachBuiltinLayer: function(t, e) {
			var n, i, a, o = this._zlevelList;
			for(a = 0; a < o.length; a++) i = o[a], n = this._layers[i], n.__builtin__ && t.call(e, n, i)
		},
		eachOtherLayer: function(t, e) {
			var n, i, a, o = this._zlevelList;
			for(a = 0; a < o.length; a++) i = o[a], n = this._layers[i], n.__builtin__ || t.call(e, n, i)
		},
		getLayers: function() {
			return this._layers
		},
		_updateLayerStatus: function(t) {
			function e(t) {
				a && (a.__endIndex !== t && (a.__dirty = !0), a.__endIndex = t)
			}
			if(this.eachBuiltinLayer(function(t) {
					t.__dirty = t.__used = !1
				}), this._singleCanvas)
				for(var n = 1; n < t.length; n++) {
					var i = t[n];
					if(i.zlevel !== t[n - 1].zlevel || i.incremental) {
						this._needsManuallyCompositing = !0;
						break
					}
				}
			for(var a = null, o = 0, n = 0; n < t.length; n++) {
				var r, i = t[n],
					s = i.zlevel;
				i.incremental ? (r = this.getLayer(s + BS, this._needsManuallyCompositing), r.incremental = !0, o = 1) : r = this.getLayer(s + (o > 0 ? RS : 0), this._needsManuallyCompositing), r.__builtin__ || tS("ZLevel " + s + " has been used by unkown layer " + r.id), r !== a && (r.__used = !0, r.__startIndex !== n && (r.__dirty = !0), r.__startIndex = n, r.__drawIndex = r.incremental ? -1 : n, e(n), a = r), i.__dirty && (r.__dirty = !0, r.incremental && r.__drawIndex < 0 && (r.__drawIndex = n))
			}
			e(n), this.eachBuiltinLayer(function(t) {
				!t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
			})
		},
		clear: function() {
			return this.eachBuiltinLayer(this._clearLayer), this
		},
		_clearLayer: function(t) {
			t.clear()
		},
		setBackgroundColor: function(t) {
			this._backgroundColor = t
		},
		configLayer: function(t, e) {
			if(e) {
				var n = this._layerConfig;
				n[t] ? a(n[t], e, !0) : n[t] = e;
				for(var i = 0; i < this._zlevelList.length; i++) {
					var o = this._zlevelList[i];
					if(o === t || o === t + RS) {
						var r = this._layers[o];
						a(r, n[t], !0)
					}
				}
			}
		},
		delLayer: function(t) {
			var e = this._layers,
				n = this._zlevelList,
				i = e[t];
			i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(u(n, t), 1))
		},
		resize: function(t, e) {
			if(this._domRoot.style) {
				var n = this._domRoot;
				n.style.display = "none";
				var i = this._opts;
				if(null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width !== t || e !== this._height) {
					n.style.width = t + "px", n.style.height = e + "px";
					for(var a in this._layers) this._layers.hasOwnProperty(a) && this._layers[a].resize(t, e);
					f(this._progressiveLayers, function(n) {
						n.resize(t, e)
					}), this.refresh(!0)
				}
				this._width = t, this._height = e
			} else {
				if(null == t || null == e) return;
				this._width = t, this._height = e, this.getLayer(zS).resize(t, e)
			}
			return this
		},
		clearLayer: function(t) {
			var e = this._layers[t];
			e && e.clear()
		},
		dispose: function() {
			this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
		},
		getRenderedCanvas: function(t) {
			if(t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[zS].dom;
			var e = new _S("image", this, t.pixelRatio || this.dpr);
			if(e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
				this.refresh();
				var n = e.dom.width,
					i = e.dom.height,
					a = e.ctx;
				this.eachLayer(function(t) {
					t.__builtin__ ? a.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
				})
			} else
				for(var o = {}, r = this.storage.getDisplayList(!0), s = 0; s < r.length; s++) {
					var l = r[s];
					this._doPaintEl(l, e, !0, o)
				}
			return e.dom
		},
		getWidth: function() {
			return this._width
		},
		getHeight: function() {
			return this._height
		},
		_getSize: function(t) {
			var e = this._opts,
				n = ["width", "height"][t],
				i = ["clientWidth", "clientHeight"][t],
				a = ["paddingLeft", "paddingTop"][t],
				o = ["paddingRight", "paddingBottom"][t];
			if(null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
			var r = this.root,
				s = document.defaultView.getComputedStyle(r);
			return(r[i] || wi(s[n]) || wi(r.style[n])) - (wi(s[a]) || 0) - (wi(s[o]) || 0) | 0
		},
		pathToImage: function(t, e) {
			e = e || this.dpr;
			var n = document.createElement("canvas"),
				i = n.getContext("2d"),
				a = t.getBoundingRect(),
				o = t.style,
				r = o.shadowBlur * e,
				s = o.shadowOffsetX * e,
				l = o.shadowOffsetY * e,
				u = o.hasStroke() ? o.lineWidth : 0,
				h = Math.max(u / 2, -s + r),
				c = Math.max(u / 2, s + r),
				d = Math.max(u / 2, -l + r),
				f = Math.max(u / 2, l + r),
				p = a.width + h + c,
				g = a.height + d + f;
			n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
			var m = {
				position: t.position,
				rotation: t.rotation,
				scale: t.scale
			};
			t.position = [h - a.x, d - a.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
			var v = _i,
				y = new v({
					style: {
						x: 0,
						y: 0,
						image: n
					}
				});
			return null != m.position && (y.position = t.position = m.position), null != m.rotation && (y.rotation = t.rotation = m.rotation), null != m.scale && (y.scale = t.scale = m.scale), y
		}
	};
	var WS = function(t) {
		t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, yb.call(this)
	};
	WS.prototype = {
		constructor: WS,
		addClip: function(t) {
			this._clips.push(t)
		},
		addAnimator: function(t) {
			t.animation = this;
			for(var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
		},
		removeClip: function(t) {
			var e = u(this._clips, t);
			e >= 0 && this._clips.splice(e, 1)
		},
		removeAnimator: function(t) {
			for(var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
			t.animation = null
		},
		_update: function() {
			for(var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, a = [], o = [], r = 0; i > r; r++) {
				var s = n[r],
					l = s.step(t, e);
				l && (a.push(l), o.push(s))
			}
			for(var r = 0; i > r;) n[r]._needsRemove ? (n[r] = n[i - 1], n.pop(), i--) : r++;
			i = a.length;
			for(var r = 0; i > r; r++) o[r].fire(a[r]);
			this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
		},
		_startLoop: function() {
			function t() {
				e._running && (wS(t), !e._paused && e._update())
			}
			var e = this;
			this._running = !0, wS(t)
		},
		start: function() {
			this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
		},
		stop: function() {
			this._running = !1
		},
		pause: function() {
			this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
		},
		resume: function() {
			this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
		},
		clear: function() {
			this._clips = []
		},
		isFinished: function() {
			return !this._clips.length
		},
		animate: function(t, e) {
			e = e || {};
			var n = new qb(t, e.loop, e.getter, e.setter);
			return this.addAnimator(n), n
		}
	}, c(WS, yb);
	var HS = 300,
		ZS = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
		XS = ["touchstart", "touchend", "touchmove"],
		YS = {
			pointerdown: 1,
			pointerup: 1,
			pointermove: 1,
			pointerout: 1
		},
		US = p(ZS, function(t) {
			var e = t.replace("mouse", "pointer");
			return YS[e] ? e : t
		}),
		jS = {
			mousemove: function(t) {
				t = ge(this.dom, t), this.trigger("mousemove", t)
			},
			mouseout: function(t) {
				t = ge(this.dom, t);
				var e = t.toElement || t.relatedTarget;
				if(e !== this.dom)
					for(; e && 9 !== e.nodeType;) {
						if(e === this.dom) return;
						e = e.parentNode
					}
				this.trigger("mouseout", t)
			},
			touchstart: function(t) {
				t = ge(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, this.handler.processGesture(this, t, "start"), jS.mousemove.call(this, t), jS.mousedown.call(this, t), Di(this)
			},
			touchmove: function(t) {
				t = ge(this.dom, t), t.zrByTouch = !0, this.handler.processGesture(this, t, "change"), jS.mousemove.call(this, t), Di(this)
			},
			touchend: function(t) {
				t = ge(this.dom, t), t.zrByTouch = !0, this.handler.processGesture(this, t, "end"), jS.mouseup.call(this, t), +new Date - this._lastTouchMoment < HS && jS.click.call(this, t), Di(this)
			},
			pointerdown: function(t) {
				jS.mousedown.call(this, t)
			},
			pointermove: function(t) {
				Ci(t) || jS.mousemove.call(this, t)
			},
			pointerup: function(t) {
				jS.mouseup.call(this, t)
			},
			pointerout: function(t) {
				Ci(t) || jS.mouseout.call(this, t)
			}
		};
	f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
		jS[t] = function(e) {
			e = ge(this.dom, e), this.trigger(t, e)
		}
	});
	var qS = ki.prototype;
	qS.dispose = function() {
		for(var t = ZS.concat(XS), e = 0; e < t.length; e++) {
			var n = t[e];
			ve(this.dom, Ai(n), this._handlers[n])
		}
	}, qS.setCursor = function(t) {
		this.dom.style && (this.dom.style.cursor = t || "default")
	}, c(ki, yb);
	var KS = !Kw.canvasSupported,
		$S = {
			canvas: FS
		},
		JS = {},
		QS = "4.0.7",
		tM = function(t, e, n) {
			n = n || {}, this.dom = e, this.id = t;
			var i = this,
				a = new uS,
				o = n.renderer;
			if(KS) {
				if(!$S.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
				o = "vml"
			} else o && $S[o] || (o = "canvas");
			var r = new $S[o](e, a, n, t);
			this.storage = a, this.painter = r;
			var s = Kw.node || Kw.worker ? null : new ki(r.getViewportRoot());
			this.handler = new Tb(a, r, s, r.root), this.animation = new WS({
				stage: {
					update: y(this.flush, this)
				}
			}), this.animation.start(), this._needsRefresh;
			var l = a.delFromStorage,
				u = a.addToStorage;
			a.delFromStorage = function(t) {
				l.call(a, t), t && t.removeSelfFromZr(i)
			}, a.addToStorage = function(t) {
				u.call(a, t), t.addSelfToZr(i)
			}
		};
	tM.prototype = {
		constructor: tM,
		getId: function() {
			return this.id
		},
		add: function(t) {
			this.storage.addRoot(t), this._needsRefresh = !0
		},
		remove: function(t) {
			this.storage.delRoot(t), this._needsRefresh = !0
		},
		configLayer: function(t, e) {
			this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
		},
		setBackgroundColor: function(t) {
			this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
		},
		refreshImmediately: function() {
			this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
		},
		refresh: function() {
			this._needsRefresh = !0
		},
		flush: function() {
			var t;
			this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
		},
		addHover: function(t, e) {
			if(this.painter.addHover) {
				var n = this.painter.addHover(t, e);
				return this.refreshHover(), n
			}
		},
		removeHover: function(t) {
			this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
		},
		clearHover: function() {
			this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
		},
		refreshHover: function() {
			this._needsRefreshHover = !0
		},
		refreshHoverImmediately: function() {
			this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
		},
		resize: function(t) {
			t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
		},
		clearAnimation: function() {
			this.animation.clear()
		},
		getWidth: function() {
			return this.painter.getWidth()
		},
		getHeight: function() {
			return this.painter.getHeight()
		},
		pathToImage: function(t, e) {
			return this.painter.pathToImage(t, e)
		},
		setCursorStyle: function(t) {
			this.handler.setCursorStyle(t)
		},
		findHover: function(t, e) {
			return this.handler.findHover(t, e)
		},
		on: function(t, e, n) {
			this.handler.on(t, e, n)
		},
		off: function(t, e) {
			this.handler.off(t, e)
		},
		trigger: function(t, e) {
			this.handler.trigger(t, e)
		},
		clear: function() {
			this.storage.delRoot(), this.painter.clear()
		},
		dispose: function() {
			this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, zi(this.id)
		}
	};
	var eM = (Object.freeze || Object)({
			version: QS,
			init: Pi,
			dispose: Oi,
			getInstance: Ni,
			registerPainter: Ei
		}),
		nM = f,
		iM = S,
		aM = _,
		oM = "series\x00",
		rM = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
		sM = 0,
		lM = ".",
		uM = "___EC__COMPONENT__CONTAINER___",
		hM = 0,
		cM = function(t) {
			for(var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
			return function(e, n, i) {
				for(var a = {}, o = 0; o < t.length; o++) {
					var r = t[o][1];
					if(!(n && u(n, r) >= 0 || i && u(i, r) < 0)) {
						var s = e.getShallow(r);
						null != s && (a[t[o][0]] = s)
					}
				}
				return a
			}
		},
		dM = cM([
			["lineWidth", "width"],
			["stroke", "color"],
			["opacity"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"]
		]),
		fM = {
			getLineStyle: function(t) {
				var e = dM(this, t),
					n = this.getLineDash(e.lineWidth);
				return n && (e.lineDash = n), e
			},
			getLineDash: function(t) {
				null == t && (t = 1);
				var e = this.get("type"),
					n = Math.max(t, 2),
					i = 4 * t;
				return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
			}
		},
		pM = cM([
			["fill", "color"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["opacity"],
			["shadowColor"]
		]),
		gM = {
			getAreaStyle: function(t, e) {
				return pM(this, t, e)
			}
		},
		mM = Math.pow,
		vM = Math.sqrt,
		yM = 1e-8,
		xM = 1e-4,
		_M = vM(3),
		wM = 1 / 3,
		bM = F(),
		SM = F(),
		MM = F(),
		IM = Math.min,
		TM = Math.max,
		AM = Math.sin,
		DM = Math.cos,
		CM = 2 * Math.PI,
		LM = F(),
		kM = F(),
		PM = F(),
		OM = [],
		NM = [],
		EM = {
			M: 1,
			L: 2,
			C: 3,
			Q: 4,
			A: 5,
			Z: 6,
			R: 7
		},
		zM = [],
		RM = [],
		BM = [],
		VM = [],
		GM = Math.min,
		FM = Math.max,
		WM = Math.cos,
		HM = Math.sin,
		ZM = Math.sqrt,
		XM = Math.abs,
		YM = "undefined" != typeof Float32Array,
		UM = function(t) {
			this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
		};
	UM.prototype = {
		constructor: UM,
		_xi: 0,
		_yi: 0,
		_x0: 0,
		_y0: 0,
		_ux: 0,
		_uy: 0,
		_len: 0,
		_lineDash: null,
		_dashOffset: 0,
		_dashIdx: 0,
		_dashSum: 0,
		setScale: function(t, e) {
			this._ux = XM(1 / Jb / t) || 0, this._uy = XM(1 / Jb / e) || 0
		},
		getContext: function() {
			return this._ctx
		},
		beginPath: function(t) {
			return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
		},
		moveTo: function(t, e) {
			return this.addData(EM.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
		},
		lineTo: function(t, e) {
			var n = XM(t - this._xi) > this._ux || XM(e - this._yi) > this._uy || this._len < 5;
			return this.addData(EM.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
		},
		bezierCurveTo: function(t, e, n, i, a, o) {
			return this.addData(EM.C, t, e, n, i, a, o), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, a, o) : this._ctx.bezierCurveTo(t, e, n, i, a, o)), this._xi = a, this._yi = o, this
		},
		quadraticCurveTo: function(t, e, n, i) {
			return this.addData(EM.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
		},
		arc: function(t, e, n, i, a, o) {
			return this.addData(EM.A, t, e, n, n, i, a - i, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, a, o), this._xi = WM(a) * n + t, this._yi = HM(a) * n + e, this
		},
		arcTo: function(t, e, n, i, a) {
			return this._ctx && this._ctx.arcTo(t, e, n, i, a), this
		},
		rect: function(t, e, n, i) {
			return this._ctx && this._ctx.rect(t, e, n, i), this.addData(EM.R, t, e, n, i), this
		},
		closePath: function() {
			this.addData(EM.Z);
			var t = this._ctx,
				e = this._x0,
				n = this._y0;
			return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
		},
		fill: function(t) {
			t && t.fill(), this.toStatic()
		},
		stroke: function(t) {
			t && t.stroke(), this.toStatic()
		},
		setLineDash: function(t) {
			if(t instanceof Array) {
				this._lineDash = t, this._dashIdx = 0;
				for(var e = 0, n = 0; n < t.length; n++) e += t[n];
				this._dashSum = e
			}
			return this
		},
		setLineDashOffset: function(t) {
			return this._dashOffset = t, this
		},
		len: function() {
			return this._len
		},
		setData: function(t) {
			var e = t.length;
			this.data && this.data.length === e || !YM || (this.data = new Float32Array(e));
			for(var n = 0; e > n; n++) this.data[n] = t[n];
			this._len = e
		},
		appendPath: function(t) {
			t instanceof Array || (t = [t]);
			for(var e = t.length, n = 0, i = this._len, a = 0; e > a; a++) n += t[a].len();
			YM && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
			for(var a = 0; e > a; a++)
				for(var o = t[a].data, r = 0; r < o.length; r++) this.data[i++] = o[r];
			this._len = i
		},
		addData: function(t) {
			if(this._saveData) {
				var e = this.data;
				this._len + arguments.length > e.length && (this._expandData(), e = this.data);
				for(var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
				this._prevCmd = t
			}
		},
		_expandData: function() {
			if(!(this.data instanceof Array)) {
				for(var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
				this.data = t
			}
		},
		_needsDash: function() {
			return this._lineDash
		},
		_dashedLineTo: function(t, e) {
			var n, i, a = this._dashSum,
				o = this._dashOffset,
				r = this._lineDash,
				s = this._ctx,
				l = this._xi,
				u = this._yi,
				h = t - l,
				c = e - u,
				d = ZM(h * h + c * c),
				f = l,
				p = u,
				g = r.length;
			for(h /= d, c /= d, 0 > o && (o = a + o), o %= a, f -= o * h, p -= o * c; h > 0 && t >= f || 0 > h && f >= t || 0 === h && (c > 0 && e >= p || 0 > c && p >= e);) i = this._dashIdx, n = r[i], f += h * n, p += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > f || 0 > h && f > l || c > 0 && u > p || 0 > c && p > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? GM(f, t) : FM(f, t), c >= 0 ? GM(p, e) : FM(p, e));
			h = f - t, c = p - e, this._dashOffset = -ZM(h * h + c * c)
		},
		_dashedBezierTo: function(t, e, n, i, a, o) {
			var r, s, l, u, h, c = this._dashSum,
				d = this._dashOffset,
				f = this._lineDash,
				p = this._ctx,
				g = this._xi,
				m = this._yi,
				v = ua,
				y = 0,
				x = this._dashIdx,
				_ = f.length,
				w = 0;
			for(0 > d && (d = c + d), d %= c, r = 0; 1 > r; r += .1) s = v(g, t, n, a, r + .1) - v(g, t, n, a, r), l = v(m, e, i, o, r + .1) - v(m, e, i, o, r), y += ZM(s * s + l * l);
			for(; _ > x && (w += f[x], !(w > d)); x++);
			for(r = (w - d) / y; 1 >= r;) u = v(g, t, n, a, r), h = v(m, e, i, o, r), x % 2 ? p.moveTo(u, h) : p.lineTo(u, h), r += f[x] / y, x = (x + 1) % _;
			x % 2 !== 0 && p.lineTo(a, o), s = a - u, l = o - h, this._dashOffset = -ZM(s * s + l * l)
		},
		_dashedQuadraticTo: function(t, e, n, i) {
			var a = n,
				o = i;
			n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, a, o)
		},
		toStatic: function() {
			var t = this.data;
			t instanceof Array && (t.length = this._len, YM && (this.data = new Float32Array(t)))
		},
		getBoundingRect: function() {
			zM[0] = zM[1] = BM[0] = BM[1] = Number.MAX_VALUE, RM[0] = RM[1] = VM[0] = VM[1] = -Number.MAX_VALUE;
			for(var t = this.data, e = 0, n = 0, i = 0, a = 0, o = 0; o < t.length;) {
				var r = t[o++];
				switch(1 === o && (e = t[o], n = t[o + 1], i = e, a = n), r) {
					case EM.M:
						i = t[o++], a = t[o++], e = i, n = a, BM[0] = i, BM[1] = a, VM[0] = i, VM[1] = a;
						break;
					case EM.L:
						ba(e, n, t[o], t[o + 1], BM, VM), e = t[o++], n = t[o++];
						break;
					case EM.C:
						Sa(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], BM, VM), e = t[o++], n = t[o++];
						break;
					case EM.Q:
						Ma(e, n, t[o++], t[o++], t[o], t[o + 1], BM, VM), e = t[o++], n = t[o++];
						break;
					case EM.A:
						var s = t[o++],
							l = t[o++],
							u = t[o++],
							h = t[o++],
							c = t[o++],
							d = t[o++] + c;
						o += 1;
						var f = 1 - t[o++];
						1 === o && (i = WM(c) * u + s, a = HM(c) * h + l), Ia(s, l, u, h, c, d, f, BM, VM), e = WM(d) * u + s, n = HM(d) * h + l;
						break;
					case EM.R:
						i = e = t[o++], a = n = t[o++];
						var p = t[o++],
							g = t[o++];
						ba(i, a, i + p, a + g, BM, VM);
						break;
					case EM.Z:
						e = i, n = a
				}
				re(zM, zM, BM), se(RM, RM, VM)
			}
			return 0 === o && (zM[0] = zM[1] = RM[0] = RM[1] = 0), new xn(zM[0], zM[1], RM[0] - zM[0], RM[1] - zM[1])
		},
		rebuildPath: function(t) {
			for(var e, n, i, a, o, r, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; h > c;) {
				var d = s[c++];
				switch(1 === c && (i = s[c], a = s[c + 1], e = i, n = a), d) {
					case EM.M:
						e = i = s[c++], n = a = s[c++], t.moveTo(i, a);
						break;
					case EM.L:
						o = s[c++], r = s[c++], (XM(o - i) > l || XM(r - a) > u || c === h - 1) && (t.lineTo(o, r), i = o, a = r);
						break;
					case EM.C:
						t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], a = s[c - 1];
						break;
					case EM.Q:
						t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], a = s[c - 1];
						break;
					case EM.A:
						var f = s[c++],
							p = s[c++],
							g = s[c++],
							m = s[c++],
							v = s[c++],
							y = s[c++],
							x = s[c++],
							_ = s[c++],
							w = g > m ? g : m,
							b = g > m ? 1 : g / m,
							S = g > m ? m / g : 1,
							M = Math.abs(g - m) > .001,
							I = v + y;
						M ? (t.translate(f, p), t.rotate(x), t.scale(b, S), t.arc(0, 0, w, v, I, 1 - _), t.scale(1 / b, 1 / S), t.rotate(-x), t.translate(-f, -p)) : t.arc(f, p, w, v, I, 1 - _), 1 === c && (e = WM(v) * g + f, n = HM(v) * m + p), i = WM(I) * g + f, a = HM(I) * m + p;
						break;
					case EM.R:
						e = i = s[c], n = a = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
						break;
					case EM.Z:
						t.closePath(), i = e, a = n
				}
			}
		}
	}, UM.CMD = EM;
	var jM = 2 * Math.PI,
		qM = 2 * Math.PI,
		KM = UM.CMD,
		$M = 2 * Math.PI,
		JM = 1e-4,
		QM = [-1, -1, -1],
		tI = [-1, -1],
		eI = xS.prototype.getCanvasPattern,
		nI = Math.abs,
		iI = new UM(!0);
	Ga.prototype = {
		constructor: Ga,
		type: "path",
		__dirtyPath: !0,
		strokeContainThreshold: 5,
		subPixelOptimize: !1,
		brush: function(t, e) {
			var n = this.style,
				i = this.path || iI,
				a = n.hasStroke(),
				o = n.hasFill(),
				r = n.fill,
				s = n.stroke,
				l = o && !!r.colorStops,
				u = a && !!s.colorStops,
				h = o && !!r.image,
				c = a && !!s.image;
			if(n.bind(t, this, e), this.setTransform(t), this.__dirty) {
				var d;
				l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, r, d)), u && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d))
			}
			l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = eI.call(r, t)), u ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = eI.call(s, t));
			var f = n.lineDash,
				p = n.lineDashOffset,
				g = !!t.setLineDash,
				m = this.getGlobalScale();
			if(i.setScale(m[0], m[1]), this.__dirtyPath || f && !g && a ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), o)
				if(null != n.fillOpacity) {
					var v = t.globalAlpha;
					t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = v
				} else i.fill(t);
			if(f && g && (t.setLineDash(f), t.lineDashOffset = p), a)
				if(null != n.strokeOpacity) {
					var v = t.globalAlpha;
					t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = v
				} else i.stroke(t);
			f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
		},
		buildPath: function() {},
		createPathProxy: function() {
			this.path = new UM
		},
		getBoundingRect: function() {
			var t = this._rect,
				e = this.style,
				n = !t;
			if(n) {
				var i = this.path;
				i || (i = this.path = new UM), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect()
			}
			if(this._rect = t, e.hasStroke()) {
				var a = this._rectWithStroke || (this._rectWithStroke = t.clone());
				if(this.__dirty || n) {
					a.copy(t);
					var o = e.lineWidth,
						r = e.strokeNoScale ? this.getLineScale() : 1;
					e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)), r > 1e-10 && (a.width += o / r, a.height += o / r, a.x -= o / r / 2, a.y -= o / r / 2)
				}
				return a
			}
			return t
		},
		contain: function(t, e) {
			var n = this.transformCoordToLocal(t, e),
				i = this.getBoundingRect(),
				a = this.style;
			if(t = n[0], e = n[1], i.contain(t, e)) {
				var o = this.path.data;
				if(a.hasStroke()) {
					var r = a.lineWidth,
						s = a.strokeNoScale ? this.getLineScale() : 1;
					if(s > 1e-10 && (a.hasFill() || (r = Math.max(r, this.strokeContainThreshold)), Va(o, r / s, t, e))) return !0
				}
				if(a.hasFill()) return Ba(o, t, e)
			}
			return !1
		},
		dirty: function(t) {
			null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
		},
		animateShape: function(t) {
			return this.animate("shape", t)
		},
		attrKV: function(t, e) {
			"shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : xi.prototype.attrKV.call(this, t, e)
		},
		setShape: function(t, e) {
			var n = this.shape;
			if(n) {
				if(S(t))
					for(var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
				else n[t] = e;
				this.dirty(!0)
			}
			return this
		},
		getLineScale: function() {
			var t = this.transform;
			return t && nI(t[0] - 1) > 1e-10 && nI(t[3] - 1) > 1e-10 ? Math.sqrt(nI(t[0] * t[3] - t[2] * t[1])) : 1
		}
	}, Ga.extend = function(t) {
		var e = function(e) {
			Ga.call(this, e), t.style && this.style.extendFrom(t.style, !1);
			var n = t.shape;
			if(n) {
				this.shape = this.shape || {};
				var i = this.shape;
				for(var a in n) !i.hasOwnProperty(a) && n.hasOwnProperty(a) && (i[a] = n[a])
			}
			t.init && t.init.call(this, e)
		};
		h(e, Ga);
		for(var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
		return e
	}, h(Ga, xi);
	var aI = UM.CMD,
		oI = [
			[],
			[],
			[]
		],
		rI = Math.sqrt,
		sI = Math.atan2,
		lI = function(t, e) {
			var n, i, a, o, r, s, l = t.data,
				u = aI.M,
				h = aI.C,
				c = aI.L,
				d = aI.R,
				f = aI.A,
				p = aI.Q;
			for(a = 0, o = 0; a < l.length;) {
				switch(n = l[a++], o = a, i = 0, n) {
					case u:
						i = 1;
						break;
					case c:
						i = 1;
						break;
					case h:
						i = 3;
						break;
					case p:
						i = 2;
						break;
					case f:
						var g = e[4],
							m = e[5],
							v = rI(e[0] * e[0] + e[1] * e[1]),
							y = rI(e[2] * e[2] + e[3] * e[3]),
							x = sI(-e[1] / y, e[0] / v);
						l[a] *= v, l[a++] += g, l[a] *= y, l[a++] += m, l[a++] *= v, l[a++] *= y, l[a++] += x, l[a++] += x, a += 2, o = a;
						break;
					case d:
						s[0] = l[a++], s[1] = l[a++], oe(s, s, e), l[o++] = s[0], l[o++] = s[1], s[0] += l[a++], s[1] += l[a++], oe(s, s, e), l[o++] = s[0], l[o++] = s[1]
				}
				for(r = 0; i > r; r++) {
					var s = oI[r];
					s[0] = l[a++], s[1] = l[a++], oe(s, s, e), l[o++] = s[0], l[o++] = s[1]
				}
			}
		},
		uI = Math.sqrt,
		hI = Math.sin,
		cI = Math.cos,
		dI = Math.PI,
		fI = function(t) {
			return Math.sqrt(t[0] * t[0] + t[1] * t[1])
		},
		pI = function(t, e) {
			return(t[0] * e[0] + t[1] * e[1]) / (fI(t) * fI(e))
		},
		gI = function(t, e) {
			return(t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(pI(t, e))
		},
		mI = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
		vI = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
		yI = function(t) {
			xi.call(this, t)
		};
	yI.prototype = {
		constructor: yI,
		type: "text",
		brush: function(t, e) {
			var n = this.style;
			this.__dirty && ei(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
			var i = n.text;
			return null != i && (i += ""), yi(i, n) ? (this.setTransform(t), ii(this, t, i, n, null, e), void this.restoreTransform(t)) : void(t.__attrCachedBy = dS.NONE)
		},
		getBoundingRect: function() {
			var t = this.style;
			if(this.__dirty && ei(t, !0), !this._rect) {
				var e = t.text;
				null != e ? e += "" : e = "";
				var n = Bn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);
				if(n.x += t.x || 0, n.y += t.y || 0, pi(t.textStroke, t.textStrokeWidth)) {
					var i = t.textStrokeWidth;
					n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
				}
				this._rect = n
			}
			return this._rect
		}
	}, h(yI, xi);
	var xI = Ga.extend({
			type: "circle",
			shape: {
				cx: 0,
				cy: 0,
				r: 0
			},
			buildPath: function(t, e, n) {
				n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
			}
		}),
		_I = [
			["shadowBlur", 0],
			["shadowColor", "#000"],
			["shadowOffsetX", 0],
			["shadowOffsetY", 0]
		],
		wI = function(t) {
			return Kw.browser.ie && Kw.browser.version >= 11 ? function() {
				var e, n = this.__clipPaths,
					i = this.style;
				if(n)
					for(var a = 0; a < n.length; a++) {
						var o = n[a],
							r = o && o.shape,
							s = o && o.type;
						if(r && ("sector" === s && r.startAngle === r.endAngle || "rect" === s && (!r.width || !r.height))) {
							for(var l = 0; l < _I.length; l++) _I[l][2] = i[_I[l][0]], i[_I[l][0]] = _I[l][1];
							e = !0;
							break
						}
					}
				if(t.apply(this, arguments), e)
					for(var l = 0; l < _I.length; l++) i[_I[l][0]] = _I[l][2]
			} : t
		},
		bI = Ga.extend({
			type: "sector",
			shape: {
				cx: 0,
				cy: 0,
				r0: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			brush: wI(Ga.prototype.brush),
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					a = Math.max(e.r0 || 0, 0),
					o = Math.max(e.r, 0),
					r = e.startAngle,
					s = e.endAngle,
					l = e.clockwise,
					u = Math.cos(r),
					h = Math.sin(r);
				t.moveTo(u * a + n, h * a + i), t.lineTo(u * o + n, h * o + i), t.arc(n, i, o, r, s, !l), t.lineTo(Math.cos(s) * a + n, Math.sin(s) * a + i), 0 !== a && t.arc(n, i, a, s, r, l), t.closePath()
			}
		}),
		SI = Ga.extend({
			type: "ring",
			shape: {
				cx: 0,
				cy: 0,
				r: 0,
				r0: 0
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					a = 2 * Math.PI;
				t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, a, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, a, !0)
			}
		}),
		MI = function(t, e) {
			for(var n = t.length, i = [], a = 0, o = 1; n > o; o++) a += ee(t[o - 1], t[o]);
			var r = a / 2;
			r = n > r ? n : r;
			for(var o = 0; r > o; o++) {
				var s, l, u, h = o / (r - 1) * (e ? n : n - 1),
					c = Math.floor(h),
					d = h - c,
					f = t[c % n];
				e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);
				var p = d * d,
					g = d * p;
				i.push([Ua(s[0], f[0], l[0], u[0], d, p, g), Ua(s[1], f[1], l[1], u[1], d, p, g)])
			}
			return i
		},
		II = function(t, e, n, i) {
			var a, o, r, s, l = [],
				u = [],
				h = [],
				c = [];
			if(i) {
				r = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
				for(var d = 0, f = t.length; f > d; d++) re(r, r, t[d]), se(s, s, t[d]);
				re(r, r, i[0]), se(s, s, i[1])
			}
			for(var d = 0, f = t.length; f > d; d++) {
				var p = t[d];
				if(n) a = t[d ? d - 1 : f - 1], o = t[(d + 1) % f];
				else {
					if(0 === d || d === f - 1) {
						l.push(H(t[d]));
						continue
					}
					a = t[d - 1], o = t[d + 1]
				}
				U(u, o, a), Q(u, u, e);
				var g = ee(p, a),
					m = ee(p, o),
					v = g + m;
				0 !== v && (g /= v, m /= v), Q(h, u, -g), Q(c, u, m);
				var y = X([], p, h),
					x = X([], p, c);
				i && (se(y, y, r), re(y, y, s), se(x, x, r), re(x, x, s)), l.push(y), l.push(x)
			}
			return n && l.push(l.shift()), l
		},
		TI = Ga.extend({
			type: "polygon",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			buildPath: function(t, e) {
				ja(t, e, !0)
			}
		}),
		AI = Ga.extend({
			type: "polyline",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				ja(t, e, !1)
			}
		}),
		DI = Math.round,
		CI = {},
		LI = Ga.extend({
			type: "rect",
			shape: {
				r: 0,
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n, i, a, o;
				this.subPixelOptimize ? (Ka(CI, e, this.style), n = CI.x, i = CI.y, a = CI.width, o = CI.height, CI.r = e.r, e = CI) : (n = e.x, i = e.y, a = e.width, o = e.height), e.r ? ti(t, e) : t.rect(n, i, a, o), t.closePath()
			}
		}),
		kI = {},
		PI = Ga.extend({
			type: "line",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var n, i, a, o;
				this.subPixelOptimize ? (qa(kI, e, this.style), n = kI.x1, i = kI.y1, a = kI.x2, o = kI.y2) : (n = e.x1, i = e.y1, a = e.x2, o = e.y2);
				var r = e.percent;
				0 !== r && (t.moveTo(n, i), 1 > r && (a = n * (1 - r) + a * r, o = i * (1 - r) + o * r), t.lineTo(a, o))
			},
			pointAt: function(t) {
				var e = this.shape;
				return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
			}
		}),
		OI = [],
		NI = Ga.extend({
			type: "bezier-curve",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				cpx1: 0,
				cpy1: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var n = e.x1,
					i = e.y1,
					a = e.x2,
					o = e.y2,
					r = e.cpx1,
					s = e.cpy1,
					l = e.cpx2,
					u = e.cpy2,
					h = e.percent;
				0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (xa(n, r, a, h, OI), r = OI[1], a = OI[2], xa(i, s, o, h, OI), s = OI[1], o = OI[2]), t.quadraticCurveTo(r, s, a, o)) : (1 > h && (fa(n, r, l, a, h, OI), r = OI[1], l = OI[2], a = OI[3], fa(i, s, u, o, h, OI), s = OI[1], u = OI[2], o = OI[3]), t.bezierCurveTo(r, s, l, u, a, o)))
			},
			pointAt: function(t) {
				return Ja(this.shape, t, !1)
			},
			tangentAt: function(t) {
				var e = Ja(this.shape, t, !0);
				return te(e, e)
			}
		}),
		EI = Ga.extend({
			type: "arc",
			shape: {
				cx: 0,
				cy: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					a = Math.max(e.r, 0),
					o = e.startAngle,
					r = e.endAngle,
					s = e.clockwise,
					l = Math.cos(o),
					u = Math.sin(o);
				t.moveTo(l * a + n, u * a + i), t.arc(n, i, a, o, r, !s)
			}
		}),
		zI = Ga.extend({
			type: "compound",
			shape: {
				paths: null
			},
			_updatePathDirty: function() {
				for(var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
				this.__dirtyPath = t, this.__dirty = this.__dirty || t
			},
			beforeBrush: function() {
				this._updatePathDirty();
				for(var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1])
			},
			buildPath: function(t, e) {
				for(var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
			},
			afterBrush: function() {
				for(var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
			},
			getBoundingRect: function() {
				return this._updatePathDirty(), Ga.prototype.getBoundingRect.call(this)
			}
		}),
		RI = function(t) {
			this.colorStops = t || []
		};
	RI.prototype = {
		constructor: RI,
		addColorStop: function(t, e) {
			this.colorStops.push({
				offset: t,
				color: e
			})
		}
	};
	var BI = function(t, e, n, i, a, o) {
		this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = o || !1, RI.call(this, a)
	};
	BI.prototype = {
		constructor: BI
	}, h(BI, RI);
	var VI = function(t, e, n, i, a) {
		this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = a || !1, RI.call(this, i)
	};
	VI.prototype = {
		constructor: VI
	}, h(VI, RI), Qa.prototype.incremental = !0, Qa.prototype.clearDisplaybles = function() {
		this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
	}, Qa.prototype.addDisplayable = function(t, e) {
		e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
	}, Qa.prototype.addDisplayables = function(t, e) {
		e = e || !1;
		for(var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
	}, Qa.prototype.eachPendingDisplayable = function(t) {
		for(var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
		for(var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
	}, Qa.prototype.update = function() {
		this.updateTransform();
		for(var t = this._cursor; t < this._displayables.length; t++) {
			var e = this._displayables[t];
			e.parent = this, e.update(), e.parent = null
		}
		for(var t = 0; t < this._temporaryDisplayables.length; t++) {
			var e = this._temporaryDisplayables[t];
			e.parent = this, e.update(), e.parent = null
		}
	}, Qa.prototype.brush = function(t) {
		for(var e = this._cursor; e < this._displayables.length; e++) {
			var n = this._displayables[e];
			n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t)
		}
		this._cursor = e;
		for(var e = 0; e < this._temporaryDisplayables.length; e++) {
			var n = this._temporaryDisplayables[e];
			n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t)
		}
		this._temporaryDisplayables = [], this.notClear = !0
	};
	var GI = [];
	Qa.prototype.getBoundingRect = function() {
		if(!this._rect) {
			for(var t = new xn(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
				var n = this._displayables[e],
					i = n.getBoundingRect().clone();
				n.needLocalTransform() && i.applyTransform(n.getLocalTransform(GI)), t.union(i)
			}
			this._rect = t
		}
		return this._rect
	}, Qa.prototype.contain = function(t, e) {
		var n = this.transformCoordToLocal(t, e),
			i = this.getBoundingRect();
		if(i.contain(n[0], n[1]))
			for(var a = 0; a < this._displayables.length; a++) {
				var o = this._displayables[a];
				if(o.contain(t, e)) return !0
			}
		return !1
	}, h(Qa, xi);
	var FI = Math.round,
		WI = Math.max,
		HI = Math.min,
		ZI = {},
		XI = 1,
		YI = Ya,
		UI = B(),
		jI = 0,
		qI = (Object.freeze || Object)({
			Z2_EMPHASIS_LIFT: XI,
			extendShape: to,
			extendPath: eo,
			makePath: no,
			makeImage: io,
			mergePath: YI,
			resizePath: oo,
			subPixelOptimizeLine: ro,
			subPixelOptimizeRect: so,
			subPixelOptimize: lo,
			setElementHoverStyle: vo,
			isInEmphasis: yo,
			setHoverStyle: So,
			setAsHoverStyleTrigger: Mo,
			setLabelStyle: Io,
			setTextStyle: To,
			setText: Ao,
			getFont: No,
			updateProps: zo,
			initProps: Ro,
			getTransform: Bo,
			applyTransform: Vo,
			transformDirection: Go,
			groupTransition: Fo,
			clipPointsByRect: Wo,
			clipRectByRect: Ho,
			createIcon: Zo,
			Group: rS,
			Image: _i,
			Text: yI,
			Circle: xI,
			Sector: bI,
			Ring: SI,
			Polygon: TI,
			Polyline: AI,
			Rect: LI,
			Line: PI,
			BezierCurve: NI,
			Arc: EI,
			IncrementalDisplayable: Qa,
			CompoundPath: zI,
			LinearGradient: BI,
			RadialGradient: VI,
			BoundingRect: xn
		}),
		KI = ["textStyle", "color"],
		$I = {
			getTextColor: function(t) {
				var e = this.ecModel;
				return this.getShallow("color") || (!t && e ? e.get(KI) : null)
			},
			getFont: function() {
				return No({
					fontStyle: this.getShallow("fontStyle"),
					fontWeight: this.getShallow("fontWeight"),
					fontSize: this.getShallow("fontSize"),
					fontFamily: this.getShallow("fontFamily")
				}, this.ecModel)
			},
			getTextRect: function(t) {
				return Bn(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"))
			}
		},
		JI = cM([
			["fill", "color"],
			["stroke", "borderColor"],
			["lineWidth", "borderWidth"],
			["opacity"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"],
			["textPosition"],
			["textAlign"]
		]),
		QI = {
			getItemStyle: function(t, e) {
				var n = JI(this, t, e),
					i = this.getBorderLineDash();
				return i && (n.lineDash = i), n
			},
			getBorderLineDash: function() {
				var t = this.get("borderType");
				return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
			}
		},
		tT = c,
		eT = Ui();
	Xo.prototype = {
		constructor: Xo,
		init: null,
		mergeOption: function(t) {
			a(this.option, t, !0)
		},
		get: function(t, e) {
			return null == t ? this.option : Yo(this.option, this.parsePath(t), !e && Uo(this, t))
		},
		getShallow: function(t, e) {
			var n = this.option,
				i = null == n ? n : n[t],
				a = !e && Uo(this, t);
			return null == i && a && (i = a.getShallow(t)), i
		},
		getModel: function(t, e) {
			var n, i = null == t ? this.option : Yo(this.option, t = this.parsePath(t));
			return e = e || (n = Uo(this, t)) && n.getModel(t), new Xo(i, e, this.ecModel)
		},
		isEmpty: function() {
			return null == this.option
		},
		restoreData: function() {},
		clone: function() {
			var t = this.constructor;
			return new t(i(this.option))
		},
		setReadOnly: function() {},
		parsePath: function(t) {
			return "string" == typeof t && (t = t.split(".")), t
		},
		customizeGetParent: function(t) {
			eT(this).getParent = t
		},
		isAnimationEnabled: function() {
			if(!Kw.node) {
				if(null != this.option.animation) return !!this.option.animation;
				if(this.parentModel) return this.parentModel.isAnimationEnabled()
			}
		}
	}, na(Xo), ia(Xo), tT(Xo, fM), tT(Xo, gM), tT(Xo, $I), tT(Xo, QI);
	var nT = 0,
		iT = 1e-4,
		aT = 9007199254740991,
		oT = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
		rT = (Object.freeze || Object)({
			linearMap: Jo,
			parsePercent: Qo,
			round: tr,
			asc: er,
			getPrecision: nr,
			getPrecisionSafe: ir,
			getPixelPrecision: ar,
			getPercentWithPrecision: or,
			MAX_SAFE_INTEGER: aT,
			remRadian: rr,
			isRadianAroundZero: sr,
			parseDate: lr,
			quantity: ur,
			nice: cr,
			quantile: dr,
			reformIntervals: fr,
			isNumeric: pr
		}),
		sT = P,
		lT = /([&<>"'])/g,
		uT = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;"
		},
		hT = ["a", "b", "c", "d", "e", "f", "g"],
		cT = function(t, e) {
			return "{" + t + (null == e ? "" : e) + "}"
		},
		dT = Zn,
		fT = (Object.freeze || Object)({
			addCommas: gr,
			toCamelCase: mr,
			normalizeCssArray: sT,
			encodeHTML: vr,
			formatTpl: yr,
			formatTplSimple: xr,
			getTooltipMarker: _r,
			formatTime: br,
			capitalFirst: Sr,
			truncateText: dT,
			getTextBoundingRect: Mr,
			getTextRect: Ir
		}),
		pT = f,
		gT = ["left", "right", "top", "bottom", "width", "height"],
		mT = [
			["width", "left", "right"],
			["height", "top", "bottom"]
		],
		vT = Tr,
		yT = (x(Tr, "vertical"), x(Tr, "horizontal"), {
			getBoxLayoutParams: function() {
				return {
					left: this.get("left"),
					top: this.get("top"),
					right: this.get("right"),
					bottom: this.get("bottom"),
					width: this.get("width"),
					height: this.get("height")
				}
			}
		}),
		xT = Ui(),
		_T = Xo.extend({
			type: "component",
			id: "",
			name: "",
			mainType: "",
			subType: "",
			componentIndex: 0,
			defaultOption: null,
			ecModel: null,
			dependentModels: [],
			uid: null,
			layoutMode: null,
			$constructor: function(t, e, n, i) {
				Xo.call(this, t, e, n, i), this.uid = jo("ec_cpt_model")
			},
			init: function(t, e, n) {
				this.mergeDefaultAndTheme(t, n)
			},
			mergeDefaultAndTheme: function(t, e) {
				var n = this.layoutMode,
					i = n ? Pr(t) : {},
					o = e.getTheme();
				a(t, o.get(this.mainType)), a(t, this.getDefaultOption()), n && kr(t, i, n)
			},
			mergeOption: function(t) {
				a(this.option, t, !0);
				var e = this.layoutMode;
				e && kr(this.option, t, e)
			},
			optionUpdated: function() {},
			getDefaultOption: function() {
				var t = xT(this);
				if(!t.defaultOption) {
					for(var e = [], n = this.constructor; n;) {
						var i = n.prototype.defaultOption;
						i && e.push(i), n = n.superClass
					}
					for(var o = {}, r = e.length - 1; r >= 0; r--) o = a(o, e[r], !0);
					t.defaultOption = o
				}
				return t.defaultOption
			},
			getReferringComponents: function(t) {
				return this.ecModel.queryComponents({
					mainType: t,
					index: this.get(t + "Index", !0),
					id: this.get(t + "Id", !0)
				})
			}
		});
	ra(_T, {
		registerWhenExtend: !0
	}), qo(_T), Ko(_T, Nr), c(_T, yT);
	var wT = "";
	"undefined" != typeof navigator && (wT = navigator.platform || "");
	var bT = {
			color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
			gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
			textStyle: {
				fontFamily: wT.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
				fontSize: 12,
				fontStyle: "normal",
				fontWeight: "normal"
			},
			blendMode: null,
			animation: "auto",
			animationDuration: 1e3,
			animationDurationUpdate: 300,
			animationEasing: "exponentialOut",
			animationEasingUpdate: "cubicOut",
			animationThreshold: 2e3,
			progressiveThreshold: 3e3,
			progressive: 400,
			hoverLayerThreshold: 3e3,
			useUTC: !1
		},
		ST = Ui(),
		MT = {
			clearColorPalette: function() {
				ST(this).colorIdx = 0, ST(this).colorNameMap = {}
			},
			getColorFromPalette: function(t, e, n) {
				e = e || this;
				var i = ST(e),
					a = i.colorIdx || 0,
					o = i.colorNameMap = i.colorNameMap || {};
				if(o.hasOwnProperty(t)) return o[t];
				var r = Ri(this.get("color", !0)),
					s = this.get("colorLayer", !0),
					l = null != n && s ? Er(s, n) : r;
				if(l = l || r, l && l.length) {
					var u = l[a];
					return t && (o[t] = u), i.colorIdx = (a + 1) % l.length, u
				}
			}
		},
		IT = {
			cartesian2d: function(t, e, n, i) {
				var a = t.getReferringComponents("xAxis")[0],
					o = t.getReferringComponents("yAxis")[0];
				e.coordSysDims = ["x", "y"], n.set("x", a), n.set("y", o), Rr(a) && (i.set("x", a), e.firstCategoryDimIndex = 0), Rr(o) && (i.set("y", o), e.firstCategoryDimIndex = 1)
			},
			singleAxis: function(t, e, n, i) {
				var a = t.getReferringComponents("singleAxis")[0];
				e.coordSysDims = ["single"], n.set("single", a), Rr(a) && (i.set("single", a), e.firstCategoryDimIndex = 0)
			},
			polar: function(t, e, n, i) {
				var a = t.getReferringComponents("polar")[0],
					o = a.findAxisModel("radiusAxis"),
					r = a.findAxisModel("angleAxis");
				e.coordSysDims = ["radius", "angle"], n.set("radius", o), n.set("angle", r), Rr(o) && (i.set("radius", o), e.firstCategoryDimIndex = 0), Rr(r) && (i.set("angle", r), e.firstCategoryDimIndex = 1)
			},
			geo: function(t, e) {
				e.coordSysDims = ["lng", "lat"]
			},
			parallel: function(t, e, n, i) {
				var a = t.ecModel,
					o = a.getComponent("parallel", t.get("parallelIndex")),
					r = e.coordSysDims = o.dimensions.slice();
				f(o.parallelAxisIndex, function(t, o) {
					var s = a.getComponent("parallelAxis", t),
						l = r[o];
					n.set(l, s), Rr(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = o)
				})
			}
		},
		TT = "original",
		AT = "arrayRows",
		DT = "objectRows",
		CT = "keyedColumns",
		LT = "unknown",
		kT = "typedArray",
		PT = "column",
		OT = "row";
	Br.seriesDataToSource = function(t) {
		return new Br({
			data: t,
			sourceFormat: I(t) ? kT : TT,
			fromDataset: !1
		})
	}, ia(Br);
	var NT = Ui(),
		ET = "\x00_ec_inner",
		zT = Xo.extend({
			init: function(t, e, n, i) {
				n = n || {}, this.option = null, this._theme = new Xo(n), this._optionManager = i
			},
			setOption: function(t, e) {
				O(!(ET in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
			},
			resetOption: function(t) {
				var e = !1,
					n = this._optionManager;
				if(!t || "recreate" === t) {
					var i = n.mountOption("recreate" === t);
					this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : Qr.call(this, i), e = !0
				}
				if(("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
					var a = n.getTimelineOption(this);
					a && (this.mergeOption(a), e = !0)
				}
				if(!t || "recreate" === t || "media" === t) {
					var o = n.getMediaOption(this, this._api);
					o.length && f(o, function(t) {
						this.mergeOption(t, e = !0)
					}, this)
				}
				return e
			},
			mergeOption: function(t) {
				function e(e, i) {
					var a = Ri(t[e]),
						s = Fi(o.get(e), a);
					Wi(s), f(s, function(t) {
						var n = t.option;
						S(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = es(e, n, t.exist))
					});
					var l = ts(o, i);
					n[e] = [], o.set(e, []), f(s, function(t, i) {
						var a = t.exist,
							s = t.option;
						if(O(S(s) || a, "Empty component definition"), s) {
							var u = _T.getClass(e, t.keyInfo.subType, !0);
							if(a && a instanceof u) a.name = t.keyInfo.name, a.mergeOption(s, this), a.optionUpdated(s, !1);
							else {
								var h = r({
									dependentModels: l,
									componentIndex: i
								}, t.keyInfo);
								a = new u(s, this, this, h), r(a, h), a.init(s, this, this, h), a.optionUpdated(null, !0)
							}
						} else a.mergeOption({}, this), a.optionUpdated({}, !1);
						o.get(e)[i] = a, n[e][i] = a.option
					}, this), "series" === e && ns(this, o.get("series"))
				}
				var n = this.option,
					o = this._componentsMap,
					s = [];
				Fr(this), f(t, function(t, e) {
					null != t && (_T.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : a(n[e], t, !0))
				}), _T.topologicalTravel(s, _T.getAllClassMainTypes(), e, this), this._seriesIndicesMap = B(this._seriesIndices = this._seriesIndices || [])
			},
			getOption: function() {
				var t = i(this.option);
				return f(t, function(e, n) {
					if(_T.hasClass(n)) {
						for(var e = Ri(e), i = e.length - 1; i >= 0; i--) Zi(e[i]) && e.splice(i, 1);
						t[n] = e
					}
				}), delete t[ET], t
			},
			getTheme: function() {
				return this._theme
			},
			getComponent: function(t, e) {
				var n = this._componentsMap.get(t);
				return n ? n[e || 0] : void 0
			},
			queryComponents: function(t) {
				var e = t.mainType;
				if(!e) return [];
				var n = t.index,
					i = t.id,
					a = t.name,
					o = this._componentsMap.get(e);
				if(!o || !o.length) return [];
				var r;
				if(null != n) _(n) || (n = [n]), r = m(p(n, function(t) {
					return o[t]
				}), function(t) {
					return !!t
				});
				else if(null != i) {
					var s = _(i);
					r = m(o, function(t) {
						return s && u(i, t.id) >= 0 || !s && t.id === i
					})
				} else if(null != a) {
					var l = _(a);
					r = m(o, function(t) {
						return l && u(a, t.name) >= 0 || !l && t.name === a
					})
				} else r = o.slice();
				return is(r, t)
			},
			findComponents: function(t) {
				function e(t) {
					var e = a + "Index",
						n = a + "Id",
						i = a + "Name";
					return !t || null == t[e] && null == t[n] && null == t[i] ? null : {
						mainType: a,
						index: t[e],
						id: t[n],
						name: t[i]
					}
				}

				function n(e) {
					return t.filter ? m(e, t.filter) : e
				}
				var i = t.query,
					a = t.mainType,
					o = e(i),
					r = o ? this.queryComponents(o) : this._componentsMap.get(a);
				return n(is(r, t))
			},
			eachComponent: function(t, e, n) {
				var i = this._componentsMap;
				if("function" == typeof t) n = e, e = t, i.each(function(t, i) {
					f(t, function(t, a) {
						e.call(n, i, t, a)
					})
				});
				else if(b(t)) f(i.get(t), e, n);
				else if(S(t)) {
					var a = this.findComponents(t);
					f(a, e, n)
				}
			},
			getSeriesByName: function(t) {
				var e = this._componentsMap.get("series");
				return m(e, function(e) {
					return e.name === t
				})
			},
			getSeriesByIndex: function(t) {
				return this._componentsMap.get("series")[t]
			},
			getSeriesByType: function(t) {
				var e = this._componentsMap.get("series");
				return m(e, function(e) {
					return e.subType === t
				})
			},
			getSeries: function() {
				return this._componentsMap.get("series").slice()
			},
			getSeriesCount: function() {
				return this._componentsMap.get("series").length
			},
			eachSeries: function(t, e) {
				f(this._seriesIndices, function(n) {
					var i = this._componentsMap.get("series")[n];
					t.call(e, i, n)
				}, this)
			},
			eachRawSeries: function(t, e) {
				f(this._componentsMap.get("series"), t, e)
			},
			eachSeriesByType: function(t, e, n) {
				f(this._seriesIndices, function(i) {
					var a = this._componentsMap.get("series")[i];
					a.subType === t && e.call(n, a, i)
				}, this)
			},
			eachRawSeriesByType: function(t, e, n) {
				return f(this.getSeriesByType(t), e, n)
			},
			isSeriesFiltered: function(t) {
				return null == this._seriesIndicesMap.get(t.componentIndex)
			},
			getCurrentSeriesIndices: function() {
				return(this._seriesIndices || []).slice()
			},
			filterSeries: function(t, e) {
				var n = m(this._componentsMap.get("series"), t, e);
				ns(this, n)
			},
			restoreData: function(t) {
				var e = this._componentsMap;
				ns(this, e.get("series"));
				var n = [];
				e.each(function(t, e) {
					n.push(e)
				}), _T.topologicalTravel(n, _T.getAllClassMainTypes(), function(n) {
					f(e.get(n), function(e) {
						("series" !== n || !$r(e, t)) && e.restoreData()
					})
				})
			}
		});
	c(zT, MT);
	var RT = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
		BT = {};
	os.prototype = {
		constructor: os,
		create: function(t, e) {
			var n = [];
			f(BT, function(i) {
				var a = i.create(t, e);
				n = n.concat(a || [])
			}), this._coordinateSystems = n
		},
		update: function(t, e) {
			f(this._coordinateSystems, function(n) {
				n.update && n.update(t, e)
			})
		},
		getCoordinateSystems: function() {
			return this._coordinateSystems.slice()
		}
	}, os.register = function(t, e) {
		BT[t] = e
	}, os.get = function(t) {
		return BT[t]
	};
	var VT = f,
		GT = i,
		FT = p,
		WT = a,
		HT = /^(min|max)?(.+)$/;
	rs.prototype = {
		constructor: rs,
		setOption: function(t, e) {
			t && f(Ri(t.series), function(t) {
				t && t.data && I(t.data) && E(t.data)
			}), t = GT(t, !0);
			var n = this._optionBackup,
				i = ss.call(this, t, e, !n);
			this._newBaseOption = i.baseOption, n ? (cs(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
		},
		mountOption: function(t) {
			var e = this._optionBackup;
			return this._timelineOptions = FT(e.timelineOptions, GT), this._mediaList = FT(e.mediaList, GT), this._mediaDefault = GT(e.mediaDefault), this._currentMediaIndices = [], GT(t ? e.baseOption : this._newBaseOption)
		},
		getTimelineOption: function(t) {
			var e, n = this._timelineOptions;
			if(n.length) {
				var i = t.getComponent("timeline");
				i && (e = GT(n[i.getCurrentIndex()], !0))
			}
			return e
		},
		getMediaOption: function() {
			var t = this._api.getWidth(),
				e = this._api.getHeight(),
				n = this._mediaList,
				i = this._mediaDefault,
				a = [],
				o = [];
			if(!n.length && !i) return o;
			for(var r = 0, s = n.length; s > r; r++) ls(n[r].query, t, e) && a.push(r);
			return !a.length && i && (a = [-1]), a.length && !hs(a, this._currentMediaIndices) && (o = FT(a, function(t) {
				return GT(-1 === t ? i.option : n[t].option)
			})), this._currentMediaIndices = a, o
		}
	};
	var ZT = f,
		XT = S,
		YT = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
		UT = function(t, e) {
			ZT(ys(t.series), function(t) {
				XT(t) && vs(t)
			});
			var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
			e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), ZT(n, function(e) {
				ZT(ys(t[e]), function(t) {
					t && (gs(t, "axisLabel"), gs(t.axisPointer, "label"))
				})
			}), ZT(ys(t.parallel), function(t) {
				var e = t && t.parallelAxisDefault;
				gs(e, "axisLabel"), gs(e && e.axisPointer, "label")
			}), ZT(ys(t.calendar), function(t) {
				fs(t, "itemStyle"), gs(t, "dayLabel"), gs(t, "monthLabel"), gs(t, "yearLabel")
			}), ZT(ys(t.radar), function(t) {
				gs(t, "name")
			}), ZT(ys(t.geo), function(t) {
				XT(t) && (ms(t), ZT(ys(t.regions), function(t) {
					ms(t)
				}))
			}), ZT(ys(t.timeline), function(t) {
				ms(t), fs(t, "label"), fs(t, "itemStyle"), fs(t, "controlStyle", !0);
				var e = t.data;
				_(e) && f(e, function(t) {
					S(t) && (fs(t, "label"), fs(t, "itemStyle"))
				})
			}), ZT(ys(t.toolbox), function(t) {
				fs(t, "iconStyle"), ZT(t.feature, function(t) {
					fs(t, "iconStyle")
				})
			}), gs(xs(t.axisPointer), "label"), gs(xs(t.tooltip).axisPointer, "label")
		},
		jT = [
			["x", "left"],
			["y", "top"],
			["x2", "right"],
			["y2", "bottom"]
		],
		qT = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
		KT = function(t, e) {
			UT(t, e), t.series = Ri(t.series), f(t.series, function(t) {
				if(S(t)) {
					var e = t.type;
					if(("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
						var n = _s(t, "pointer.color");
						null != n && ws(t, "itemStyle.normal.color", n)
					}
					bs(t)
				}
			}), t.dataRange && (t.visualMap = t.dataRange), f(qT, function(e) {
				var n = t[e];
				n && (_(n) || (n = [n]), f(n, function(t) {
					bs(t)
				}))
			})
		},
		$T = function(t) {
			var e = B();
			t.eachSeries(function(t) {
				var n = t.get("stack");
				if(n) {
					var i = e.get(n) || e.set(n, []),
						a = t.getData(),
						o = {
							stackResultDimension: a.getCalculationInfo("stackResultDimension"),
							stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
							stackedDimension: a.getCalculationInfo("stackedDimension"),
							stackedByDimension: a.getCalculationInfo("stackedByDimension"),
							isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
							data: a,
							seriesModel: t
						};
					if(!o.stackedDimension || !o.isStackedByIndex && !o.stackedByDimension) return;
					i.length && a.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(o)
				}
			}), e.each(Ss)
		},
		JT = Ms.prototype;
	JT.pure = !1, JT.persistent = !0, JT.getSource = function() {
		return this._source
	};
	var QT = {
			arrayRows_column: {
				pure: !0,
				count: function() {
					return Math.max(0, this._data.length - this._source.startIndex)
				},
				getItem: function(t) {
					return this._data[t + this._source.startIndex]
				},
				appendData: As
			},
			arrayRows_row: {
				pure: !0,
				count: function() {
					var t = this._data[0];
					return t ? Math.max(0, t.length - this._source.startIndex) : 0
				},
				getItem: function(t) {
					t += this._source.startIndex;
					for(var e = [], n = this._data, i = 0; i < n.length; i++) {
						var a = n[i];
						e.push(a ? a[t] : null)
					}
					return e
				},
				appendData: function() {
					throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
				}
			},
			objectRows: {
				pure: !0,
				count: Is,
				getItem: Ts,
				appendData: As
			},
			keyedColumns: {
				pure: !0,
				count: function() {
					var t = this._source.dimensionsDefine[0].name,
						e = this._data[t];
					return e ? e.length : 0
				},
				getItem: function(t) {
					for(var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
						var a = this._data[n[i].name];
						e.push(a ? a[t] : null)
					}
					return e
				},
				appendData: function(t) {
					var e = this._data;
					f(t, function(t, n) {
						for(var i = e[n] || (e[n] = []), a = 0; a < (t || []).length; a++) i.push(t[a])
					})
				}
			},
			original: {
				count: Is,
				getItem: Ts,
				appendData: As
			},
			typedArray: {
				persistent: !1,
				pure: !0,
				count: function() {
					return this._data ? this._data.length / this._dimSize : 0
				},
				getItem: function(t, e) {
					t -= this._offset, e = e || [];
					for(var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
					return e
				},
				appendData: function(t) {
					this._data = t
				},
				clean: function() {
					this._offset += this.count(), this._data = null
				}
			}
		},
		tA = {
			arrayRows: Ds,
			objectRows: function(t, e, n, i) {
				return null != n ? t[i] : t
			},
			keyedColumns: Ds,
			original: function(t, e, n) {
				var i = Vi(t);
				return null != n && i instanceof Array ? i[n] : i
			},
			typedArray: Ds
		},
		eA = {
			arrayRows: Cs,
			objectRows: function(t, e) {
				return Ls(t[e], this._dimensionInfos[e])
			},
			keyedColumns: Cs,
			original: function(t, e, n, i) {
				var a = t && (null == t.value ? t : t.value);
				return !this._rawData.pure && Gi(t) && (this.hasItemOption = !0), Ls(a instanceof Array ? a[i] : a, this._dimensionInfos[e])
			},
			typedArray: function(t, e, n, i) {
				return t[i]
			}
		},
		nA = /\{@(.+?)\}/g,
		iA = {
			getDataParams: function(t, e) {
				var n = this.getData(e),
					i = this.getRawValue(t, e),
					a = n.getRawIndex(t),
					o = n.getName(t),
					r = n.getRawDataItem(t),
					s = n.getItemVisual(t, "color"),
					l = this.ecModel.getComponent("tooltip"),
					u = l && l.get("renderMode"),
					h = Ji(u),
					c = this.mainType,
					d = "series" === c;
				return {
					componentType: c,
					componentSubType: this.subType,
					componentIndex: this.componentIndex,
					seriesType: d ? this.subType : null,
					seriesIndex: this.seriesIndex,
					seriesId: d ? this.id : null,
					seriesName: d ? this.name : null,
					name: o,
					dataIndex: a,
					data: r,
					dataType: e,
					value: i,
					color: s,
					marker: _r({
						color: s,
						renderMode: h
					}),
					$vars: ["seriesName", "name", "value"]
				}
			},
			getFormattedLabel: function(t, e, n, i, a) {
				e = e || "normal";
				var o = this.getData(n),
					r = o.getItemModel(t),
					s = this.getDataParams(t, n);
				null != i && s.value instanceof Array && (s.value = s.value[i]);
				var l = r.get("normal" === e ? [a || "label", "formatter"] : [e, a || "label", "formatter"]);
				if("function" == typeof l) return s.status = e, l(s);
				if("string" == typeof l) {
					var u = yr(l, s);
					return u.replace(nA, function(e, n) {
						var i = n.length;
						return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), ks(o, t, n)
					})
				}
			},
			getRawValue: function(t, e) {
				return ks(this.getData(e), t)
			},
			formatTooltip: function() {}
		},
		aA = Ns.prototype;
	aA.perform = function(t) {
		function e(t) {
			return !(t >= 1) && (t = 1), t
		}
		var n = this._upstream,
			i = t && t.skip;
		if(this._dirty && n) {
			var a = this.context;
			a.data = a.outputData = n.context.outputData
		}
		this.__pipeline && (this.__pipeline.currentTask = this);
		var o;
		this._plan && !i && (o = this._plan(this.context));
		var r = e(this._modBy),
			s = this._modDataCount || 0,
			l = e(t && t.modBy),
			u = t && t.modDataCount || 0;
		(r !== l || s !== u) && (o = "reset");
		var h;
		(this._dirty || "reset" === o) && (this._dirty = !1, h = zs(this, i)), this._modBy = l, this._modDataCount = u;
		var c = t && t.step;
		if(this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
			var d = this._dueIndex,
				f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
			if(!i && (h || f > d)) {
				var p = this._progress;
				if(_(p))
					for(var g = 0; g < p.length; g++) Es(this, p[g], d, f, l, u);
				else Es(this, p, d, f, l, u)
			}
			this._dueIndex = f;
			var m = null != this._settedOutputEnd ? this._settedOutputEnd : f;
			this._outputDueEnd = m
		} else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
		return this.unfinished()
	};
	var oA = function() {
		function t() {
			return n > i ? i++ : null
		}

		function e() {
			var t = i % r * a + Math.ceil(i / r),
				e = i >= n ? null : o > t ? t : i;
			return i++, e
		}
		var n, i, a, o, r, s = {
			reset: function(l, u, h, c) {
				i = l, n = u, a = h, o = c, r = Math.ceil(o / a), s.next = a > 1 && o > 0 ? e : t
			}
		};
		return s
	}();
	aA.dirty = function() {
		this._dirty = !0, this._onDirty && this._onDirty(this.context)
	}, aA.unfinished = function() {
		return this._progress && this._dueIndex < this._dueEnd
	}, aA.pipe = function(t) {
		(this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
	}, aA.dispose = function() {
		this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
	}, aA.getUpstream = function() {
		return this._upstream
	}, aA.getDownstream = function() {
		return this._downstream
	}, aA.setOutputEnd = function(t) {
		this._outputDueEnd = this._settedOutputEnd = t
	};
	var rA = Ui(),
		sA = _T.extend({
			type: "series.__base__",
			seriesIndex: 0,
			coordinateSystem: null,
			defaultOption: null,
			legendDataProvider: null,
			visualColorAccessPath: "itemStyle.color",
			layoutMode: null,
			init: function(t, e, n) {
				this.seriesIndex = this.componentIndex, this.dataTask = Os({
					count: Vs,
					reset: Gs
				}), this.dataTask.context = {
					model: this
				}, this.mergeDefaultAndTheme(t, n), Wr(this);
				var i = this.getInitialData(t, n);
				Ws(i, this), this.dataTask.context.data = i, rA(this).dataBeforeProcessed = i, Rs(this)
			},
			mergeDefaultAndTheme: function(t, e) {
				var n = this.layoutMode,
					i = n ? Pr(t) : {},
					o = this.subType;
				_T.hasClass(o) && (o += "Series"), a(t, e.getTheme().get(this.subType)), a(t, this.getDefaultOption()), Bi(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && kr(t, i, n)
			},
			mergeOption: function(t, e) {
				t = a(this.option, t, !0), this.fillDataTextStyle(t.data);
				var n = this.layoutMode;
				n && kr(this.option, t, n), Wr(this);
				var i = this.getInitialData(t, e);
				Ws(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, rA(this).dataBeforeProcessed = i, Rs(this)
			},
			fillDataTextStyle: function(t) {
				if(t && !I(t))
					for(var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && Bi(t[n], "label", e)
			},
			getInitialData: function() {},
			appendData: function(t) {
				var e = this.getRawData();
				e.appendData(t.data)
			},
			getData: function(t) {
				var e = Zs(this);
				if(e) {
					var n = e.context.data;
					return null == t ? n : n.getLinkedData(t)
				}
				return rA(this).data
			},
			setData: function(t) {
				var e = Zs(this);
				if(e) {
					var n = e.context;
					n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t)
				}
				rA(this).data = t
			},
			getSource: function() {
				return Gr(this)
			},
			getRawData: function() {
				return rA(this).dataBeforeProcessed
			},
			getBaseAxis: function() {
				var t = this.coordinateSystem;
				return t && t.getBaseAxis && t.getBaseAxis()
			},
			formatTooltip: function(t, e, n, i) {
				function a(n) {
					function a(t, n) {
						var a = c.getDimensionInfo(n);
						if(a && a.otherDims.tooltip !== !1) {
							var d = a.type,
								f = "sub" + r.seriesIndex + "at" + h,
								p = _r({
									color: y,
									type: "subItem",
									renderMode: i,
									markerId: f
								}),
								g = "string" == typeof p ? p : p.content,
								m = (o ? g + vr(a.displayName || "-") + ": " : "") + vr("ordinal" === d ? t + "" : "time" === d ? e ? "" : br("yyyy/MM/dd hh:mm:ss", t) : gr(t));
							m && s.push(m), l && (u[f] = y, ++h)
						}
					}
					var o = g(n, function(t, e, n) {
							var i = c.getDimensionInfo(n);
							return t |= i && i.tooltip !== !1 && null != i.displayName
						}, 0),
						s = [];
					d.length ? f(d, function(e) {
						a(ks(c, t, e), e)
					}) : f(n, a);
					var p = o ? l ? "\n" : "<br/>" : "",
						m = p + s.join(p || ", ");
					return {
						renderMode: i,
						content: m,
						style: u
					}
				}

				function o(t) {
					return {
						renderMode: i,
						content: vr(gr(t)),
						style: u
					}
				}
				var r = this;
				i = i || "html";
				var s = "html" === i ? "<br/>" : "\n",
					l = "richText" === i,
					u = {},
					h = 0,
					c = this.getData(),
					d = c.mapDimension("defaultedTooltip", !0),
					p = d.length,
					m = this.getRawValue(t),
					v = _(m),
					y = c.getItemVisual(t, "color");
				S(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";
				var x = p > 1 || v && !p ? a(m) : o(p ? ks(c, t, d[0]) : v ? m[0] : m),
					w = x.content,
					b = r.seriesIndex + "at" + h,
					M = _r({
						color: y,
						type: "item",
						renderMode: i,
						markerId: b
					});
				u[b] = y, ++h;
				var I = c.getName(t),
					T = this.name;
				Hi(this) || (T = ""), T = T ? vr(T) + (e ? ": " : s) : "";
				var A = "string" == typeof M ? M : M.content,
					D = e ? A + T + w : T + A + (I ? vr(I) + ": " + w : w);
				return {
					html: D,
					markers: u
				}
			},
			isAnimationEnabled: function() {
				if(Kw.node) return !1;
				var t = this.getShallow("animation");
				return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
			},
			restoreData: function() {
				this.dataTask.dirty()
			},
			getColorFromPalette: function(t, e, n) {
				var i = this.ecModel,
					a = MT.getColorFromPalette.call(this, t, e, n);
				return a || (a = i.getColorFromPalette(t, e, n)), a
			},
			coordDimToDataDim: function(t) {
				return this.getRawData().mapDimension(t, !0)
			},
			getProgressive: function() {
				return this.get("progressive")
			},
			getProgressiveThreshold: function() {
				return this.get("progressiveThreshold")
			},
			getAxisTooltipData: null,
			getTooltipPosition: null,
			pipeTask: null,
			preventIncremental: null,
			pipelineContext: null
		});
	c(sA, iA), c(sA, MT);
	var lA = function() {
		this.group = new rS, this.uid = jo("viewComponent")
	};
	lA.prototype = {
		constructor: lA,
		init: function() {},
		render: function() {},
		dispose: function() {},
		filterForExposedEvent: null
	};
	var uA = lA.prototype;
	uA.updateView = uA.updateLayout = uA.updateVisual = function() {}, na(lA), ra(lA, {
		registerWhenExtend: !0
	});
	var hA = function() {
			var t = Ui();
			return function(e) {
				var n = t(e),
					i = e.pipelineContext,
					a = n.large,
					o = n.progressiveRender,
					r = n.large = i.large,
					s = n.progressiveRender = i.progressiveRender;
				return !!(a ^ r || o ^ s) && "reset"
			}
		},
		cA = Ui(),
		dA = hA();
	Xs.prototype = {
		type: "chart",
		init: function() {},
		render: function() {},
		highlight: function(t, e, n, i) {
			Us(t.getData(), i, "emphasis")
		},
		downplay: function(t, e, n, i) {
			Us(t.getData(), i, "normal")
		},
		remove: function() {
			this.group.removeAll()
		},
		dispose: function() {},
		incrementalPrepareRender: null,
		incrementalRender: null,
		updateTransform: null,
		filterForExposedEvent: null
	};
	var fA = Xs.prototype;
	fA.updateView = fA.updateLayout = fA.updateVisual = function(t, e, n, i) {
		this.render(t, e, n, i)
	}, na(Xs, ["dispose"]), ra(Xs, {
		registerWhenExtend: !0
	}), Xs.markUpdateMethod = function(t, e) {
		cA(t).updateMethod = e
	};
	var pA = {
			incrementalPrepareRender: {
				progress: function(t, e) {
					e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
				}
			},
			render: {
				forceFirstProgress: !0,
				progress: function(t, e) {
					e.view.render(e.model, e.ecModel, e.api, e.payload)
				}
			}
		},
		gA = "\x00__throttleOriginMethod",
		mA = "\x00__throttleRate",
		vA = "\x00__throttleType",
		yA = {
			createOnAllSeries: !0,
			performRawSeries: !0,
			reset: function(t, e) {
				var n = t.getData(),
					i = (t.visualColorAccessPath || "itemStyle.color").split("."),
					a = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
				if(n.setVisual("color", a), !e.isSeriesFiltered(t)) {
					"function" != typeof a || a instanceof RI || n.each(function(e) {
						n.setItemVisual(e, "color", a(t.getDataParams(e)))
					});
					var o = function(t, e) {
						var n = t.getItemModel(e),
							a = n.get(i, !0);
						null != a && t.setItemVisual(e, "color", a)
					};
					return {
						dataEach: n.hasItemOption ? o : null
					}
				}
			}
		},
		xA = {
			toolbox: {
				brush: {
					title: {
						rect: "矩形选择",
						polygon: "圈选",
						lineX: "横向选择",
						lineY: "纵向选择",
						keep: "保持选择",
						clear: "清除选择"
					}
				},
				dataView: {
					title: "数据视图",
					lang: ["数据视图", "关闭", "刷新"]
				},
				dataZoom: {
					title: {
						zoom: "区域缩放",
						back: "区域缩放还原"
					}
				},
				magicType: {
					title: {
						line: "切换为折线图",
						bar: "切换为柱状图",
						stack: "切换为堆叠",
						tiled: "切换为平铺"
					}
				},
				restore: {
					title: "还原"
				},
				saveAsImage: {
					title: "保存为图片",
					lang: ["右键另存为图片"]
				}
			},
			series: {
				typeNames: {
					pie: "饼图",
					bar: "柱状图",
					line: "折线图",
					scatter: "散点图",
					effectScatter: "涟漪散点图",
					radar: "雷达图",
					tree: "树图",
					treemap: "矩形树图",
					boxplot: "箱型图",
					candlestick: "K线图",
					k: "K线图",
					heatmap: "热力图",
					map: "地图",
					parallel: "平行坐标图",
					lines: "线图",
					graph: "关系图",
					sankey: "桑基图",
					funnel: "漏斗图",
					gauge: "仪表盘图",
					pictorialBar: "象形柱图",
					themeRiver: "主题河流图",
					sunburst: "旭日图"
				}
			},
			aria: {
				general: {
					withTitle: "这是一个关于“{title}”的图表。",
					withoutTitle: "这是一个图表，"
				},
				series: {
					single: {
						prefix: "",
						withName: "图表类型是{seriesType}，表示{seriesName}。",
						withoutName: "图表类型是{seriesType}。"
					},
					multiple: {
						prefix: "它由{seriesCount}个图表系列组成。",
						withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
						withoutName: "第{seriesId}个系列是一个{seriesType}，",
						separator: {
							middle: "；",
							end: "。"
						}
					}
				},
				data: {
					allData: "其数据是——",
					partialData: "其中，前{displayCnt}项是——",
					withName: "{name}的数据是{value}",
					withoutName: "{value}",
					separator: {
						middle: "，",
						end: ""
					}
				}
			}
		},
		_A = function(t, e) {
			function n(t, e) {
				if("string" != typeof t) return t;
				var n = t;
				return f(e, function(t, e) {
					n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
				}), n
			}

			function i(t) {
				var e = r.get(t);
				if(null == e) {
					for(var n = t.split("."), i = xA.aria, a = 0; a < n.length; ++a) i = i[n[a]];
					return i
				}
				return e
			}

			function a() {
				var t = e.getModel("title").option;
				return t && t.length && (t = t[0]), t && t.text
			}

			function o(t) {
				return xA.series.typeNames[t] || "自定义图"
			}
			var r = e.getModel("aria");
			if(r.get("show")) {
				if(r.get("description")) return void t.setAttribute("aria-label", r.get("description"));
				var s = 0;
				e.eachSeries(function() {
					++s
				}, this);
				var l, u = r.get("data.maxCount") || 10,
					h = r.get("series.maxCount") || 10,
					c = Math.min(s, h);
				if(!(1 > s)) {
					var d = a();
					l = d ? n(i("general.withTitle"), {
						title: d
					}) : i("general.withoutTitle");
					var p = [],
						g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
					l += n(i(g), {
						seriesCount: s
					}), e.eachSeries(function(t, e) {
						if(c > e) {
							var a, r = t.get("name"),
								l = "series." + (s > 1 ? "multiple" : "single") + ".";
							a = i(r ? l + "withName" : l + "withoutName"), a = n(a, {
								seriesId: t.seriesIndex,
								seriesName: t.get("name"),
								seriesType: o(t.subType)
							});
							var h = t.getData();
							window.data = h, a += h.count() > u ? n(i("data.partialData"), {
								displayCnt: u
							}) : i("data.allData");
							for(var d = [], f = 0; f < h.count(); f++)
								if(u > f) {
									var g = h.getName(f),
										m = ks(h, f);
									d.push(n(i(g ? "data.withName" : "data.withoutName"), {
										name: g,
										value: m
									}))
								}
							a += d.join(i("data.separator.middle")) + i("data.separator.end"), p.push(a)
						}
					}), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l)
				}
			}
		},
		wA = Math.PI,
		bA = function(t, e) {
			e = e || {}, s(e, {
				text: "loading",
				color: "#c23531",
				textColor: "#000",
				maskColor: "rgba(255, 255, 255, 0.8)",
				zlevel: 0
			});
			var n = new LI({
					style: {
						fill: e.maskColor
					},
					zlevel: e.zlevel,
					z: 1e4
				}),
				i = new EI({
					shape: {
						startAngle: -wA / 2,
						endAngle: -wA / 2 + .1,
						r: 10
					},
					style: {
						stroke: e.color,
						lineCap: "round",
						lineWidth: 5
					},
					zlevel: e.zlevel,
					z: 10001
				}),
				a = new LI({
					style: {
						fill: "none",
						text: e.text,
						textPosition: "right",
						textDistance: 10,
						textFill: e.textColor
					},
					zlevel: e.zlevel,
					z: 10001
				});
			i.animateShape(!0).when(1e3, {
				endAngle: 3 * wA / 2
			}).start("circularInOut"), i.animateShape(!0).when(1e3, {
				startAngle: 3 * wA / 2
			}).delay(300).start("circularInOut");
			var o = new rS;
			return o.add(i), o.add(a), o.add(n), o.resize = function() {
				var e = t.getWidth() / 2,
					o = t.getHeight() / 2;
				i.setShape({
					cx: e,
					cy: o
				});
				var r = i.shape.r;
				a.setShape({
					x: e - r,
					y: o - r,
					width: 2 * r,
					height: 2 * r
				}), n.setShape({
					x: 0,
					y: 0,
					width: t.getWidth(),
					height: t.getHeight()
				})
			}, o.resize(), o
		},
		SA = Qs.prototype;
	SA.restoreData = function(t, e) {
		t.restoreData(e), this._stageTaskMap.each(function(t) {
			var e = t.overallTask;
			e && e.dirty()
		})
	}, SA.getPerformArgs = function(t, e) {
		if(t.__pipeline) {
			var n = this._pipelineMap.get(t.__pipeline.id),
				i = n.context,
				a = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
				o = a ? n.step : null,
				r = i && i.modDataCount,
				s = null != r ? Math.ceil(r / o) : null;
			return {
				step: o,
				modBy: s,
				modDataCount: r
			}
		}
	}, SA.getPipeline = function(t) {
		return this._pipelineMap.get(t)
	}, SA.updateStreamModes = function(t, e) {
		var n = this._pipelineMap.get(t.uid),
			i = t.getData(),
			a = i.count(),
			o = n.progressiveEnabled && e.incrementalPrepareRender && a >= n.threshold,
			r = t.get("large") && a >= t.get("largeThreshold"),
			s = "mod" === t.get("progressiveChunkMode") ? a : null;
		t.pipelineContext = n.context = {
			progressiveRender: o,
			modDataCount: s,
			large: r
		}
	}, SA.restorePipelines = function(t) {
		var e = this,
			n = e._pipelineMap = B();
		t.eachSeries(function(t) {
			var i = t.getProgressive(),
				a = t.uid;
			n.set(a, {
				id: a,
				head: null,
				tail: null,
				threshold: t.getProgressiveThreshold(),
				progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
				blockIndex: -1,
				step: Math.round(i || 700),
				count: 0
			}), cl(e, t, t.dataTask)
		})
	}, SA.prepareStageTasks = function() {
		var t = this._stageTaskMap,
			e = this.ecInstance.getModel(),
			n = this.api;
		f(this._allHandlers, function(i) {
			var a = t.get(i.uid) || t.set(i.uid, []);
			i.reset && el(this, i, a, e, n), i.overallReset && nl(this, i, a, e, n)
		}, this)
	}, SA.prepareView = function(t, e, n, i) {
		var a = t.renderTask,
			o = a.context;
		o.model = e, o.ecModel = n, o.api = i, a.__block = !t.incrementalPrepareRender, cl(this, e, a)
	}, SA.performDataProcessorTasks = function(t, e) {
		tl(this, this._dataProcessorHandlers, t, e, {
			block: !0
		})
	}, SA.performVisualTasks = function(t, e, n) {
		tl(this, this._visualHandlers, t, e, n)
	}, SA.performSeriesTasks = function(t) {
		var e;
		t.eachSeries(function(t) {
			e |= t.dataTask.perform()
		}), this.unfinished |= e
	}, SA.plan = function() {
		this._pipelineMap.each(function(t) {
			var e = t.tail;
			do {
				if(e.__block) {
					t.blockIndex = e.__idxInPipeline;
					break
				}
				e = e.getUpstream()
			} while (e)
		})
	};
	var MA = SA.updatePayload = function(t, e) {
			"remain" !== e && (t.context.payload = e)
		},
		IA = ul(0);
	Qs.wrapStageHandler = function(t, e) {
		return w(t) && (t = {
			overallReset: t,
			seriesType: dl(t)
		}), t.uid = jo("stageHandler"), e && (t.visualType = e), t
	};
	var TA, AA = {},
		DA = {};
	fl(AA, zT), fl(DA, as), AA.eachSeriesByType = AA.eachRawSeriesByType = function(t) {
		TA = t
	}, AA.eachComponent = function(t) {
		"series" === t.mainType && t.subType && (TA = t.subType)
	};
	var CA = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
		LA = {
			color: CA,
			colorLayer: [
				["#37A2DA", "#ffd85c", "#fd7b5f"],
				["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
				["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], CA
			]
		},
		kA = "#eee",
		PA = function() {
			return {
				axisLine: {
					lineStyle: {
						color: kA
					}
				},
				axisTick: {
					lineStyle: {
						color: kA
					}
				},
				axisLabel: {
					textStyle: {
						color: kA
					}
				},
				splitLine: {
					lineStyle: {
						type: "dashed",
						color: "#aaa"
					}
				},
				splitArea: {
					areaStyle: {
						color: kA
					}
				}
			}
		},
		OA = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
		NA = {
			color: OA,
			backgroundColor: "#333",
			tooltip: {
				axisPointer: {
					lineStyle: {
						color: kA
					},
					crossStyle: {
						color: kA
					}
				}
			},
			legend: {
				textStyle: {
					color: kA
				}
			},
			textStyle: {
				color: kA
			},
			title: {
				textStyle: {
					color: kA
				}
			},
			toolbox: {
				iconStyle: {
					normal: {
						borderColor: kA
					}
				}
			},
			dataZoom: {
				textStyle: {
					color: kA
				}
			},
			visualMap: {
				textStyle: {
					color: kA
				}
			},
			timeline: {
				lineStyle: {
					color: kA
				},
				itemStyle: {
					normal: {
						color: OA[1]
					}
				},
				label: {
					normal: {
						textStyle: {
							color: kA
						}
					}
				},
				controlStyle: {
					normal: {
						color: kA,
						borderColor: kA
					}
				}
			},
			timeAxis: PA(),
			logAxis: PA(),
			valueAxis: PA(),
			categoryAxis: PA(),
			line: {
				symbol: "circle"
			},
			graph: {
				color: OA
			},
			gauge: {
				title: {
					textStyle: {
						color: kA
					}
				}
			},
			candlestick: {
				itemStyle: {
					normal: {
						color: "#FD1050",
						color0: "#0CF49B",
						borderColor: "#FD1050",
						borderColor0: "#0CF49B"
					}
				}
			}
		};
	NA.categoryAxis.splitLine.show = !1, _T.extend({
		type: "dataset",
		defaultOption: {
			seriesLayoutBy: PT,
			sourceHeader: null,
			dimensions: null,
			source: null
		},
		optionUpdated: function() {
			Vr(this)
		}
	}), lA.extend({
		type: "dataset"
	});
	var EA = Ga.extend({
			type: "ellipse",
			shape: {
				cx: 0,
				cy: 0,
				rx: 0,
				ry: 0
			},
			buildPath: function(t, e) {
				var n = .5522848,
					i = e.cx,
					a = e.cy,
					o = e.rx,
					r = e.ry,
					s = o * n,
					l = r * n;
				t.moveTo(i - o, a), t.bezierCurveTo(i - o, a - l, i - s, a - r, i, a - r), t.bezierCurveTo(i + s, a - r, i + o, a - l, i + o, a), t.bezierCurveTo(i + o, a + l, i + s, a + r, i, a + r), t.bezierCurveTo(i - s, a + r, i - o, a + l, i - o, a), t.closePath()
			}
		}),
		zA = /[\s,]+/;
	gl.prototype.parse = function(t, e) {
		e = e || {};
		var n = pl(t);
		if(!n) throw new Error("Illegal svg");
		var i = new rS;
		this._root = i;
		var a = n.getAttribute("viewBox") || "",
			o = parseFloat(n.getAttribute("width") || e.width),
			r = parseFloat(n.getAttribute("height") || e.height);
		isNaN(o) && (o = null), isNaN(r) && (r = null), xl(n, i, null, !0);
		for(var s = n.firstChild; s;) this._parseNode(s, i), s = s.nextSibling;
		var l, u;
		if(a) {
			var h = N(a).split(zA);
			h.length >= 4 && (l = {
				x: parseFloat(h[0] || 0),
				y: parseFloat(h[1] || 0),
				width: parseFloat(h[2]),
				height: parseFloat(h[3])
			})
		}
		if(l && null != o && null != r && (u = Sl(l, o, r), !e.ignoreViewBox)) {
			var c = i;
			i = new rS, i.add(c), c.scale = u.scale.slice(), c.position = u.position.slice()
		}
		return e.ignoreRootClip || null == o || null == r || i.setClipPath(new LI({
			shape: {
				x: 0,
				y: 0,
				width: o,
				height: r
			}
		})), {
			root: i,
			width: o,
			height: r,
			viewBoxRect: l,
			viewBoxTransform: u
		}
	}, gl.prototype._parseNode = function(t, e) {
		var n = t.nodeName.toLowerCase();
		"defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);
		var i;
		if(this._isDefine) {
			var a = BA[n];
			if(a) {
				var o = a.call(this, t),
					r = t.getAttribute("id");
				r && (this._defs[r] = o)
			}
		} else {
			var a = RA[n];
			a && (i = a.call(this, t, e), e.add(i))
		}
		for(var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;
		"defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1)
	}, gl.prototype._parseText = function(t, e) {
		if(1 === t.nodeType) {
			var n = t.getAttribute("dx") || 0,
				i = t.getAttribute("dy") || 0;
			this._textX += parseFloat(n), this._textY += parseFloat(i)
		}
		var a = new yI({
			style: {
				text: t.textContent,
				transformText: !0
			},
			position: [this._textX || 0, this._textY || 0]
		});
		vl(e, a), xl(t, a, this._defs);
		var o = a.style.fontSize;
		o && 9 > o && (a.style.fontSize = 9, a.scale = a.scale || [1, 1], a.scale[0] *= o / 9, a.scale[1] *= o / 9);
		var r = a.getBoundingRect();
		return this._textX += r.width, e.add(a), a
	};
	var RA = {
			g: function(t, e) {
				var n = new rS;
				return vl(e, n), xl(t, n, this._defs), n
			},
			rect: function(t, e) {
				var n = new LI;
				return vl(e, n), xl(t, n, this._defs), n.setShape({
					x: parseFloat(t.getAttribute("x") || 0),
					y: parseFloat(t.getAttribute("y") || 0),
					width: parseFloat(t.getAttribute("width") || 0),
					height: parseFloat(t.getAttribute("height") || 0)
				}), n
			},
			circle: function(t, e) {
				var n = new xI;
				return vl(e, n), xl(t, n, this._defs), n.setShape({
					cx: parseFloat(t.getAttribute("cx") || 0),
					cy: parseFloat(t.getAttribute("cy") || 0),
					r: parseFloat(t.getAttribute("r") || 0)
				}), n
			},
			line: function(t, e) {
				var n = new PI;
				return vl(e, n), xl(t, n, this._defs), n.setShape({
					x1: parseFloat(t.getAttribute("x1") || 0),
					y1: parseFloat(t.getAttribute("y1") || 0),
					x2: parseFloat(t.getAttribute("x2") || 0),
					y2: parseFloat(t.getAttribute("y2") || 0)
				}), n
			},
			ellipse: function(t, e) {
				var n = new EA;
				return vl(e, n), xl(t, n, this._defs), n.setShape({
					cx: parseFloat(t.getAttribute("cx") || 0),
					cy: parseFloat(t.getAttribute("cy") || 0),
					rx: parseFloat(t.getAttribute("rx") || 0),
					ry: parseFloat(t.getAttribute("ry") || 0)
				}), n
			},
			polygon: function(t, e) {
				var n = t.getAttribute("points");
				n && (n = yl(n));
				var i = new TI({
					shape: {
						points: n || []
					}
				});
				return vl(e, i), xl(t, i, this._defs), i
			},
			polyline: function(t, e) {
				var n = new Ga;
				vl(e, n), xl(t, n, this._defs);
				var i = t.getAttribute("points");
				i && (i = yl(i));
				var a = new AI({
					shape: {
						points: i || []
					}
				});
				return a
			},
			image: function(t, e) {
				var n = new _i;
				return vl(e, n), xl(t, n, this._defs), n.setStyle({
					image: t.getAttribute("xlink:href"),
					x: t.getAttribute("x"),
					y: t.getAttribute("y"),
					width: t.getAttribute("width"),
					height: t.getAttribute("height")
				}), n
			},
			text: function(t, e) {
				var n = t.getAttribute("x") || 0,
					i = t.getAttribute("y") || 0,
					a = t.getAttribute("dx") || 0,
					o = t.getAttribute("dy") || 0;
				this._textX = parseFloat(n) + parseFloat(a), this._textY = parseFloat(i) + parseFloat(o);
				var r = new rS;
				return vl(e, r), xl(t, r, this._defs), r
			},
			tspan: function(t, e) {
				var n = t.getAttribute("x"),
					i = t.getAttribute("y");
				null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));
				var a = t.getAttribute("dx") || 0,
					o = t.getAttribute("dy") || 0,
					r = new rS;
				return vl(e, r), xl(t, r, this._defs), this._textX += a, this._textY += o, r
			},
			path: function(t, e) {
				var n = t.getAttribute("d") || "",
					i = Za(n);
				return vl(e, i), xl(t, i, this._defs), i
			}
		},
		BA = {
			lineargradient: function(t) {
				var e = parseInt(t.getAttribute("x1") || 0, 10),
					n = parseInt(t.getAttribute("y1") || 0, 10),
					i = parseInt(t.getAttribute("x2") || 10, 10),
					a = parseInt(t.getAttribute("y2") || 0, 10),
					o = new BI(e, n, i, a);
				return ml(t, o), o
			},
			radialgradient: function() {}
		},
		VA = {
			fill: "fill",
			stroke: "stroke",
			"stroke-width": "lineWidth",
			opacity: "opacity",
			"fill-opacity": "fillOpacity",
			"stroke-opacity": "strokeOpacity",
			"stroke-dasharray": "lineDash",
			"stroke-dashoffset": "lineDashOffset",
			"stroke-linecap": "lineCap",
			"stroke-linejoin": "lineJoin",
			"stroke-miterlimit": "miterLimit",
			"font-family": "fontFamily",
			"font-size": "fontSize",
			"font-style": "fontStyle",
			"font-weight": "fontWeight",
			"text-align": "textAlign",
			"alignment-baseline": "textBaseline"
		},
		GA = /url\(\s*#(.*?)\)/,
		FA = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
		WA = /([^\s:;]+)\s*:\s*([^:;]+)/g,
		HA = B(),
		ZA = {
			registerMap: function(t, e, n) {
				var i;
				return _(e) ? i = e : e.svg ? i = [{
					type: "svg",
					source: e.svg,
					specialAreas: e.specialAreas
				}] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{
					type: "geoJSON",
					source: e,
					specialAreas: n
				}]), f(i, function(t) {
					var e = t.type;
					"geoJson" === e && (e = t.type = "geoJSON");
					var n = XA[e];
					n(t)
				}), HA.set(t, i)
			},
			retrieveMap: function(t) {
				return HA.get(t)
			}
		},
		XA = {
			geoJSON: function(t) {
				var e = t.source;
				t.geoJSON = b(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
			},
			svg: function(t) {
				t.svgXML = pl(t.source)
			}
		},
		YA = O,
		UA = f,
		jA = w,
		qA = S,
		KA = _T.parseClassType,
		$A = "4.2.1",
		JA = {
			zrender: "4.0.6"
		},
		QA = 1,
		tD = 1e3,
		eD = 5e3,
		nD = 1e3,
		iD = 2e3,
		aD = 3e3,
		oD = 4e3,
		rD = 5e3,
		sD = {
			PROCESSOR: {
				FILTER: tD,
				STATISTIC: eD
			},
			VISUAL: {
				LAYOUT: nD,
				GLOBAL: iD,
				CHART: aD,
				COMPONENT: oD,
				BRUSH: rD
			}
		},
		lD = "__flagInMainProcess",
		uD = "__optionUpdated",
		hD = /^[a-zA-Z0-9_]+$/;
	Tl.prototype.on = Il("on"), Tl.prototype.off = Il("off"), Tl.prototype.one = Il("one"), c(Tl, yb);
	var cD = Al.prototype;
	cD._onframe = function() {
		if(!this._disposed) {
			var t = this._scheduler;
			if(this[uD]) {
				var e = this[uD].silent;
				this[lD] = !0, Cl(this), dD.update.call(this), this[lD] = !1, this[uD] = !1, Ol.call(this, e), Nl.call(this, e)
			} else if(t.unfinished) {
				var n = QA,
					i = this._model,
					a = this._api;
				t.unfinished = !1;
				do {
					var o = +new Date;
					t.performSeriesTasks(i), t.performDataProcessorTasks(i), kl(this, i), t.performVisualTasks(i), Gl(this, this._model, a, "remain"), n -= +new Date - o
				} while (n > 0 && t.unfinished);
				t.unfinished || this._zr.flush()
			}
		}
	}, cD.getDom = function() {
		return this._dom
	}, cD.getZr = function() {
		return this._zr
	}, cD.setOption = function(t, e, n) {
		var i;
		if(qA(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[lD] = !0, !this._model || e) {
			var a = new rs(this._api),
				o = this._theme,
				r = this._model = new zT(null, null, o, a);
			r.scheduler = this._scheduler, r.init(null, null, o, a)
		}
		this._model.setOption(t, vD), n ? (this[uD] = {
			silent: i
		}, this[lD] = !1) : (Cl(this), dD.update.call(this), this._zr.flush(), this[uD] = !1, this[lD] = !1, Ol.call(this, i), Nl.call(this, i))
	}, cD.setTheme = function() {
		console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
	}, cD.getModel = function() {
		return this._model
	}, cD.getOption = function() {
		return this._model && this._model.getOption()
	}, cD.getWidth = function() {
		return this._zr.getWidth()
	}, cD.getHeight = function() {
		return this._zr.getHeight()
	}, cD.getDevicePixelRatio = function() {
		return this._zr.painter.dpr || window.devicePixelRatio || 1
	}, cD.getRenderedCanvas = function(t) {
		if(Kw.canvasSupported) {
			t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
			var e = this._zr;
			return e.painter.getRenderedCanvas(t)
		}
	}, cD.getSvgDataUrl = function() {
		if(Kw.svgSupported) {
			var t = this._zr,
				e = t.storage.getDisplayList();
			return f(e, function(t) {
				t.stopAnimation(!0)
			}), t.painter.pathToDataUrl()
		}
	}, cD.getDataURL = function(t) {
		t = t || {};
		var e = t.excludeComponents,
			n = this._model,
			i = [],
			a = this;
		UA(e, function(t) {
			n.eachComponent({
				mainType: t
			}, function(t) {
				var e = a._componentsMap[t.__viewId];
				e.group.ignore || (i.push(e), e.group.ignore = !0)
			})
		});
		var o = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
		return UA(i, function(t) {
			t.group.ignore = !1
		}), o
	}, cD.getConnectedDataURL = function(t) {
		if(Kw.canvasSupported) {
			var e = this.group,
				n = Math.min,
				a = Math.max,
				o = 1 / 0;
			if(SD[e]) {
				var r = o,
					s = o,
					l = -o,
					u = -o,
					h = [],
					c = t && t.pixelRatio || 1;
				f(bD, function(o) {
					if(o.group === e) {
						var c = o.getRenderedCanvas(i(t)),
							d = o.getDom().getBoundingClientRect();
						r = n(d.left, r), s = n(d.top, s), l = a(d.right, l), u = a(d.bottom, u), h.push({
							dom: c,
							left: d.left,
							top: d.top
						})
					}
				}), r *= c, s *= c, l *= c, u *= c;
				var d = l - r,
					p = u - s,
					g = sb();
				g.width = d, g.height = p;
				var m = Pi(g);
				return UA(h, function(t) {
					var e = new _i({
						style: {
							x: t.left * c - r,
							y: t.top * c - s,
							image: t.dom
						}
					});
					m.add(e)
				}), m.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
			}
			return this.getDataURL(t)
		}
	}, cD.convertToPixel = x(Dl, "convertToPixel"), cD.convertFromPixel = x(Dl, "convertFromPixel"), cD.containPixel = function(t, e) {
		var n, i = this._model;
		return t = ji(i, t), f(t, function(t, i) {
			i.indexOf("Models") >= 0 && f(t, function(t) {
				var a = t.coordinateSystem;
				if(a && a.containPoint) n |= !!a.containPoint(e);
				else if("seriesModels" === i) {
					var o = this._chartsMap[t.__viewId];
					o && o.containPoint && (n |= o.containPoint(e, t))
				}
			}, this)
		}, this), !!n
	}, cD.getVisual = function(t, e) {
		var n = this._model;
		t = ji(n, t, {
			defaultMainType: "series"
		});
		var i = t.seriesModel,
			a = i.getData(),
			o = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? a.indexOfRawIndex(t.dataIndex) : null;
		return null != o ? a.getItemVisual(o, e) : a.getVisual(e)
	}, cD.getViewOfComponentModel = function(t) {
		return this._componentsMap[t.__viewId]
	}, cD.getViewOfSeriesModel = function(t) {
		return this._chartsMap[t.__viewId]
	};
	var dD = {
		prepareAndUpdate: function(t) {
			Cl(this), dD.update.call(this, t)
		},
		update: function(t) {
			var e = this._model,
				n = this._api,
				i = this._zr,
				a = this._coordSysMgr,
				o = this._scheduler;
			if(e) {
				o.restoreData(e, t), o.performSeriesTasks(e), a.create(e, n), o.performDataProcessorTasks(e, t), kl(this, e), a.update(e, n), Rl(e), o.performVisualTasks(e, t), Bl(this, e, n, t);
				var r = e.get("backgroundColor") || "transparent";
				if(Kw.canvasSupported) i.setBackgroundColor(r);
				else {
					var s = Ye(r);
					r = en(s, "rgb"), 0 === s[3] && (r = "transparent")
				}
				Fl(e, n)
			}
		},
		updateTransform: function(t) {
			var e = this._model,
				n = this,
				i = this._api;
			if(e) {
				var a = [];
				e.eachComponent(function(o, r) {
					var s = n.getViewOfComponentModel(r);
					if(s && s.__alive)
						if(s.updateTransform) {
							var l = s.updateTransform(r, e, i, t);
							l && l.update && a.push(s)
						} else a.push(s)
				});
				var o = B();
				e.eachSeries(function(a) {
					var r = n._chartsMap[a.__viewId];
					if(r.updateTransform) {
						var s = r.updateTransform(a, e, i, t);
						s && s.update && o.set(a.uid, 1)
					} else o.set(a.uid, 1)
				}), Rl(e), this._scheduler.performVisualTasks(e, t, {
					setDirty: !0,
					dirtyMap: o
				}), Gl(n, e, i, t, o), Fl(e, this._api)
			}
		},
		updateView: function(t) {
			var e = this._model;
			e && (Xs.markUpdateMethod(t, "updateView"), Rl(e), this._scheduler.performVisualTasks(e, t, {
				setDirty: !0
			}), Bl(this, this._model, this._api, t), Fl(e, this._api))
		},
		updateVisual: function(t) {
			dD.update.call(this, t)
		},
		updateLayout: function(t) {
			dD.update.call(this, t)
		}
	};
	cD.resize = function(t) {
		this._zr.resize(t);
		var e = this._model;
		if(this._loadingFX && this._loadingFX.resize(), e) {
			var n = e.resetOption("media"),
				i = t && t.silent;
			this[lD] = !0, n && Cl(this), dD.update.call(this), this[lD] = !1, Ol.call(this, i), Nl.call(this, i)
		}
	}, cD.showLoading = function(t, e) {
		if(qA(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), wD[t]) {
			var n = wD[t](this._api, e),
				i = this._zr;
			this._loadingFX = n, i.add(n)
		}
	}, cD.hideLoading = function() {
		this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
	}, cD.makeActionFromEvent = function(t) {
		var e = r({}, t);
		return e.type = gD[t.type], e
	}, cD.dispatchAction = function(t, e) {
		if(qA(e) || (e = {
				silent: !!e
			}), pD[t.type] && this._model) {
			if(this[lD]) return void this._pendingActions.push(t);
			Pl.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && Kw.browser.weChat && this._throttledZrFlush(), Ol.call(this, e.silent), Nl.call(this, e.silent)
		}
	}, cD.appendData = function(t) {
		var e = t.seriesIndex,
			n = this.getModel(),
			i = n.getSeriesByIndex(e);
		i.appendData(t), this._scheduler.unfinished = !0
	}, cD.on = Il("on"), cD.off = Il("off"), cD.one = Il("one");
	var fD = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
	cD._initEvents = function() {
		UA(fD, function(t) {
			var e = function(e) {
				var n, i = this.getModel(),
					a = e.target,
					o = "globalout" === t;
				if(o) n = {};
				else if(a && null != a.dataIndex) {
					var s = a.dataModel || i.getSeriesByIndex(a.seriesIndex);
					n = s && s.getDataParams(a.dataIndex, a.dataType, a) || {}
				} else a && a.eventData && (n = r({}, a.eventData));
				if(n) {
					var l = n.componentType,
						u = n.componentIndex;
					("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", u = n.seriesIndex);
					var h = l && null != u && i.getComponent(l, u),
						c = h && this["series" === h.mainType ? "_chartsMap" : "_componentsMap"][h.__viewId];
					n.event = e, n.type = t, this._ecEventProcessor.eventInfo = {
						targetEl: a,
						packedEvent: n,
						model: h,
						view: c
					}, this.trigger(t, n)
				}
			};
			e.zrEventfulCallAtLast = !0, this._zr.on(t, e, this)
		}, this), UA(gD, function(t, e) {
			this._messageCenter.on(e, function(t) {
				this.trigger(e, t)
			}, this)
		}, this)
	}, cD.isDisposed = function() {
		return this._disposed
	}, cD.clear = function() {
		this.setOption({
			series: []
		}, !0)
	}, cD.dispose = function() {
		if(!this._disposed) {
			this._disposed = !0, Ki(this.getDom(), TD, "");
			var t = this._api,
				e = this._model;
			UA(this._componentsViews, function(n) {
				n.dispose(e, t)
			}), UA(this._chartsViews, function(n) {
				n.dispose(e, t)
			}), this._zr.dispose(), delete bD[this.id]
		}
	}, c(Al, yb), Yl.prototype = {
		constructor: Yl,
		normalizeQuery: function(t) {
			var e = {},
				n = {},
				i = {};
			if(b(t)) {
				var a = KA(t);
				e.mainType = a.main || null, e.subType = a.sub || null
			} else {
				var o = ["Index", "Name", "Id"],
					r = {
						name: 1,
						dataIndex: 1,
						dataType: 1
					};
				f(t, function(t, a) {
					for(var s = !1, l = 0; l < o.length; l++) {
						var u = o[l],
							h = a.lastIndexOf(u);
						if(h > 0 && h === a.length - u.length) {
							var c = a.slice(0, h);
							"data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0)
						}
					}
					r.hasOwnProperty(a) && (n[a] = t, s = !0), s || (i[a] = t)
				})
			}
			return {
				cptQuery: e,
				dataQuery: n,
				otherQuery: i
			}
		},
		filter: function(t, e) {
			function n(t, e, n, i) {
				return null == t[n] || e[i || n] === t[n]
			}
			var i = this.eventInfo;
			if(!i) return !0;
			var a = i.targetEl,
				o = i.packedEvent,
				r = i.model,
				s = i.view;
			if(!r || !s) return !0;
			var l = e.cptQuery,
				u = e.dataQuery;
			return n(l, r, "mainType") && n(l, r, "subType") && n(l, r, "index", "componentIndex") && n(l, r, "name") && n(l, r, "id") && n(u, o, "name") && n(u, o, "dataIndex") && n(u, o, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, a, o))
		},
		afterTrigger: function() {
			this.eventInfo = null
		}
	};
	var pD = {},
		gD = {},
		mD = [],
		vD = [],
		yD = [],
		xD = [],
		_D = {},
		wD = {},
		bD = {},
		SD = {},
		MD = new Date - 0,
		ID = new Date - 0,
		TD = "_echarts_instance_",
		AD = Kl;
	lu(iD, yA), eu(KT), nu(eD, $T), hu("default", bA), au({
		type: "highlight",
		event: "highlight",
		update: "highlight"
	}, G), au({
		type: "downplay",
		event: "downplay",
		update: "downplay"
	}, G), tu("light", LA), tu("dark", NA);
	var DD = {};
	xu.prototype = {
		constructor: xu,
		add: function(t) {
			return this._add = t, this
		},
		update: function(t) {
			return this._update = t, this
		},
		remove: function(t) {
			return this._remove = t, this
		},
		execute: function() {
			var t, e = this._old,
				n = this._new,
				i = {},
				a = {},
				o = [],
				r = [];
			for(_u(e, i, o, "_oldKeyGetter", this), _u(n, a, r, "_newKeyGetter", this), t = 0; t < e.length; t++) {
				var s = o[t],
					l = a[s];
				if(null != l) {
					var u = l.length;
					u ? (1 === u && (a[s] = null), l = l.unshift()) : a[s] = null, this._update && this._update(l, t)
				} else this._remove && this._remove(t)
			}
			for(var t = 0; t < r.length; t++) {
				var s = r[t];
				if(a.hasOwnProperty(s)) {
					var l = a[s];
					if(null == l) continue;
					if(l.length)
						for(var h = 0, u = l.length; u > h; h++) this._add && this._add(l[h]);
					else this._add && this._add(l)
				}
			}
		}
	};
	var CD = B(["tooltip", "label", "itemName", "itemId", "seriesName"]),
		LD = S,
		kD = "undefined",
		PD = -1,
		OD = "e\x00\x00",
		ND = {
			"float": typeof Float64Array === kD ? Array : Float64Array,
			"int": typeof Int32Array === kD ? Array : Int32Array,
			ordinal: Array,
			number: Array,
			time: Array
		},
		ED = typeof Uint32Array === kD ? Array : Uint32Array,
		zD = typeof Int32Array === kD ? Array : Int32Array,
		RD = typeof Uint16Array === kD ? Array : Uint16Array,
		BD = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
		VD = ["_extent", "_approximateExtent", "_rawExtent"],
		GD = function(t, e) {
			t = t || ["x", "y"];
			for(var n = {}, i = [], a = {}, o = 0; o < t.length; o++) {
				var r = t[o];
				b(r) && (r = {
					name: r
				});
				var s = r.name;
				r.type = r.type || "float", r.coordDim || (r.coordDim = s, r.coordDimIndex = 0), r.otherDims = r.otherDims || {}, i.push(s), n[s] = r, r.index = o, r.createInvertedIndices && (a[s] = [])
			}
			this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = wu(this), this._invertedIndicesMap = a, this._calculationInfo = {}
		},
		FD = GD.prototype;
	FD.type = "list", FD.hasItemOption = !0, FD.getDimension = function(t) {
		return isNaN(t) || (t = this.dimensions[t] || t), t
	}, FD.getDimensionInfo = function(t) {
		return this._dimensionInfos[this.getDimension(t)]
	}, FD.getDimensionsOnCoord = function() {
		return this._dimensionsSummary.dataDimsOnCoord.slice()
	}, FD.mapDimension = function(t, e) {
		var n = this._dimensionsSummary;
		if(null == e) return n.encodeFirstDimNotExtra[t];
		var i = n.encode[t];
		return e === !0 ? (i || []).slice() : i && i[e]
	}, FD.initData = function(t, e, n) {
		var i = Br.isInstance(t) || d(t);
		i && (t = new Ms(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = eA[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._dimValueGetterArrayRows = eA.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
	}, FD.getProvider = function() {
		return this._rawData
	}, FD.appendData = function(t) {
		var e = this._rawData,
			n = this.count();
		e.appendData(t);
		var i = e.count();
		e.persistent || (i += n), this._initDataFromProvider(n, i)
	}, FD.appendValues = function(t, e) {
		for(var n = this._chunkSize, i = this._storage, a = this.dimensions, o = a.length, r = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), u = this._chunkCount, h = 0; o > h; h++) {
			var c = a[h];
			r[c] || (r[c] = zu()), i[c] || (i[c] = []), Au(i, this._dimensionInfos[c], n, u, l), this._chunkCount = i[c].length
		}
		for(var d = new Array(o), f = s; l > f; f++) {
			for(var p = f - s, g = Math.floor(f / n), m = f % n, v = 0; o > v; v++) {
				var c = a[v],
					y = this._dimValueGetterArrayRows(t[p] || d, c, p, v);
				i[c][g][m] = y;
				var x = r[c];
				y < x[0] && (x[0] = y), y > x[1] && (x[1] = y)
			}
			e && (this._nameList[f] = e[p])
		}
		this._rawCount = this._count = l, this._extent = {}, Du(this)
	}, FD._initDataFromProvider = function(t, e) {
		if(!(t >= e)) {
			for(var n, i = this._chunkSize, a = this._rawData, o = this._storage, r = this.dimensions, s = r.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = 0; s > p; p++) {
				var g = r[p];
				c[g] || (c[g] = zu());
				var m = l[g];
				0 === m.otherDims.itemName && (n = this._nameDimIdx = p), 0 === m.otherDims.itemId && (this._idDimIdx = p), o[g] || (o[g] = []), Au(o, m, i, f, e), this._chunkCount = o[g].length
			}
			for(var v = new Array(s), y = t; e > y; y++) {
				v = a.getItem(y, v);
				for(var x = Math.floor(y / i), _ = y % i, w = 0; s > w; w++) {
					var g = r[w],
						b = o[g][x],
						S = this._dimValueGetter(v, g, y, w);
					b[_] = S;
					var M = c[g];
					S < M[0] && (M[0] = S), S > M[1] && (M[1] = S)
				}
				if(!a.pure) {
					var I = u[y];
					if(v && null == I)
						if(null != v.name) u[y] = I = v.name;
						else if(null != n) {
						var T = r[n],
							A = o[T][x];
						if(A) {
							I = A[_];
							var D = l[T].ordinalMeta;
							D && D.categories.length && (I = D.categories[I])
						}
					}
					var C = null == v ? null : v.id;
					null == C && null != I && (d[I] = d[I] || 0, C = I, d[I] > 0 && (C += "__ec__" + d[I]), d[I]++), null != C && (h[y] = C)
				}
			}!a.persistent && a.clean && a.clean(), this._rawCount = this._count = e, this._extent = {}, Du(this)
		}
	}, FD.count = function() {
		return this._count
	}, FD.getIndices = function() {
		var t, e = this._indices;
		if(e) {
			var n = e.constructor,
				i = this._count;
			if(n === Array) {
				t = new n(i);
				for(var a = 0; i > a; a++) t[a] = e[a]
			} else t = new n(e.buffer, 0, i)
		} else
			for(var n = Mu(this), t = new n(this.count()), a = 0; a < t.length; a++) t[a] = a;
		return t
	}, FD.get = function(t, e) {
		if(!(e >= 0 && e < this._count)) return 0 / 0;
		var n = this._storage;
		if(!n[t]) return 0 / 0;
		e = this.getRawIndex(e);
		var i = Math.floor(e / this._chunkSize),
			a = e % this._chunkSize,
			o = n[t][i],
			r = o[a];
		return r
	}, FD.getByRawIndex = function(t, e) {
		if(!(e >= 0 && e < this._rawCount)) return 0 / 0;
		var n = this._storage[t];
		if(!n) return 0 / 0;
		var i = Math.floor(e / this._chunkSize),
			a = e % this._chunkSize,
			o = n[i];
		return o[a]
	}, FD._getFast = function(t, e) {
		var n = Math.floor(e / this._chunkSize),
			i = e % this._chunkSize,
			a = this._storage[t][n];
		return a[i]
	}, FD.getValues = function(t, e) {
		var n = [];
		_(t) || (e = t, t = this.dimensions);
		for(var i = 0, a = t.length; a > i; i++) n.push(this.get(t[i], e));
		return n
	}, FD.hasValue = function(t) {
		for(var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, a = e.length; a > i; i++)
			if("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
		return !0
	}, FD.getDataExtent = function(t) {
		t = this.getDimension(t);
		var e = this._storage[t],
			n = zu();
		if(!e) return n;
		var i, a = this.count(),
			o = !this._indices;
		if(o) return this._rawExtent[t].slice();
		if(i = this._extent[t]) return i.slice();
		i = n;
		for(var r = i[0], s = i[1], l = 0; a > l; l++) {
			var u = this._getFast(t, this.getRawIndex(l));
			r > u && (r = u), u > s && (s = u)
		}
		return i = [r, s], this._extent[t] = i, i
	}, FD.getApproximateExtent = function(t) {
		return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
	}, FD.setApproximateExtent = function(t, e) {
		e = this.getDimension(e), this._approximateExtent[e] = t.slice()
	}, FD.getCalculationInfo = function(t) {
		return this._calculationInfo[t]
	}, FD.setCalculationInfo = function(t, e) {
		LD(t) ? r(this._calculationInfo, t) : this._calculationInfo[t] = e
	}, FD.getSum = function(t) {
		var e = this._storage[t],
			n = 0;
		if(e)
			for(var i = 0, a = this.count(); a > i; i++) {
				var o = this.get(t, i);
				isNaN(o) || (n += o)
			}
		return n
	}, FD.getMedian = function(t) {
		var e = [];
		this.each(t, function(t) {
			isNaN(t) || e.push(t)
		});
		var n = [].concat(e).sort(function(t, e) {
				return t - e
			}),
			i = this.count();
		return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
	}, FD.rawIndexOf = function(t, e) {
		var n = t && this._invertedIndicesMap[t],
			i = n[e];
		return null == i || isNaN(i) ? PD : i
	}, FD.indexOfName = function(t) {
		for(var e = 0, n = this.count(); n > e; e++)
			if(this.getName(e) === t) return e;
		return -1
	}, FD.indexOfRawIndex = function(t) {
		if(!this._indices) return t;
		if(t >= this._rawCount || 0 > t) return -1;
		var e = this._indices,
			n = e[t];
		if(null != n && n < this._count && n === t) return t;
		for(var i = 0, a = this._count - 1; a >= i;) {
			var o = (i + a) / 2 | 0;
			if(e[o] < t) i = o + 1;
			else {
				if(!(e[o] > t)) return o;
				a = o - 1
			}
		}
		return -1
	}, FD.indicesOfNearest = function(t, e, n) {
		var i = this._storage,
			a = i[t],
			o = [];
		if(!a) return o;
		null == n && (n = 1 / 0);
		for(var r = Number.MAX_VALUE, s = -1, l = 0, u = this.count(); u > l; l++) {
			var h = e - this.get(t, l),
				c = Math.abs(h);
			n >= h && r >= c && ((r > c || h >= 0 && 0 > s) && (r = c, s = h, o.length = 0), o.push(l))
		}
		return o
	}, FD.getRawIndex = Lu, FD.getRawDataItem = function(t) {
		if(this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
		for(var e = [], n = 0; n < this.dimensions.length; n++) {
			var i = this.dimensions[n];
			e.push(this.get(i, t))
		}
		return e
	}, FD.getName = function(t) {
		var e = this.getRawIndex(t);
		return this._nameList[e] || Cu(this, this._nameDimIdx, e) || ""
	}, FD.getId = function(t) {
		return Pu(this, this.getRawIndex(t))
	}, FD.each = function(t, e, n, i) {
		if(this._count) {
			"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Ou(t), this.getDimension, this);
			for(var a = t.length, o = 0; o < this.count(); o++) switch(a) {
				case 0:
					e.call(n, o);
					break;
				case 1:
					e.call(n, this.get(t[0], o), o);
					break;
				case 2:
					e.call(n, this.get(t[0], o), this.get(t[1], o), o);
					break;
				default:
					for(var r = 0, s = []; a > r; r++) s[r] = this.get(t[r], o);
					s[r] = o, e.apply(n, s)
			}
		}
	}, FD.filterSelf = function(t, e, n, i) {
		if(this._count) {
			"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Ou(t), this.getDimension, this);
			for(var a = this.count(), o = Mu(this), r = new o(a), s = [], l = t.length, u = 0, h = t[0], c = 0; a > c; c++) {
				var d, f = this.getRawIndex(c);
				if(0 === l) d = e.call(n, c);
				else if(1 === l) {
					var g = this._getFast(h, f);
					d = e.call(n, g, c)
				} else {
					for(var m = 0; l > m; m++) s[m] = this._getFast(h, f);
					s[m] = c, d = e.apply(n, s)
				}
				d && (r[u++] = f)
			}
			return a > u && (this._indices = r), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? ku : Lu, this
		}
	}, FD.selectRange = function(t) {
		if(this._count) {
			var e = [];
			for(var n in t) t.hasOwnProperty(n) && e.push(n);
			var i = e.length;
			if(i) {
				var a = this.count(),
					o = Mu(this),
					r = new o(a),
					s = 0,
					l = e[0],
					u = t[l][0],
					h = t[l][1],
					c = !1;
				if(!this._indices) {
					var d = 0;
					if(1 === i) {
						for(var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++)
							for(var g = f[p], m = Math.min(this._count - p * this._chunkSize, this._chunkSize), v = 0; m > v; v++) {
								var y = g[v];
								(y >= u && h >= y || isNaN(y)) && (r[s++] = d), d++
							}
						c = !0
					} else if(2 === i) {
						for(var f = this._storage[l], x = this._storage[e[1]], _ = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++)
							for(var g = f[p], b = x[p], m = Math.min(this._count - p * this._chunkSize, this._chunkSize), v = 0; m > v; v++) {
								var y = g[v],
									S = b[v];
								(y >= u && h >= y || isNaN(y)) && (S >= _ && w >= S || isNaN(S)) && (r[s++] = d), d++
							}
						c = !0
					}
				}
				if(!c)
					if(1 === i)
						for(var v = 0; a > v; v++) {
							var M = this.getRawIndex(v),
								y = this._getFast(l, M);
							(y >= u && h >= y || isNaN(y)) && (r[s++] = M)
						} else
							for(var v = 0; a > v; v++) {
								for(var I = !0, M = this.getRawIndex(v), p = 0; i > p; p++) {
									var T = e[p],
										y = this._getFast(n, M);
									(y < t[T][0] || y > t[T][1]) && (I = !1)
								}
								I && (r[s++] = this.getRawIndex(v))
							}
				return a > s && (this._indices = r), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? ku : Lu, this
			}
		}
	}, FD.mapArray = function(t, e, n, i) {
		"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
		var a = [];
		return this.each(t, function() {
			a.push(e && e.apply(this, arguments))
		}, n), a
	}, FD.map = function(t, e, n, i) {
		n = n || i || this, t = p(Ou(t), this.getDimension, this);
		var a = Nu(this, t);
		a._indices = this._indices, a.getRawIndex = a._indices ? ku : Lu;
		for(var o = a._storage, r = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = a._rawExtent, d = 0; u > d; d++) {
			for(var f = 0; l > f; f++) h[f] = this.get(t[f], d);
			h[l] = d;
			var g = e && e.apply(n, h);
			if(null != g) {
				"object" != typeof g && (r[0] = g, g = r);
				for(var m = this.getRawIndex(d), v = Math.floor(m / s), y = m % s, x = 0; x < g.length; x++) {
					var _ = t[x],
						w = g[x],
						b = c[_],
						S = o[_];
					S && (S[v][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
				}
			}
		}
		return a
	}, FD.downSample = function(t, e, n, i) {
		for(var a = Nu(this, [t]), o = a._storage, r = [], s = Math.floor(1 / e), l = o[t], u = this.count(), h = this._chunkSize, c = a._rawExtent[t], d = new(Mu(this))(u), f = 0, p = 0; u > p; p += s) {
			s > u - p && (s = u - p, r.length = s);
			for(var g = 0; s > g; g++) {
				var m = this.getRawIndex(p + g),
					v = Math.floor(m / h),
					y = m % h;
				r[g] = l[v][y]
			}
			var x = n(r),
				_ = this.getRawIndex(Math.min(p + i(r, x) || 0, u - 1)),
				w = Math.floor(_ / h),
				b = _ % h;
			l[w][b] = x, x < c[0] && (c[0] = x), x > c[1] && (c[1] = x), d[f++] = _
		}
		return a._count = f, a._indices = d, a.getRawIndex = ku, a
	}, FD.getItemModel = function(t) {
		var e = this.hostModel;
		return new Xo(this.getRawDataItem(t), e, e && e.ecModel)
	}, FD.diff = function(t) {
		var e = this;
		return new xu(t ? t.getIndices() : [], this.getIndices(), function(e) {
			return Pu(t, e)
		}, function(t) {
			return Pu(e, t)
		})
	}, FD.getVisual = function(t) {
		var e = this._visual;
		return e && e[t]
	}, FD.setVisual = function(t, e) {
		if(LD(t))
			for(var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);
		else this._visual = this._visual || {}, this._visual[t] = e
	}, FD.setLayout = function(t, e) {
		if(LD(t))
			for(var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);
		else this._layout[t] = e
	}, FD.getLayout = function(t) {
		return this._layout[t]
	}, FD.getItemLayout = function(t) {
		return this._itemLayouts[t]
	}, FD.setItemLayout = function(t, e, n) {
		this._itemLayouts[t] = n ? r(this._itemLayouts[t] || {}, e) : e
	}, FD.clearItemLayouts = function() {
		this._itemLayouts.length = 0
	}, FD.getItemVisual = function(t, e, n) {
		var i = this._itemVisuals[t],
			a = i && i[e];
		return null != a || n ? a : this.getVisual(e)
	}, FD.setItemVisual = function(t, e, n) {
		var i = this._itemVisuals[t] || {},
			a = this.hasItemVisual;
		if(this._itemVisuals[t] = i, LD(e))
			for(var o in e) e.hasOwnProperty(o) && (i[o] = e[o], a[o] = !0);
		else i[e] = n, a[e] = !0
	}, FD.clearAllVisual = function() {
		this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
	};
	var WD = function(t) {
		t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
	};
	FD.setItemGraphicEl = function(t, e) {
		var n = this.hostModel;
		e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(WD, e)), this._graphicEls[t] = e
	}, FD.getItemGraphicEl = function(t) {
		return this._graphicEls[t]
	}, FD.eachItemGraphicEl = function(t, e) {
		f(this._graphicEls, function(n, i) {
			n && t && t.call(e, n, i)
		})
	}, FD.cloneShallow = function(t) {
		if(!t) {
			var e = p(this.dimensions, this.getDimensionInfo, this);
			t = new GD(e, this.hostModel)
		}
		if(t._storage = this._storage, Tu(t, this), this._indices) {
			var n = this._indices.constructor;
			t._indices = new n(this._indices)
		} else t._indices = null;
		return t.getRawIndex = t._indices ? ku : Lu, t
	}, FD.wrapMethod = function(t, e) {
		var n = this[t];
		"function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
			var t = n.apply(this, arguments);
			return e.apply(this, [t].concat(k(arguments)))
		})
	}, FD.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], FD.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
	var HD = function(t, e) {
		return e = e || {}, Ru(e.coordDimensions || [], t, {
			dimsDef: e.dimensionsDefine || t.dimensionsDefine,
			encodeDef: e.encodeDefine || t.encodeDefine,
			dimCount: e.dimensionsCount,
			generateCoord: e.generateCoord,
			generateCoordCount: e.generateCoordCount
		})
	};
	Yu.prototype.parse = function(t) {
		return t
	}, Yu.prototype.getSetting = function(t) {
		return this._setting[t]
	}, Yu.prototype.contain = function(t) {
		var e = this._extent;
		return t >= e[0] && t <= e[1]
	}, Yu.prototype.normalize = function(t) {
		var e = this._extent;
		return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
	}, Yu.prototype.scale = function(t) {
		var e = this._extent;
		return t * (e[1] - e[0]) + e[0]
	}, Yu.prototype.unionExtent = function(t) {
		var e = this._extent;
		t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
	}, Yu.prototype.unionExtentFromData = function(t, e) {
		this.unionExtent(t.getApproximateExtent(e))
	}, Yu.prototype.getExtent = function() {
		return this._extent.slice()
	}, Yu.prototype.setExtent = function(t, e) {
		var n = this._extent;
		isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
	}, Yu.prototype.isBlank = function() {
		return this._isBlank
	}, Yu.prototype.setBlank = function(t) {
		this._isBlank = t
	}, Yu.prototype.getLabel = null, na(Yu), ra(Yu, {
		registerWhenExtend: !0
	}), Uu.createByAxisModel = function(t) {
		var e = t.option,
			n = e.data,
			i = n && p(n, qu);
		return new Uu({
			categories: i,
			needCollect: !i,
			deduplication: e.dedplication !== !1
		})
	};
	var ZD = Uu.prototype;
	ZD.getOrdinal = function(t) {
		return ju(this).get(t)
	}, ZD.parseAndCollect = function(t) {
		var e, n = this._needCollect;
		if("string" != typeof t && !n) return t;
		if(n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
		var i = ju(this);
		return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e
	};
	var XD = Yu.prototype,
		YD = Yu.extend({
			type: "ordinal",
			init: function(t, e) {
				(!t || _(t)) && (t = new Uu({
					categories: t
				})), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
			},
			parse: function(t) {
				return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
			},
			contain: function(t) {
				return t = this.parse(t), XD.contain.call(this, t) && null != this._ordinalMeta.categories[t]
			},
			normalize: function(t) {
				return XD.normalize.call(this, this.parse(t))
			},
			scale: function(t) {
				return Math.round(XD.scale.call(this, t))
			},
			getTicks: function() {
				for(var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;
				return t
			},
			getLabel: function(t) {
				return this.isBlank() ? void 0 : this._ordinalMeta.categories[t]
			},
			count: function() {
				return this._extent[1] - this._extent[0] + 1
			},
			unionExtentFromData: function(t, e) {
				this.unionExtent(t.getApproximateExtent(e))
			},
			getOrdinalMeta: function() {
				return this._ordinalMeta
			},
			niceTicks: G,
			niceExtent: G
		});
	YD.create = function() {
		return new YD
	};
	var UD = tr,
		jD = tr,
		qD = Yu.extend({
			type: "interval",
			_interval: 0,
			_intervalPrecision: 2,
			setExtent: function(t, e) {
				var n = this._extent;
				isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
			},
			unionExtent: function(t) {
				var e = this._extent;
				t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), qD.prototype.setExtent.call(this, e[0], e[1])
			},
			getInterval: function() {
				return this._interval
			},
			setInterval: function(t) {
				this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = $u(t)
			},
			getTicks: function() {
				return th(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
			},
			getLabel: function(t, e) {
				if(null == t) return "";
				var n = e && e.precision;
				return null == n ? n = ir(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = jD(t, n, !0), gr(t)
			},
			niceTicks: function(t, e, n) {
				t = t || 5;
				var i = this._extent,
					a = i[1] - i[0];
				if(isFinite(a)) {
					0 > a && (a = -a, i.reverse());
					var o = Ku(i, t, e, n);
					this._intervalPrecision = o.intervalPrecision, this._interval = o.interval, this._niceExtent = o.niceTickExtent
				}
			},
			niceExtent: function(t) {
				var e = this._extent;
				if(e[0] === e[1])
					if(0 !== e[0]) {
						var n = e[0];
						t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
					} else e[1] = 1;
				var i = e[1] - e[0];
				isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
				var a = this._interval;
				t.fixMin || (e[0] = jD(Math.floor(e[0] / a) * a)), t.fixMax || (e[1] = jD(Math.ceil(e[1] / a) * a))
			}
		});
	qD.create = function() {
		return new qD
	};
	var KD = "__ec_stack_",
		$D = .5,
		JD = "undefined" != typeof Float32Array ? Float32Array : Array,
		QD = {
			seriesType: "bar",
			plan: hA(),
			reset: function(t) {
				function e(t, e) {
					for(var n, c = new JD(2 * t.count), d = [], f = [], p = 0; null != (n = t.next());) f[u] = e.get(r, n), f[1 - u] = e.get(s, n), d = i.dataToPoint(f, null, d), c[p++] = d[0], c[p++] = d[1];
					e.setLayout({
						largePoints: c,
						barWidth: h,
						valueAxisStart: ch(a, o, !1),
						valueAxisHorizontal: l
					})
				}
				if(uh(t) && hh(t)) {
					var n = t.getData(),
						i = t.coordinateSystem,
						a = i.getBaseAxis(),
						o = i.getOtherAxis(a),
						r = n.mapDimension(o.dim),
						s = n.mapDimension(a.dim),
						l = o.isHorizontal(),
						u = l ? 0 : 1,
						h = sh(oh([t]), a, t).width;
					return h > $D || (h = $D), {
						progress: e
					}
				}
			}
		},
		tC = qD.prototype,
		eC = Math.ceil,
		nC = Math.floor,
		iC = 1e3,
		aC = 60 * iC,
		oC = 60 * aC,
		rC = 24 * oC,
		sC = function(t, e, n, i) {
			for(; i > n;) {
				var a = n + i >>> 1;
				t[a][1] < e ? n = a + 1 : i = a
			}
			return n
		},
		lC = qD.extend({
			type: "time",
			getLabel: function(t) {
				var e = this._stepLvl,
					n = new Date(t);
				return br(e[0], n, this.getSetting("useUTC"))
			},
			niceExtent: function(t) {
				var e = this._extent;
				if(e[0] === e[1] && (e[0] -= rC, e[1] += rC), e[1] === -1 / 0 && 1 / 0 === e[0]) {
					var n = new Date;
					e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - rC
				}
				this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
				var i = this._interval;
				t.fixMin || (e[0] = tr(nC(e[0] / i) * i)), t.fixMax || (e[1] = tr(eC(e[1] / i) * i))
			},
			niceTicks: function(t, e, n) {
				t = t || 10;
				var i = this._extent,
					a = i[1] - i[0],
					o = a / t;
				null != e && e > o && (o = e), null != n && o > n && (o = n);
				var r = uC.length,
					s = sC(uC, o, 0, r),
					l = uC[Math.min(s, r - 1)],
					u = l[1];
				if("year" === l[0]) {
					var h = a / u,
						c = cr(h / t, !0);
					u *= c
				}
				var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
					f = [Math.round(eC((i[0] - d) / u) * u + d), Math.round(nC((i[1] - d) / u) * u + d)];
				Qu(f, i), this._stepLvl = l, this._interval = u, this._niceExtent = f
			},
			parse: function(t) {
				return +lr(t)
			}
		});
	f(["contain", "normalize"], function(t) {
		lC.prototype[t] = function(e) {
			return tC[t].call(this, this.parse(e))
		}
	});
	var uC = [
		["hh:mm:ss", iC],
		["hh:mm:ss", 5 * iC],
		["hh:mm:ss", 10 * iC],
		["hh:mm:ss", 15 * iC],
		["hh:mm:ss", 30 * iC],
		["hh:mm\nMM-dd", aC],
		["hh:mm\nMM-dd", 5 * aC],
		["hh:mm\nMM-dd", 10 * aC],
		["hh:mm\nMM-dd", 15 * aC],
		["hh:mm\nMM-dd", 30 * aC],
		["hh:mm\nMM-dd", oC],
		["hh:mm\nMM-dd", 2 * oC],
		["hh:mm\nMM-dd", 6 * oC],
		["hh:mm\nMM-dd", 12 * oC],
		["MM-dd\nyyyy", rC],
		["MM-dd\nyyyy", 2 * rC],
		["MM-dd\nyyyy", 3 * rC],
		["MM-dd\nyyyy", 4 * rC],
		["MM-dd\nyyyy", 5 * rC],
		["MM-dd\nyyyy", 6 * rC],
		["week", 7 * rC],
		["MM-dd\nyyyy", 10 * rC],
		["week", 14 * rC],
		["week", 21 * rC],
		["month", 31 * rC],
		["week", 42 * rC],
		["month", 62 * rC],
		["week", 70 * rC],
		["quarter", 95 * rC],
		["month", 31 * rC * 4],
		["month", 31 * rC * 5],
		["half-year", 380 * rC / 2],
		["month", 31 * rC * 8],
		["month", 31 * rC * 10],
		["year", 380 * rC]
	];
	lC.create = function(t) {
		return new lC({
			useUTC: t.ecModel.get("useUTC")
		})
	};
	var hC = Yu.prototype,
		cC = qD.prototype,
		dC = ir,
		fC = tr,
		pC = Math.floor,
		gC = Math.ceil,
		mC = Math.pow,
		vC = Math.log,
		yC = Yu.extend({
			type: "log",
			base: 10,
			$constructor: function() {
				Yu.apply(this, arguments), this._originalScale = new qD
			},
			getTicks: function() {
				var t = this._originalScale,
					e = this._extent,
					n = t.getExtent();
				return p(cC.getTicks.call(this), function(i) {
					var a = tr(mC(this.base, i));
					return a = i === e[0] && t.__fixMin ? dh(a, n[0]) : a, a = i === e[1] && t.__fixMax ? dh(a, n[1]) : a
				}, this)
			},
			getLabel: cC.getLabel,
			scale: function(t) {
				return t = hC.scale.call(this, t), mC(this.base, t)
			},
			setExtent: function(t, e) {
				var n = this.base;
				t = vC(t) / vC(n), e = vC(e) / vC(n), cC.setExtent.call(this, t, e)
			},
			getExtent: function() {
				var t = this.base,
					e = hC.getExtent.call(this);
				e[0] = mC(t, e[0]), e[1] = mC(t, e[1]);
				var n = this._originalScale,
					i = n.getExtent();
				return n.__fixMin && (e[0] = dh(e[0], i[0])), n.__fixMax && (e[1] = dh(e[1], i[1])), e
			},
			unionExtent: function(t) {
				this._originalScale.unionExtent(t);
				var e = this.base;
				t[0] = vC(t[0]) / vC(e), t[1] = vC(t[1]) / vC(e), hC.unionExtent.call(this, t)
			},
			unionExtentFromData: function(t, e) {
				this.unionExtent(t.getApproximateExtent(e))
			},
			niceTicks: function(t) {
				t = t || 10;
				var e = this._extent,
					n = e[1] - e[0];
				if(!(1 / 0 === n || 0 >= n)) {
					var i = ur(n),
						a = t / n * i;
					for(.5 >= a && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
					var o = [tr(gC(e[0] / i) * i), tr(pC(e[1] / i) * i)];
					this._interval = i, this._niceExtent = o
				}
			},
			niceExtent: function(t) {
				cC.niceExtent.call(this, t);
				var e = this._originalScale;
				e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
			}
		});
	f(["contain", "normalize"], function(t) {
		yC.prototype[t] = function(e) {
			return e = vC(e) / vC(this.base), hC[t].call(this, e)
		}
	}), yC.create = function() {
		return new yC
	};
	var xC = {
			getMin: function(t) {
				var e = this.option,
					n = t || null == e.rangeStart ? e.min : e.rangeStart;
				return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !A(n) && (n = this.axis.scale.parse(n)), n
			},
			getMax: function(t) {
				var e = this.option,
					n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
				return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !A(n) && (n = this.axis.scale.parse(n)), n
			},
			getNeedCrossZero: function() {
				var t = this.option;
				return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
			},
			getCoordSysModel: G,
			setRange: function(t, e) {
				this.option.rangeStart = t, this.option.rangeEnd = e
			},
			resetRange: function() {
				this.option.rangeStart = this.option.rangeEnd = null
			}
		},
		_C = to({
			type: "triangle",
			shape: {
				cx: 0,
				cy: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					a = e.width / 2,
					o = e.height / 2;
				t.moveTo(n, i - o), t.lineTo(n + a, i + o), t.lineTo(n - a, i + o), t.closePath()
			}
		}),
		wC = to({
			type: "diamond",
			shape: {
				cx: 0,
				cy: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					a = e.width / 2,
					o = e.height / 2;
				t.moveTo(n, i - o), t.lineTo(n + a, i), t.lineTo(n, i + o), t.lineTo(n - a, i), t.closePath()
			}
		}),
		bC = to({
			type: "pin",
			shape: {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.x,
					i = e.y,
					a = e.width / 5 * 3,
					o = Math.max(a, e.height),
					r = a / 2,
					s = r * r / (o - r),
					l = i - o + r + s,
					u = Math.asin(s / r),
					h = Math.cos(u) * r,
					c = Math.sin(u),
					d = Math.cos(u),
					f = .6 * r,
					p = .7 * r;
				t.moveTo(n - h, l + s), t.arc(n, l, r, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * f, l + s + d * f, n - h, l + s), t.closePath()
			}
		}),
		SC = to({
			type: "arrow",
			shape: {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.height,
					i = e.width,
					a = e.x,
					o = e.y,
					r = i / 3 * 2;
				t.moveTo(a, o), t.lineTo(a + r, o + n), t.lineTo(a, o + n / 4 * 3), t.lineTo(a - r, o + n), t.lineTo(a, o), t.closePath()
			}
		}),
		MC = {
			line: PI,
			rect: LI,
			roundRect: LI,
			square: LI,
			circle: xI,
			diamond: wC,
			pin: bC,
			arrow: SC,
			triangle: _C
		},
		IC = {
			line: function(t, e, n, i, a) {
				a.x1 = t, a.y1 = e + i / 2, a.x2 = t + n, a.y2 = e + i / 2
			},
			rect: function(t, e, n, i, a) {
				a.x = t, a.y = e, a.width = n, a.height = i
			},
			roundRect: function(t, e, n, i, a) {
				a.x = t, a.y = e, a.width = n, a.height = i, a.r = Math.min(n, i) / 4
			},
			square: function(t, e, n, i, a) {
				var o = Math.min(n, i);
				a.x = t, a.y = e, a.width = o, a.height = o
			},
			circle: function(t, e, n, i, a) {
				a.cx = t + n / 2, a.cy = e + i / 2, a.r = Math.min(n, i) / 2
			},
			diamond: function(t, e, n, i, a) {
				a.cx = t + n / 2, a.cy = e + i / 2, a.width = n, a.height = i
			},
			pin: function(t, e, n, i, a) {
				a.x = t + n / 2, a.y = e + i / 2, a.width = n, a.height = i
			},
			arrow: function(t, e, n, i, a) {
				a.x = t + n / 2, a.y = e + i / 2, a.width = n, a.height = i
			},
			triangle: function(t, e, n, i, a) {
				a.cx = t + n / 2, a.cy = e + i / 2, a.width = n, a.height = i
			}
		},
		TC = {};
	f(MC, function(t, e) {
		TC[e] = new t
	});
	var AC = to({
			type: "symbol",
			shape: {
				symbolType: "",
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			beforeBrush: function() {
				var t = this.style,
					e = this.shape;
				"pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
			},
			buildPath: function(t, e, n) {
				var i = e.symbolType,
					a = TC[i];
				"none" !== e.symbolType && (a || (i = "rect", a = TC[i]), IC[i](e.x, e.y, e.width, e.height, a.shape), a.buildPath(t, a.shape, n))
			}
		}),
		DC = {
			isDimensionStacked: Fu,
			enableDataStack: Gu,
			getStackedDimension: Wu
		},
		CC = (Object.freeze || Object)({
			createList: Th,
			getLayoutRect: Dr,
			dataStack: DC,
			createScale: Ah,
			mixinAxisModelCommonMethods: Dh,
			completeDimensions: Ru,
			createDimensions: HD,
			createSymbol: Ih
		}),
		LC = 1e-8;
	kh.prototype = {
		constructor: kh,
		properties: null,
		getBoundingRect: function() {
			var t = this._rect;
			if(t) return t;
			for(var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], a = [], o = [], r = this.geometries, s = 0; s < r.length; s++)
				if("polygon" === r[s].type) {
					var l = r[s].exterior;
					wa(l, a, o), re(n, n, a), se(i, i, o)
				}
			return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new xn(n[0], n[1], i[0] - n[0], i[1] - n[1])
		},
		contain: function(t) {
			var e = this.getBoundingRect(),
				n = this.geometries;
			if(!e.contain(t[0], t[1])) return !1;
			t: for(var i = 0, a = n.length; a > i; i++)
				if("polygon" === n[i].type) {
					var o = n[i].exterior,
						r = n[i].interiors;
					if(Lh(o, t[0], t[1])) {
						for(var s = 0; s < (r ? r.length : 0); s++)
							if(Lh(r[s])) continue t;
						return !0
					}
				}
			return !1
		},
		transformTo: function(t, e, n, i) {
			var a = this.getBoundingRect(),
				o = a.width / a.height;
			n ? i || (i = n / o) : n = o * i;
			for(var r = new xn(t, e, n, i), s = a.calculateTransform(r), l = this.geometries, u = 0; u < l.length; u++)
				if("polygon" === l[u].type) {
					for(var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) oe(h[d], h[d], s);
					for(var f = 0; f < (c ? c.length : 0); f++)
						for(var d = 0; d < c[f].length; d++) oe(c[f][d], c[f][d], s)
				}
			a = this._rect, a.copy(r), this.center = [a.x + a.width / 2, a.y + a.height / 2]
		},
		cloneShallow: function(t) {
			null == t && (t = this.name);
			var e = new kh(t, this.geometries, this.center);
			return e._rect = this._rect, e.transformTo = null, e
		}
	};
	var kC = function(t) {
			return Ph(t), p(m(t.features, function(t) {
				return t.geometry && t.properties && t.geometry.coordinates.length > 0
			}), function(t) {
				var e = t.properties,
					n = t.geometry,
					i = n.coordinates,
					a = [];
				"Polygon" === n.type && a.push({
					type: "polygon",
					exterior: i[0],
					interiors: i.slice(1)
				}), "MultiPolygon" === n.type && f(i, function(t) {
					t[0] && a.push({
						type: "polygon",
						exterior: t[0],
						interiors: t.slice(1)
					})
				});
				var o = new kh(e.name, a, e.cp);
				return o.properties = e, o
			})
		},
		PC = Ui(),
		OC = [0, 1],
		NC = function(t, e, n) {
			this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1
		};
	NC.prototype = {
		constructor: NC,
		contain: function(t) {
			var e = this._extent,
				n = Math.min(e[0], e[1]),
				i = Math.max(e[0], e[1]);
			return t >= n && i >= t
		},
		containData: function(t) {
			return this.contain(this.dataToCoord(t))
		},
		getExtent: function() {
			return this._extent.slice()
		},
		getPixelPrecision: function(t) {
			return ar(t || this.scale.getExtent(), this._extent)
		},
		setExtent: function(t, e) {
			var n = this._extent;
			n[0] = t, n[1] = e
		},
		dataToCoord: function(t, e) {
			var n = this._extent,
				i = this.scale;
			return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), jh(n, i.count())), Jo(t, OC, n, e)
		},
		coordToData: function(t, e) {
			var n = this._extent,
				i = this.scale;
			this.onBand && "ordinal" === i.type && (n = n.slice(), jh(n, i.count()));
			var a = Jo(t, n, OC, e);
			return this.scale.scale(a)
		},
		pointToData: function() {},
		getTicksCoords: function(t) {
			t = t || {};
			var e = t.tickModel || this.getTickModel(),
				n = Eh(this, e),
				i = n.ticks,
				a = p(i, function(t) {
					return {
						coord: this.dataToCoord(t),
						tickValue: t
					}
				}, this),
				o = e.get("alignWithLabel");
			return qh(this, a, n.tickCategoryInterval, o, t.clamp), a
		},
		getViewLabels: function() {
			return Nh(this).labels
		},
		getLabelModel: function() {
			return this.model.getModel("axisLabel")
		},
		getTickModel: function() {
			return this.model.getModel("axisTick")
		},
		getBandWidth: function() {
			var t = this._extent,
				e = this.scale.getExtent(),
				n = e[1] - e[0] + (this.onBand ? 1 : 0);
			0 === n && (n = 1);
			var i = Math.abs(t[1] - t[0]);
			return Math.abs(i) / n
		},
		isHorizontal: null,
		getRotate: null,
		calculateCategoryInterval: function() {
			return Zh(this)
		}
	};
	var EC = kC,
		zC = {};
	f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function(t) {
		zC[t] = hb[t]
	});
	var RC = {};
	f(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function(t) {
		RC[t] = qI[t]
	});
	var BC = function(t) {
		this._axes = {}, this._dimList = [], this.name = t || ""
	};
	BC.prototype = {
		constructor: BC,
		type: "cartesian",
		getAxis: function(t) {
			return this._axes[t]
		},
		getAxes: function() {
			return p(this._dimList, Kh, this)
		},
		getAxesByScale: function(t) {
			return t = t.toLowerCase(), m(this.getAxes(), function(e) {
				return e.scale.type === t
			})
		},
		addAxis: function(t) {
			var e = t.dim;
			this._axes[e] = t, this._dimList.push(e)
		},
		dataToCoord: function(t) {
			return this._dataCoordConvert(t, "dataToCoord")
		},
		coordToData: function(t) {
			return this._dataCoordConvert(t, "coordToData")
		},
		_dataCoordConvert: function(t, e) {
			for(var n = this._dimList, i = t instanceof Array ? [] : {}, a = 0; a < n.length; a++) {
				var o = n[a],
					r = this._axes[o];
				i[o] = r[e](t[o])
			}
			return i
		}
	}, $h.prototype = {
		constructor: $h,
		type: "cartesian2d",
		dimensions: ["x", "y"],
		getBaseAxis: function() {
			return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
		},
		containPoint: function(t) {
			var e = this.getAxis("x"),
				n = this.getAxis("y");
			return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
		},
		containData: function(t) {
			return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
		},
		dataToPoint: function(t, e, n) {
			var i = this.getAxis("x"),
				a = this.getAxis("y");
			return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = a.toGlobalCoord(a.dataToCoord(t[1])), n
		},
		clampData: function(t, e) {
			var n = this.getAxis("x").scale,
				i = this.getAxis("y").scale,
				a = n.getExtent(),
				o = i.getExtent(),
				r = n.parse(t[0]),
				s = i.parse(t[1]);
			return e = e || [], e[0] = Math.min(Math.max(Math.min(a[0], a[1]), r), Math.max(a[0], a[1])), e[1] = Math.min(Math.max(Math.min(o[0], o[1]), s), Math.max(o[0], o[1])), e
		},
		pointToData: function(t, e) {
			var n = this.getAxis("x"),
				i = this.getAxis("y");
			return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e
		},
		getOtherAxis: function(t) {
			return this.getAxis("x" === t.dim ? "y" : "x")
		}
	}, h($h, BC);
	var VC = function(t, e, n, i, a) {
		NC.call(this, t, e, n), this.type = i || "value", this.position = a || "bottom"
	};
	VC.prototype = {
		constructor: VC,
		index: 0,
		getAxesOnZeroOf: null,
		model: null,
		isHorizontal: function() {
			var t = this.position;
			return "top" === t || "bottom" === t
		},
		getGlobalExtent: function(t) {
			var e = this.getExtent();
			return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
		},
		getOtherAxis: function() {
			this.grid.getOtherAxis()
		},
		pointToData: function(t, e) {
			return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
		},
		toLocalCoord: null,
		toGlobalCoord: null
	}, h(VC, NC);
	var GC = {
			show: !0,
			zlevel: 0,
			z: 0,
			inverse: !1,
			name: "",
			nameLocation: "end",
			nameRotate: null,
			nameTruncate: {
				maxWidth: null,
				ellipsis: "...",
				placeholder: "."
			},
			nameTextStyle: {},
			nameGap: 15,
			silent: !1,
			triggerEvent: !1,
			tooltip: {
				show: !1
			},
			axisPointer: {},
			axisLine: {
				show: !0,
				onZero: !0,
				onZeroAxisIndex: null,
				lineStyle: {
					color: "#333",
					width: 1,
					type: "solid"
				},
				symbol: ["none", "none"],
				symbolSize: [10, 15]
			},
			axisTick: {
				show: !0,
				inside: !1,
				length: 5,
				lineStyle: {
					width: 1
				}
			},
			axisLabel: {
				show: !0,
				inside: !1,
				rotate: 0,
				showMinLabel: null,
				showMaxLabel: null,
				margin: 8,
				fontSize: 12
			},
			splitLine: {
				show: !0,
				lineStyle: {
					color: ["#ccc"],
					width: 1,
					type: "solid"
				}
			},
			splitArea: {
				show: !1,
				areaStyle: {
					color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
				}
			}
		},
		FC = {};
	FC.categoryAxis = a({
		boundaryGap: !0,
		deduplication: null,
		splitLine: {
			show: !1
		},
		axisTick: {
			alignWithLabel: !1,
			interval: "auto"
		},
		axisLabel: {
			interval: "auto"
		}
	}, GC), FC.valueAxis = a({
		boundaryGap: [0, 0],
		splitNumber: 5
	}, GC), FC.timeAxis = s({
		scale: !0,
		min: "dataMin",
		max: "dataMax"
	}, FC.valueAxis), FC.logAxis = s({
		scale: !0,
		logBase: 10
	}, FC.valueAxis);
	var WC = ["value", "category", "time", "log"],
		HC = function(t, e, n, i) {
			f(WC, function(r) {
				e.extend({
					type: t + "Axis." + r,
					mergeDefaultAndTheme: function(e, i) {
						var o = this.layoutMode,
							s = o ? Pr(e) : {},
							l = i.getTheme();
						a(e, l.get(r + "Axis")), a(e, this.getDefaultOption()), e.type = n(t, e), o && kr(e, s, o)
					},
					optionUpdated: function() {
						var t = this.option;
						"category" === t.type && (this.__ordinalMeta = Uu.createByAxisModel(this))
					},
					getCategories: function(t) {
						var e = this.option;
						return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0
					},
					getOrdinalMeta: function() {
						return this.__ordinalMeta
					},
					defaultOption: o([{}, FC[r + "Axis"], i], !0)
				})
			}), _T.registerSubTypeDefaulter(t + "Axis", x(n, t))
		},
		ZC = _T.extend({
			type: "cartesian2dAxis",
			axis: null,
			init: function() {
				ZC.superApply(this, "init", arguments), this.resetRange()
			},
			mergeOption: function() {
				ZC.superApply(this, "mergeOption", arguments), this.resetRange()
			},
			restoreData: function() {
				ZC.superApply(this, "restoreData", arguments), this.resetRange()
			},
			getCoordSysModel: function() {
				return this.ecModel.queryComponents({
					mainType: "grid",
					index: this.option.gridIndex,
					id: this.option.gridId
				})[0]
			}
		});
	a(ZC.prototype, xC);
	var XC = {
		offset: 0
	};
	HC("x", ZC, Jh, XC), HC("y", ZC, Jh, XC), _T.extend({
		type: "grid",
		dependencies: ["xAxis", "yAxis"],
		layoutMode: "box",
		coordinateSystem: null,
		defaultOption: {
			show: !1,
			zlevel: 0,
			z: 0,
			left: "10%",
			top: 60,
			right: "10%",
			bottom: 60,
			containLabel: !1,
			backgroundColor: "rgba(0,0,0,0)",
			borderWidth: 1,
			borderColor: "#ccc"
		}
	});
	var YC = tc.prototype;
	YC.type = "grid", YC.axisPointerEnabled = !0, YC.getRect = function() {
		return this._rect
	}, YC.update = function(t, e) {
		var n = this._axesMap;
		this._updateScale(t, this.model), f(n.x, function(t) {
			gh(t.scale, t.model)
		}), f(n.y, function(t) {
			gh(t.scale, t.model)
		});
		var i = {};
		f(n.x, function(t) {
			ec(n, "y", t, i)
		}), f(n.y, function(t) {
			ec(n, "x", t, i)
		}), this.resize(this.model, e)
	}, YC.resize = function(t, e, n) {
		function i() {
			f(o, function(t) {
				var e = t.isHorizontal(),
					n = e ? [0, a.width] : [0, a.height],
					i = t.inverse ? 1 : 0;
				t.setExtent(n[i], n[1 - i]), ic(t, e ? a.x : a.y)
			})
		}
		var a = Dr(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		});
		this._rect = a;
		var o = this._axesList;
		i(), !n && t.get("containLabel") && (f(o, function(t) {
			if(!t.model.get("axisLabel.inside")) {
				var e = _h(t);
				if(e) {
					var n = t.isHorizontal() ? "height" : "width",
						i = t.model.get("axisLabel.margin");
					a[n] -= e[n] + i, "top" === t.position ? a.y += e.height + i : "left" === t.position && (a.x += e.width + i)
				}
			}
		}), i())
	}, YC.getAxis = function(t, e) {
		var n = this._axesMap[t];
		if(null != n) {
			if(null == e)
				for(var i in n)
					if(n.hasOwnProperty(i)) return n[i];
			return n[e]
		}
	}, YC.getAxes = function() {
		return this._axesList.slice()
	}, YC.getCartesian = function(t, e) {
		if(null != t && null != e) {
			var n = "x" + t + "y" + e;
			return this._coordsMap[n]
		}
		S(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
		for(var i = 0, a = this._coordsList; i < a.length; i++)
			if(a[i].getAxis("x").index === t || a[i].getAxis("y").index === e) return a[i]
	}, YC.getCartesians = function() {
		return this._coordsList.slice()
	}, YC.convertToPixel = function(t, e, n) {
		var i = this._findConvertTarget(t, e);
		return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
	}, YC.convertFromPixel = function(t, e, n) {
		var i = this._findConvertTarget(t, e);
		return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
	}, YC._findConvertTarget = function(t, e) {
		var n, i, a = e.seriesModel,
			o = e.xAxisModel || a && a.getReferringComponents("xAxis")[0],
			r = e.yAxisModel || a && a.getReferringComponents("yAxis")[0],
			s = e.gridModel,
			l = this._coordsList;
		if(a) n = a.coordinateSystem, u(l, n) < 0 && (n = null);
		else if(o && r) n = this.getCartesian(o.componentIndex, r.componentIndex);
		else if(o) i = this.getAxis("x", o.componentIndex);
		else if(r) i = this.getAxis("y", r.componentIndex);
		else if(s) {
			var h = s.coordinateSystem;
			h === this && (n = this._coordsList[0])
		}
		return {
			cartesian: n,
			axis: i
		}
	}, YC.containPoint = function(t) {
		var e = this._coordsList[0];
		return e ? e.containPoint(t) : void 0
	}, YC._initCartesian = function(t, e) {
		function n(n) {
			return function(r, s) {
				if(Qh(r, t, e)) {
					var l = r.get("position");
					"x" === n ? "top" !== l && "bottom" !== l && (l = "bottom", i[l] && (l = "top" === l ? "bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", i[l] && (l = "left" === l ? "right" : "left")), i[l] = !0;
					var u = new VC(n, mh(r), [0, 0], r.get("type"), l),
						h = "category" === u.type;
					u.onBand = h && r.get("boundaryGap"), u.inverse = r.get("inverse"), r.axis = u, u.model = r, u.grid = this, u.index = s, this._axesList.push(u), a[n][s] = u, o[n]++
				}
			}
		}
		var i = {
				left: !1,
				right: !1,
				top: !1,
				bottom: !1
			},
			a = {
				x: {},
				y: {}
			},
			o = {
				x: 0,
				y: 0
			};
		return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), o.x && o.y ? (this._axesMap = a, void f(a.x, function(e, n) {
			f(a.y, function(i, a) {
				var o = "x" + n + "y" + a,
					r = new $h(o);
				r.grid = this, r.model = t, this._coordsMap[o] = r, this._coordsList.push(r), r.addAxis(e), r.addAxis(i)
			}, this)
		}, this)) : (this._axesMap = {}, void(this._axesList = []))
	}, YC._updateScale = function(t, e) {
		function n(t, e) {
			f(t.mapDimension(e.dim, !0), function(n) {
				e.scale.unionExtentFromData(t, Wu(t, n))
			})
		}
		f(this._axesList, function(t) {
			t.scale.setExtent(1 / 0, -1 / 0)
		}), t.eachSeries(function(i) {
			if(oc(i)) {
				var a = ac(i, t),
					o = a[0],
					r = a[1];
				if(!Qh(o, e, t) || !Qh(r, e, t)) return;
				var s = this.getCartesian(o.componentIndex, r.componentIndex),
					l = i.getData(),
					u = s.getAxis("x"),
					h = s.getAxis("y");
				"list" === l.type && (n(l, u, i), n(l, h, i))
			}
		}, this)
	}, YC.getTooltipAxes = function(t) {
		var e = [],
			n = [];
		return f(this.getCartesians(), function(i) {
			var a = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
				o = i.getOtherAxis(a);
			u(e, a) < 0 && e.push(a), u(n, o) < 0 && n.push(o)
		}), {
			baseAxes: e,
			otherAxes: n
		}
	};
	var UC = ["xAxis", "yAxis"];
	tc.create = function(t, e) {
		var n = [];
		return t.eachComponent("grid", function(i, a) {
			var o = new tc(i, t, e);
			o.name = "grid_" + a, o.resize(i, e, !0), i.coordinateSystem = o, n.push(o)
		}), t.eachSeries(function(e) {
			if(oc(e)) {
				var n = ac(e, t),
					i = n[0],
					a = n[1],
					o = i.getCoordSysModel(),
					r = o.coordinateSystem;
				e.coordinateSystem = r.getCartesian(i.componentIndex, a.componentIndex)
			}
		}), n
	}, tc.dimensions = tc.prototype.dimensions = $h.prototype.dimensions, os.register("cartesian2d", tc);
	var jC = sA.extend({
		type: "series.__base_bar__",
		getInitialData: function() {
			return Hu(this.getSource(), this)
		},
		getMarkerPosition: function(t) {
			var e = this.coordinateSystem;
			if(e) {
				var n = e.dataToPoint(e.clampData(t)),
					i = this.getData(),
					a = i.getLayout("offset"),
					o = i.getLayout("size"),
					r = e.getBaseAxis().isHorizontal() ? 0 : 1;
				return n[r] += a + o / 2, n
			}
			return [0 / 0, 0 / 0]
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "cartesian2d",
			legendHoverLink: !0,
			barMinHeight: 0,
			barMinAngle: 0,
			large: !1,
			largeThreshold: 400,
			progressive: 3e3,
			progressiveChunkMode: "mod",
			itemStyle: {},
			emphasis: {}
		}
	});
	jC.extend({
		type: "series.bar",
		dependencies: ["grid", "polar"],
		brushSelector: "rect",
		getProgressive: function() {
			return this.get("large") ? this.get("progressive") : !1
		},
		getProgressiveThreshold: function() {
			var t = this.get("progressiveThreshold"),
				e = this.get("largeThreshold");
			return e > t && (t = e), t
		}
	});
	var qC = cM([
			["fill", "color"],
			["stroke", "borderColor"],
			["lineWidth", "borderWidth"],
			["stroke", "barBorderColor"],
			["lineWidth", "barBorderWidth"],
			["opacity"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"]
		]),
		KC = {
			getBarItemStyle: function(t) {
				var e = qC(this, t);
				if(this.getBorderLineDash) {
					var n = this.getBorderLineDash();
					n && (e.lineDash = n)
				}
				return e
			}
		},
		$C = ["itemStyle", "barBorderWidth"];
	r(Xo.prototype, KC), pu({
		type: "bar",
		render: function(t, e, n) {
			this._updateDrawMode(t);
			var i = t.get("coordinateSystem");
			return("cartesian2d" === i || "polar" === i) && (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)), this.group
		},
		incrementalPrepareRender: function(t) {
			this._clear(), this._updateDrawMode(t)
		},
		incrementalRender: function(t, e) {
			this._incrementalRenderLarge(t, e)
		},
		_updateDrawMode: function(t) {
			var e = t.pipelineContext.large;
			(null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear())
		},
		_renderNormal: function(t) {
			var e, n = this.group,
				i = t.getData(),
				a = this._data,
				o = t.coordinateSystem,
				r = o.getBaseAxis();
			"cartesian2d" === o.type ? e = r.isHorizontal() : "polar" === o.type && (e = "angle" === r.dim);
			var s = t.isAnimationEnabled() ? t : null;
			i.diff(a).add(function(a) {
				if(i.hasValue(a)) {
					var r = i.getItemModel(a),
						l = QC[o.type](i, a, r),
						u = JC[o.type](i, a, r, l, e, s);
					i.setItemGraphicEl(a, u), n.add(u), cc(u, i, a, r, l, t, e, "polar" === o.type)
				}
			}).update(function(r, l) {
				var u = a.getItemGraphicEl(l);
				if(!i.hasValue(r)) return void n.remove(u);
				var h = i.getItemModel(r),
					c = QC[o.type](i, r, h);
				u ? zo(u, {
					shape: c
				}, s, r) : u = JC[o.type](i, r, h, c, e, s, !0), i.setItemGraphicEl(r, u), n.add(u), cc(u, i, r, h, c, t, e, "polar" === o.type)
			}).remove(function(t) {
				var e = a.getItemGraphicEl(t);
				"cartesian2d" === o.type ? e && uc(t, s, e) : e && hc(t, s, e)
			}).execute(), this._data = i
		},
		_renderLarge: function(t) {
			this._clear(), fc(t, this.group)
		},
		_incrementalRenderLarge: function(t, e) {
			fc(e, this.group, !0)
		},
		dispose: G,
		remove: function(t) {
			this._clear(t)
		},
		_clear: function(t) {
			var e = this.group,
				n = this._data;
			t && t.get("animation") && n && !this._isLargeDraw ? n.eachItemGraphicEl(function(e) {
				"sector" === e.type ? hc(e.dataIndex, t, e) : uc(e.dataIndex, t, e)
			}) : e.removeAll(), this._data = null
		}
	});
	var JC = {
			cartesian2d: function(t, e, n, i, a, o, s) {
				var l = new LI({
					shape: r({}, i)
				});
				if(o) {
					var u = l.shape,
						h = a ? "height" : "width",
						c = {};
					u[h] = 0, c[h] = i[h], qI[s ? "updateProps" : "initProps"](l, {
						shape: c
					}, o, e)
				}
				return l
			},
			polar: function(t, e, n, i, a, o, r) {
				var l = i.startAngle < i.endAngle,
					u = new bI({
						shape: s({
							clockwise: l
						}, i)
					});
				if(o) {
					var h = u.shape,
						c = a ? "r" : "endAngle",
						d = {};
					h[c] = a ? 0 : i.startAngle, d[c] = i[c], qI[r ? "updateProps" : "initProps"](u, {
						shape: d
					}, o, e)
				}
				return u
			}
		},
		QC = {
			cartesian2d: function(t, e, n) {
				var i = t.getItemLayout(e),
					a = dc(n, i),
					o = i.width > 0 ? 1 : -1,
					r = i.height > 0 ? 1 : -1;
				return {
					x: i.x + o * a / 2,
					y: i.y + r * a / 2,
					width: i.width - o * a,
					height: i.height - r * a
				}
			},
			polar: function(t, e) {
				var n = t.getItemLayout(e);
				return {
					cx: n.cx,
					cy: n.cy,
					r0: n.r0,
					r: n.r,
					startAngle: n.startAngle,
					endAngle: n.endAngle
				}
			}
		},
		tL = Ga.extend({
			type: "largeBar",
			shape: {
				points: []
			},
			buildPath: function(t, e) {
				for(var n = e.points, i = this.__startPoint, a = this.__valueIdx, o = 0; o < n.length; o += 2) i[this.__valueIdx] = n[o + a], t.moveTo(i[0], i[1]), t.lineTo(n[o], n[o + 1])
			}
		}),
		eL = Math.PI,
		nL = function(t, e) {
			this.opt = e, this.axisModel = t, s(e, {
				labelOffset: 0,
				nameDirection: 1,
				tickDirection: 1,
				labelDirection: 1,
				silent: !0
			}), this.group = new rS;
			var n = new rS({
				position: e.position.slice(),
				rotation: e.rotation
			});
			n.updateTransform(), this._transform = n.transform, this._dumbGroup = n
		};
	nL.prototype = {
		constructor: nL,
		hasBuilder: function(t) {
			return !!iL[t]
		},
		add: function(t) {
			iL[t].call(this)
		},
		getGroup: function() {
			return this.group
		}
	};
	var iL = {
			axisLine: function() {
				var t = this.opt,
					e = this.axisModel;
				if(e.get("axisLine.show")) {
					var n = this.axisModel.axis.getExtent(),
						i = this._transform,
						a = [n[0], 0],
						o = [n[1], 0];
					i && (oe(a, a, i), oe(o, o, i));
					var s = r({
						lineCap: "round"
					}, e.getModel("axisLine.lineStyle").getLineStyle());
					this.group.add(new PI(ro({
						anid: "line",
						shape: {
							x1: a[0],
							y1: a[1],
							x2: o[0],
							y2: o[1]
						},
						style: s,
						strokeContainThreshold: t.strokeContainThreshold || 5,
						silent: !0,
						z2: 1
					})));
					var l = e.get("axisLine.symbol"),
						u = e.get("axisLine.symbolSize"),
						h = e.get("axisLine.symbolOffset") || 0;
					if("number" == typeof h && (h = [h, h]), null != l) {
						"string" == typeof l && (l = [l, l]), ("string" == typeof u || "number" == typeof u) && (u = [u, u]);
						var c = u[0],
							d = u[1];
						f([{
							rotate: t.rotation + Math.PI / 2,
							offset: h[0],
							r: 0
						}, {
							rotate: t.rotation - Math.PI / 2,
							offset: h[1],
							r: Math.sqrt((a[0] - o[0]) * (a[0] - o[0]) + (a[1] - o[1]) * (a[1] - o[1]))
						}], function(e, n) {
							if("none" !== l[n] && null != l[n]) {
								var i = Ih(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),
									o = e.r + e.offset,
									r = [a[0] + o * Math.cos(t.rotation), a[1] - o * Math.sin(t.rotation)];
								i.attr({
									rotation: e.rotate,
									position: r,
									silent: !0,
									z2: 11
								}), this.group.add(i)
							}
						}, this)
					}
				}
			},
			axisTickLabel: function() {
				var t = this.axisModel,
					e = this.opt,
					n = bc(this, t, e),
					i = Sc(this, t, e);
				yc(t, i, n)
			},
			axisName: function() {
				var t = this.opt,
					e = this.axisModel,
					n = D(t.axisName, e.get("name"));
				if(n) {
					var i, a = e.get("nameLocation"),
						o = t.nameDirection,
						s = e.getModel("nameTextStyle"),
						l = e.get("nameGap") || 0,
						u = this.axisModel.axis.getExtent(),
						h = u[0] > u[1] ? -1 : 1,
						c = ["start" === a ? u[0] - h * l : "end" === a ? u[1] + h * l : (u[0] + u[1]) / 2, wc(a) ? t.labelOffset + o * l : 0],
						d = e.get("nameRotate");
					null != d && (d = d * eL / 180);
					var f;
					wc(a) ? i = aL(t.rotation, null != d ? d : t.rotation, o) : (i = mc(t, a, d || 0, u), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));
					var p = s.getFont(),
						g = e.get("nameTruncate", !0) || {},
						m = g.ellipsis,
						v = D(t.nameTruncateMaxWidth, g.maxWidth, f),
						y = null != m && null != v ? dT(n, v, p, m, {
							minChar: 2,
							placeholder: g.placeholder
						}) : n,
						x = e.get("tooltip", !0),
						_ = e.mainType,
						w = {
							componentType: _,
							name: n,
							$vars: ["name"]
						};
					w[_ + "Index"] = e.componentIndex;
					var b = new yI({
						anid: "name",
						__fullText: n,
						__truncatedText: y,
						position: c,
						rotation: i.rotation,
						silent: vc(e),
						z2: 1,
						tooltip: x && x.show ? r({
							content: n,
							formatter: function() {
								return n
							},
							formatterParams: w
						}, x) : null
					});
					To(b.style, s, {
						text: y,
						textFont: p,
						textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
						textAlign: i.textAlign,
						textVerticalAlign: i.textVerticalAlign
					}), e.get("triggerEvent") && (b.eventData = gc(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform()
				}
			}
		},
		aL = nL.innerTextLayout = function(t, e, n) {
			var i, a, o = rr(e - t);
			return sr(o) ? (a = n > 0 ? "top" : "bottom", i = "center") : sr(o - eL) ? (a = n > 0 ? "bottom" : "top", i = "center") : (a = "middle", i = o > 0 && eL > o ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
				rotation: o,
				textAlign: i,
				textVerticalAlign: a
			}
		},
		oL = f,
		rL = x,
		sL = du({
			type: "axis",
			_axisPointer: null,
			axisPointerClass: null,
			render: function(t, e, n, i) {
				this.axisPointerClass && Lc(t), sL.superApply(this, "render", arguments), Ec(this, t, e, n, i, !0)
			},
			updateAxisPointer: function(t, e, n, i) {
				Ec(this, t, e, n, i, !1)
			},
			remove: function(t, e) {
				var n = this._axisPointer;
				n && n.remove(e), sL.superApply(this, "remove", arguments)
			},
			dispose: function(t, e) {
				zc(this, e), sL.superApply(this, "dispose", arguments)
			}
		}),
		lL = [];
	sL.registerAxisPointerClass = function(t, e) {
		lL[t] = e
	}, sL.getAxisPointerClass = function(t) {
		return t && lL[t]
	};
	var uL = ["axisLine", "axisTickLabel", "axisName"],
		hL = ["splitArea", "splitLine"],
		cL = sL.extend({
			type: "cartesianAxis",
			axisPointerClass: "CartesianAxisPointer",
			render: function(t, e, n, i) {
				this.group.removeAll();
				var a = this._axisGroup;
				if(this._axisGroup = new rS, this.group.add(this._axisGroup), t.get("show")) {
					var o = t.getCoordSysModel(),
						r = Rc(o, t),
						s = new nL(t, r);
					f(uL, s.add, s), this._axisGroup.add(s.getGroup()), f(hL, function(e) {
						t.get(e + ".show") && this["_" + e](t, o)
					}, this), Fo(a, this._axisGroup, t), cL.superCall(this, "render", t, e, n, i)
				}
			},
			remove: function() {
				this._splitAreaColors = null
			},
			_splitLine: function(t, e) {
				var n = t.axis;
				if(!n.scale.isBlank()) {
					var i = t.getModel("splitLine"),
						a = i.getModel("lineStyle"),
						o = a.get("color");
					o = _(o) ? o : [o];
					for(var r = e.coordinateSystem.getRect(), l = n.isHorizontal(), u = 0, h = n.getTicksCoords({
							tickModel: i
						}), c = [], d = [], f = a.getLineStyle(), p = 0; p < h.length; p++) {
						var g = n.toGlobalCoord(h[p].coord);
						l ? (c[0] = g, c[1] = r.y, d[0] = g, d[1] = r.y + r.height) : (c[0] = r.x, c[1] = g, d[0] = r.x + r.width, d[1] = g);
						var m = u++ % o.length,
							v = h[p].tickValue;
						this._axisGroup.add(new PI(ro({
							anid: null != v ? "line_" + h[p].tickValue : null,
							shape: {
								x1: c[0],
								y1: c[1],
								x2: d[0],
								y2: d[1]
							},
							style: s({
								stroke: o[m]
							}, f),
							silent: !0
						})))
					}
				}
			},
			_splitArea: function(t, e) {
				var n = t.axis;
				if(!n.scale.isBlank()) {
					var i = t.getModel("splitArea"),
						a = i.getModel("areaStyle"),
						o = a.get("color"),
						r = e.coordinateSystem.getRect(),
						l = n.getTicksCoords({
							tickModel: i,
							clamp: !0
						});
					if(l.length) {
						var u = o.length,
							h = this._splitAreaColors,
							c = B(),
							d = 0;
						if(h)
							for(var f = 0; f < l.length; f++) {
								var p = h.get(l[f].tickValue);
								if(null != p) {
									d = (p + (u - 1) * f) % u;
									break
								}
							}
						var g = n.toGlobalCoord(l[0].coord),
							m = a.getAreaStyle();
						o = _(o) ? o : [o];
						for(var f = 1; f < l.length; f++) {
							var v, y, x, w, b = n.toGlobalCoord(l[f].coord);
							n.isHorizontal() ? (v = g, y = r.y, x = b - v, w = r.height, g = v + x) : (v = r.x, y = g, x = r.width, w = b - y, g = y + w);
							var S = l[f - 1].tickValue;
							null != S && c.set(S, d), this._axisGroup.add(new LI({
								anid: null != S ? "area_" + S : null,
								shape: {
									x: v,
									y: y,
									width: x,
									height: w
								},
								style: s({
									fill: o[d]
								}, m),
								silent: !0
							})), d = (d + 1) % u
						}
						this._splitAreaColors = c
					}
				}
			}
		});
	cL.extend({
		type: "xAxis"
	}), cL.extend({
		type: "yAxis"
	}), du({
		type: "grid",
		render: function(t) {
			this.group.removeAll(), t.get("show") && this.group.add(new LI({
				shape: t.coordinateSystem.getRect(),
				style: s({
					fill: t.get("backgroundColor")
				}, t.getItemStyle()),
				silent: !0,
				z2: -1
			}))
		}
	}), eu(function(t) {
		t.xAxis && t.yAxis && !t.grid && (t.grid = {})
	}), su(x(lh, "bar")), su(QD), lu({
		seriesType: "bar",
		reset: function(t) {
			t.getData().setVisual("legendSymbol", "roundRect")
		}
	}), sA.extend({
		type: "series.line",
		dependencies: ["grid", "polar"],
		getInitialData: function() {
			return Hu(this.getSource(), this)
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "cartesian2d",
			legendHoverLink: !0,
			hoverAnimation: !0,
			clipOverflow: !0,
			label: {
				position: "top"
			},
			lineStyle: {
				width: 2,
				type: "solid"
			},
			step: !1,
			smooth: !1,
			smoothMonotone: null,
			symbol: "emptyCircle",
			symbolSize: 4,
			symbolRotate: null,
			showSymbol: !0,
			showAllSymbol: "auto",
			connectNulls: !1,
			sampling: "none",
			animationEasing: "linear",
			progressive: 0,
			hoverLayerThreshold: 1 / 0
		}
	});
	var dL = Bc.prototype,
		fL = Bc.getSymbolSize = function(t, e) {
			var n = t.getItemVisual(e, "symbolSize");
			return n instanceof Array ? n.slice() : [+n, +n]
		};
	dL._createSymbol = function(t, e, n, i, a) {
		this.removeAll();
		var o = e.getItemVisual(n, "color"),
			r = Ih(t, -1, -1, 2, 2, o, a);
		r.attr({
			z2: 100,
			culling: !0,
			scale: Vc(i)
		}), r.drift = Gc, this._symbolType = t, this.add(r)
	}, dL.stopSymbolAnimation = function(t) {
		this.childAt(0).stopAnimation(t)
	}, dL.getSymbolPath = function() {
		return this.childAt(0)
	}, dL.getScale = function() {
		return this.childAt(0).scale
	}, dL.highlight = function() {
		this.childAt(0).trigger("emphasis")
	}, dL.downplay = function() {
		this.childAt(0).trigger("normal")
	}, dL.setZ = function(t, e) {
		var n = this.childAt(0);
		n.zlevel = t, n.z = e
	}, dL.setDraggable = function(t) {
		var e = this.childAt(0);
		e.draggable = t, e.cursor = t ? "move" : "pointer"
	}, dL.updateData = function(t, e, n) {
		this.silent = !1;
		var i = t.getItemVisual(e, "symbol") || "circle",
			a = t.hostModel,
			o = fL(t, e),
			r = i !== this._symbolType;
		if(r) {
			var s = t.getItemVisual(e, "symbolKeepAspect");
			this._createSymbol(i, t, e, o, s)
		} else {
			var l = this.childAt(0);
			l.silent = !1, zo(l, {
				scale: Vc(o)
			}, a, e)
		}
		if(this._updateCommon(t, e, o, n), r) {
			var l = this.childAt(0),
				u = n && n.fadeIn,
				h = {
					scale: l.scale.slice()
				};
			u && (h.style = {
				opacity: l.style.opacity
			}), l.scale = [0, 0], u && (l.style.opacity = 0), Ro(l, h, a, e)
		}
		this._seriesModel = a
	};
	var pL = ["itemStyle"],
		gL = ["emphasis", "itemStyle"],
		mL = ["label"],
		vL = ["emphasis", "label"];
	dL._updateCommon = function(t, e, n, i) {
		function a(e) {
			return b ? t.getName(e) : rc(t, e)
		}
		var o = this.childAt(0),
			s = t.hostModel,
			l = t.getItemVisual(e, "color");
		"image" !== o.type && o.useStyle({
			strokeNoScale: !0
		});
		var u = i && i.itemStyle,
			h = i && i.hoverItemStyle,
			c = i && i.symbolRotate,
			d = i && i.symbolOffset,
			f = i && i.labelModel,
			p = i && i.hoverLabelModel,
			g = i && i.hoverAnimation,
			m = i && i.cursorStyle;
		if(!i || t.hasItemOption) {
			var v = i && i.itemModel ? i.itemModel : t.getItemModel(e);
			u = v.getModel(pL).getItemStyle(["color"]), h = v.getModel(gL).getItemStyle(), c = v.getShallow("symbolRotate"), d = v.getShallow("symbolOffset"), f = v.getModel(mL), p = v.getModel(vL), g = v.getShallow("hoverAnimation"), m = v.getShallow("cursor")
		} else h = r({}, h);
		var y = o.style;
		o.attr("rotation", (c || 0) * Math.PI / 180 || 0), d && o.attr("position", [Qo(d[0], n[0]), Qo(d[1], n[1])]), m && o.attr("cursor", m), o.setColor(l, i && i.symbolInnerColor), o.setStyle(u);
		var x = t.getItemVisual(e, "opacity");
		null != x && (y.opacity = x);
		var _ = t.getItemVisual(e, "liftZ"),
			w = o.__z2Origin;
		null != _ ? null == w && (o.__z2Origin = o.z2, o.z2 += _) : null != w && (o.z2 = w, o.__z2Origin = null);
		var b = i && i.useNameLabel;
		Io(y, h, f, p, {
			labelFetcher: s,
			labelDataIndex: e,
			defaultText: a,
			isRectText: !0,
			autoColor: l
		}), o.off("mouseover").off("mouseout").off("emphasis").off("normal"), o.hoverStyle = h, So(o), o.__symbolOriginalScale = Vc(n), g && s.isAnimationEnabled() && o.on("mouseover", Fc).on("mouseout", Wc).on("emphasis", Hc).on("normal", Zc)
	}, dL.fadeOut = function(t, e) {
		var n = this.childAt(0);
		this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), zo(n, {
			style: {
				opacity: 0
			},
			scale: [0, 0]
		}, this._seriesModel, this.dataIndex, t)
	}, h(Bc, rS);
	var yL = Xc.prototype;
	yL.updateData = function(t, e) {
		e = Uc(e);
		var n = this.group,
			i = t.hostModel,
			a = this._data,
			o = this._symbolCtor,
			r = jc(t);
		a || n.removeAll(), t.diff(a).add(function(i) {
			var a = t.getItemLayout(i);
			if(Yc(t, a, i, e)) {
				var s = new o(t, i, r);
				s.attr("position", a), t.setItemGraphicEl(i, s), n.add(s)
			}
		}).update(function(s, l) {
			var u = a.getItemGraphicEl(l),
				h = t.getItemLayout(s);
			return Yc(t, h, s, e) ? (u ? (u.updateData(t, s, r), zo(u, {
				position: h
			}, i)) : (u = new o(t, s), u.attr("position", h)), n.add(u), void t.setItemGraphicEl(s, u)) : void n.remove(u)
		}).remove(function(t) {
			var e = a.getItemGraphicEl(t);
			e && e.fadeOut(function() {
				n.remove(e)
			})
		}).execute(), this._data = t
	}, yL.isPersistent = function() {
		return !0
	}, yL.updateLayout = function() {
		var t = this._data;
		t && t.eachItemGraphicEl(function(e, n) {
			var i = t.getItemLayout(n);
			e.attr("position", i)
		})
	}, yL.incrementalPrepareUpdate = function(t) {
		this._seriesScope = jc(t), this._data = null, this.group.removeAll()
	}, yL.incrementalUpdate = function(t, e, n) {
		function i(t) {
			t.isGroup || (t.incremental = t.useHoverLayer = !0)
		}
		n = Uc(n);
		for(var a = t.start; a < t.end; a++) {
			var o = e.getItemLayout(a);
			if(Yc(e, o, a, n)) {
				var r = new this._symbolCtor(e, a, this._seriesScope);
				r.traverse(i), r.attr("position", o), this.group.add(r), e.setItemGraphicEl(a, r)
			}
		}
	}, yL.remove = function(t) {
		var e = this.group,
			n = this._data;
		n && t ? n.eachItemGraphicEl(function(t) {
			t.fadeOut(function() {
				e.remove(t)
			})
		}) : e.removeAll()
	};
	var xL = function(t, e, n, i, a, o, r, s) {
			for(var l = Jc(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], m = qc(a, e, r), v = qc(o, t, s), y = 0; y < l.length; y++) {
				var x = l[y],
					_ = !0;
				switch(x.cmd) {
					case "=":
						var w = t.getItemLayout(x.idx),
							b = e.getItemLayout(x.idx1);
						(isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), u.push(w), h.push(b), c.push(n[x.idx]), d.push(i[x.idx1]), g.push(e.getRawIndex(x.idx1));
						break;
					case "+":
						var S = x.idx;
						u.push(a.dataToPoint([e.get(m.dataDimsForPoint[0], S), e.get(m.dataDimsForPoint[1], S)])), h.push(e.getItemLayout(S).slice()), c.push($c(m, a, e, S)), d.push(i[S]), g.push(e.getRawIndex(S));
						break;
					case "-":
						var S = x.idx,
							M = t.getRawIndex(S);
						M !== S ? (u.push(t.getItemLayout(S)), h.push(o.dataToPoint([t.get(v.dataDimsForPoint[0], S), t.get(v.dataDimsForPoint[1], S)])), c.push(n[S]), d.push($c(v, o, t, S)), g.push(M)) : _ = !1
				}
				_ && (f.push(x), p.push(p.length))
			}
			p.sort(function(t, e) {
				return g[t] - g[e]
			});
			for(var I = [], T = [], A = [], D = [], C = [], y = 0; y < p.length; y++) {
				var S = p[y];
				I[y] = u[S], T[y] = h[S], A[y] = c[S], D[y] = d[S], C[y] = f[S]
			}
			return {
				current: I,
				next: T,
				stackedOnCurrent: A,
				stackedOnNext: D,
				status: C
			}
		},
		_L = re,
		wL = se,
		bL = Y,
		SL = W,
		ML = [],
		IL = [],
		TL = [],
		AL = Ga.extend({
			type: "ec-polyline",
			shape: {
				points: [],
				smooth: 0,
				smoothConstraint: !0,
				smoothMonotone: null,
				connectNulls: !1
			},
			style: {
				fill: null,
				stroke: "#000"
			},
			brush: wI(Ga.prototype.brush),
			buildPath: function(t, e) {
				var n = e.points,
					i = 0,
					a = n.length,
					o = id(n, e.smoothConstraint);
				if(e.connectNulls) {
					for(; a > 0 && Qc(n[a - 1]); a--);
					for(; a > i && Qc(n[i]); i++);
				}
				for(; a > i;) i += td(t, n, i, a, a, 1, o.min, o.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
			}
		}),
		DL = Ga.extend({
			type: "ec-polygon",
			shape: {
				points: [],
				stackedOnPoints: [],
				smooth: 0,
				stackedOnSmooth: 0,
				smoothConstraint: !0,
				smoothMonotone: null,
				connectNulls: !1
			},
			brush: wI(Ga.prototype.brush),
			buildPath: function(t, e) {
				var n = e.points,
					i = e.stackedOnPoints,
					a = 0,
					o = n.length,
					r = e.smoothMonotone,
					s = id(n, e.smoothConstraint),
					l = id(i, e.smoothConstraint);
				if(e.connectNulls) {
					for(; o > 0 && Qc(n[o - 1]); o--);
					for(; o > a && Qc(n[a]); a++);
				}
				for(; o > a;) {
					var u = td(t, n, a, o, o, 1, s.min, s.max, e.smooth, r, e.connectNulls);
					td(t, i, a + u - 1, u, o, -1, l.min, l.max, e.stackedOnSmooth, r, e.connectNulls), a += u + 1, t.closePath()
				}
			}
		});
	Xs.extend({
		type: "line",
		init: function() {
			var t = new rS,
				e = new Xc;
			this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
		},
		render: function(t, e, n) {
			var i = t.coordinateSystem,
				a = this.group,
				o = t.getData(),
				r = t.getModel("lineStyle"),
				l = t.getModel("areaStyle"),
				u = o.mapArray(o.getItemLayout),
				h = "polar" === i.type,
				c = this._coordSys,
				d = this._symbolDraw,
				f = this._polyline,
				p = this._polygon,
				g = this._lineGroup,
				m = t.get("animation"),
				v = !l.isEmpty(),
				y = l.get("origin"),
				x = qc(i, o, y),
				_ = sd(i, o, x),
				w = t.get("showSymbol"),
				b = w && !h && fd(t, o, i),
				S = this._data;
			S && S.eachItemGraphicEl(function(t, e) {
				t.__temp && (a.remove(t), S.setItemGraphicEl(e, null))
			}), w || d.remove(), a.add(g);
			var M = !h && t.get("step");
			f && c.type === i.type && M === this._step ? (v && !p ? p = this._newPolygon(u, _, i, m) : p && !v && (g.remove(p), p = this._polygon = null), g.setClipPath(hd(i, !1, !1, t)), w && d.updateData(o, {
				isIgnore: b,
				clipShape: hd(i, !1, !0, t)
			}), o.eachItemGraphicEl(function(t) {
				t.stopAnimation(!0)
			}), ad(this._stackedOnPoints, _) && ad(this._points, u) || (m ? this._updateAnimation(o, _, i, n, M, y) : (M && (u = cd(u, i, M), _ = cd(_, i, M)), f.setShape({
				points: u
			}), p && p.setShape({
				points: u,
				stackedOnPoints: _
			})))) : (w && d.updateData(o, {
				isIgnore: b,
				clipShape: hd(i, !1, !0, t)
			}), M && (u = cd(u, i, M), _ = cd(_, i, M)), f = this._newPolyline(u, i, m), v && (p = this._newPolygon(u, _, i, m)), g.setClipPath(hd(i, !0, !1, t)));
			var I = dd(o, i) || o.getVisual("color");
			f.useStyle(s(r.getLineStyle(), {
				fill: "none",
				stroke: I,
				lineJoin: "bevel"
			}));
			var T = t.get("smooth");
			if(T = od(t.get("smooth")), f.setShape({
					smooth: T,
					smoothMonotone: t.get("smoothMonotone"),
					connectNulls: t.get("connectNulls")
				}), p) {
				var A = o.getCalculationInfo("stackedOnSeries"),
					D = 0;
				p.useStyle(s(l.getAreaStyle(), {
					fill: I,
					opacity: .7,
					lineJoin: "bevel"
				})), A && (D = od(A.get("smooth"))), p.setShape({
					smooth: T,
					stackedOnSmooth: D,
					smoothMonotone: t.get("smoothMonotone"),
					connectNulls: t.get("connectNulls")
				})
			}
			this._data = o, this._coordSys = i, this._stackedOnPoints = _, this._points = u, this._step = M, this._valueOrigin = y
		},
		dispose: function() {},
		highlight: function(t, e, n, i) {
			var a = t.getData(),
				o = Yi(a, i);
			if(!(o instanceof Array) && null != o && o >= 0) {
				var r = a.getItemGraphicEl(o);
				if(!r) {
					var s = a.getItemLayout(o);
					if(!s) return;
					r = new Bc(a, o), r.position = s, r.setZ(t.get("zlevel"), t.get("z")), r.ignore = isNaN(s[0]) || isNaN(s[1]), r.__temp = !0, a.setItemGraphicEl(o, r), r.stopSymbolAnimation(!0), this.group.add(r)
				}
				r.highlight()
			} else Xs.prototype.highlight.call(this, t, e, n, i)
		},
		downplay: function(t, e, n, i) {
			var a = t.getData(),
				o = Yi(a, i);
			if(null != o && o >= 0) {
				var r = a.getItemGraphicEl(o);
				r && (r.__temp ? (a.setItemGraphicEl(o, null), this.group.remove(r)) : r.downplay())
			} else Xs.prototype.downplay.call(this, t, e, n, i)
		},
		_newPolyline: function(t) {
			var e = this._polyline;
			return e && this._lineGroup.remove(e), e = new AL({
				shape: {
					points: t
				},
				silent: !0,
				z2: 10
			}), this._lineGroup.add(e), this._polyline = e, e
		},
		_newPolygon: function(t, e) {
			var n = this._polygon;
			return n && this._lineGroup.remove(n), n = new DL({
				shape: {
					points: t,
					stackedOnPoints: e
				},
				silent: !0
			}), this._lineGroup.add(n), this._polygon = n, n
		},
		_updateAnimation: function(t, e, n, i, a, o) {
			var r = this._polyline,
				s = this._polygon,
				l = t.hostModel,
				u = xL(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, o),
				h = u.current,
				c = u.stackedOnCurrent,
				d = u.next,
				f = u.stackedOnNext;
			a && (h = cd(u.current, n, a), c = cd(u.stackedOnCurrent, n, a), d = cd(u.next, n, a), f = cd(u.stackedOnNext, n, a)), r.shape.__points = u.current, r.shape.points = h, zo(r, {
				shape: {
					points: d
				}
			}, l), s && (s.setShape({
				points: h,
				stackedOnPoints: c
			}), zo(s, {
				shape: {
					points: d,
					stackedOnPoints: f
				}
			}, l));
			for(var p = [], g = u.status, m = 0; m < g.length; m++) {
				var v = g[m].cmd;
				if("=" === v) {
					var y = t.getItemGraphicEl(g[m].idx1);
					y && p.push({
						el: y,
						ptIdx: m
					})
				}
			}
			r.animators && r.animators.length && r.animators[0].during(function() {
				for(var t = 0; t < p.length; t++) {
					var e = p[t].el;
					e.attr("position", r.shape.__points[p[t].ptIdx])
				}
			})
		},
		remove: function() {
			var t = this.group,
				e = this._data;
			this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function(n, i) {
				n.__temp && (t.remove(n), e.setItemGraphicEl(i, null))
			}), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
		}
	});
	var CL = function(t, e, n) {
			return {
				seriesType: t,
				performRawSeries: !0,
				reset: function(t, i) {
					function a(e, n) {
						if("function" == typeof s) {
							var i = t.getRawValue(n),
								a = t.getDataParams(n);
							e.setItemVisual(n, "symbolSize", s(i, a))
						}
						if(e.hasItemOption) {
							var o = e.getItemModel(n),
								r = o.getShallow("symbol", !0),
								l = o.getShallow("symbolSize", !0),
								u = o.getShallow("symbolKeepAspect", !0);
							null != r && e.setItemVisual(n, "symbol", r), null != l && e.setItemVisual(n, "symbolSize", l), null != u && e.setItemVisual(n, "symbolKeepAspect", u)
						}
					}
					var o = t.getData(),
						r = t.get("symbol") || e,
						s = t.get("symbolSize"),
						l = t.get("symbolKeepAspect");
					if(o.setVisual({
							legendSymbol: n || r,
							symbol: r,
							symbolSize: s,
							symbolKeepAspect: l
						}), !i.isSeriesFiltered(t)) {
						var u = "function" == typeof s;
						return {
							dataEach: o.hasItemOption || u ? a : null
						}
					}
				}
			}
		},
		LL = function(t) {
			return {
				seriesType: t,
				plan: hA(),
				reset: function(t) {
					function e(t, e) {
						for(var n = t.end - t.start, a = o && new Float32Array(n * s), l = t.start, u = 0, h = [], c = []; l < t.end; l++) {
							var d;
							if(1 === s) {
								var f = e.get(r[0], l);
								d = !isNaN(f) && i.dataToPoint(f, null, c)
							} else {
								var f = h[0] = e.get(r[0], l),
									p = h[1] = e.get(r[1], l);
								d = !isNaN(f) && !isNaN(p) && i.dataToPoint(h, null, c)
							}
							o ? (a[u++] = d ? d[0] : 0 / 0, a[u++] = d ? d[1] : 0 / 0) : e.setItemLayout(l, d && d.slice() || [0 / 0, 0 / 0])
						}
						o && e.setLayout("symbolPoints", a)
					}
					var n = t.getData(),
						i = t.coordinateSystem,
						a = t.pipelineContext,
						o = a.large;
					if(i) {
						var r = p(i.dimensions, function(t) {
								return n.mapDimension(t)
							}).slice(0, 2),
							s = r.length,
							l = n.getCalculationInfo("stackResultDimension");
						return Fu(n, r[0]) && (r[0] = l), Fu(n, r[1]) && (r[1] = l), s && {
							progress: e
						}
					}
				}
			}
		},
		kL = {
			average: function(t) {
				for(var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
				return 0 === n ? 0 / 0 : e / n
			},
			sum: function(t) {
				for(var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
				return e
			},
			max: function(t) {
				for(var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
				return isFinite(e) ? e : 0 / 0
			},
			min: function(t) {
				for(var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
				return isFinite(e) ? e : 0 / 0
			},
			nearest: function(t) {
				return t[0]
			}
		},
		PL = function(t) {
			return Math.round(t.length / 2)
		},
		OL = function(t) {
			return {
				seriesType: t,
				modifyOutputEnd: !0,
				reset: function(t) {
					var e = t.getData(),
						n = t.get("sampling"),
						i = t.coordinateSystem;
					if("cartesian2d" === i.type && n) {
						var a = i.getBaseAxis(),
							o = i.getOtherAxis(a),
							r = a.getExtent(),
							s = r[1] - r[0],
							l = Math.round(e.count() / s);
						if(l > 1) {
							var u;
							"string" == typeof n ? u = kL[n] : "function" == typeof n && (u = n), u && t.setData(e.downSample(e.mapDimension(o.dim), 1 / l, u, PL))
						}
					}
				}
			}
		};
	lu(CL("line", "circle", "line")), su(LL("line")), nu(sD.PROCESSOR.STATISTIC, OL("line"));
	var NL = function(t, e, n) {
			e = _(e) && {
				coordDimensions: e
			} || r({}, e);
			var i = t.getSource(),
				a = HD(i, e),
				o = new GD(a, t);
			return o.initData(i, n), o
		},
		EL = {
			updateSelectedMap: function(t) {
				this._targetList = _(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function(t, e) {
					return t.set(e.name, e), t
				}, B())
			},
			select: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t),
					i = this.get("selectedMode");
				"single" === i && this._selectTargetMap.each(function(t) {
					t.selected = !1
				}), n && (n.selected = !0)
			},
			unSelect: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
				n && (n.selected = !1)
			},
			toggleSelected: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
				return null != n ? (this[n.selected ? "unSelect" : "select"](t, e), n.selected) : void 0
			},
			isSelected: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
				return n && n.selected
			}
		},
		zL = fu({
			type: "series.pie",
			init: function(t) {
				zL.superApply(this, "init", arguments), this.legendDataProvider = function() {
					return this.getRawData()
				}, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
			},
			mergeOption: function(t) {
				zL.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
			},
			getInitialData: function() {
				return NL(this, ["value"])
			},
			_createSelectableList: function() {
				for(var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, a = t.count(); a > i; i++) n.push({
					name: t.getName(i),
					value: t.get(e, i),
					selected: Ps(t, i, "selected")
				});
				return n
			},
			getDataParams: function(t) {
				var e = this.getData(),
					n = zL.superCall(this, "getDataParams", t),
					i = [];
				return e.each(e.mapDimension("value"), function(t) {
					i.push(t)
				}), n.percent = or(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n
			},
			_defaultLabelLine: function(t) {
				Bi(t, "labelLine", ["show"]);
				var e = t.labelLine,
					n = t.emphasis.labelLine;
				e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				hoverAnimation: !0,
				center: ["50%", "50%"],
				radius: [0, "75%"],
				clockwise: !0,
				startAngle: 90,
				minAngle: 0,
				selectedOffset: 10,
				hoverOffset: 10,
				avoidLabelOverlap: !0,
				percentPrecision: 2,
				stillShowZeroSum: !0,
				label: {
					rotate: !1,
					show: !0,
					position: "outer"
				},
				labelLine: {
					show: !0,
					length: 15,
					length2: 15,
					smooth: !1,
					lineStyle: {
						width: 1,
						type: "solid"
					}
				},
				itemStyle: {
					borderWidth: 1
				},
				animationType: "expansion",
				animationEasing: "cubicOut"
			}
		});
	c(zL, EL);
	var RL = vd.prototype;
	RL.updateData = function(t, e, n) {
		function i() {
			o.stopAnimation(!0), o.animateTo({
				shape: {
					r: h.r + l.get("hoverOffset")
				}
			}, 300, "elasticOut")
		}

		function a() {
			o.stopAnimation(!0), o.animateTo({
				shape: {
					r: h.r
				}
			}, 300, "elasticOut")
		}
		var o = this.childAt(0),
			l = t.hostModel,
			u = t.getItemModel(e),
			h = t.getItemLayout(e),
			c = r({}, h);
		if(c.label = null, n) {
			o.setShape(c);
			var d = l.getShallow("animationType");
			"scale" === d ? (o.shape.r = h.r0, Ro(o, {
				shape: {
					r: h.r
				}
			}, l, e)) : (o.shape.endAngle = h.startAngle, zo(o, {
				shape: {
					endAngle: h.endAngle
				}
			}, l, e))
		} else zo(o, {
			shape: c
		}, l, e);
		var f = t.getItemVisual(e, "color");
		o.useStyle(s({
			lineJoin: "bevel",
			fill: f
		}, u.getModel("itemStyle").getItemStyle())), o.hoverStyle = u.getModel("emphasis.itemStyle").getItemStyle();
		var p = u.getShallow("cursor");
		p && o.attr("cursor", p), md(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), o.off("mouseover").off("mouseout").off("emphasis").off("normal"), u.get("hoverAnimation") && l.isAnimationEnabled() && o.on("mouseover", i).on("mouseout", a).on("emphasis", i).on("normal", a), this._updateLabel(t, e), So(this)
	}, RL._updateLabel = function(t, e) {
		var n = this.childAt(1),
			i = this.childAt(2),
			a = t.hostModel,
			o = t.getItemModel(e),
			r = t.getItemLayout(e),
			s = r.label,
			l = t.getItemVisual(e, "color");
		zo(n, {
			shape: {
				points: s.linePoints || [
					[s.x, s.y],
					[s.x, s.y],
					[s.x, s.y]
				]
			}
		}, a, e), zo(i, {
			style: {
				x: s.x,
				y: s.y
			}
		}, a, e), i.attr({
			rotation: s.rotation,
			origin: [s.x, s.y],
			z2: 10
		});
		var u = o.getModel("label"),
			h = o.getModel("emphasis.label"),
			c = o.getModel("labelLine"),
			d = o.getModel("emphasis.labelLine"),
			l = t.getItemVisual(e, "color");
		Io(i.style, i.hoverStyle = {}, u, h, {
			labelFetcher: t.hostModel,
			labelDataIndex: e,
			defaultText: t.getName(e),
			autoColor: l,
			useInsideStyle: !!s.inside
		}, {
			textAlign: s.textAlign,
			textVerticalAlign: s.verticalAlign,
			opacity: t.getItemVisual(e, "opacity")
		}), i.ignore = i.normalIgnore = !u.get("show"), i.hoverIgnore = !h.get("show"), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), n.setStyle({
			stroke: l,
			opacity: t.getItemVisual(e, "opacity")
		}), n.setStyle(c.getModel("lineStyle").getLineStyle()), n.hoverStyle = d.getModel("lineStyle").getLineStyle();
		var f = c.get("smooth");
		f && f === !0 && (f = .4), n.setShape({
			smooth: f
		})
	}, h(vd, rS);
	var BL = (Xs.extend({
			type: "pie",
			init: function() {
				var t = new rS;
				this._sectorGroup = t
			},
			render: function(t, e, n, i) {
				if(!i || i.from !== this.uid) {
					var a = t.getData(),
						o = this._data,
						r = this.group,
						s = e.get("animation"),
						l = !o,
						u = t.get("animationType"),
						h = x(gd, this.uid, t, s, n),
						c = t.get("selectedMode");
					if(a.diff(o).add(function(t) {
							var e = new vd(a, t);
							l && "scale" !== u && e.eachChild(function(t) {
								t.stopAnimation(!0)
							}), c && e.on("click", h), a.setItemGraphicEl(t, e), r.add(e)
						}).update(function(t, e) {
							var n = o.getItemGraphicEl(e);
							n.updateData(a, t), n.off("click"), c && n.on("click", h), r.add(n), a.setItemGraphicEl(t, n)
						}).remove(function(t) {
							var e = o.getItemGraphicEl(t);
							r.remove(e)
						}).execute(), s && l && a.count() > 0 && "scale" !== u) {
						var d = a.getItemLayout(0),
							f = Math.max(n.getWidth(), n.getHeight()) / 2,
							p = y(r.removeClipPath, r);
						r.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t))
					} else r.removeClipPath();
					this._data = a
				}
			},
			dispose: function() {},
			_createClipPath: function(t, e, n, i, a, o, r) {
				var s = new bI({
					shape: {
						cx: t,
						cy: e,
						r0: 0,
						r: n,
						startAngle: i,
						endAngle: i,
						clockwise: a
					}
				});
				return Ro(s, {
					shape: {
						endAngle: i + (a ? 1 : -1) * Math.PI * 2
					}
				}, r, o), s
			},
			containPoint: function(t, e) {
				var n = e.getData(),
					i = n.getItemLayout(0);
				if(i) {
					var a = t[0] - i.cx,
						o = t[1] - i.cy,
						r = Math.sqrt(a * a + o * o);
					return r <= i.r && r >= i.r0
				}
			}
		}), function(t, e) {
			f(e, function(e) {
				e.update = "updateView", au(e, function(n, i) {
					var a = {};
					return i.eachComponent({
						mainType: "series",
						subType: t,
						query: n
					}, function(t) {
						t[e.method] && t[e.method](n.name, n.dataIndex);
						var i = t.getData();
						i.each(function(e) {
							var n = i.getName(e);
							a[n] = t.isSelected(n) || !1
						})
					}), {
						name: n.name,
						selected: a
					}
				})
			})
		}),
		VL = function(t) {
			return {
				getTargetSeries: function(e) {
					var n = {},
						i = B();
					return e.eachSeriesByType(t, function(t) {
						t.__paletteScope = n, i.set(t.uid, t)
					}), i
				},
				reset: function(t) {
					var e = t.getRawData(),
						n = {},
						i = t.getData();
					i.each(function(t) {
						var e = i.getRawIndex(t);
						n[e] = t
					}), e.each(function(a) {
						var o = n[a],
							r = null != o && i.getItemVisual(o, "color", !0);
						if(r) e.setItemVisual(a, "color", r);
						else {
							var s = e.getItemModel(a),
								l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(a) || a + "", t.__paletteScope, e.count());
							e.setItemVisual(a, "color", l), null != o && i.setItemVisual(o, "color", l)
						}
					})
				}
			}
		},
		GL = function(t, e, n, i) {
			var a, o, r = t.getData(),
				s = [],
				l = !1;
			r.each(function(n) {
				var i, u, h, c, d = r.getItemLayout(n),
					f = r.getItemModel(n),
					p = f.getModel("label"),
					g = p.get("position") || f.get("emphasis.label.position"),
					m = f.getModel("labelLine"),
					v = m.get("length"),
					y = m.get("length2"),
					x = (d.startAngle + d.endAngle) / 2,
					_ = Math.cos(x),
					w = Math.sin(x);
				a = d.cx, o = d.cy;
				var b = "inside" === g || "inner" === g;
				if("center" === g) i = d.cx, u = d.cy, c = "center";
				else {
					var S = (b ? (d.r + d.r0) / 2 * _ : d.r * _) + a,
						M = (b ? (d.r + d.r0) / 2 * w : d.r * w) + o;
					if(i = S + 3 * _, u = M + 3 * w, !b) {
						var I = S + _ * (v + e - d.r),
							T = M + w * (v + e - d.r),
							A = I + (0 > _ ? -1 : 1) * y,
							D = T;
						i = A + (0 > _ ? -5 : 5), u = D, h = [
							[S, M],
							[I, T],
							[A, D]
						]
					}
					c = b ? "center" : _ > 0 ? "left" : "right"
				}
				var C = p.getFont(),
					L = p.get("rotate") ? 0 > _ ? -x + Math.PI : -x : 0,
					k = t.getFormattedLabel(n, "normal") || r.getName(n),
					P = Bn(k, C, c, "top");
				l = !!L, d.label = {
					x: i,
					y: u,
					position: g,
					height: P.height,
					len: v,
					len2: y,
					linePoints: h,
					textAlign: c,
					verticalAlign: "middle",
					rotation: L,
					inside: b
				}, b || s.push(d.label)
			}), !l && t.get("avoidLabelOverlap") && xd(s, a, o, e, n, i)
		},
		FL = 2 * Math.PI,
		WL = Math.PI / 180,
		HL = function(t, e, n) {
			e.eachSeriesByType(t, function(t) {
				var e = t.getData(),
					i = e.mapDimension("value"),
					a = t.get("center"),
					o = t.get("radius");
				_(o) || (o = [0, o]), _(a) || (a = [a, a]);
				var r = n.getWidth(),
					s = n.getHeight(),
					l = Math.min(r, s),
					u = Qo(a[0], r),
					h = Qo(a[1], s),
					c = Qo(o[0], l / 2),
					d = Qo(o[1], l / 2),
					f = -t.get("startAngle") * WL,
					p = t.get("minAngle") * WL,
					g = 0;
				e.each(i, function(t) {
					!isNaN(t) && g++
				});
				var m = e.getSum(i),
					v = Math.PI / (m || g) * 2,
					y = t.get("clockwise"),
					x = t.get("roseType"),
					w = t.get("stillShowZeroSum"),
					b = e.getDataExtent(i);
				b[0] = 0;
				var S = FL,
					M = 0,
					I = f,
					T = y ? 1 : -1;
				if(e.each(i, function(t, n) {
						var i;
						if(isNaN(t)) return void e.setItemLayout(n, {
							angle: 0 / 0,
							startAngle: 0 / 0,
							endAngle: 0 / 0,
							clockwise: y,
							cx: u,
							cy: h,
							r0: c,
							r: x ? 0 / 0 : d
						});
						i = "area" !== x ? 0 === m && w ? v : t * v : FL / g, p > i ? (i = p, S -= p) : M += t;
						var a = I + T * i;
						e.setItemLayout(n, {
							angle: i,
							startAngle: I,
							endAngle: a,
							clockwise: y,
							cx: u,
							cy: h,
							r0: c,
							r: x ? Jo(t, b, [c, d]) : d
						}), I = a
					}), FL > S && g)
					if(.001 >= S) {
						var A = FL / g;
						e.each(i, function(t, n) {
							if(!isNaN(t)) {
								var i = e.getItemLayout(n);
								i.angle = A, i.startAngle = f + T * n * A, i.endAngle = f + T * (n + 1) * A
							}
						})
					} else v = S / M, I = f, e.each(i, function(t, n) {
						if(!isNaN(t)) {
							var i = e.getItemLayout(n),
								a = i.angle === p ? p : t * v;
							i.startAngle = I, i.endAngle = I + T * a, I += T * a
						}
					});
				GL(t, d, r, s)
			})
		},
		ZL = function(t) {
			return {
				seriesType: t,
				reset: function(t, e) {
					var n = e.findComponents({
						mainType: "legend"
					});
					if(n && n.length) {
						var i = t.getData();
						i.filterSelf(function(t) {
							for(var e = i.getName(t), a = 0; a < n.length; a++)
								if(!n[a].isSelected(e)) return !1;
							return !0
						})
					}
				}
			}
		};
	BL("pie", [{
		type: "pieToggleSelect",
		event: "pieselectchanged",
		method: "toggleSelected"
	}, {
		type: "pieSelect",
		event: "pieselected",
		method: "select"
	}, {
		type: "pieUnSelect",
		event: "pieunselected",
		method: "unSelect"
	}]), lu(VL("pie")), su(x(HL, "pie")), nu(ZL("pie")), sA.extend({
		type: "series.scatter",
		dependencies: ["grid", "polar", "geo", "singleAxis", "calendar"],
		getInitialData: function() {
			return Hu(this.getSource(), this)
		},
		brushSelector: "point",
		getProgressive: function() {
			var t = this.option.progressive;
			return null == t ? this.option.large ? 5e3 : this.get("progressive") : t
		},
		getProgressiveThreshold: function() {
			var t = this.option.progressiveThreshold;
			return null == t ? this.option.large ? 1e4 : this.get("progressiveThreshold") : t
		},
		defaultOption: {
			coordinateSystem: "cartesian2d",
			zlevel: 0,
			z: 2,
			legendHoverLink: !0,
			hoverAnimation: !0,
			symbolSize: 10,
			large: !1,
			largeThreshold: 2e3,
			itemStyle: {
				opacity: .8
			}
		}
	});
	var XL = 4,
		YL = to({
			shape: {
				points: null
			},
			symbolProxy: null,
			buildPath: function(t, e) {
				var n = e.points,
					i = e.size,
					a = this.symbolProxy,
					o = a.shape,
					r = t.getContext ? t.getContext() : t,
					s = r && i[0] < XL;
				if(!s)
					for(var l = 0; l < n.length;) {
						var u = n[l++],
							h = n[l++];
						isNaN(u) || isNaN(h) || (o.x = u - i[0] / 2, o.y = h - i[1] / 2, o.width = i[0], o.height = i[1], a.buildPath(t, o, !0))
					}
			},
			afterBrush: function(t) {
				var e = this.shape,
					n = e.points,
					i = e.size,
					a = i[0] < XL;
				if(a) {
					this.setTransform(t);
					for(var o = 0; o < n.length;) {
						var r = n[o++],
							s = n[o++];
						isNaN(r) || isNaN(s) || t.fillRect(r - i[0] / 2, s - i[1] / 2, i[0], i[1])
					}
					this.restoreTransform(t)
				}
			},
			findDataIndex: function(t, e) {
				for(var n = this.shape, i = n.points, a = n.size, o = Math.max(a[0], 4), r = Math.max(a[1], 4), s = i.length / 2 - 1; s >= 0; s--) {
					var l = 2 * s,
						u = i[l] - o / 2,
						h = i[l + 1] - r / 2;
					if(t >= u && e >= h && u + o >= t && h + r >= e) return s
				}
				return -1
			}
		}),
		UL = wd.prototype;
	UL.isPersistent = function() {
		return !this._incremental
	}, UL.updateData = function(t) {
		this.group.removeAll();
		var e = new YL({
			rectHover: !0,
			cursor: "default"
		});
		e.setShape({
			points: t.getLayout("symbolPoints")
		}), this._setCommon(e, t), this.group.add(e), this._incremental = null
	}, UL.updateLayout = function(t) {
		if(!this._incremental) {
			var e = t.getLayout("symbolPoints");
			this.group.eachChild(function(t) {
				if(null != t.startIndex) {
					var n = 2 * (t.endIndex - t.startIndex),
						i = 4 * t.startIndex * 2;
					e = new Float32Array(e.buffer, i, n)
				}
				t.setShape("points", e)
			})
		}
	}, UL.incrementalPrepareUpdate = function(t) {
		this.group.removeAll(), this._clearIncremental(), t.count() > 2e6 ? (this._incremental || (this._incremental = new Qa({
			silent: !0
		})), this.group.add(this._incremental)) : this._incremental = null
	}, UL.incrementalUpdate = function(t, e) {
		var n;
		this._incremental ? (n = new YL, this._incremental.addDisplayable(n, !0)) : (n = new YL({
			rectHover: !0,
			cursor: "default",
			startIndex: t.start,
			endIndex: t.end
		}), n.incremental = !0, this.group.add(n)), n.setShape({
			points: e.getLayout("symbolPoints")
		}), this._setCommon(n, e, !!this._incremental)
	}, UL._setCommon = function(t, e, n) {
		var i = e.hostModel,
			a = e.getVisual("symbolSize");
		t.setShape("size", a instanceof Array ? a : [a, a]), t.symbolProxy = Ih(e.getVisual("symbol"), 0, 0, 0, 0), t.setColor = t.symbolProxy.setColor;
		var o = t.shape.size[0] < XL;
		t.useStyle(i.getModel("itemStyle").getItemStyle(o ? ["color", "shadowBlur", "shadowColor"] : ["color"]));
		var r = e.getVisual("color");
		r && t.setColor(r), n || (t.seriesIndex = i.seriesIndex, t.on("mousemove", function(e) {
			t.dataIndex = null;
			var n = t.findDataIndex(e.offsetX, e.offsetY);
			n >= 0 && (t.dataIndex = n + (t.startIndex || 0))
		}))
	}, UL.remove = function() {
		this._clearIncremental(), this._incremental = null, this.group.removeAll()
	}, UL._clearIncremental = function() {
		var t = this._incremental;
		t && t.clearDisplaybles()
	}, pu({
		type: "scatter",
		render: function(t) {
			var e = t.getData(),
				n = this._updateSymbolDraw(e, t);
			n.updateData(e), this._finished = !0
		},
		incrementalPrepareRender: function(t) {
			var e = t.getData(),
				n = this._updateSymbolDraw(e, t);
			n.incrementalPrepareUpdate(e), this._finished = !1
		},
		incrementalRender: function(t, e) {
			this._symbolDraw.incrementalUpdate(t, e.getData()), this._finished = t.end === e.getData().count()
		},
		updateTransform: function(t) {
			var e = t.getData();
			if(this.group.dirty(), !this._finished || e.count() > 1e4 || !this._symbolDraw.isPersistent()) return {
				update: !0
			};
			var n = LL().reset(t);
			n.progress && n.progress({
				start: 0,
				end: e.count()
			}, e), this._symbolDraw.updateLayout(e)
		},
		_updateSymbolDraw: function(t, e) {
			var n = this._symbolDraw,
				i = e.pipelineContext,
				a = i.large;
			return n && a === this._isLargeDraw || (n && n.remove(), n = this._symbolDraw = a ? new wd : new Xc, this._isLargeDraw = a, this.group.removeAll()), this.group.add(n.group), n
		},
		remove: function() {
			this._symbolDraw && this._symbolDraw.remove(!0), this._symbolDraw = null
		},
		dispose: function() {}
	}), lu(CL("scatter", "circle")), su(LL("scatter")), sA.extend({
		type: "series.effectScatter",
		dependencies: ["grid", "polar"],
		getInitialData: function() {
			return Hu(this.getSource(), this)
		},
		brushSelector: "point",
		defaultOption: {
			coordinateSystem: "cartesian2d",
			zlevel: 0,
			z: 2,
			legendHoverLink: !0,
			effectType: "ripple",
			progressive: 0,
			showEffectOn: "render",
			rippleEffect: {
				period: 4,
				scale: 2.5,
				brushType: "fill"
			},
			symbolSize: 10
		}
	});
	var jL = 3,
		qL = Md.prototype;
	qL.stopEffectAnimation = function() {
		this.childAt(1).removeAll()
	}, qL.startEffectAnimation = function(t) {
		for(var e = t.symbolType, n = t.color, i = this.childAt(1), a = 0; jL > a; a++) {
			var o = Ih(e, -1, -1, 2, 2, n);
			o.attr({
				style: {
					strokeNoScale: !0
				},
				z2: 99,
				silent: !0,
				scale: [.5, .5]
			});
			var r = -a / jL * t.period + t.effectOffset;
			o.animate("", !0).when(t.period, {
				scale: [t.rippleScale / 2, t.rippleScale / 2]
			}).delay(r).start(), o.animateStyle(!0).when(t.period, {
				opacity: 0
			}).delay(r).start(), i.add(o)
		}
		Sd(i, t)
	}, qL.updateEffectAnimation = function(t) {
		for(var e = this._effectCfg, n = this.childAt(1), i = ["symbolType", "period", "rippleScale"], a = 0; a < i.length; a++) {
			var o = i[a];
			if(e[o] !== t[o]) return this.stopEffectAnimation(), void this.startEffectAnimation(t)
		}
		Sd(n, t)
	}, qL.highlight = function() {
		this.trigger("emphasis")
	}, qL.downplay = function() {
		this.trigger("normal")
	}, qL.updateData = function(t, e) {
		var n = t.hostModel;
		this.childAt(0).updateData(t, e);
		var i = this.childAt(1),
			a = t.getItemModel(e),
			o = t.getItemVisual(e, "symbol"),
			r = bd(t.getItemVisual(e, "symbolSize")),
			s = t.getItemVisual(e, "color");
		i.attr("scale", r), i.traverse(function(t) {
			t.attr({
				fill: s
			})
		});
		var l = a.getShallow("symbolOffset");
		if(l) {
			var u = i.position;
			u[0] = Qo(l[0], r[0]), u[1] = Qo(l[1], r[1])
		}
		i.rotation = (a.getShallow("symbolRotate") || 0) * Math.PI / 180 || 0;
		var h = {};
		if(h.showEffectOn = n.get("showEffectOn"), h.rippleScale = a.get("rippleEffect.scale"), h.brushType = a.get("rippleEffect.brushType"), h.period = 1e3 * a.get("rippleEffect.period"), h.effectOffset = e / t.count(), h.z = a.getShallow("z") || 0, h.zlevel = a.getShallow("zlevel") || 0, h.symbolType = o, h.color = s, this.off("mouseover").off("mouseout").off("emphasis").off("normal"), "render" === h.showEffectOn) this._effectCfg ? this.updateEffectAnimation(h) : this.startEffectAnimation(h), this._effectCfg = h;
		else {
			this._effectCfg = null, this.stopEffectAnimation();
			var c = this.childAt(0),
				d = function() {
					c.highlight(), "render" !== h.showEffectOn && this.startEffectAnimation(h)
				},
				f = function() {
					c.downplay(), "render" !== h.showEffectOn && this.stopEffectAnimation()
				};
			this.on("mouseover", d, this).on("mouseout", f, this).on("emphasis", d, this).on("normal", f, this)
		}
		this._effectCfg = h
	}, qL.fadeOut = function(t) {
		this.off("mouseover").off("mouseout").off("emphasis").off("normal"), t && t()
	}, h(Md, rS), pu({
		type: "effectScatter",
		init: function() {
			this._symbolDraw = new Xc(Md)
		},
		render: function(t) {
			var e = t.getData(),
				n = this._symbolDraw;
			n.updateData(e), this.group.add(n.group)
		},
		updateTransform: function(t) {
			var e = t.getData();
			this.group.dirty();
			var n = LL().reset(t);
			n.progress && n.progress({
				start: 0,
				end: e.count()
			}, e), this._symbolDraw.updateLayout(e)
		},
		_updateGroupTransform: function(t) {
			var e = t.coordinateSystem;
			e && e.getRoamTransform && (this.group.transform = Oe(e.getRoamTransform()), this.group.decomposeTransform())
		},
		remove: function(t, e) {
			this._symbolDraw && this._symbolDraw.remove(e)
		},
		dispose: function() {}
	}), lu(CL("effectScatter", "circle")), su(LL("effectScatter"));
	var KL = {
			_baseAxisDim: null,
			getInitialData: function(t, e) {
				var n, i, a = e.getComponent("xAxis", this.get("xAxisIndex")),
					o = e.getComponent("yAxis", this.get("yAxisIndex")),
					r = a.get("type"),
					s = o.get("type");
				"category" === r ? (t.layout = "horizontal", n = a.getOrdinalMeta(), i = !0) : "category" === s ? (t.layout = "vertical", n = o.getOrdinalMeta(), i = !0) : t.layout = t.layout || "horizontal";
				var l = ["x", "y"],
					u = "horizontal" === t.layout ? 0 : 1,
					h = this._baseAxisDim = l[u],
					c = l[1 - u],
					d = [a, o],
					p = d[u].get("type"),
					g = d[1 - u].get("type"),
					m = t.data;
				if(m && i) {
					var v = [];
					f(m, function(t, e) {
						var n;
						t.value && _(t.value) ? (n = t.value.slice(), t.value.unshift(e)) : _(t) ? (n = t.slice(), t.unshift(e)) : n = t, v.push(n)
					}), t.data = v
				}
				var y = this.defaultValueDimensions;
				return NL(this, {
					coordDimensions: [{
						name: h,
						type: bu(p),
						ordinalMeta: n,
						otherDims: {
							tooltip: !1,
							itemName: 0
						},
						dimsDef: ["base"]
					}, {
						name: c,
						type: bu(g),
						dimsDef: y.slice()
					}],
					dimensionsCount: y.length + 1
				})
			},
			getBaseAxis: function() {
				var t = this._baseAxisDim;
				return this.ecModel.getComponent(t + "Axis", this.get(t + "AxisIndex")).axis
			}
		},
		$L = sA.extend({
			type: "series.candlestick",
			dependencies: ["xAxis", "yAxis", "grid"],
			defaultValueDimensions: [{
				name: "open",
				defaultTooltip: !0
			}, {
				name: "close",
				defaultTooltip: !0
			}, {
				name: "lowest",
				defaultTooltip: !0
			}, {
				name: "highest",
				defaultTooltip: !0
			}],
			dimensions: null,
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "cartesian2d",
				legendHoverLink: !0,
				hoverAnimation: !0,
				layout: null,
				itemStyle: {
					color: "#c23531",
					color0: "#314656",
					borderWidth: 1,
					borderColor: "#c23531",
					borderColor0: "#314656"
				},
				emphasis: {
					itemStyle: {
						borderWidth: 2
					}
				},
				barMaxWidth: null,
				barMinWidth: null,
				barWidth: null,
				large: !0,
				largeThreshold: 600,
				progressive: 3e3,
				progressiveThreshold: 1e4,
				progressiveChunkMode: "mod",
				animationUpdate: !1,
				animationEasing: "linear",
				animationDuration: 300
			},
			getShadowDim: function() {
				return "open"
			},
			brushSelector: function(t, e, n) {
				var i = e.getItemLayout(t);
				return i && n.rect(i.brushRect)
			}
		});
	c($L, KL, !0);
	var JL = ["itemStyle"],
		QL = ["emphasis", "itemStyle"],
		tk = ["color", "color0", "borderColor", "borderColor0"],
		ek = (Xs.extend({
			type: "candlestick",
			render: function(t) {
				this._updateDrawMode(t), this._isLargeDraw ? this._renderLarge(t) : this._renderNormal(t)
			},
			incrementalPrepareRender: function(t) {
				this._clear(), this._updateDrawMode(t)
			},
			incrementalRender: function(t, e) {
				this._isLargeDraw ? this._incrementalRenderLarge(t, e) : this._incrementalRenderNormal(t, e)
			},
			_updateDrawMode: function(t) {
				var e = t.pipelineContext.large;
				(null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear())
			},
			_renderNormal: function(t) {
				var e = t.getData(),
					n = this._data,
					i = this.group,
					a = e.getLayout("isSimpleBox");
				this._data || i.removeAll(), e.diff(n).add(function(n) {
					if(e.hasValue(n)) {
						var o, r = e.getItemLayout(n);
						o = Id(r, n, !0), Ro(o, {
							shape: {
								points: r.ends
							}
						}, t, n), Td(o, e, n, a), i.add(o), e.setItemGraphicEl(n, o)
					}
				}).update(function(o, r) {
					var s = n.getItemGraphicEl(r);
					if(!e.hasValue(o)) return void i.remove(s);
					var l = e.getItemLayout(o);
					s ? zo(s, {
						shape: {
							points: l.ends
						}
					}, t, o) : s = Id(l, o), Td(s, e, o, a), i.add(s), e.setItemGraphicEl(o, s)
				}).remove(function(t) {
					var e = n.getItemGraphicEl(t);
					e && i.remove(e)
				}).execute(), this._data = e
			},
			_renderLarge: function(t) {
				this._clear(), Dd(t, this.group)
			},
			_incrementalRenderNormal: function(t, e) {
				for(var n, i = e.getData(), a = i.getLayout("isSimpleBox"); null != (n = t.next());) {
					var o, r = i.getItemLayout(n);
					o = Id(r, n), Td(o, i, n, a), o.incremental = !0, this.group.add(o)
				}
			},
			_incrementalRenderLarge: function(t, e) {
				Dd(e, this.group, !0)
			},
			remove: function() {
				this._clear()
			},
			_clear: function() {
				this.group.removeAll(), this._data = null
			},
			dispose: G
		}), Ga.extend({
			type: "normalCandlestickBox",
			shape: {},
			buildPath: function(t, e) {
				var n = e.points;
				this.__simpleBox ? (t.moveTo(n[4][0], n[4][1]), t.lineTo(n[6][0], n[6][1])) : (t.moveTo(n[0][0], n[0][1]), t.lineTo(n[1][0], n[1][1]), t.lineTo(n[2][0], n[2][1]), t.lineTo(n[3][0], n[3][1]), t.closePath(), t.moveTo(n[4][0], n[4][1]), t.lineTo(n[5][0], n[5][1]), t.moveTo(n[6][0], n[6][1]), t.lineTo(n[7][0], n[7][1]))
			}
		})),
		nk = Ga.extend({
			type: "largeCandlestickBox",
			shape: {},
			buildPath: function(t, e) {
				for(var n = e.points, i = 0; i < n.length;)
					if(this.__sign === n[i++]) {
						var a = n[i++];
						t.moveTo(a, n[i++]), t.lineTo(a, n[i++])
					} else i += 3
			}
		}),
		ik = function(t) {
			t && _(t.series) && f(t.series, function(t) {
				S(t) && "k" === t.type && (t.type = "candlestick")
			})
		},
		ak = ["itemStyle", "borderColor"],
		ok = ["itemStyle", "borderColor0"],
		rk = ["itemStyle", "color"],
		sk = ["itemStyle", "color0"],
		lk = {
			seriesType: "candlestick",
			plan: hA(),
			performRawSeries: !0,
			reset: function(t, e) {
				function n(t, e) {
					for(var n; null != (n = t.next());) {
						var o = e.getItemModel(n),
							r = e.getItemLayout(n).sign;
						e.setItemVisual(n, {
							color: i(r, o),
							borderColor: a(r, o)
						})
					}
				}

				function i(t, e) {
					return e.get(t > 0 ? rk : sk)
				}

				function a(t, e) {
					return e.get(t > 0 ? ak : ok)
				}
				var o = t.getData(),
					r = t.pipelineContext.large;
				return o.setVisual({
					legendSymbol: "roundRect",
					colorP: i(1, t),
					colorN: i(-1, t),
					borderColorP: a(1, t),
					borderColorN: a(-1, t)
				}), e.isSeriesFiltered(t) ? void 0 : !r && {
					progress: n
				}
			}
		},
		uk = "undefined" != typeof Float32Array ? Float32Array : Array,
		hk = {
			seriesType: "candlestick",
			plan: hA(),
			reset: function(t) {
				function e(t, e) {
					function n(t, e) {
						var n = [];
						return n[r] = e, n[s] = t, isNaN(e) || isNaN(t) ? [0 / 0, 0 / 0] : i.dataToPoint(n)
					}

					function a(t, e, n) {
						var i = e.slice(),
							a = e.slice();
						i[r] = lo(i[r] + o / 2, 1, !1), a[r] = lo(a[r] - o / 2, 1, !0), n ? t.push(i, a) : t.push(a, i)
					}

					function l(t, e, i) {
						var a = n(t, i),
							l = n(e, i);
						return a[r] -= o / 2, l[r] -= o / 2, {
							x: a[0],
							y: a[1],
							width: s ? o : l[0] - a[0],
							height: s ? l[1] - a[1] : o
						}
					}

					function h(t) {
						return t[r] = lo(t[r], 1), t
					}
					for(var g; null != (g = t.next());) {
						var m = e.get(u, g),
							v = e.get(c, g),
							y = e.get(d, g),
							x = e.get(f, g),
							_ = e.get(p, g),
							w = Math.min(v, y),
							b = Math.max(v, y),
							S = n(w, m),
							M = n(b, m),
							I = n(x, m),
							T = n(_, m),
							A = [];
						a(A, M, 0), a(A, S, 1), A.push(h(T), h(M), h(I), h(S)), e.setItemLayout(g, {
							sign: Ld(e, g, v, y, d),
							initBaseline: v > y ? M[s] : S[s],
							ends: A,
							brushRect: l(x, _, m)
						})
					}
				}

				function n(t, e) {
					for(var n, a, o = new uk(5 * t.count), l = 0, h = [], g = []; null != (a = t.next());) {
						var m = e.get(u, a),
							v = e.get(c, a),
							y = e.get(d, a),
							x = e.get(f, a),
							_ = e.get(p, a);
						isNaN(m) || isNaN(x) || isNaN(_) ? (o[l++] = 0 / 0, l += 4) : (o[l++] = Ld(e, a, v, y, d), h[r] = m, h[s] = x, n = i.dataToPoint(h, null, g), o[l++] = n ? n[0] : 0 / 0, o[l++] = n ? n[1] : 0 / 0, h[s] = _, n = i.dataToPoint(h, null, g), o[l++] = n ? n[1] : 0 / 0)
					}
					e.setLayout("largePoints", o)
				}
				var i = t.coordinateSystem,
					a = t.getData(),
					o = kd(t, a),
					r = 0,
					s = 1,
					l = ["x", "y"],
					u = a.mapDimension(l[r]),
					h = a.mapDimension(l[s], !0),
					c = h[0],
					d = h[1],
					f = h[2],
					p = h[3];
				return a.setLayout({
					candleWidth: o,
					isSimpleBox: 1.3 >= o
				}), null == u || h.length < 4 ? void 0 : {
					progress: t.pipelineContext.large ? n : e
				}
			}
		};
	eu(ik), lu(lk), su(hk), h(Pd, NC), Od.prototype.getIndicatorAxes = function() {
		return this._indicatorAxes
	}, Od.prototype.dataToPoint = function(t, e) {
		var n = this._indicatorAxes[e];
		return this.coordToPoint(n.dataToCoord(t), e)
	}, Od.prototype.coordToPoint = function(t, e) {
		var n = this._indicatorAxes[e],
			i = n.angle,
			a = this.cx + t * Math.cos(i),
			o = this.cy - t * Math.sin(i);
		return [a, o]
	}, Od.prototype.pointToData = function(t) {
		var e = t[0] - this.cx,
			n = t[1] - this.cy,
			i = Math.sqrt(e * e + n * n);
		e /= i, n /= i;
		for(var a, o = Math.atan2(-n, e), r = 1 / 0, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
			var u = this._indicatorAxes[l],
				h = Math.abs(o - u.angle);
			r > h && (a = u, s = l, r = h)
		}
		return [s, +(a && a.coodToData(i))]
	}, Od.prototype.resize = function(t, e) {
		var n = t.get("center"),
			i = e.getWidth(),
			a = e.getHeight(),
			o = Math.min(i, a) / 2;
		this.cx = Qo(n[0], i), this.cy = Qo(n[1], a), this.startAngle = t.get("startAngle") * Math.PI / 180;
		var r = t.get("radius");
		("string" == typeof r || "number" == typeof r) && (r = [0, r]), this.r0 = Qo(r[0], o), this.r = Qo(r[1], o), f(this._indicatorAxes, function(t, e) {
			t.setExtent(this.r0, this.r);
			var n = this.startAngle + e * Math.PI * 2 / this._indicatorAxes.length;
			n = Math.atan2(Math.sin(n), Math.cos(n)), t.angle = n
		}, this)
	}, Od.prototype.update = function(t) {
		function e(t) {
			var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
				n = t / e;
			return 2 === n ? n = 5 : n *= 2, n * e
		}
		var n = this._indicatorAxes,
			i = this._model;
		f(n, function(t) {
			t.scale.setExtent(1 / 0, -1 / 0)
		}), t.eachSeriesByType("radar", function(e) {
			if("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get("radarIndex")) === i) {
				var a = e.getData();
				f(n, function(t) {
					t.scale.unionExtentFromData(a, a.mapDimension(t.dim))
				})
			}
		}, this);
		var a = i.get("splitNumber");
		f(n, function(t) {
			var n = fh(t.scale, t.model);
			gh(t.scale, t.model);
			var i = t.model,
				o = t.scale,
				r = i.getMin(),
				s = i.getMax(),
				l = o.getInterval();
			if(null != r && null != s) o.setExtent(+r, +s), o.setInterval((s - r) / a);
			else if(null != r) {
				var u;
				do u = r + l * a, o.setExtent(+r, u), o.setInterval(l), l = e(l); while (u < n[1] && isFinite(u) && isFinite(n[1]))
			} else if(null != s) {
				var h;
				do h = s - l * a, o.setExtent(h, +s), o.setInterval(l), l = e(l); while (h > n[0] && isFinite(h) && isFinite(n[0]))
			} else {
				var c = o.getTicks().length - 1;
				c > a && (l = e(l));
				var d = Math.round((n[0] + n[1]) / 2 / l) * l,
					f = Math.round(a / 2);
				o.setExtent(tr(d - f * l), tr(d + (a - f) * l)), o.setInterval(l)
			}
		})
	}, Od.dimensions = [], Od.create = function(t, e) {
		var n = [];
		return t.eachComponent("radar", function(i) {
			var a = new Od(i, t, e);
			n.push(a), i.coordinateSystem = a
		}), t.eachSeriesByType("radar", function(t) {
			"radar" === t.get("coordinateSystem") && (t.coordinateSystem = n[t.get("radarIndex") || 0])
		}), n
	}, os.register("radar", Od);
	var ck = FC.valueAxis,
		dk = (cu({
			type: "radar",
			optionUpdated: function() {
				var t = this.get("boundaryGap"),
					e = this.get("splitNumber"),
					n = this.get("scale"),
					o = this.get("axisLine"),
					l = this.get("axisTick"),
					u = this.get("axisLabel"),
					h = this.get("name"),
					c = this.get("name.show"),
					d = this.get("name.formatter"),
					f = this.get("nameGap"),
					g = this.get("triggerEvent"),
					m = p(this.get("indicator") || [], function(p) {
						null != p.max && p.max > 0 && !p.min ? p.min = 0 : null != p.min && p.min < 0 && !p.max && (p.max = 0);
						var m = h;
						if(null != p.color && (m = s({
								color: p.color
							}, h)), p = a(i(p), {
								boundaryGap: t,
								splitNumber: e,
								scale: n,
								axisLine: o,
								axisTick: l,
								axisLabel: u,
								name: p.text,
								nameLocation: "end",
								nameGap: f,
								nameTextStyle: m,
								triggerEvent: g
							}, !1), c || (p.name = ""), "string" == typeof d) {
							var v = p.name;
							p.name = d.replace("{value}", null != v ? v : "")
						} else "function" == typeof d && (p.name = d(p.name, p));
						var y = r(new Xo(p, null, this.ecModel), xC);
						return y.mainType = "radar", y.componentIndex = this.componentIndex, y
					}, this);
				this.getIndicatorModels = function() {
					return m
				}
			},
			defaultOption: {
				zlevel: 0,
				z: 0,
				center: ["50%", "50%"],
				radius: "75%",
				startAngle: 90,
				name: {
					show: !0
				},
				boundaryGap: [0, 0],
				splitNumber: 5,
				nameGap: 15,
				scale: !1,
				shape: "polygon",
				axisLine: a({
					lineStyle: {
						color: "#bbb"
					}
				}, ck.axisLine),
				axisLabel: Nd(ck.axisLabel, !1),
				axisTick: Nd(ck.axisTick, !1),
				splitLine: Nd(ck.splitLine, !0),
				splitArea: Nd(ck.splitArea, !0),
				indicator: []
			}
		}), ["axisLine", "axisTickLabel", "axisName"]);
	du({
		type: "radar",
		render: function(t) {
			var e = this.group;
			e.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t)
		},
		_buildAxes: function(t) {
			var e = t.coordinateSystem,
				n = e.getIndicatorAxes(),
				i = p(n, function(t) {
					var n = new nL(t.model, {
						position: [e.cx, e.cy],
						rotation: t.angle,
						labelDirection: -1,
						tickDirection: -1,
						nameDirection: 1
					});
					return n
				});
			f(i, function(t) {
				f(dk, t.add, t), this.group.add(t.getGroup())
			}, this)
		},
		_buildSplitLineAndArea: function(t) {
			function e(t, e, n) {
				var i = n % e.length;
				return t[i] = t[i] || [], i
			}
			var n = t.coordinateSystem,
				i = n.getIndicatorAxes();
			if(i.length) {
				var a = t.get("shape"),
					o = t.getModel("splitLine"),
					r = t.getModel("splitArea"),
					l = o.getModel("lineStyle"),
					u = r.getModel("areaStyle"),
					h = o.get("show"),
					c = r.get("show"),
					d = l.get("color"),
					g = u.get("color");
				d = _(d) ? d : [d], g = _(g) ? g : [g];
				var m = [],
					v = [];
				if("circle" === a)
					for(var y = i[0].getTicksCoords(), x = n.cx, w = n.cy, b = 0; b < y.length; b++) {
						if(h) {
							var S = e(m, d, b);
							m[S].push(new xI({
								shape: {
									cx: x,
									cy: w,
									r: y[b].coord
								}
							}))
						}
						if(c && b < y.length - 1) {
							var S = e(v, g, b);
							v[S].push(new SI({
								shape: {
									cx: x,
									cy: w,
									r0: y[b].coord,
									r: y[b + 1].coord
								}
							}))
						}
					} else
						for(var M, I = p(i, function(t, e) {
								var i = t.getTicksCoords();
								return M = null == M ? i.length - 1 : Math.min(i.length - 1, M), p(i, function(t) {
									return n.coordToPoint(t.coord, e)
								})
							}), T = [], b = 0; M >= b; b++) {
							for(var A = [], D = 0; D < i.length; D++) A.push(I[D][b]);
							if(A[0] && A.push(A[0].slice()), h) {
								var S = e(m, d, b);
								m[S].push(new AI({
									shape: {
										points: A
									}
								}))
							}
							if(c && T) {
								var S = e(v, g, b - 1);
								v[S].push(new TI({
									shape: {
										points: A.concat(T)
									}
								}))
							}
							T = A.slice().reverse()
						}
				var C = l.getLineStyle(),
					L = u.getAreaStyle();
				f(v, function(t, e) {
					this.group.add(YI(t, {
						style: s({
							stroke: "none",
							fill: g[e % g.length]
						}, L),
						silent: !0
					}))
				}, this), f(m, function(t, e) {
					this.group.add(YI(t, {
						style: s({
							fill: "none",
							stroke: d[e % d.length]
						}, C),
						silent: !0
					}))
				}, this)
			}
		}
	});
	var fk = sA.extend({
		type: "series.radar",
		dependencies: ["radar"],
		init: function() {
			fk.superApply(this, "init", arguments), this.legendDataProvider = function() {
				return this.getRawData()
			}
		},
		getInitialData: function() {
			return NL(this, {
				generateCoord: "indicator_",
				generateCoordCount: 1 / 0
			})
		},
		formatTooltip: function(t) {
			var e = this.getData(),
				n = this.coordinateSystem,
				i = n.getIndicatorAxes(),
				a = this.getData().getName(t);
			return vr("" === a ? this.name : a) + "<br/>" + p(i, function(n) {
				var i = e.get(e.mapDimension(n.dim), t);
				return vr(n.name + " : " + i)
			}).join("<br />")
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "radar",
			legendHoverLink: !0,
			radarIndex: 0,
			lineStyle: {
				width: 2,
				type: "solid"
			},
			label: {
				position: "top"
			},
			symbol: "emptyCircle",
			symbolSize: 4
		}
	});
	pu({
		type: "radar",
		render: function(t) {
			function e(t, e) {
				var n = t.getItemVisual(e, "symbol") || "circle",
					i = t.getItemVisual(e, "color");
				if("none" !== n) {
					var a = Ed(t.getItemVisual(e, "symbolSize")),
						o = Ih(n, -1, -1, 2, 2, i);
					return o.attr({
						style: {
							strokeNoScale: !0
						},
						z2: 100,
						scale: [a[0] / 2, a[1] / 2]
					}), o
				}
			}

			function n(n, i, a, o, r, s) {
				a.removeAll();
				for(var l = 0; l < i.length - 1; l++) {
					var u = e(o, r);
					u && (u.__dimIdx = l, n[l] ? (u.attr("position", n[l]), qI[s ? "initProps" : "updateProps"](u, {
						position: i[l]
					}, t, r)) : u.attr("position", i[l]), a.add(u))
				}
			}

			function a(t) {
				return p(t, function() {
					return [o.cx, o.cy]
				})
			}
			var o = t.coordinateSystem,
				r = this.group,
				l = t.getData(),
				u = this._data;
			l.diff(u).add(function(e) {
				var i = l.getItemLayout(e);
				if(i) {
					var o = new TI,
						r = new AI,
						s = {
							shape: {
								points: i
							}
						};
					o.shape.points = a(i), r.shape.points = a(i), Ro(o, s, t, e), Ro(r, s, t, e);
					var u = new rS,
						h = new rS;
					u.add(r), u.add(o), u.add(h), n(r.shape.points, i, h, l, e, !0), l.setItemGraphicEl(e, u)
				}
			}).update(function(e, i) {
				var a = u.getItemGraphicEl(i),
					o = a.childAt(0),
					r = a.childAt(1),
					s = a.childAt(2),
					h = {
						shape: {
							points: l.getItemLayout(e)
						}
					};
				h.shape.points && (n(o.shape.points, h.shape.points, s, l, e, !1), zo(o, h, t), zo(r, h, t), l.setItemGraphicEl(e, a))
			}).remove(function(t) {
				r.remove(u.getItemGraphicEl(t))
			}).execute(), l.eachItemGraphicEl(function(t, e) {
				function n() {
					h.attr("ignore", m)
				}

				function a() {
					h.attr("ignore", g)
				}
				var o = l.getItemModel(e),
					u = t.childAt(0),
					h = t.childAt(1),
					c = t.childAt(2),
					d = l.getItemVisual(e, "color");
				r.add(t), u.useStyle(s(o.getModel("lineStyle").getLineStyle(), {
					fill: "none",
					stroke: d
				})), u.hoverStyle = o.getModel("emphasis.lineStyle").getLineStyle();
				var f = o.getModel("areaStyle"),
					p = o.getModel("emphasis.areaStyle"),
					g = f.isEmpty() && f.parentModel.isEmpty(),
					m = p.isEmpty() && p.parentModel.isEmpty();
				m = m && g, h.ignore = g, h.useStyle(s(f.getAreaStyle(), {
					fill: d,
					opacity: .7
				})), h.hoverStyle = p.getAreaStyle();
				var v = o.getModel("itemStyle").getItemStyle(["color"]),
					y = o.getModel("emphasis.itemStyle").getItemStyle(),
					x = o.getModel("label"),
					_ = o.getModel("emphasis.label");
				c.eachChild(function(t) {
					t.setStyle(v), t.hoverStyle = i(y), Io(t.style, t.hoverStyle, x, _, {
						labelFetcher: l.hostModel,
						labelDataIndex: e,
						labelDimIndex: t.__dimIdx,
						defaultText: l.get(l.dimensions[t.__dimIdx], e),
						autoColor: d,
						isRectText: !0
					})
				}), t.off("mouseover").off("mouseout").off("normal").off("emphasis"), t.on("emphasis", n).on("mouseover", n).on("normal", a).on("mouseout", a), So(t)
			}), this._data = l
		},
		remove: function() {
			this.group.removeAll(), this._data = null
		},
		dispose: function() {}
	});
	var pk = function(t) {
			t.eachSeriesByType("radar", function(t) {
				function e(t, e) {
					i[e] = i[e] || [], i[e][r] = a.dataToPoint(t, r)
				}
				var n = t.getData(),
					i = [],
					a = t.coordinateSystem;
				if(a) {
					for(var o = a.getIndicatorAxes(), r = 0; r < o.length; r++) n.each(n.mapDimension(o[r].dim), e);
					n.each(function(t) {
						i[t][0] && i[t].push(i[t][0].slice()), n.setItemLayout(t, i[t])
					})
				}
			})
		},
		gk = function(t) {
			var e = t.polar;
			if(e) {
				_(e) || (e = [e]);
				var n = [];
				f(e, function(e) {
					e.indicator ? (e.type && !e.shape && (e.shape = e.type), t.radar = t.radar || [], _(t.radar) || (t.radar = [t.radar]), t.radar.push(e)) : n.push(e)
				}), t.polar = n
			}
			f(t.series, function(t) {
				t && "radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex)
			})
		};
	lu(VL("radar")), lu(CL("radar", "circle")), su(pk), nu(ZL("radar")), eu(gk), sA.extend({
		type: "series.heatmap",
		getInitialData: function() {
			return Hu(this.getSource(), this, {
				generateCoord: "value"
			})
		},
		preventIncremental: function() {
			var t = os.get(this.get("coordinateSystem"));
			return t && t.dimensions ? "lng" === t.dimensions[0] && "lat" === t.dimensions[1] : void 0
		},
		defaultOption: {
			coordinateSystem: "cartesian2d",
			zlevel: 0,
			z: 2,
			geoIndex: 0,
			blurSize: 30,
			pointSize: 20,
			maxOpacity: 1,
			minOpacity: 0
		}
	});
	var mk = 256;
	zd.prototype = {
		update: function(t, e, n, i, a, o) {
			var r = this._getBrush(),
				s = this._getGradient(t, a, "inRange"),
				l = this._getGradient(t, a, "outOfRange"),
				u = this.pointSize + this.blurSize,
				h = this.canvas,
				c = h.getContext("2d"),
				d = t.length;
			h.width = e, h.height = n;
			for(var f = 0; d > f; ++f) {
				var p = t[f],
					g = p[0],
					m = p[1],
					v = p[2],
					y = i(v);
				c.globalAlpha = y, c.drawImage(r, g - u, m - u)
			}
			if(!h.width || !h.height) return h;
			for(var x = c.getImageData(0, 0, h.width, h.height), _ = x.data, w = 0, b = _.length, S = this.minOpacity, M = this.maxOpacity, I = M - S; b > w;) {
				var y = _[w + 3] / 256,
					T = 4 * Math.floor(y * (mk - 1));
				if(y > 0) {
					var A = o(y) ? s : l;
					y > 0 && (y = y * I + S), _[w++] = A[T], _[w++] = A[T + 1], _[w++] = A[T + 2], _[w++] = A[T + 3] * y * 256
				} else w += 4
			}
			return c.putImageData(x, 0, 0), h
		},
		_getBrush: function() {
			var t = this._brushCanvas || (this._brushCanvas = sb()),
				e = this.pointSize + this.blurSize,
				n = 2 * e;
			t.width = n, t.height = n;
			var i = t.getContext("2d");
			return i.clearRect(0, 0, n, n), i.shadowOffsetX = n, i.shadowBlur = this.blurSize, i.shadowColor = "#000", i.beginPath(), i.arc(-e, e, this.pointSize, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), t
		},
		_getGradient: function(t, e, n) {
			for(var i = this._gradientPixels, a = i[n] || (i[n] = new Uint8ClampedArray(1024)), o = [0, 0, 0, 0], r = 0, s = 0; 256 > s; s++) e[n](s / 255, !0, o), a[r++] = o[0], a[r++] = o[1], a[r++] = o[2], a[r++] = o[3];
			return a
		}
	}, pu({
		type: "heatmap",
		render: function(t, e, n) {
			var i;
			e.eachComponent("visualMap", function(e) {
				e.eachTargetSeries(function(n) {
					n === t && (i = e)
				})
			}), this.group.removeAll(), this._incrementalDisplayable = null;
			var a = t.coordinateSystem;
			"cartesian2d" === a.type || "calendar" === a.type ? this._renderOnCartesianAndCalendar(t, n, 0, t.getData().count()) : Vd(a) && this._renderOnGeo(a, t, i, n)
		},
		incrementalPrepareRender: function() {
			this.group.removeAll()
		},
		incrementalRender: function(t, e, n, i) {
			var a = e.coordinateSystem;
			a && this._renderOnCartesianAndCalendar(e, i, t.start, t.end, !0)
		},
		_renderOnCartesianAndCalendar: function(t, e, n, i, a) {
			var o, s, l = t.coordinateSystem;
			if("cartesian2d" === l.type) {
				var u = l.getAxis("x"),
					h = l.getAxis("y");
				o = u.getBandWidth(), s = h.getBandWidth()
			}
			for(var c = this.group, d = t.getData(), f = "itemStyle", p = "emphasis.itemStyle", g = "label", m = "emphasis.label", v = t.getModel(f).getItemStyle(["color"]), y = t.getModel(p).getItemStyle(), x = t.getModel(g), _ = t.getModel(m), w = l.type, b = "cartesian2d" === w ? [d.mapDimension("x"), d.mapDimension("y"), d.mapDimension("value")] : [d.mapDimension("time"), d.mapDimension("value")], S = n; i > S; S++) {
				var M;
				if("cartesian2d" === w) {
					if(isNaN(d.get(b[2], S))) continue;
					var I = l.dataToPoint([d.get(b[0], S), d.get(b[1], S)]);
					M = new LI({
						shape: {
							x: I[0] - o / 2,
							y: I[1] - s / 2,
							width: o,
							height: s
						},
						style: {
							fill: d.getItemVisual(S, "color"),
							opacity: d.getItemVisual(S, "opacity")
						}
					})
				} else {
					if(isNaN(d.get(b[1], S))) continue;
					M = new LI({
						z2: 1,
						shape: l.dataToRect([d.get(b[0], S)]).contentShape,
						style: {
							fill: d.getItemVisual(S, "color"),
							opacity: d.getItemVisual(S, "opacity")
						}
					})
				}
				var T = d.getItemModel(S);
				d.hasItemOption && (v = T.getModel(f).getItemStyle(["color"]), y = T.getModel(p).getItemStyle(), x = T.getModel(g), _ = T.getModel(m));
				var A = t.getRawValue(S),
					D = "-";
				A && null != A[2] && (D = A[2]), Io(v, y, x, _, {
					labelFetcher: t,
					labelDataIndex: S,
					defaultText: D,
					isRectText: !0
				}), M.setStyle(v), So(M, d.hasItemOption ? y : r({}, y)), M.incremental = a, a && (M.useHoverLayer = !0), c.add(M), d.setItemGraphicEl(S, M)
			}
		},
		_renderOnGeo: function(t, e, n, i) {
			var a = n.targetVisuals.inRange,
				o = n.targetVisuals.outOfRange,
				r = e.getData(),
				s = this._hmLayer || this._hmLayer || new zd;
			s.blurSize = e.get("blurSize"), s.pointSize = e.get("pointSize"), s.minOpacity = e.get("minOpacity"), s.maxOpacity = e.get("maxOpacity");
			var l = t.getViewRect().clone(),
				u = t.getRoamTransform();
			l.applyTransform(u);
			var h = Math.max(l.x, 0),
				c = Math.max(l.y, 0),
				d = Math.min(l.width + l.x, i.getWidth()),
				f = Math.min(l.height + l.y, i.getHeight()),
				p = d - h,
				g = f - c,
				m = [r.mapDimension("lng"), r.mapDimension("lat"), r.mapDimension("value")],
				v = r.mapArray(m, function(e, n, i) {
					var a = t.dataToPoint([e, n]);
					return a[0] -= h, a[1] -= c, a.push(i), a
				}),
				y = n.getExtent(),
				x = "visualMap.continuous" === n.type ? Bd(y, n.option.range) : Rd(y, n.getPieceList(), n.option.selected);
			s.update(v, p, g, a.color.getNormalizer(), {
				inRange: a.color.getColorMapper(),
				outOfRange: o.color.getColorMapper()
			}, x);
			var _ = new _i({
				style: {
					width: p,
					height: g,
					x: h,
					y: c,
					image: s.canvas
				},
				silent: !0
			});
			this.group.add(_)
		},
		dispose: function() {}
	});
	var vk = f,
		yk = "\x00__link_datas",
		xk = "\x00__link_mainData",
		_k = function(t, e) {
			this.name = t || "", this.depth = 0, this.height = 0, this.parentNode = null, this.dataIndex = -1, this.children = [], this.viewChildren = [], this.hostTree = e
		};
	_k.prototype = {
		constructor: _k,
		isRemoved: function() {
			return this.dataIndex < 0
		},
		eachNode: function(t, e, n) {
			"function" == typeof t && (n = e, e = t, t = null), t = t || {}, b(t) && (t = {
				order: t
			});
			var i, a = t.order || "preorder",
				o = this[t.attr || "children"];
			"preorder" === a && (i = e.call(n, this));
			for(var r = 0; !i && r < o.length; r++) o[r].eachNode(t, e, n);
			"postorder" === a && e.call(n, this)
		},
		updateDepthAndHeight: function(t) {
			var e = 0;
			this.depth = t;
			for(var n = 0; n < this.children.length; n++) {
				var i = this.children[n];
				i.updateDepthAndHeight(t + 1), i.height > e && (e = i.height)
			}
			this.height = e + 1
		},
		getNodeById: function(t) {
			if(this.getId() === t) return this;
			for(var e = 0, n = this.children, i = n.length; i > e; e++) {
				var a = n[e].getNodeById(t);
				if(a) return a
			}
		},
		contains: function(t) {
			if(t === this) return !0;
			for(var e = 0, n = this.children, i = n.length; i > e; e++) {
				var a = n[e].contains(t);
				if(a) return a
			}
		},
		getAncestors: function(t) {
			for(var e = [], n = t ? this : this.parentNode; n;) e.push(n), n = n.parentNode;
			return e.reverse(), e
		},
		getValue: function(t) {
			var e = this.hostTree.data;
			return e.get(e.getDimension(t || "value"), this.dataIndex)
		},
		setLayout: function(t, e) {
			this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e)
		},
		getLayout: function() {
			return this.hostTree.data.getItemLayout(this.dataIndex)
		},
		getModel: function(t) {
			if(!(this.dataIndex < 0)) {
				var e, n = this.hostTree,
					i = n.data.getItemModel(this.dataIndex),
					a = this.getLevelModel();
				return a || 0 !== this.children.length && (0 === this.children.length || this.isExpand !== !1) || (e = this.getLeavesModel()), i.getModel(t, (a || e || n.hostModel).getModel(t))
			}
		},
		getLevelModel: function() {
			return(this.hostTree.levelModels || [])[this.depth]
		},
		getLeavesModel: function() {
			return this.hostTree.leavesModel
		},
		setVisual: function(t, e) {
			this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e)
		},
		getVisual: function(t, e) {
			return this.hostTree.data.getItemVisual(this.dataIndex, t, e)
		},
		getRawIndex: function() {
			return this.hostTree.data.getRawIndex(this.dataIndex)
		},
		getId: function() {
			return this.hostTree.data.getId(this.dataIndex)
		},
		isAncestorOf: function(t) {
			for(var e = t.parentNode; e;) {
				if(e === this) return !0;
				e = e.parentNode
			}
			return !1
		},
		isDescendantOf: function(t) {
			return t !== this && t.isAncestorOf(this)
		}
	}, jd.prototype = {
		constructor: jd,
		type: "tree",
		eachNode: function(t, e, n) {
			this.root.eachNode(t, e, n)
		},
		getNodeByDataIndex: function(t) {
			var e = this.data.getRawIndex(t);
			return this._nodes[e]
		},
		getNodeByName: function(t) {
			return this.root.getNodeByName(t)
		},
		update: function() {
			for(var t = this.data, e = this._nodes, n = 0, i = e.length; i > n; n++) e[n].dataIndex = -1;
			for(var n = 0, i = t.count(); i > n; n++) e[t.getRawIndex(n)].dataIndex = n
		},
		clearLayouts: function() {
			this.data.clearItemLayouts()
		}
	}, jd.createTree = function(t, e, n) {
		function i(t, e) {
			var n = t.value;
			r = Math.max(r, _(n) ? n.length : 1), o.push(t);
			var s = new _k(t.name, a);
			e ? qd(s, e) : a.root = s, a._nodes.push(s);
			var l = t.children;
			if(l)
				for(var u = 0; u < l.length; u++) i(l[u], s)
		}
		var a = new jd(e, n.levels, n.leaves),
			o = [],
			r = 1;
		i(t), a.root.updateDepthAndHeight(0);
		var s = HD(o, {
				coordDimensions: ["value"],
				dimensionsCount: r
			}),
			l = new GD(s, e);
		return l.initData(o), Gd({
			mainData: l,
			struct: a,
			structAttr: "tree"
		}), a.update(), a
	}, sA.extend({
		type: "series.tree",
		layoutInfo: null,
		layoutMode: "box",
		getInitialData: function(t) {
			var e = {
					name: t.name,
					children: t.data
				},
				n = t.leaves || {},
				i = {};
			i.leaves = n;
			var a = jd.createTree(e, this, i),
				o = 0;
			a.eachNode("preorder", function(t) {
				t.depth > o && (o = t.depth)
			});
			var r = t.expandAndCollapse,
				s = r && t.initialTreeDepth >= 0 ? t.initialTreeDepth : o;
			return a.root.eachNode("preorder", function(t) {
				var e = t.hostTree.data.getRawDataItem(t.dataIndex);
				t.isExpand = e && null != e.collapsed ? !e.collapsed : t.depth <= s
			}), a.data
		},
		getOrient: function() {
			var t = this.get("orient");
			return "horizontal" === t ? t = "LR" : "vertical" === t && (t = "TB"), t
		},
		setZoom: function(t) {
			this.option.zoom = t
		},
		setCenter: function(t) {
			this.option.center = t
		},
		formatTooltip: function(t) {
			for(var e = this.getData().tree, n = e.root.children[0], i = e.getNodeByDataIndex(t), a = i.getValue(), o = i.name; i && i !== n;) o = i.parentNode.name + "." + o, i = i.parentNode;
			return vr(o + (isNaN(a) || null == a ? "" : " : " + a))
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "view",
			left: "12%",
			top: "12%",
			right: "12%",
			bottom: "12%",
			layout: "orthogonal",
			roam: !1,
			nodeScaleRatio: .4,
			center: null,
			zoom: 1,
			orient: "LR",
			symbol: "emptyCircle",
			symbolSize: 7,
			expandAndCollapse: !0,
			initialTreeDepth: 2,
			lineStyle: {
				color: "#ccc",
				width: 1.5,
				curveness: .5
			},
			itemStyle: {
				color: "lightsteelblue",
				borderColor: "#c23531",
				borderWidth: 1.5
			},
			label: {
				show: !0,
				color: "#555"
			},
			leaves: {
				label: {
					show: !0
				}
			},
			animationEasing: "linear",
			animationDuration: 700,
			animationDurationUpdate: 1e3
		}
	});
	var wk = oe;
	c(hf, kb), cf.prototype = {
		constructor: cf,
		type: "view",
		dimensions: ["x", "y"],
		setBoundingRect: function(t, e, n, i) {
			return this._rect = new xn(t, e, n, i), this._rect
		},
		getBoundingRect: function() {
			return this._rect
		},
		setViewRect: function(t, e, n, i) {
			this.transformTo(t, e, n, i), this._viewRect = new xn(t, e, n, i)
		},
		transformTo: function(t, e, n, i) {
			var a = this.getBoundingRect(),
				o = this._rawTransformable;
			o.transform = a.calculateTransform(new xn(t, e, n, i)), o.decomposeTransform(), this._updateTransform()
		},
		setCenter: function(t) {
			t && (this._center = t, this._updateCenterAndZoom())
		},
		setZoom: function(t) {
			t = t || 1;
			var e = this.zoomLimit;
			e && (null != e.max && (t = Math.min(e.max, t)), null != e.min && (t = Math.max(e.min, t))), this._zoom = t, this._updateCenterAndZoom()
		},
		getDefaultCenter: function() {
			var t = this.getBoundingRect(),
				e = t.x + t.width / 2,
				n = t.y + t.height / 2;
			return [e, n]
		},
		getCenter: function() {
			return this._center || this.getDefaultCenter()
		},
		getZoom: function() {
			return this._zoom || 1
		},
		getRoamTransform: function() {
			return this._roamTransformable.getLocalTransform()
		},
		_updateCenterAndZoom: function() {
			var t = this._rawTransformable.getLocalTransform(),
				e = this._roamTransformable,
				n = this.getDefaultCenter(),
				i = this.getCenter(),
				a = this.getZoom();
			i = oe([], i, t), n = oe([], n, t), e.origin = i, e.position = [n[0] - i[0], n[1] - i[1]], e.scale = [a, a], this._updateTransform()
		},
		_updateTransform: function() {
			var t = this._roamTransformable,
				e = this._rawTransformable;
			e.parent = t, t.updateTransform(), e.updateTransform(), Ae(this.transform || (this.transform = []), e.transform || Ie()), this._rawTransform = e.getLocalTransform(), this.invTransform = this.invTransform || [], Pe(this.invTransform, this.transform), this.decomposeTransform()
		},
		getViewRect: function() {
			return this._viewRect
		},
		getViewRectAfterRoam: function() {
			var t = this.getBoundingRect().clone();
			return t.applyTransform(this.transform), t
		},
		dataToPoint: function(t, e, n) {
			var i = e ? this._rawTransform : this.transform;
			return n = n || [], i ? wk(n, t, i) : W(n, t)
		},
		pointToData: function(t) {
			var e = this.invTransform;
			return e ? wk([], t, e) : [t[0], t[1]]
		},
		convertToPixel: x(df, "dataToPoint"),
		convertFromPixel: x(df, "pointToData"),
		containPoint: function(t) {
			return this.getViewRectAfterRoam().contain(t[0], t[1])
		}
	}, c(cf, kb);
	var bk = "\x00_ec_interaction_mutex";
	au({
		type: "takeGlobalCursor",
		event: "globalCursorTaken",
		update: "update"
	}, function() {}), c(xf, yb);
	var Sk = {
		axisPointer: 1,
		tooltip: 1,
		brush: 1
	};
	pu({
		type: "tree",
		init: function(t, e) {
			this._oldTree, this._mainGroup = new rS, this._controller = new xf(e.getZr()), this._controllerHost = {
				target: this.group
			}, this.group.add(this._mainGroup)
		},
		render: function(t, e, n) {
			var i = t.getData(),
				a = t.layoutInfo,
				o = this._mainGroup,
				r = t.get("layout");
			"radial" === r ? o.attr("position", [a.x + a.width / 2, a.y + a.height / 2]) : o.attr("position", [a.x, a.y]), this._updateViewCoordSys(t), this._updateController(t, e, n);
			var s = this._data,
				l = {
					expandAndCollapse: t.get("expandAndCollapse"),
					layout: r,
					orient: t.getOrient(),
					curvature: t.get("lineStyle.curveness"),
					symbolRotate: t.get("symbolRotate"),
					symbolOffset: t.get("symbolOffset"),
					hoverAnimation: t.get("hoverAnimation"),
					useNameLabel: !0,
					fadeIn: !0
				};
			i.diff(s).add(function(e) {
				Cf(i, e) && kf(i, e, null, o, t, l)
			}).update(function(e, n) {
				var a = s.getItemGraphicEl(n);
				return Cf(i, e) ? void kf(i, e, a, o, t, l) : void(a && Pf(s, n, a, o, t, l))
			}).remove(function(e) {
				var n = s.getItemGraphicEl(e);
				n && Pf(s, e, n, o, t, l)
			}).execute(), this._nodeScaleRatio = t.get("nodeScaleRatio"), this._updateNodeAndLinkScale(t), l.expandAndCollapse === !0 && i.eachItemGraphicEl(function(e, i) {
				e.off("click").on("click", function() {
					n.dispatchAction({
						type: "treeExpandAndCollapse",
						seriesId: t.id,
						dataIndex: i
					})
				})
			}), this._data = i
		},
		_updateViewCoordSys: function(t) {
			var e = t.getData(),
				n = [];
			e.each(function(t) {
				var i = e.getItemLayout(t);
				!i || isNaN(i.x) || isNaN(i.y) || n.push([+i.x, +i.y])
			});
			var i = [],
				a = [];
			wa(n, i, a), a[0] - i[0] === 0 && (a[0] += 1, i[0] -= 1), a[1] - i[1] === 0 && (a[1] += 1, i[1] -= 1);
			var o = t.coordinateSystem = new cf;
			o.zoomLimit = t.get("scaleLimit"), o.setBoundingRect(i[0], i[1], a[0] - i[0], a[1] - i[1]), o.setCenter(t.get("center")), o.setZoom(t.get("zoom")), this.group.attr({
				position: o.position,
				scale: o.scale
			}), this._viewCoordSys = o
		},
		_updateController: function(t, e, n) {
			var i = this._controller,
				a = this._controllerHost,
				o = this.group;
			i.setPointerChecker(function(e, i, a) {
				var r = o.getBoundingRect();
				return r.applyTransform(o.transform), r.contain(i, a) && !Df(e, n, t)
			}), i.enable(t.get("roam")), a.zoomLimit = t.get("scaleLimit"), a.zoom = t.coordinateSystem.getZoom(), i.off("pan").off("zoom").on("pan", function(e) {
				ff(a, e.dx, e.dy), n.dispatchAction({
					seriesId: t.id,
					type: "treeRoam",
					dx: e.dx,
					dy: e.dy
				})
			}, this).on("zoom", function(e) {
				pf(a, e.scale, e.originX, e.originY), n.dispatchAction({
					seriesId: t.id,
					type: "treeRoam",
					zoom: e.scale,
					originX: e.originX,
					originY: e.originY
				}), this._updateNodeAndLinkScale(t)
			}, this)
		},
		_updateNodeAndLinkScale: function(t) {
			var e = t.getData(),
				n = this._getNodeGlobalScale(t),
				i = [n, n];
			e.eachItemGraphicEl(function(t) {
				t.attr("scale", i)
			})
		},
		_getNodeGlobalScale: function(t) {
			var e = t.coordinateSystem;
			if("view" !== e.type) return 1;
			var n = this._nodeScaleRatio,
				i = e.scale,
				a = i && i[0] || 1,
				o = e.getZoom(),
				r = (o - 1) * n + 1;
			return r / a
		},
		dispose: function() {
			this._controller && this._controller.dispose(), this._controllerHost = {}
		},
		remove: function() {
			this._mainGroup.removeAll(), this._data = null
		}
	}), au({
		type: "treeExpandAndCollapse",
		event: "treeExpandAndCollapse",
		update: "update"
	}, function(t, e) {
		e.eachComponent({
			mainType: "series",
			subType: "tree",
			query: t
		}, function(e) {
			var n = t.dataIndex,
				i = e.getData().tree,
				a = i.getNodeByDataIndex(n);
			a.isExpand = !a.isExpand
		})
	}), au({
		type: "treeRoam",
		event: "treeRoam",
		update: "none"
	}, function(t, e) {
		e.eachComponent({
			mainType: "series",
			subType: "tree",
			query: t
		}, function(e) {
			var n = e.coordinateSystem,
				i = Nf(n, t);
			e.setCenter && e.setCenter(i.center), e.setZoom && e.setZoom(i.zoom)
		})
	});
	var Mk = function(t, e) {
		t.eachSeriesByType("tree", function(t) {
			Rf(t, e)
		})
	};
	lu(CL("tree", "circle")), su(Mk), sA.extend({
		type: "series.treemap",
		layoutMode: "box",
		dependencies: ["grid", "polar"],
		_viewRoot: null,
		defaultOption: {
			progressive: 0,
			hoverLayerThreshold: 1 / 0,
			left: "center",
			top: "middle",
			right: null,
			bottom: null,
			width: "80%",
			height: "80%",
			sort: !0,
			clipWindow: "origin",
			squareRatio: .5 * (1 + Math.sqrt(5)),
			leafDepth: null,
			drillDownIcon: "▶",
			zoomToNodeRatio: .1024,
			roam: !0,
			nodeClick: "zoomToNode",
			animation: !0,
			animationDurationUpdate: 900,
			animationEasing: "quinticInOut",
			breadcrumb: {
				show: !0,
				height: 22,
				left: "center",
				top: "bottom",
				emptyItemWidth: 25,
				itemStyle: {
					color: "rgba(0,0,0,0.7)",
					borderColor: "rgba(255,255,255,0.7)",
					borderWidth: 1,
					shadowColor: "rgba(150,150,150,1)",
					shadowBlur: 3,
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					textStyle: {
						color: "#fff"
					}
				},
				emphasis: {
					textStyle: {}
				}
			},
			label: {
				show: !0,
				distance: 0,
				padding: 5,
				position: "inside",
				color: "#fff",
				ellipsis: !0
			},
			upperLabel: {
				show: !1,
				position: [0, "50%"],
				height: 20,
				color: "#fff",
				ellipsis: !0,
				verticalAlign: "middle"
			},
			itemStyle: {
				color: null,
				colorAlpha: null,
				colorSaturation: null,
				borderWidth: 0,
				gapWidth: 0,
				borderColor: "#fff",
				borderColorSaturation: null
			},
			emphasis: {
				upperLabel: {
					show: !0,
					position: [0, "50%"],
					color: "#fff",
					ellipsis: !0,
					verticalAlign: "middle"
				}
			},
			visualDimension: 0,
			visualMin: null,
			visualMax: null,
			color: [],
			colorAlpha: null,
			colorSaturation: null,
			colorMappingBy: "index",
			visibleMin: 10,
			childrenVisibleMin: null,
			levels: []
		},
		getInitialData: function(t, e) {
			var n = {
				name: t.name,
				children: t.data
			};
			Wf(n);
			var i = t.levels || [];
			i = t.levels = Hf(i, e);
			var a = {};
			return a.levels = i, jd.createTree(n, this, a).data
		},
		optionUpdated: function() {
			this.resetViewRoot()
		},
		formatTooltip: function(t) {
			var e = this.getData(),
				n = this.getRawValue(t),
				i = gr(_(n) ? n[0] : n),
				a = e.getName(t);
			return vr(a + ": " + i)
		},
		getDataParams: function(t) {
			var e = sA.prototype.getDataParams.apply(this, arguments),
				n = this.getData().tree.getNodeByDataIndex(t);
			return e.treePathInfo = Ff(n, this), e
		},
		setLayoutInfo: function(t) {
			this.layoutInfo = this.layoutInfo || {}, r(this.layoutInfo, t)
		},
		mapIdToIndex: function(t) {
			var e = this._idIndexMap;
			e || (e = this._idIndexMap = B(), this._idIndexMapCount = 0);
			var n = e.get(t);
			return null == n && e.set(t, n = this._idIndexMapCount++), n
		},
		getViewRoot: function() {
			return this._viewRoot
		},
		resetViewRoot: function(t) {
			t ? this._viewRoot = t : t = this._viewRoot;
			var e = this.getRawData().tree.root;
			(!t || t !== e && !e.contains(t)) && (this._viewRoot = e)
		}
	});
	var Ik = 8,
		Tk = 8,
		Ak = 5;
	Zf.prototype = {
		constructor: Zf,
		render: function(t, e, n, i) {
			var a = t.getModel("breadcrumb"),
				o = this.group;
			if(o.removeAll(), a.get("show") && n) {
				var r = a.getModel("itemStyle"),
					s = r.getModel("textStyle"),
					l = {
						pos: {
							left: a.get("left"),
							right: a.get("right"),
							top: a.get("top"),
							bottom: a.get("bottom")
						},
						box: {
							width: e.getWidth(),
							height: e.getHeight()
						},
						emptyItemWidth: a.get("emptyItemWidth"),
						totalWidth: 0,
						renderList: []
					};
				this._prepare(n, l, s), this._renderContent(t, l, r, s, i), Cr(o, l.pos, l.box)
			}
		},
		_prepare: function(t, e, n) {
			for(var i = t; i; i = i.parentNode) {
				var a = i.getModel().get("name"),
					o = n.getTextRect(a),
					r = Math.max(o.width + 2 * Ik, e.emptyItemWidth);
				e.totalWidth += r + Tk, e.renderList.push({
					node: i,
					text: a,
					width: r
				})
			}
		},
		_renderContent: function(t, e, n, i, a) {
			for(var o = 0, r = e.emptyItemWidth, l = t.get("breadcrumb.height"), u = Ar(e.pos, e.box), h = e.totalWidth, c = e.renderList, d = c.length - 1; d >= 0; d--) {
				var f = c[d],
					p = f.node,
					g = f.width,
					m = f.text;
				h > u.width && (h -= g - r, g = r, m = null);
				var v = new TI({
					shape: {
						points: Xf(o, 0, g, l, d === c.length - 1, 0 === d)
					},
					style: s(n.getItemStyle(), {
						lineJoin: "bevel",
						text: m,
						textFill: i.getTextColor(),
						textFont: i.getFont()
					}),
					z: 10,
					onclick: x(a, p)
				});
				this.group.add(v), Yf(v, t, p), o += g + Tk
			}
		},
		remove: function() {
			this.group.removeAll()
		}
	};
	var Dk = y,
		Ck = rS,
		Lk = LI,
		kk = f,
		Pk = 3,
		Ok = ["label"],
		Nk = ["emphasis", "label"],
		Ek = ["upperLabel"],
		zk = ["emphasis", "upperLabel"],
		Rk = 10,
		Bk = 1,
		Vk = 2,
		Gk = cM([
			["fill", "color"],
			["stroke", "strokeColor"],
			["lineWidth", "strokeWidth"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"]
		]),
		Fk = function(t) {
			var e = Gk(t);
			return e.stroke = e.fill = e.lineWidth = null, e
		};
	pu({
		type: "treemap",
		init: function() {
			this._containerGroup, this._storage = jf(), this._oldTree, this._breadcrumb, this._controller, this._state = "ready"
		},
		render: function(t, e, n, i) {
			var a = e.findComponents({
				mainType: "series",
				subType: "treemap",
				query: i
			});
			if(!(u(a, t) < 0)) {
				this.seriesModel = t, this.api = n, this.ecModel = e;
				var o = ["treemapZoomToNode", "treemapRootToNode"],
					r = Bf(i, o, t),
					s = i && i.type,
					l = t.layoutInfo,
					h = !this._oldTree,
					c = this._storage,
					d = "treemapRootToNode" === s && r && c ? {
						rootNodeGroup: c.nodeGroup[r.node.getRawIndex()],
						direction: i.direction
					} : null,
					f = this._giveContainerGroup(l),
					p = this._doRender(f, t, d);
				h || s && "treemapZoomToNode" !== s && "treemapRootToNode" !== s ? p.renderFinally() : this._doAnimation(f, p, t, d), this._resetController(n), this._renderBreadcrumb(t, n, r)
			}
		},
		_giveContainerGroup: function(t) {
			var e = this._containerGroup;
			return e || (e = this._containerGroup = new Ck, this._initEvents(e), this.group.add(e)), e.attr("position", [t.x, t.y]), e
		},
		_doRender: function(t, e, n) {
			function i(t, e, n, a, o) {
				function r(t) {
					return t.getId()
				}

				function s(r, s) {
					var l = null != r ? t[r] : null,
						u = null != s ? e[s] : null,
						h = d(l, u, n, o);
					h && i(l && l.viewChildren || [], u && u.viewChildren || [], h, a, o + 1)
				}
				a ? (e = t, kk(t, function(t, e) {
					!t.isRemoved() && s(e, e)
				})) : new xu(e, t, r, r).add(s).update(s).remove(x(s, null)).execute()
			}

			function a(t) {
				var e = jf();
				return t && kk(t, function(t, n) {
					var i = e[n];
					kk(t, function(t) {
						t && (i.push(t), t.__tmWillDelete = 1)
					})
				}), e
			}

			function o() {
				kk(f, function(t) {
					kk(t, function(t) {
						t.parent && t.parent.remove(t)
					})
				}), kk(c, function(t) {
					t.invisible = !0, t.dirty()
				})
			}
			var r = e.getData().tree,
				s = this._oldTree,
				l = jf(),
				u = jf(),
				h = this._storage,
				c = [],
				d = x(qf, e, u, h, n, l, c);
			i(r.root ? [r.root] : [], s && s.root ? [s.root] : [], t, r === s || !s, 0);
			var f = a(h);
			return this._oldTree = r, this._storage = u, {
				lastsForAnimation: l,
				willDeleteEls: f,
				renderFinally: o
			}
		},
		_doAnimation: function(t, e, n, i) {
			if(n.get("animation")) {
				var a = n.get("animationDurationUpdate"),
					o = n.get("animationEasing"),
					s = Uf();
				kk(e.willDeleteEls, function(t, e) {
					kk(t, function(t) {
						if(!t.invisible) {
							var n, r = t.parent;
							if(i && "drillDown" === i.direction) n = r === i.rootNodeGroup ? {
								shape: {
									x: 0,
									y: 0,
									width: r.__tmNodeWidth,
									height: r.__tmNodeHeight
								},
								style: {
									opacity: 0
								}
							} : {
								style: {
									opacity: 0
								}
							};
							else {
								var l = 0,
									u = 0;
								r.__tmWillDelete || (l = r.__tmNodeWidth / 2, u = r.__tmNodeHeight / 2), n = "nodeGroup" === e ? {
									position: [l, u],
									style: {
										opacity: 0
									}
								} : {
									shape: {
										x: l,
										y: u,
										width: 0,
										height: 0
									},
									style: {
										opacity: 0
									}
								}
							}
							n && s.add(t, n, a, o)
						}
					})
				}), kk(this._storage, function(t, n) {
					kk(t, function(t, i) {
						var l = e.lastsForAnimation[n][i],
							u = {};
						l && ("nodeGroup" === n ? l.old && (u.position = t.position.slice(), t.attr("position", l.old)) : (l.old && (u.shape = r({}, t.shape), t.setShape(l.old)), l.fadein ? (t.setStyle("opacity", 0), u.style = {
							opacity: 1
						}) : 1 !== t.style.opacity && (u.style = {
							opacity: 1
						})), s.add(t, u, a, o))
					})
				}, this), this._state = "animating", s.done(Dk(function() {
					this._state = "ready", e.renderFinally()
				}, this)).start()
			}
		},
		_resetController: function(t) {
			var e = this._controller;
			e || (e = this._controller = new xf(t.getZr()), e.enable(this.seriesModel.get("roam")), e.on("pan", Dk(this._onPan, this)), e.on("zoom", Dk(this._onZoom, this)));
			var n = new xn(0, 0, t.getWidth(), t.getHeight());
			e.setPointerChecker(function(t, e, i) {
				return n.contain(e, i)
			})
		},
		_clearController: function() {
			var t = this._controller;
			t && (t.dispose(), t = null)
		},
		_onPan: function(t) {
			if("animating" !== this._state && (Math.abs(t.dx) > Pk || Math.abs(t.dy) > Pk)) {
				var e = this.seriesModel.getData().tree.root;
				if(!e) return;
				var n = e.getLayout();
				if(!n) return;
				this.api.dispatchAction({
					type: "treemapMove",
					from: this.uid,
					seriesId: this.seriesModel.id,
					rootRect: {
						x: n.x + t.dx,
						y: n.y + t.dy,
						width: n.width,
						height: n.height
					}
				})
			}
		},
		_onZoom: function(t) {
			var e = t.originX,
				n = t.originY;
			if("animating" !== this._state) {
				var i = this.seriesModel.getData().tree.root;
				if(!i) return;
				var a = i.getLayout();
				if(!a) return;
				var o = new xn(a.x, a.y, a.width, a.height),
					r = this.seriesModel.layoutInfo;
				e -= r.x, n -= r.y;
				var s = Ie();
				Ce(s, s, [-e, -n]), ke(s, s, [t.scale, t.scale]), Ce(s, s, [e, n]), o.applyTransform(s), this.api.dispatchAction({
					type: "treemapRender",
					from: this.uid,
					seriesId: this.seriesModel.id,
					rootRect: {
						x: o.x,
						y: o.y,
						width: o.width,
						height: o.height
					}
				})
			}
		},
		_initEvents: function(t) {
			t.on("click", function(t) {
				if("ready" === this._state) {
					var e = this.seriesModel.get("nodeClick", !0);
					if(e) {
						var n = this.findTarget(t.offsetX, t.offsetY);
						if(n) {
							var i = n.node;
							if(i.getLayout().isLeafRoot) this._rootToNode(n);
							else if("zoomToNode" === e) this._zoomToNode(n);
							else if("link" === e) {
								var a = i.hostTree.data.getItemModel(i.dataIndex),
									o = a.get("link", !0),
									r = a.get("target", !0) || "blank";
								o && window.open(o, r)
							}
						}
					}
				}
			}, this)
		},
		_renderBreadcrumb: function(t, e, n) {
			function i(e) {
				"animating" !== this._state && (Gf(t.getViewRoot(), e) ? this._rootToNode({
					node: e
				}) : this._zoomToNode({
					node: e
				}))
			}
			n || (n = null != t.get("leafDepth", !0) ? {
				node: t.getViewRoot()
			} : this.findTarget(e.getWidth() / 2, e.getHeight() / 2), n || (n = {
				node: t.getData().tree.root
			})), (this._breadcrumb || (this._breadcrumb = new Zf(this.group))).render(t, e, n.node, Dk(i, this))
		},
		remove: function() {
			this._clearController(), this._containerGroup && this._containerGroup.removeAll(), this._storage = jf(), this._state = "ready", this._breadcrumb && this._breadcrumb.remove()
		},
		dispose: function() {
			this._clearController()
		},
		_zoomToNode: function(t) {
			this.api.dispatchAction({
				type: "treemapZoomToNode",
				from: this.uid,
				seriesId: this.seriesModel.id,
				targetNode: t.node
			})
		},
		_rootToNode: function(t) {
			this.api.dispatchAction({
				type: "treemapRootToNode",
				from: this.uid,
				seriesId: this.seriesModel.id,
				targetNode: t.node
			})
		},
		findTarget: function(t, e) {
			var n, i = this.seriesModel.getViewRoot();
			return i.eachNode({
				attr: "viewChildren",
				order: "preorder"
			}, function(i) {
				var a = this._storage.background[i.getRawIndex()];
				if(a) {
					var o = a.transformCoordToLocal(t, e),
						r = a.shape;
					if(!(r.x <= o[0] && o[0] <= r.x + r.width && r.y <= o[1] && o[1] <= r.y + r.height)) return !1;
					n = {
						node: i,
						offsetX: o[0],
						offsetY: o[1]
					}
				}
			}, this), n
		}
	});
	for(var Wk = function() {}, Hk = ["treemapZoomToNode", "treemapRender", "treemapMove"], Zk = 0; Zk < Hk.length; Zk++) au({
		type: Hk[Zk],
		update: "updateView"
	}, Wk);
	au({
		type: "treemapRootToNode",
		update: "updateView"
	}, function(t, e) {
		function n(e) {
			var n = ["treemapZoomToNode", "treemapRootToNode"],
				i = Bf(t, n, e);
			if(i) {
				var a = e.getViewRoot();
				a && (t.direction = Gf(a, i.node) ? "rollUp" : "drillDown"), e.resetViewRoot(i.node)
			}
		}
		e.eachComponent({
			mainType: "series",
			subType: "treemap",
			query: t
		}, n)
	});
	var Xk = f,
		Yk = S,
		Uk = -1,
		jk = function(t) {
			var e = t.mappingMethod,
				n = t.type,
				a = this.option = i(t);
			this.type = n, this.mappingMethod = e, this._normalizeData = Kk[e];
			var o = qk[n];
			this.applyVisual = o.applyVisual, this.getColorMapper = o.getColorMapper, this._doMap = o._doMap[e], "piecewise" === e ? (Qf(a), $f(a)) : "category" === e ? a.categories ? Jf(a) : Qf(a, !0) : (O("linear" !== e || a.dataExtent), Qf(a))
		};
	jk.prototype = {
		constructor: jk,
		mapValueToVisual: function(t) {
			var e = this._normalizeData(t);
			return this._doMap(e, t)
		},
		getNormalizer: function() {
			return y(this._normalizeData, this)
		}
	};
	var qk = jk.visualHandlers = {
			color: {
				applyVisual: np("color"),
				getColorMapper: function() {
					var t = this.option;
					return y("category" === t.mappingMethod ? function(t, e) {
						return !e && (t = this._normalizeData(t)), ip.call(this, t)
					} : function(e, n, i) {
						var a = !!i;
						return !n && (e = this._normalizeData(e)), i = $e(e, t.parsedVisual, i), a ? i : en(i, "rgba")
					}, this)
				},
				_doMap: {
					linear: function(t) {
						return en($e(t, this.option.parsedVisual), "rgba")
					},
					category: ip,
					piecewise: function(t, e) {
						var n = rp.call(this, e);
						return null == n && (n = en($e(t, this.option.parsedVisual), "rgba")), n
					},
					fixed: ap
				}
			},
			colorHue: tp(function(t, e) {
				return Qe(t, e)
			}),
			colorSaturation: tp(function(t, e) {
				return Qe(t, null, e)
			}),
			colorLightness: tp(function(t, e) {
				return Qe(t, null, null, e)
			}),
			colorAlpha: tp(function(t, e) {
				return tn(t, e)
			}),
			opacity: {
				applyVisual: np("opacity"),
				_doMap: op([0, 1])
			},
			liftZ: {
				applyVisual: np("liftZ"),
				_doMap: {
					linear: ap,
					category: ap,
					piecewise: ap,
					fixed: ap
				}
			},
			symbol: {
				applyVisual: function(t, e, n) {
					var i = this.mapValueToVisual(t);
					if(b(i)) n("symbol", i);
					else if(Yk(i))
						for(var a in i) i.hasOwnProperty(a) && n(a, i[a])
				},
				_doMap: {
					linear: ep,
					category: ip,
					piecewise: function(t, e) {
						var n = rp.call(this, e);
						return null == n && (n = ep.call(this, t)), n
					},
					fixed: ap
				}
			},
			symbolSize: {
				applyVisual: np("symbolSize"),
				_doMap: op([0, 1])
			}
		},
		Kk = {
			linear: function(t) {
				return Jo(t, this.option.dataExtent, [0, 1], !0)
			},
			piecewise: function(t) {
				var e = this.option.pieceList,
					n = jk.findPieceIndex(t, e, !0);
				return null != n ? Jo(n, [0, e.length - 1], [0, 1], !0) : void 0
			},
			category: function(t) {
				var e = this.option.categories ? this.option.categoryMap[t] : t;
				return null == e ? Uk : e
			},
			fixed: G
		};
	jk.listVisualTypes = function() {
		var t = [];
		return f(qk, function(e, n) {
			t.push(n)
		}), t
	}, jk.addVisualHandler = function(t, e) {
		qk[t] = e
	}, jk.isValidType = function(t) {
		return qk.hasOwnProperty(t)
	}, jk.eachVisual = function(t, e, n) {
		S(t) ? f(t, e, n) : e.call(n, t)
	}, jk.mapVisual = function(t, e, n) {
		var i, a = _(t) ? [] : S(t) ? {} : (i = !0, null);
		return jk.eachVisual(t, function(t, o) {
			var r = e.call(n, t, o);
			i ? a = r : a[o] = r
		}), a
	}, jk.retrieveVisuals = function(t) {
		var e, n = {};
		return t && Xk(qk, function(i, a) {
			t.hasOwnProperty(a) && (n[a] = t[a], e = !0)
		}), e ? n : null
	}, jk.prepareVisualTypes = function(t) {
		if(Yk(t)) {
			var e = [];
			Xk(t, function(t, n) {
				e.push(n)
			}), t = e
		} else {
			if(!_(t)) return [];
			t = t.slice()
		}
		return t.sort(function(t, e) {
			return "color" === e && "color" !== t && 0 === t.indexOf("color") ? 1 : -1
		}), t
	}, jk.dependsOn = function(t, e) {
		return "color" === e ? !(!t || 0 !== t.indexOf(e)) : t === e
	}, jk.findPieceIndex = function(t, e, n) {
		function i(e, n) {
			var i = Math.abs(e - t);
			o > i && (o = i, a = n)
		}
		for(var a, o = 1 / 0, r = 0, s = e.length; s > r; r++) {
			var l = e[r].value;
			if(null != l) {
				if(l === t || "string" == typeof l && l === t + "") return r;
				n && i(l, r)
			}
		}
		for(var r = 0, s = e.length; s > r; r++) {
			var u = e[r],
				h = u.interval,
				c = u.close;
			if(h) {
				if(h[0] === -1 / 0) {
					if(lp(c[1], t, h[1])) return r
				} else if(1 / 0 === h[1]) {
					if(lp(c[0], h[0], t)) return r
				} else if(lp(c[0], h[0], t) && lp(c[1], t, h[1])) return r;
				n && i(h[0], r), n && i(h[1], r)
			}
		}
		return n ? 1 / 0 === t ? e.length - 1 : t === -1 / 0 ? 0 : a : void 0
	};
	var $k = _,
		Jk = "itemStyle",
		Qk = {
			seriesType: "treemap",
			reset: function(t) {
				var e = t.getData().tree,
					n = e.root,
					i = t.getModel(Jk);
				if(!n.isRemoved()) {
					var a = p(e.levelModels, function(t) {
						return t ? t.get(Jk) : null
					});
					up(n, {}, a, i, t.getViewRoot().getAncestors(), t)
				}
			}
		},
		tP = Math.max,
		eP = Math.min,
		nP = D,
		iP = f,
		aP = ["itemStyle", "borderWidth"],
		oP = ["itemStyle", "gapWidth"],
		rP = ["upperLabel", "show"],
		sP = ["upperLabel", "height"],
		lP = {
			seriesType: "treemap",
			reset: function(t, e, n, i) {
				var a = n.getWidth(),
					o = n.getHeight(),
					s = t.option,
					l = Dr(t.getBoxLayoutParams(), {
						width: n.getWidth(),
						height: n.getHeight()
					}),
					u = s.size || [],
					h = Qo(nP(l.width, u[0]), a),
					c = Qo(nP(l.height, u[1]), o),
					d = i && i.type,
					f = ["treemapZoomToNode", "treemapRootToNode"],
					p = Bf(i, f, t),
					g = "treemapRender" === d || "treemapMove" === d ? i.rootRect : null,
					m = t.getViewRoot(),
					v = Vf(m);
				if("treemapMove" !== d) {
					var y = "treemapZoomToNode" === d ? Mp(t, p, m, h, c) : g ? [g.width, g.height] : [h, c],
						x = s.sort;
					x && "asc" !== x && "desc" !== x && (x = "desc");
					var _ = {
						squareRatio: s.squareRatio,
						sort: x,
						leafDepth: s.leafDepth
					};
					m.hostTree.clearLayouts();
					var w = {
						x: 0,
						y: 0,
						width: y[0],
						height: y[1],
						area: y[0] * y[1]
					};
					m.setLayout(w), vp(m, _, !1, 0);
					var w = m.getLayout();
					iP(v, function(t, e) {
						var n = (v[e + 1] || m).getValue();
						t.setLayout(r({
							dataExtent: [n, n],
							borderWidth: 0,
							upperHeight: 0
						}, w))
					})
				}
				var b = t.getData().tree.root;
				b.setLayout(Ip(l, g, p), !0), t.setLayoutInfo(l), Tp(b, new xn(-l.x, -l.y, a, o), v, m, 0)
			}
		};
	lu(Qk), su(lP), sA.extend({
		type: "series.sunburst",
		_viewRoot: null,
		getInitialData: function(t) {
			var e = {
				name: t.name,
				children: t.data
			};
			Dp(e);
			var n = t.levels || [],
				i = {};
			return i.levels = n, jd.createTree(e, this, i).data
		},
		optionUpdated: function() {
			this.resetViewRoot()
		},
		getDataParams: function(t) {
			var e = sA.prototype.getDataParams.apply(this, arguments),
				n = this.getData().tree.getNodeByDataIndex(t);
			return e.treePathInfo = Ff(n, this), e
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			center: ["50%", "50%"],
			radius: [0, "75%"],
			clockwise: !0,
			startAngle: 90,
			minAngle: 0,
			percentPrecision: 2,
			stillShowZeroSum: !0,
			highlightPolicy: "descendant",
			nodeClick: "rootToNode",
			renderLabelForZeroData: !1,
			label: {
				rotate: "radial",
				show: !0,
				opacity: 1,
				align: "center",
				position: "inside",
				distance: 5,
				silent: !0,
				emphasis: {}
			},
			itemStyle: {
				borderWidth: 1,
				borderColor: "white",
				borderType: "solid",
				shadowBlur: 0,
				shadowColor: "rgba(0, 0, 0, 0.2)",
				shadowOffsetX: 0,
				shadowOffsetY: 0,
				opacity: 1,
				emphasis: {},
				highlight: {
					opacity: 1
				},
				downplay: {
					opacity: .9
				}
			},
			animationType: "expansion",
			animationDuration: 1e3,
			animationDurationUpdate: 500,
			animationEasing: "cubicOut",
			data: [],
			levels: [],
			sort: "desc"
		},
		getViewRoot: function() {
			return this._viewRoot
		},
		resetViewRoot: function(t) {
			t ? this._viewRoot = t : t = this._viewRoot;
			var e = this.getRawData().tree.root;
			(!t || t !== e && !e.contains(t)) && (this._viewRoot = e)
		}
	});
	var uP = {
			NONE: "none",
			DESCENDANT: "descendant",
			ANCESTOR: "ancestor",
			SELF: "self"
		},
		hP = 2,
		cP = 4,
		dP = Cp.prototype;
	dP.updateData = function(t, e, n, i, o) {
		this.node = e, e.piece = this, i = i || this._seriesModel, o = o || this._ecModel;
		var l = this.childAt(0);
		l.dataIndex = e.dataIndex;
		var u = e.getModel(),
			h = e.getLayout(),
			c = r({}, h);
		c.label = null;
		var d = Lp(e, i, o);
		Op(e, i, d);
		var f, p = u.getModel("itemStyle").getItemStyle();
		if("normal" === n) f = p;
		else {
			var g = u.getModel(n + ".itemStyle").getItemStyle();
			f = a(g, p)
		}
		f = s({
			lineJoin: "bevel",
			fill: f.fill || d
		}, f), t ? (l.setShape(c), l.shape.r = h.r0, zo(l, {
			shape: {
				r: h.r
			}
		}, i, e.dataIndex), l.useStyle(f)) : "object" == typeof f.fill && f.fill.type || "object" == typeof l.style.fill && l.style.fill.type ? (zo(l, {
			shape: c
		}, i), l.useStyle(f)) : zo(l, {
			shape: c,
			style: f
		}, i), this._updateLabel(i, d, n);
		var m = u.getShallow("cursor");
		if(m && l.attr("cursor", m), t) {
			var v = i.getShallow("highlightPolicy");
			this._initEvents(l, e, i, v)
		}
		this._seriesModel = i || this._seriesModel, this._ecModel = o || this._ecModel
	}, dP.onEmphasis = function(t) {
		var e = this;
		this.node.hostTree.root.eachNode(function(n) {
			n.piece && (e.node === n ? n.piece.updateData(!1, n, "emphasis") : Pp(n, e.node, t) ? n.piece.childAt(0).trigger("highlight") : t !== uP.NONE && n.piece.childAt(0).trigger("downplay"))
		})
	}, dP.onNormal = function() {
		this.node.hostTree.root.eachNode(function(t) {
			t.piece && t.piece.updateData(!1, t, "normal")
		})
	}, dP.onHighlight = function() {
		this.updateData(!1, this.node, "highlight")
	}, dP.onDownplay = function() {
		this.updateData(!1, this.node, "downplay")
	}, dP._updateLabel = function(t, e, n) {
		function i(t) {
			var e = r.get(t);
			return null == e ? o.get(t) : e
		}
		var a = this.node.getModel(),
			o = a.getModel("label"),
			r = "normal" === n || "emphasis" === n ? o : a.getModel(n + ".label"),
			s = a.getModel("emphasis.label"),
			l = D(t.getFormattedLabel(this.node.dataIndex, "normal", null, null, "label"), this.node.name);
		i("show") === !1 && (l = "");
		var u = this.node.getLayout(),
			h = r.get("minAngle");
		null == h && (h = o.get("minAngle")), h = h / 180 * Math.PI;
		var c = u.endAngle - u.startAngle;
		null != h && Math.abs(c) < h && (l = "");
		var d = this.childAt(1);
		Io(d.style, d.hoverStyle || {}, o, s, {
			defaultText: r.getShallow("show") ? l : null,
			autoColor: e,
			useInsideStyle: !0
		});
		var f, p = (u.startAngle + u.endAngle) / 2,
			g = Math.cos(p),
			m = Math.sin(p),
			v = i("position"),
			y = i("distance") || 0,
			x = i("align");
		"outside" === v ? (f = u.r + y, x = p > Math.PI / 2 ? "right" : "left") : x && "center" !== x ? "left" === x ? (f = u.r0 + y, p > Math.PI / 2 && (x = "right")) : "right" === x && (f = u.r - y, p > Math.PI / 2 && (x = "left")) : (f = (u.r + u.r0) / 2, x = "center"), d.attr("style", {
			text: l,
			textAlign: x,
			textVerticalAlign: i("verticalAlign") || "middle",
			opacity: i("opacity")
		});
		var _ = f * g + u.cx,
			w = f * m + u.cy;
		d.attr("position", [_, w]);
		var b = i("rotate"),
			S = 0;
		"radial" === b ? (S = -p, S < -Math.PI / 2 && (S += Math.PI)) : "tangential" === b ? (S = Math.PI / 2 - p, S > Math.PI / 2 ? S -= Math.PI : S < -Math.PI / 2 && (S += Math.PI)) : "number" == typeof b && (S = b * Math.PI / 180), d.attr("rotation", S)
	}, dP._initEvents = function(t, e, n, i) {
		t.off("mouseover").off("mouseout").off("emphasis").off("normal");
		var a = this,
			o = function() {
				a.onEmphasis(i)
			},
			r = function() {
				a.onNormal()
			},
			s = function() {
				a.onDownplay()
			},
			l = function() {
				a.onHighlight()
			};
		n.isAnimationEnabled() && t.on("mouseover", o).on("mouseout", r).on("emphasis", o).on("normal", r).on("downplay", s).on("highlight", l)
	}, h(Cp, rS);
	var fP = "sunburstRootToNode",
		pP = (Xs.extend({
			type: "sunburst",
			init: function() {},
			render: function(t, e, n, i) {
				function a(t, e) {
					function n(t) {
						return t.getId()
					}

					function i(n, i) {
						var a = null == n ? null : t[n],
							r = null == i ? null : e[i];
						o(a, r)
					}(0 !== t.length || 0 !== e.length) && new xu(e, t, n, n).add(i).update(i).remove(x(i, null)).execute()
				}

				function o(n, i) {
					if(f || !n || n.getValue() || (n = null), n !== h && i !== h)
						if(i && i.piece) n ? (i.piece.updateData(!1, n, "normal", t, e), u.setItemGraphicEl(n.dataIndex, i.piece)) : r(i);
						else if(n) {
						var a = new Cp(n, t, e);
						d.add(a), u.setItemGraphicEl(n.dataIndex, a)
					}
				}

				function r(t) {
					t && t.piece && (d.remove(t.piece), t.piece = null)
				}

				function s(n, i) {
					if(i.depth > 0) {
						l.virtualPiece ? l.virtualPiece.updateData(!1, n, "normal", t, e) : (l.virtualPiece = new Cp(n, t, e), d.add(l.virtualPiece)), i.piece._onclickEvent && i.piece.off("click", i.piece._onclickEvent);
						var a = function() {
							l._rootToNode(i.parentNode)
						};
						i.piece._onclickEvent = a, l.virtualPiece.on("click", a)
					} else l.virtualPiece && (d.remove(l.virtualPiece), l.virtualPiece = null)
				}
				var l = this;
				this.seriesModel = t, this.api = n, this.ecModel = e;
				var u = t.getData(),
					h = u.tree.root,
					c = t.getViewRoot(),
					d = this.group,
					f = t.get("renderLabelForZeroData"),
					p = [];
				c.eachNode(function(t) {
					p.push(t)
				});
				var g = this._oldChildren || [];
				if(a(p, g), s(h, c), i && i.highlight && i.highlight.piece) {
					var m = t.getShallow("highlightPolicy");
					i.highlight.piece.onEmphasis(m)
				} else if(i && i.unhighlight) {
					var v = this.virtualPiece;
					!v && h.children.length && (v = h.children[0].piece), v && v.onNormal()
				}
				this._initEvents(), this._oldChildren = p
			},
			dispose: function() {},
			_initEvents: function() {
				var t = this,
					e = function(e) {
						var n = !1,
							i = t.seriesModel.getViewRoot();
						i.eachNode(function(i) {
							if(!n && i.piece && i.piece.childAt(0) === e.target) {
								var a = i.getModel().get("nodeClick");
								if("rootToNode" === a) t._rootToNode(i);
								else if("link" === a) {
									var o = i.getModel(),
										r = o.get("link");
									if(r) {
										var s = o.get("target", !0) || "_blank";
										window.open(r, s)
									}
								}
								n = !0
							}
						})
					};
				this.group._onclickEvent && this.group.off("click", this.group._onclickEvent), this.group.on("click", e), this.group._onclickEvent = e
			},
			_rootToNode: function(t) {
				t !== this.seriesModel.getViewRoot() && this.api.dispatchAction({
					type: fP,
					from: this.uid,
					seriesId: this.seriesModel.id,
					targetNode: t
				})
			},
			containPoint: function(t, e) {
				var n = e.getData(),
					i = n.getItemLayout(0);
				if(i) {
					var a = t[0] - i.cx,
						o = t[1] - i.cy,
						r = Math.sqrt(a * a + o * o);
					return r <= i.r && r >= i.r0
				}
			}
		}), "sunburstRootToNode");
	au({
		type: pP,
		update: "updateView"
	}, function(t, e) {
		function n(e) {
			var n = Bf(t, [pP], e);
			if(n) {
				var i = e.getViewRoot();
				i && (t.direction = Gf(i, n.node) ? "rollUp" : "drillDown"), e.resetViewRoot(n.node)
			}
		}
		e.eachComponent({
			mainType: "series",
			subType: "sunburst",
			query: t
		}, n)
	});
	var gP = "sunburstHighlight";
	au({
		type: gP,
		update: "updateView"
	}, function(t, e) {
		function n(e) {
			var n = Bf(t, [gP], e);
			n && (t.highlight = n.node)
		}
		e.eachComponent({
			mainType: "series",
			subType: "sunburst",
			query: t
		}, n)
	});
	var mP = "sunburstUnhighlight";
	au({
		type: mP,
		update: "updateView"
	}, function(t, e) {
		function n() {
			t.unhighlight = !0
		}
		e.eachComponent({
			mainType: "series",
			subType: "sunburst",
			query: t
		}, n)
	});
	var vP = Math.PI / 180,
		yP = function(t, e, n) {
			e.eachSeriesByType(t, function(t) {
				var e = t.get("center"),
					i = t.get("radius");
				_(i) || (i = [0, i]), _(e) || (e = [e, e]);
				var a = n.getWidth(),
					o = n.getHeight(),
					r = Math.min(a, o),
					s = Qo(e[0], a),
					l = Qo(e[1], o),
					u = Qo(i[0], r / 2),
					h = Qo(i[1], r / 2),
					c = -t.get("startAngle") * vP,
					d = t.get("minAngle") * vP,
					p = t.getData().tree.root,
					g = t.getViewRoot(),
					m = g.depth,
					v = t.get("sort");
				null != v && Np(g, v);
				var y = 0;
				f(g.children, function(t) {
					!isNaN(t.getValue()) && y++
				});
				var x = g.getValue(),
					w = Math.PI / (x || y) * 2,
					b = g.depth > 0,
					S = g.height - (b ? -1 : 1),
					M = (h - u) / (S || 1),
					I = t.get("clockwise"),
					T = t.get("stillShowZeroSum"),
					A = I ? 1 : -1,
					D = function(t, e) {
						if(t) {
							var n = e;
							if(t !== p) {
								var i = t.getValue(),
									a = 0 === x && T ? w : i * w;
								d > a && (a = d), n = e + A * a;
								var o = t.depth - m - (b ? -1 : 1),
									h = u + M * o,
									c = u + M * (o + 1),
									g = t.getModel();
								null != g.get("r0") && (h = Qo(g.get("r0"), r / 2)), null != g.get("r") && (c = Qo(g.get("r"), r / 2)), t.setLayout({
									angle: a,
									startAngle: e,
									endAngle: n,
									clockwise: I,
									cx: s,
									cy: l,
									r0: h,
									r: c
								})
							}
							if(t.children && t.children.length) {
								var v = 0;
								f(t.children, function(t) {
									v += D(t, e + v)
								})
							}
							return n - e
						}
					};
				if(b) {
					var C = u,
						L = u + M,
						k = 2 * Math.PI;
					p.setLayout({
						angle: k,
						startAngle: c,
						endAngle: c + k,
						clockwise: I,
						cx: s,
						cy: l,
						r0: C,
						r: L
					})
				}
				D(g, c)
			})
		};
	lu(x(VL, "sunburst")), su(x(yP, "sunburst")), nu(x(ZL, "sunburst"));
	for(var xP = [126, 25], _P = [
			[
				[0, 3.5],
				[7, 11.2],
				[15, 11.9],
				[30, 7],
				[42, .7],
				[52, .7],
				[56, 7.7],
				[59, .7],
				[64, .7],
				[64, 0],
				[5, 0],
				[0, 3.5]
			],
			[
				[13, 16.1],
				[19, 14.7],
				[16, 21.7],
				[11, 23.1],
				[13, 16.1]
			],
			[
				[12, 32.2],
				[14, 38.5],
				[15, 38.5],
				[13, 32.2],
				[12, 32.2]
			],
			[
				[16, 47.6],
				[12, 53.2],
				[13, 53.2],
				[18, 47.6],
				[16, 47.6]
			],
			[
				[6, 64.4],
				[8, 70],
				[9, 70],
				[8, 64.4],
				[6, 64.4]
			],
			[
				[23, 82.6],
				[29, 79.8],
				[30, 79.8],
				[25, 82.6],
				[23, 82.6]
			],
			[
				[37, 70.7],
				[43, 62.3],
				[44, 62.3],
				[39, 70.7],
				[37, 70.7]
			],
			[
				[48, 51.1],
				[51, 45.5],
				[53, 45.5],
				[50, 51.1],
				[48, 51.1]
			],
			[
				[51, 35],
				[51, 28.7],
				[53, 28.7],
				[53, 35],
				[51, 35]
			],
			[
				[52, 22.4],
				[55, 17.5],
				[56, 17.5],
				[53, 22.4],
				[52, 22.4]
			],
			[
				[58, 12.6],
				[62, 7],
				[63, 7],
				[60, 12.6],
				[58, 12.6]
			],
			[
				[0, 3.5],
				[0, 93.1],
				[64, 93.1],
				[64, 0],
				[63, 0],
				[63, 92.4],
				[1, 92.4],
				[1, 3.5],
				[0, 3.5]
			]
		], wP = 0; wP < _P.length; wP++)
		for(var bP = 0; bP < _P[wP].length; bP++) _P[wP][bP][0] /= 10.5, _P[wP][bP][1] /= -14, _P[wP][bP][0] += xP[0], _P[wP][bP][1] += xP[1];
	var SP = function(t, e) {
			"china" === t && e.push(new kh("南海诸岛", p(_P, function(t) {
				return {
					type: "polygon",
					exterior: t
				}
			}), xP))
		},
		MP = {
			"南海诸岛": [32, 80],
			"广东": [0, -10],
			"香港": [10, 5],
			"澳门": [-10, 10],
			"天津": [5, 5]
		},
		IP = function(t, e) {
			if("china" === t) {
				var n = MP[e.name];
				if(n) {
					var i = e.center;
					i[0] += n[0] / 10.5, i[1] += -n[1] / 14
				}
			}
		},
		TP = {
			Russia: [100, 60],
			"United States": [-99, 38],
			"United States of America": [-99, 38]
		},
		AP = function(t, e) {
			if("world" === t) {
				var n = TP[e.name];
				if(n) {
					var i = e.center;
					i[0] = n[0], i[1] = n[1]
				}
			}
		},
		DP = [
			[
				[123.45165252685547, 25.73527164402261],
				[123.49731445312499, 25.73527164402261],
				[123.49731445312499, 25.750734064600884],
				[123.45165252685547, 25.750734064600884],
				[123.45165252685547, 25.73527164402261]
			]
		],
		CP = function(t, e) {
			"china" === t && "台湾" === e.name && e.geometries.push({
				type: "polygon",
				exterior: DP[0]
			})
		},
		LP = Ui(),
		kP = {
			load: function(t, e) {
				var n = LP(e).parsed;
				if(n) return n;
				var i, a = e.specialAreas || {},
					o = e.geoJSON;
				try {
					i = o ? kC(o) : []
				} catch(r) {
					throw new Error("Invalid geoJson format\n" + r.message)
				}
				return f(i, function(e) {
					var n = e.name;
					IP(t, e), AP(t, e), CP(t, e);
					var i = a[n];
					i && e.transformTo(i.left, i.top, i.width, i.height)
				}), SP(t, i), LP(e).parsed = {
					regions: i,
					boundingRect: zp(i)
				}
			}
		},
		PP = Ui(),
		OP = {
			load: function(t, e) {
				var n = PP(e).originRoot;
				if(n) return {
					root: n,
					boundingRect: PP(e).boundingRect
				};
				var i = Rp(e);
				return PP(e).originRoot = i.root, PP(e).boundingRect = i.boundingRect, i
			},
			makeGraphic: function(t, e, n) {
				var i = PP(e),
					a = i.rootMap || (i.rootMap = B()),
					o = a.get(n);
				if(o) return o;
				var r = i.originRoot,
					s = i.boundingRect;
				return i.originRootHostKey ? o = Rp(e, s).root : (i.originRootHostKey = n, o = r), a.set(n, o)
			},
			removeGraphic: function(t, e, n) {
				var i = PP(e),
					a = i.rootMap;
				a && a.removeKey(n), n === i.originRootHostKey && (i.originRootHostKey = null)
			}
		},
		NP = {
			geoJSON: kP,
			svg: OP
		},
		EP = {
			load: function(t, e) {
				var n, i = [],
					a = B(),
					o = B(),
					r = Vp(t);
				return f(r, function(r) {
					var s = NP[r.type].load(t, r);
					f(s.regions, function(t) {
						var n = t.name;
						e && e.hasOwnProperty(n) && (t = t.cloneShallow(n = e[n])), i.push(t), a.set(n, t), o.set(n, t.center)
					});
					var l = s.boundingRect;
					l && (n ? n.union(l) : n = l.clone())
				}), {
					regions: i,
					regionsMap: a,
					nameCoordMap: o,
					boundingRect: n || new xn(0, 0, 0, 0)
				}
			},
			makeGraphic: Bp("makeGraphic"),
			removeGraphic: Bp("removeGraphic")
		},
		zP = sA.extend({
			type: "series.map",
			dependencies: ["geo"],
			layoutMode: "box",
			needsDrawMap: !1,
			seriesGroup: [],
			getInitialData: function() {
				for(var t = NL(this, ["value"]), e = t.mapDimension("value"), n = B(), i = [], a = [], o = 0, r = t.count(); r > o; o++) {
					var s = t.getName(o);
					n.set(s, !0), i.push({
						name: s,
						value: t.get(e, o),
						selected: Ps(t, o, "selected")
					})
				}
				var l = EP.load(this.getMapType(), this.option.nameMap);
				return f(l.regions, function(t) {
					var e = t.name;
					n.get(e) || (i.push({
						name: e
					}), a.push(e))
				}), this.updateSelectedMap(i), t.appendValues([], a), t
			},
			getHostGeoModel: function() {
				var t = this.option.geoIndex;
				return null != t ? this.dependentModels.geo[t] : null
			},
			getMapType: function() {
				return(this.getHostGeoModel() || this).option.map
			},
			getRawValue: function(t) {
				var e = this.getData();
				return e.get(e.mapDimension("value"), t)
			},
			getRegionModel: function(t) {
				var e = this.getData();
				return e.getItemModel(e.indexOfName(t))
			},
			formatTooltip: function(t) {
				for(var e = this.getData(), n = gr(this.getRawValue(t)), i = e.getName(t), a = this.seriesGroup, o = [], r = 0; r < a.length; r++) {
					var s = a[r].originalData.indexOfName(i),
						l = e.mapDimension("value");
					isNaN(a[r].originalData.get(l, s)) || o.push(vr(a[r].name))
				}
				return o.join(", ") + "<br />" + vr(i + " : " + n)
			},
			getTooltipPosition: function(t) {
				if(null != t) {
					var e = this.getData().getName(t),
						n = this.coordinateSystem,
						i = n.getRegion(e);
					return i && n.dataToPoint(i.center)
				}
			},
			setZoom: function(t) {
				this.option.zoom = t
			},
			setCenter: function(t) {
				this.option.center = t
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "geo",
				map: "",
				left: "center",
				top: "center",
				aspectScale: .75,
				showLegendSymbol: !0,
				dataRangeHoverLink: !0,
				boundingCoords: null,
				center: null,
				zoom: 1,
				scaleLimit: null,
				label: {
					show: !1,
					color: "#000"
				},
				itemStyle: {
					borderWidth: .5,
					borderColor: "#444",
					areaColor: "#eee"
				},
				emphasis: {
					label: {
						show: !0,
						color: "rgb(100,0,0)"
					},
					itemStyle: {
						areaColor: "rgba(255,215,0,0.8)"
					}
				}
			}
		});
	c(zP, EL), Hp.prototype = {
		constructor: Hp,
		draw: function(t, e, n, i, a) {
			var o = "geo" === t.mainType,
				r = t.getData && t.getData();
			o && e.eachComponent({
				mainType: "series",
				subType: "map"
			}, function(e) {
				r || e.getHostGeoModel() !== t || (r = e.getData())
			});
			var s = t.coordinateSystem;
			this._updateBackground(s);
			var l = this._regionsGroup,
				u = this.group,
				h = s.scale,
				c = {
					position: s.position,
					scale: h
				};
			!l.childAt(0) || a ? u.attr(c) : zo(u, c, t), l.removeAll();
			var d = ["itemStyle"],
				p = ["emphasis", "itemStyle"],
				g = ["label"],
				m = ["emphasis", "label"],
				v = B();
			f(s.regions, function(e) {
				var n = v.get(e.name) || v.set(e.name, new rS),
					i = new zI({
						shape: {
							paths: []
						}
					});
				n.add(i);
				var a, s = t.getRegionModel(e.name) || t,
					u = s.getModel(d),
					c = s.getModel(p),
					y = Gp(u, h),
					x = Gp(c, h),
					_ = s.getModel(g),
					w = s.getModel(m);
				if(r) {
					a = r.indexOfName(e.name);
					var b = r.getItemVisual(a, "color", !0);
					b && (y.fill = b)
				}
				f(e.geometries, function(t) {
					if("polygon" === t.type) {
						i.shape.paths.push(new TI({
							shape: {
								points: t.exterior
							}
						}));
						for(var e = 0; e < (t.interiors ? t.interiors.length : 0); e++) i.shape.paths.push(new TI({
							shape: {
								points: t.interiors[e]
							}
						}))
					}
				}), i.setStyle(y), i.style.strokeNoScale = !0, i.culling = !0;
				var S = _.get("show"),
					M = w.get("show"),
					I = r && isNaN(r.get(r.mapDimension("value"), a)),
					T = r && r.getItemLayout(a);
				if(o || I && (S || M) || T && T.showLabel) {
					var A, D = o ? e.name : a;
					(!r || a >= 0) && (A = t);
					var C = new yI({
						position: e.center.slice(),
						scale: [1 / h[0], 1 / h[1]],
						z2: 10,
						silent: !0
					});
					Io(C.style, C.hoverStyle = {}, _, w, {
						labelFetcher: A,
						labelDataIndex: D,
						defaultText: e.name,
						useInsideStyle: !1
					}, {
						textAlign: "center",
						textVerticalAlign: "middle"
					}), n.add(C)
				}
				if(r) r.setItemGraphicEl(a, n);
				else {
					var s = t.getRegionModel(e.name);
					i.eventData = {
						componentType: "geo",
						componentIndex: t.componentIndex,
						geoIndex: t.componentIndex,
						name: e.name,
						region: s && s.option || {}
					}
				}
				var L = n.__regions || (n.__regions = []);
				L.push(e), So(n, x, {
					hoverSilentOnTouch: !!t.get("selectedMode")
				}), l.add(n)
			}), this._updateController(t, e, n), Fp(this, t, l, n, i), Wp(t, l)
		},
		remove: function() {
			this._regionsGroup.removeAll(), this._backgroundGroup.removeAll(), this._controller.dispose(), this._mapName && EP.removeGraphic(this._mapName, this.uid), this._mapName = null, this._controllerHost = {}
		},
		_updateBackground: function(t) {
			var e = t.map;
			this._mapName !== e && f(EP.makeGraphic(e, this.uid), function(t) {
				this._backgroundGroup.add(t)
			}, this), this._mapName = e
		},
		_updateController: function(t, e, n) {
			function i() {
				var e = {
					type: "geoRoam",
					componentType: l
				};
				return e[l + "Id"] = t.id, e
			}
			var a = t.coordinateSystem,
				o = this._controller,
				s = this._controllerHost;
			s.zoomLimit = t.get("scaleLimit"), s.zoom = a.getZoom(), o.enable(t.get("roam") || !1);
			var l = t.mainType;
			o.off("pan").on("pan", function(t) {
				this._mouseDownFlag = !1, ff(s, t.dx, t.dy), n.dispatchAction(r(i(), {
					dx: t.dx,
					dy: t.dy
				}))
			}, this), o.off("zoom").on("zoom", function(t) {
				if(this._mouseDownFlag = !1, pf(s, t.scale, t.originX, t.originY), n.dispatchAction(r(i(), {
						zoom: t.scale,
						originX: t.originX,
						originY: t.originY
					})), this._updateGroup) {
					var e = this.group.scale;
					this._regionsGroup.traverse(function(t) {
						"text" === t.type && t.attr("scale", [1 / e[0], 1 / e[1]])
					})
				}
			}, this), o.setPointerChecker(function(e, i, o) {
				return a.getViewRectAfterRoam().contain(i, o) && !Df(e, n, t)
			})
		}
	};
	var RP = "__seriesMapHighDown",
		BP = "__seriesMapCallKey";
	pu({
		type: "map",
		render: function(t, e, n, i) {
			if(!i || "mapToggleSelect" !== i.type || i.from !== this.uid) {
				var a = this.group;
				if(a.removeAll(), !t.getHostGeoModel()) {
					if(i && "geoRoam" === i.type && "series" === i.componentType && i.seriesId === t.id) {
						var o = this._mapDraw;
						o && a.add(o.group)
					} else if(t.needsDrawMap) {
						var o = this._mapDraw || new Hp(n, !0);
						a.add(o.group), o.draw(t, e, n, this, i), this._mapDraw = o
					} else this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
					t.get("showLegendSymbol") && e.getComponent("legend") && this._renderSymbols(t, e, n)
				}
			}
		},
		remove: function() {
			this._mapDraw && this._mapDraw.remove(), this._mapDraw = null, this.group.removeAll()
		},
		dispose: function() {
			this._mapDraw && this._mapDraw.remove(), this._mapDraw = null
		},
		_renderSymbols: function(t) {
			var e = t.originalData,
				n = this.group;
			e.each(e.mapDimension("value"), function(i, a) {
				if(!isNaN(i)) {
					var o = e.getItemLayout(a);
					if(o && o.point) {
						var s = o.point,
							l = o.offset,
							u = new xI({
								style: {
									fill: t.getData().getVisual("color")
								},
								shape: {
									cx: s[0] + 9 * l,
									cy: s[1],
									r: 3
								},
								silent: !0,
								z2: 8 + (l ? 0 : XI + 1)
							});
						if(!l) {
							var h = t.mainSeries.getData(),
								c = e.getName(a),
								d = h.indexOfName(c),
								f = e.getItemModel(a),
								p = f.getModel("label"),
								g = f.getModel("emphasis.label"),
								m = h.getItemGraphicEl(d),
								v = C(t.getFormattedLabel(d, "normal"), c),
								y = C(t.getFormattedLabel(d, "emphasis"), v),
								_ = m[RP],
								w = Math.random();
							if(!_) {
								_ = m[RP] = {};
								var b = x(Zp, !0),
									S = x(Zp, !1);
								m.on("mouseover", b).on("mouseout", S).on("emphasis", b).on("normal", S)
							}
							m[BP] = w, r(_, {
								recordVersion: w,
								circle: u,
								labelModel: p,
								hoverLabelModel: g,
								emphasisText: y,
								normalText: v
							}), Xp(_, !1)
						}
						n.add(u)
					}
				}
			})
		}
	}), au({
		type: "geoRoam",
		event: "geoRoam",
		update: "updateTransform"
	}, function(t, e) {
		var n = t.componentType || "series";
		e.eachComponent({
			mainType: n,
			query: t
		}, function(e) {
			var i = e.coordinateSystem;
			if("geo" === i.type) {
				var a = Nf(i, t, e.get("scaleLimit"));
				e.setCenter && e.setCenter(a.center), e.setZoom && e.setZoom(a.zoom), "series" === n && f(e.seriesGroup, function(t) {
					t.setCenter(a.center), t.setZoom(a.zoom)
				})
			}
		})
	}), Yp.prototype = {
		constructor: Yp,
		type: "geo",
		dimensions: ["lng", "lat"],
		containCoord: function(t) {
			for(var e = this.regions, n = 0; n < e.length; n++)
				if(e[n].contain(t)) return !0;
			return !1
		},
		transformTo: function(t, e, n, i) {
			var a = this.getBoundingRect(),
				o = this._invertLongitute;
			a = a.clone(), o && (a.y = -a.y - a.height);
			var r = this._rawTransformable;
			if(r.transform = a.calculateTransform(new xn(t, e, n, i)), r.decomposeTransform(), o) {
				var s = r.scale;
				s[1] = -s[1]
			}
			r.updateTransform(), this._updateTransform()
		},
		getRegion: function(t) {
			return this._regionsMap.get(t)
		},
		getRegionByCoord: function(t) {
			for(var e = this.regions, n = 0; n < e.length; n++)
				if(e[n].contain(t)) return e[n]
		},
		addGeoCoord: function(t, e) {
			this._nameCoordMap.set(t, e)
		},
		getGeoCoord: function(t) {
			return this._nameCoordMap.get(t)
		},
		getBoundingRect: function() {
			return this._rect
		},
		dataToPoint: function(t, e, n) {
			return "string" == typeof t && (t = this.getGeoCoord(t)), t ? cf.prototype.dataToPoint.call(this, t, e, n) : void 0
		},
		convertToPixel: x(Up, "dataToPoint"),
		convertFromPixel: x(Up, "pointToData")
	}, c(Yp, cf);
	var VP = {
		dimensions: Yp.prototype.dimensions,
		create: function(t, e) {
			var n = [];
			t.eachComponent("geo", function(t, i) {
				var a = t.get("map"),
					o = t.get("aspectScale"),
					r = !0,
					s = ZA.retrieveMap(a);
				s && s[0] && "svg" === s[0].type ? (null == o && (o = 1), r = !1) : null == o && (o = .75);
				var l = new Yp(a + i, a, t.get("nameMap"), r);
				l.aspectScale = o, l.zoomLimit = t.get("scaleLimit"), n.push(l), qp(l, t), t.coordinateSystem = l, l.model = t, l.resize = jp, l.resize(t, e)
			}), t.eachSeries(function(t) {
				var e = t.get("coordinateSystem");
				if("geo" === e) {
					var i = t.get("geoIndex") || 0;
					t.coordinateSystem = n[i]
				}
			});
			var i = {};
			return t.eachSeriesByType("map", function(t) {
				if(!t.getHostGeoModel()) {
					var e = t.getMapType();
					i[e] = i[e] || [], i[e].push(t)
				}
			}), f(i, function(t, i) {
				var a = p(t, function(t) {
						return t.get("nameMap")
					}),
					r = new Yp(i, i, o(a));
				r.zoomLimit = D.apply(null, p(t, function(t) {
					return t.get("scaleLimit")
				})), n.push(r), r.resize = jp, r.aspectScale = t[0].get("aspectScale"), r.resize(t[0], e), f(t, function(t) {
					t.coordinateSystem = r, qp(r, t)
				})
			}), n
		},
		getFilledRegions: function(t, e, n) {
			for(var i = (t || []).slice(), a = B(), o = 0; o < i.length; o++) a.set(i[o].name, i[o]);
			var r = EP.load(e, n);
			return f(r.regions, function(t) {
				var e = t.name;
				!a.get(e) && i.push({
					name: e
				})
			}), i
		}
	};
	ou("geo", VP);
	var GP = function(t) {
			var e = {};
			t.eachSeriesByType("map", function(n) {
				var i = n.getMapType();
				if(!n.getHostGeoModel() && !e[i]) {
					var a = {};
					f(n.seriesGroup, function(e) {
						var n = e.coordinateSystem,
							i = e.originalData;
						e.get("showLegendSymbol") && t.getComponent("legend") && i.each(i.mapDimension("value"), function(t, e) {
							var o = i.getName(e),
								r = n.getRegion(o);
							if(r && !isNaN(t)) {
								var s = a[o] || 0,
									l = n.dataToPoint(r.center);
								a[o] = s + 1, i.setItemLayout(e, {
									point: l,
									offset: s
								})
							}
						})
					});
					var o = n.getData();
					o.each(function(t) {
						var e = o.getName(t),
							n = o.getItemLayout(t) || {};
						n.showLabel = !a[e], o.setItemLayout(t, n)
					}), e[i] = !0
				}
			})
		},
		FP = function(t) {
			t.eachSeriesByType("map", function(t) {
				var e = t.get("color"),
					n = t.getModel("itemStyle"),
					i = n.get("areaColor"),
					a = n.get("color") || e[t.seriesIndex % e.length];
				t.getData().setVisual({
					areaColor: i,
					color: a
				})
			})
		},
		WP = function(t) {
			var e = {};
			t.eachSeriesByType("map", function(t) {
				var n = t.getHostGeoModel(),
					i = n ? "o" + n.id : "i" + t.getMapType();
				(e[i] = e[i] || []).push(t)
			}), f(e, function(t) {
				for(var e = Kp(p(t, function(t) {
						return t.getData()
					}), t[0].get("mapValueCalculation")), n = 0; n < t.length; n++) t[n].originalData = t[n].getData();
				for(var n = 0; n < t.length; n++) t[n].seriesGroup = t, t[n].needsDrawMap = 0 === n && !t[n].getHostGeoModel(), t[n].setData(e.cloneShallow()), t[n].mainSeries = t[0]
			})
		},
		HP = function(t) {
			var e = [];
			f(t.series, function(t) {
				t && "map" === t.type && (e.push(t), t.map = t.map || t.mapType, s(t, t.mapLocation))
			})
		};
	su(GP), lu(FP), nu(sD.PROCESSOR.STATISTIC, WP), eu(HP), BL("map", [{
		type: "mapToggleSelect",
		event: "mapselectchanged",
		method: "toggleSelected"
	}, {
		type: "mapSelect",
		event: "mapselected",
		method: "select"
	}, {
		type: "mapUnSelect",
		event: "mapunselected",
		method: "unSelect"
	}]);
	var ZP = "undefined" == typeof Uint32Array ? Array : Uint32Array,
		XP = "undefined" == typeof Float64Array ? Array : Float64Array,
		YP = sA.extend({
			type: "series.lines",
			dependencies: ["grid", "polar"],
			visualColorAccessPath: "lineStyle.color",
			init: function(t) {
				t.data = t.data || [], $p(t);
				var e = this._processFlatCoordsArray(t.data);
				this._flatCoords = e.flatCoords, this._flatCoordsOffset = e.flatCoordsOffset, e.flatCoords && (t.data = new Float32Array(e.count)), YP.superApply(this, "init", arguments)
			},
			mergeOption: function(t) {
				if(t.data = t.data || [], $p(t), t.data) {
					var e = this._processFlatCoordsArray(t.data);
					this._flatCoords = e.flatCoords, this._flatCoordsOffset = e.flatCoordsOffset, e.flatCoords && (t.data = new Float32Array(e.count))
				}
				YP.superApply(this, "mergeOption", arguments)
			},
			appendData: function(t) {
				var e = this._processFlatCoordsArray(t.data);
				e.flatCoords && (this._flatCoords ? (this._flatCoords = V(this._flatCoords, e.flatCoords), this._flatCoordsOffset = V(this._flatCoordsOffset, e.flatCoordsOffset)) : (this._flatCoords = e.flatCoords, this._flatCoordsOffset = e.flatCoordsOffset), t.data = new Float32Array(e.count)), this.getRawData().appendData(t.data)
			},
			_getCoordsFromItemModel: function(t) {
				var e = this.getData().getItemModel(t),
					n = e.option instanceof Array ? e.option : e.getShallow("coords");
				return n
			},
			getLineCoordsCount: function(t) {
				return this._flatCoordsOffset ? this._flatCoordsOffset[2 * t + 1] : this._getCoordsFromItemModel(t).length
			},
			getLineCoords: function(t, e) {
				if(this._flatCoordsOffset) {
					for(var n = this._flatCoordsOffset[2 * t], i = this._flatCoordsOffset[2 * t + 1], a = 0; i > a; a++) e[a] = e[a] || [], e[a][0] = this._flatCoords[n + 2 * a], e[a][1] = this._flatCoords[n + 2 * a + 1];
					return i
				}
				for(var o = this._getCoordsFromItemModel(t), a = 0; a < o.length; a++) e[a] = e[a] || [], e[a][0] = o[a][0], e[a][1] = o[a][1];
				return o.length
			},
			_processFlatCoordsArray: function(t) {
				var e = 0;
				if(this._flatCoords && (e = this._flatCoords.length), "number" == typeof t[0]) {
					for(var n = t.length, i = new ZP(n), a = new XP(n), o = 0, r = 0, s = 0, l = 0; n > l;) {
						s++;
						var u = t[l++];
						i[r++] = o + e, i[r++] = u;
						for(var h = 0; u > h; h++) {
							var c = t[l++],
								d = t[l++];
							a[o++] = c, a[o++] = d
						}
					}
					return {
						flatCoordsOffset: new Uint32Array(i.buffer, 0, r),
						flatCoords: a,
						count: s
					}
				}
				return {
					flatCoordsOffset: null,
					flatCoords: null,
					count: t.length
				}
			},
			getInitialData: function(t) {
				var e = new GD(["value"], this);
				return e.hasItemOption = !1, e.initData(t.data, [], function(t, n, i, a) {
					if(t instanceof Array) return 0 / 0;
					e.hasItemOption = !0;
					var o = t.value;
					return null != o ? o instanceof Array ? o[a] : o : void 0
				}), e
			},
			formatTooltip: function(t) {
				var e = this.getData(),
					n = e.getItemModel(t),
					i = n.get("name");
				if(i) return i;
				var a = n.get("fromName"),
					o = n.get("toName"),
					r = [];
				return null != a && r.push(a), null != o && r.push(o), vr(r.join(" > "))
			},
			preventIncremental: function() {
				return !!this.get("effect.show")
			},
			getProgressive: function() {
				var t = this.option.progressive;
				return null == t ? this.option.large ? 1e4 : this.get("progressive") : t
			},
			getProgressiveThreshold: function() {
				var t = this.option.progressiveThreshold;
				return null == t ? this.option.large ? 2e4 : this.get("progressiveThreshold") : t
			},
			defaultOption: {
				coordinateSystem: "geo",
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				hoverAnimation: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				symbol: ["none", "none"],
				symbolSize: [10, 10],
				geoIndex: 0,
				effect: {
					show: !1,
					period: 4,
					constantSpeed: 0,
					symbol: "circle",
					symbolSize: 3,
					loop: !0,
					trailLength: .2
				},
				large: !1,
				largeThreshold: 2e3,
				polyline: !1,
				label: {
					show: !1,
					position: "end"
				},
				lineStyle: {
					opacity: .5
				}
			}
		}),
		UP = PI.prototype,
		jP = NI.prototype,
		qP = to({
			type: "ec-line",
			style: {
				stroke: "#000",
				fill: null
			},
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				percent: 1,
				cpx1: null,
				cpy1: null
			},
			buildPath: function(t, e) {
				(Jp(e) ? UP : jP).buildPath(t, e)
			},
			pointAt: function(t) {
				return Jp(this.shape) ? UP.pointAt.call(this, t) : jP.pointAt.call(this, t)
			},
			tangentAt: function(t) {
				var e = this.shape,
					n = Jp(e) ? [e.x2 - e.x1, e.y2 - e.y1] : jP.tangentAt.call(this, t);
				return te(n, n)
			}
		}),
		KP = ["fromSymbol", "toSymbol"],
		$P = ag.prototype;
	$P.beforeUpdate = ig, $P._createLine = function(t, e, n) {
		var i = t.hostModel,
			a = t.getItemLayout(e),
			o = eg(a);
		o.shape.percent = 0, Ro(o, {
			shape: {
				percent: 1
			}
		}, i, e), this.add(o);
		var r = new yI({
			name: "label",
			lineLabelOriginalOpacity: 1
		});
		this.add(r), f(KP, function(n) {
			var i = tg(n, t, e);
			this.add(i), this[Qp(n)] = t.getItemVisual(e, n)
		}, this), this._updateCommonStl(t, e, n)
	}, $P.updateData = function(t, e, n) {
		var i = t.hostModel,
			a = this.childOfName("line"),
			o = t.getItemLayout(e),
			r = {
				shape: {}
			};
		ng(r.shape, o), zo(a, r, i, e), f(KP, function(n) {
			var i = t.getItemVisual(e, n),
				a = Qp(n);
			if(this[a] !== i) {
				this.remove(this.childOfName(n));
				var o = tg(n, t, e);
				this.add(o)
			}
			this[a] = i
		}, this), this._updateCommonStl(t, e, n)
	}, $P._updateCommonStl = function(t, e, n) {
		var i = t.hostModel,
			a = this.childOfName("line"),
			o = n && n.lineStyle,
			r = n && n.hoverLineStyle,
			l = n && n.labelModel,
			u = n && n.hoverLabelModel;
		if(!n || t.hasItemOption) {
			var h = t.getItemModel(e);
			o = h.getModel("lineStyle").getLineStyle(), r = h.getModel("emphasis.lineStyle").getLineStyle(), l = h.getModel("label"), u = h.getModel("emphasis.label")
		}
		var c = t.getItemVisual(e, "color"),
			d = L(t.getItemVisual(e, "opacity"), o.opacity, 1);
		a.useStyle(s({
			strokeNoScale: !0,
			fill: "none",
			stroke: c,
			opacity: d
		}, o)), a.hoverStyle = r, f(KP, function(t) {
			var e = this.childOfName(t);
			e && (e.setColor(c), e.setStyle({
				opacity: d
			}))
		}, this);
		var p, g, m = l.getShallow("show"),
			v = u.getShallow("show"),
			y = this.childOfName("label");
		if((m || v) && (p = c || "#000", g = i.getFormattedLabel(e, "normal", t.dataType), null == g)) {
			var x = i.getRawValue(e);
			g = null == x ? t.getName(e) : isFinite(x) ? tr(x) : x
		}
		var _ = m ? g : null,
			w = v ? C(i.getFormattedLabel(e, "emphasis", t.dataType), g) : null,
			b = y.style;
		(null != _ || null != w) && (To(y.style, l, {
			text: _
		}, {
			autoColor: p
		}), y.__textAlign = b.textAlign, y.__verticalAlign = b.textVerticalAlign, y.__position = l.get("position") || "middle"), y.hoverStyle = null != w ? {
			text: w,
			textFill: u.getTextColor(!0),
			fontStyle: u.getShallow("fontStyle"),
			fontWeight: u.getShallow("fontWeight"),
			fontSize: u.getShallow("fontSize"),
			fontFamily: u.getShallow("fontFamily")
		} : {
			text: null
		}, y.ignore = !m && !v, So(this)
	}, $P.highlight = function() {
		this.trigger("emphasis")
	}, $P.downplay = function() {
		this.trigger("normal")
	}, $P.updateLayout = function(t, e) {
		this.setLinePoints(t.getItemLayout(e))
	}, $P.setLinePoints = function(t) {
		var e = this.childOfName("line");
		ng(e.shape, t), e.dirty()
	}, h(ag, rS);
	var JP = og.prototype;
	JP.isPersistent = function() {
		return !0
	}, JP.updateData = function(t) {
		var e = this,
			n = e.group,
			i = e._lineData;
		e._lineData = t, i || n.removeAll();
		var a = lg(t);
		t.diff(i).add(function(n) {
			rg(e, t, n, a)
		}).update(function(n, o) {
			sg(e, i, t, o, n, a)
		}).remove(function(t) {
			n.remove(i.getItemGraphicEl(t))
		}).execute()
	}, JP.updateLayout = function() {
		var t = this._lineData;
		t && t.eachItemGraphicEl(function(e, n) {
			e.updateLayout(t, n)
		}, this)
	}, JP.incrementalPrepareUpdate = function(t) {
		this._seriesScope = lg(t), this._lineData = null, this.group.removeAll()
	}, JP.incrementalUpdate = function(t, e) {
		function n(t) {
			t.isGroup || (t.incremental = t.useHoverLayer = !0)
		}
		for(var i = t.start; i < t.end; i++) {
			var a = e.getItemLayout(i);
			if(hg(a)) {
				var o = new this._ctor(e, i, this._seriesScope);
				o.traverse(n), this.group.add(o), e.setItemGraphicEl(i, o)
			}
		}
	}, JP.remove = function() {
		this._clearIncremental(), this._incremental = null, this.group.removeAll()
	}, JP._clearIncremental = function() {
		var t = this._incremental;
		t && t.clearDisplaybles()
	};
	var QP = cg.prototype;
	QP.createLine = function(t, e, n) {
		return new ag(t, e, n)
	}, QP._updateEffectSymbol = function(t, e) {
		var n = t.getItemModel(e),
			i = n.getModel("effect"),
			a = i.get("symbolSize"),
			o = i.get("symbol");
		_(a) || (a = [a, a]);
		var r = i.get("color") || t.getItemVisual(e, "color"),
			s = this.childAt(1);
		this._symbolType !== o && (this.remove(s), s = Ih(o, -.5, -.5, 1, 1, r), s.z2 = 100, s.culling = !0, this.add(s)), s && (s.setStyle("shadowColor", r), s.setStyle(i.getItemStyle(["color"])), s.attr("scale", a), s.setColor(r), s.attr("scale", a), this._symbolType = o, this._updateEffectAnimation(t, i, e))
	}, QP._updateEffectAnimation = function(t, e, n) {
		var i = this.childAt(1);
		if(i) {
			var a = this,
				o = t.getItemLayout(n),
				r = 1e3 * e.get("period"),
				s = e.get("loop"),
				l = e.get("constantSpeed"),
				u = D(e.get("delay"), function(e) {
					return e / t.count() * r / 3
				}),
				h = "function" == typeof u;
			if(i.ignore = !0, this.updateAnimationPoints(i, o), l > 0 && (r = this.getLineLength(i) / l * 1e3), r !== this._period || s !== this._loop) {
				i.stopAnimation();
				var c = u;
				h && (c = u(n)), i.__t > 0 && (c = -r * i.__t), i.__t = 0;
				var d = i.animate("", s).when(r, {
					__t: 1
				}).delay(c).during(function() {
					a.updateSymbolPosition(i)
				});
				s || d.done(function() {
					a.remove(i)
				}), d.start()
			}
			this._period = r, this._loop = s
		}
	}, QP.getLineLength = function(t) {
		return pb(t.__p1, t.__cp1) + pb(t.__cp1, t.__p2)
	}, QP.updateAnimationPoints = function(t, e) {
		t.__p1 = e[0], t.__p2 = e[1], t.__cp1 = e[2] || [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
	}, QP.updateData = function(t, e, n) {
		this.childAt(0).updateData(t, e, n), this._updateEffectSymbol(t, e)
	}, QP.updateSymbolPosition = function(t) {
		var e = t.__p1,
			n = t.__p2,
			i = t.__cp1,
			a = t.__t,
			o = t.position,
			r = ga,
			s = ma;
		o[0] = r(e[0], i[0], n[0], a), o[1] = r(e[1], i[1], n[1], a);
		var l = s(e[0], i[0], n[0], a),
			u = s(e[1], i[1], n[1], a);
		t.rotation = -Math.atan2(u, l) - Math.PI / 2, t.ignore = !1
	}, QP.updateLayout = function(t, e) {
		this.childAt(0).updateLayout(t, e);
		var n = t.getItemModel(e).getModel("effect");
		this._updateEffectAnimation(t, n, e)
	}, h(cg, rS);
	var tO = dg.prototype;
	tO._createPolyline = function(t, e, n) {
		var i = t.getItemLayout(e),
			a = new AI({
				shape: {
					points: i
				}
			});
		this.add(a), this._updateCommonStl(t, e, n)
	}, tO.updateData = function(t, e, n) {
		var i = t.hostModel,
			a = this.childAt(0),
			o = {
				shape: {
					points: t.getItemLayout(e)
				}
			};
		zo(a, o, i, e), this._updateCommonStl(t, e, n)
	}, tO._updateCommonStl = function(t, e, n) {
		var i = this.childAt(0),
			a = t.getItemModel(e),
			o = t.getItemVisual(e, "color"),
			r = n && n.lineStyle,
			l = n && n.hoverLineStyle;
		(!n || t.hasItemOption) && (r = a.getModel("lineStyle").getLineStyle(), l = a.getModel("emphasis.lineStyle").getLineStyle()), i.useStyle(s({
			strokeNoScale: !0,
			fill: "none",
			stroke: o
		}, r)), i.hoverStyle = l, So(this)
	}, tO.updateLayout = function(t, e) {
		var n = this.childAt(0);
		n.setShape("points", t.getItemLayout(e))
	}, h(dg, rS);
	var eO = fg.prototype;
	eO.createLine = function(t, e, n) {
		return new dg(t, e, n)
	}, eO.updateAnimationPoints = function(t, e) {
		this._points = e;
		for(var n = [0], i = 0, a = 1; a < e.length; a++) {
			var o = e[a - 1],
				r = e[a];
			i += pb(o, r), n.push(i)
		}
		if(0 !== i) {
			for(var a = 0; a < n.length; a++) n[a] /= i;
			this._offsets = n, this._length = i
		}
	}, eO.getLineLength = function() {
		return this._length
	}, eO.updateSymbolPosition = function(t) {
		var e = t.__t,
			n = this._points,
			i = this._offsets,
			a = n.length;
		if(i) {
			var o, r = this._lastFrame;
			if(e < this._lastFramePercent) {
				var s = Math.min(r + 1, a - 1);
				for(o = s; o >= 0 && !(i[o] <= e); o--);
				o = Math.min(o, a - 2)
			} else {
				for(var o = r; a > o && !(i[o] > e); o++);
				o = Math.min(o - 1, a - 2)
			}
			ae(t.position, n[o], n[o + 1], (e - i[o]) / (i[o + 1] - i[o]));
			var l = n[o + 1][0] - n[o][0],
				u = n[o + 1][1] - n[o][1];
			t.rotation = -Math.atan2(u, l) - Math.PI / 2, this._lastFrame = o, this._lastFramePercent = e, t.ignore = !1
		}
	}, h(fg, cg);
	var nO = to({
			shape: {
				polyline: !1,
				curveness: 0,
				segs: []
			},
			buildPath: function(t, e) {
				var n = e.segs,
					i = e.curveness;
				if(e.polyline)
					for(var a = 0; a < n.length;) {
						var o = n[a++];
						if(o > 0) {
							t.moveTo(n[a++], n[a++]);
							for(var r = 1; o > r; r++) t.lineTo(n[a++], n[a++])
						}
					} else
						for(var a = 0; a < n.length;) {
							var s = n[a++],
								l = n[a++],
								u = n[a++],
								h = n[a++];
							if(t.moveTo(s, l), i > 0) {
								var c = (s + u) / 2 - (l - h) * i,
									d = (l + h) / 2 - (u - s) * i;
								t.quadraticCurveTo(c, d, u, h)
							} else t.lineTo(u, h)
						}
			},
			findDataIndex: function() {
				var t = this.shape,
					e = t.segs,
					n = t.curveness;
				if(t.polyline)
					for(var i = 0, a = 0; a < e.length;) {
						var o = e[a++];
						if(o > 0)
							for(var r = e[a++], s = e[a++], l = 1; o > l; l++) {
								var u = e[a++],
									h = e[a++];
								if(Ta(r, s, u, h)) return i
							}
						i++
					} else
						for(var i = 0, a = 0; a < e.length;) {
							var r = e[a++],
								s = e[a++],
								u = e[a++],
								h = e[a++];
							if(n > 0) {
								var c = (r + u) / 2 - (s - h) * n,
									d = (s + h) / 2 - (u - r) * n;
								if(Da(r, s, c, d, u, h)) return i
							} else if(Ta(r, s, u, h)) return i;
							i++
						}
				return -1
			}
		}),
		iO = pg.prototype;
	iO.isPersistent = function() {
		return !this._incremental
	}, iO.updateData = function(t) {
		this.group.removeAll();
		var e = new nO({
			rectHover: !0,
			cursor: "default"
		});
		e.setShape({
			segs: t.getLayout("linesPoints")
		}), this._setCommon(e, t), this.group.add(e), this._incremental = null
	}, iO.incrementalPrepareUpdate = function(t) {
		this.group.removeAll(), this._clearIncremental(), t.count() > 5e5 ? (this._incremental || (this._incremental = new Qa({
			silent: !0
		})), this.group.add(this._incremental)) : this._incremental = null
	}, iO.incrementalUpdate = function(t, e) {
		var n = new nO;
		n.setShape({
			segs: e.getLayout("linesPoints")
		}), this._setCommon(n, e, !!this._incremental), this._incremental ? this._incremental.addDisplayable(n, !0) : (n.rectHover = !0, n.cursor = "default", n.__startIndex = t.start, this.group.add(n))
	}, iO.remove = function() {
		this._clearIncremental(), this._incremental = null, this.group.removeAll()
	}, iO._setCommon = function(t, e, n) {
		var i = e.hostModel;
		t.setShape({
			polyline: i.get("polyline"),
			curveness: i.get("lineStyle.curveness")
		}), t.useStyle(i.getModel("lineStyle").getLineStyle()), t.style.strokeNoScale = !0;
		var a = e.getVisual("color");
		a && t.setStyle("stroke", a), t.setStyle("fill"), n || (t.seriesIndex = i.seriesIndex, t.on("mousemove", function(e) {
			t.dataIndex = null;
			var n = t.findDataIndex(e.offsetX, e.offsetY);
			n > 0 && (t.dataIndex = n + t.__startIndex)
		}))
	}, iO._clearIncremental = function() {
		var t = this._incremental;
		t && t.clearDisplaybles()
	};
	var aO = {
		seriesType: "lines",
		plan: hA(),
		reset: function(t) {
			function e(e, o) {
				var r = [];
				if(a) {
					var s, l = e.end - e.start;
					if(i) {
						for(var u = 0, h = e.start; h < e.end; h++) u += t.getLineCoordsCount(h);
						s = new Float32Array(l + 2 * u)
					} else s = new Float32Array(4 * l);
					for(var c = 0, d = [], h = e.start; h < e.end; h++) {
						var f = t.getLineCoords(h, r);
						i && (s[c++] = f);
						for(var p = 0; f > p; p++) d = n.dataToPoint(r[p], !1, d), s[c++] = d[0], s[c++] = d[1]
					}
					o.setLayout("linesPoints", s)
				} else
					for(var h = e.start; h < e.end; h++) {
						var g = o.getItemModel(h),
							f = t.getLineCoords(h, r),
							m = [];
						if(i)
							for(var v = 0; f > v; v++) m.push(n.dataToPoint(r[v]));
						else {
							m[0] = n.dataToPoint(r[0]), m[1] = n.dataToPoint(r[1]);
							var y = g.get("lineStyle.curveness"); + y && (m[2] = [(m[0][0] + m[1][0]) / 2 - (m[0][1] - m[1][1]) * y, (m[0][1] + m[1][1]) / 2 - (m[1][0] - m[0][0]) * y])
						}
						o.setItemLayout(h, m)
					}
			}
			var n = t.coordinateSystem,
				i = t.get("polyline"),
				a = t.pipelineContext.large;
			return {
				progress: e
			}
		}
	};
	pu({
		type: "lines",
		init: function() {},
		render: function(t, e, n) {
			var i = t.getData(),
				a = this._updateLineDraw(i, t),
				o = t.get("zlevel"),
				r = t.get("effect.trailLength"),
				s = n.getZr(),
				l = "svg" === s.painter.getType();
			l || s.painter.getLayer(o).clear(!0), null == this._lastZlevel || l || s.configLayer(this._lastZlevel, {
				motionBlur: !1
			}), this._showEffect(t) && r && (l || s.configLayer(o, {
				motionBlur: !0,
				lastFrameAlpha: Math.max(Math.min(r / 10 + .9, 1), 0)
			})), a.updateData(i), this._lastZlevel = o, this._finished = !0
		},
		incrementalPrepareRender: function(t, e, n) {
			var i = t.getData(),
				a = this._updateLineDraw(i, t);
			a.incrementalPrepareUpdate(i), this._clearLayer(n), this._finished = !1
		},
		incrementalRender: function(t, e) {
			this._lineDraw.incrementalUpdate(t, e.getData()), this._finished = t.end === e.getData().count()
		},
		updateTransform: function(t, e, n) {
			var i = t.getData(),
				a = t.pipelineContext;
			if(!this._finished || a.large || a.progressiveRender) return {
				update: !0
			};
			var o = aO.reset(t);
			o.progress && o.progress({
				start: 0,
				end: i.count()
			}, i), this._lineDraw.updateLayout(), this._clearLayer(n)
		},
		_updateLineDraw: function(t, e) {
			var n = this._lineDraw,
				i = this._showEffect(e),
				a = !!e.get("polyline"),
				o = e.pipelineContext,
				r = o.large;
			return n && i === this._hasEffet && a === this._isPolyline && r === this._isLargeDraw || (n && n.remove(), n = this._lineDraw = r ? new pg : new og(a ? i ? fg : dg : i ? cg : ag), this._hasEffet = i, this._isPolyline = a, this._isLargeDraw = r, this.group.removeAll()), this.group.add(n.group), n
		},
		_showEffect: function(t) {
			return !!t.get("effect.show")
		},
		_clearLayer: function(t) {
			var e = t.getZr(),
				n = "svg" === e.painter.getType();
			n || null == this._lastZlevel || e.painter.getLayer(this._lastZlevel).clear(!0)
		},
		remove: function(t, e) {
			this._lineDraw && this._lineDraw.remove(), this._lineDraw = null, this._clearLayer(e)
		},
		dispose: function() {}
	});
	var oO = "lineStyle.opacity".split("."),
		rO = {
			seriesType: "lines",
			reset: function(t) {
				function e(t, e) {
					var n = t.getItemModel(e),
						i = gg(n.getShallow("symbol", !0)),
						a = gg(n.getShallow("symbolSize", !0)),
						o = n.get(oO);
					i[0] && t.setItemVisual(e, "fromSymbol", i[0]), i[1] && t.setItemVisual(e, "toSymbol", i[1]), a[0] && t.setItemVisual(e, "fromSymbolSize", a[0]), a[1] && t.setItemVisual(e, "toSymbolSize", a[1]), t.setItemVisual(e, "opacity", o)
				}
				var n = gg(t.get("symbol")),
					i = gg(t.get("symbolSize")),
					a = t.getData();
				return a.setVisual("fromSymbol", n && n[0]), a.setVisual("toSymbol", n && n[1]), a.setVisual("fromSymbolSize", i && i[0]), a.setVisual("toSymbolSize", i && i[1]), a.setVisual("opacity", t.get(oO)), {
					dataEach: a.hasItemOption ? e : null
				}
			}
		};
	su(aO), lu(rO);
	var sO = function(t) {
			this._directed = t || !1, this.nodes = [], this.edges = [], this._nodesMap = {}, this._edgesMap = {}, this.data, this.edgeData
		},
		lO = sO.prototype;
	lO.type = "graph", lO.isDirected = function() {
		return this._directed
	}, lO.addNode = function(t, e) {
		t = t || "" + e;
		var n = this._nodesMap;
		if(!n[mg(t)]) {
			var i = new vg(t, e);
			return i.hostGraph = this, this.nodes.push(i), n[mg(t)] = i, i
		}
	}, lO.getNodeByIndex = function(t) {
		var e = this.data.getRawIndex(t);
		return this.nodes[e]
	}, lO.getNodeById = function(t) {
		return this._nodesMap[mg(t)]
	}, lO.addEdge = function(t, e, n) {
		var i = this._nodesMap,
			a = this._edgesMap;
		if("number" == typeof t && (t = this.nodes[t]), "number" == typeof e && (e = this.nodes[e]), vg.isInstance(t) || (t = i[mg(t)]), vg.isInstance(e) || (e = i[mg(e)]), t && e) {
			var o = t.id + "-" + e.id;
			if(!a[o]) {
				var r = new yg(t, e, n);
				return r.hostGraph = this, this._directed && (t.outEdges.push(r), e.inEdges.push(r)), t.edges.push(r), t !== e && e.edges.push(r), this.edges.push(r), a[o] = r, r
			}
		}
	}, lO.getEdgeByIndex = function(t) {
		var e = this.edgeData.getRawIndex(t);
		return this.edges[e]
	}, lO.getEdge = function(t, e) {
		vg.isInstance(t) && (t = t.id), vg.isInstance(e) && (e = e.id);
		var n = this._edgesMap;
		return this._directed ? n[t + "-" + e] : n[t + "-" + e] || n[e + "-" + t]
	}, lO.eachNode = function(t, e) {
		for(var n = this.nodes, i = n.length, a = 0; i > a; a++) n[a].dataIndex >= 0 && t.call(e, n[a], a)
	}, lO.eachEdge = function(t, e) {
		for(var n = this.edges, i = n.length, a = 0; i > a; a++) n[a].dataIndex >= 0 && n[a].node1.dataIndex >= 0 && n[a].node2.dataIndex >= 0 && t.call(e, n[a], a)
	}, lO.breadthFirstTraverse = function(t, e, n, i) {
		if(vg.isInstance(e) || (e = this._nodesMap[mg(e)]), e) {
			for(var a = "out" === n ? "outEdges" : "in" === n ? "inEdges" : "edges", o = 0; o < this.nodes.length; o++) this.nodes[o].__visited = !1;
			if(!t.call(i, e, null))
				for(var r = [e]; r.length;)
					for(var s = r.shift(), l = s[a], o = 0; o < l.length; o++) {
						var u = l[o],
							h = u.node1 === s ? u.node2 : u.node1;
						if(!h.__visited) {
							if(t.call(i, h, s)) return;
							r.push(h), h.__visited = !0
						}
					}
		}
	}, lO.update = function() {
		for(var t = this.data, e = this.edgeData, n = this.nodes, i = this.edges, a = 0, o = n.length; o > a; a++) n[a].dataIndex = -1;
		for(var a = 0, o = t.count(); o > a; a++) n[t.getRawIndex(a)].dataIndex = a;
		e.filterSelf(function(t) {
			var n = i[e.getRawIndex(t)];
			return n.node1.dataIndex >= 0 && n.node2.dataIndex >= 0
		});
		for(var a = 0, o = i.length; o > a; a++) i[a].dataIndex = -1;
		for(var a = 0, o = e.count(); o > a; a++) i[e.getRawIndex(a)].dataIndex = a
	}, lO.clone = function() {
		for(var t = new sO(this._directed), e = this.nodes, n = this.edges, i = 0; i < e.length; i++) t.addNode(e[i].id, e[i].dataIndex);
		for(var i = 0; i < n.length; i++) {
			var a = n[i];
			t.addEdge(a.node1.id, a.node2.id, a.dataIndex)
		}
		return t
	}, vg.prototype = {
		constructor: vg,
		degree: function() {
			return this.edges.length
		},
		inDegree: function() {
			return this.inEdges.length
		},
		outDegree: function() {
			return this.outEdges.length
		},
		getModel: function(t) {
			if(!(this.dataIndex < 0)) {
				var e = this.hostGraph,
					n = e.data.getItemModel(this.dataIndex);
				return n.getModel(t)
			}
		}
	}, yg.prototype.getModel = function(t) {
		if(!(this.dataIndex < 0)) {
			var e = this.hostGraph,
				n = e.edgeData.getItemModel(this.dataIndex);
			return n.getModel(t)
		}
	};
	var uO = function(t, e) {
		return {
			getValue: function(n) {
				var i = this[t][e];
				return i.get(i.getDimension(n || "value"), this.dataIndex)
			},
			setVisual: function(n, i) {
				this.dataIndex >= 0 && this[t][e].setItemVisual(this.dataIndex, n, i)
			},
			getVisual: function(n, i) {
				return this[t][e].getItemVisual(this.dataIndex, n, i)
			},
			setLayout: function(n, i) {
				this.dataIndex >= 0 && this[t][e].setItemLayout(this.dataIndex, n, i)
			},
			getLayout: function() {
				return this[t][e].getItemLayout(this.dataIndex)
			},
			getGraphicEl: function() {
				return this[t][e].getItemGraphicEl(this.dataIndex)
			},
			getRawIndex: function() {
				return this[t][e].getRawIndex(this.dataIndex)
			}
		}
	};
	c(vg, uO("hostGraph", "data")), c(yg, uO("hostGraph", "edgeData")), sO.Node = vg, sO.Edge = yg, ia(vg), ia(yg);
	var hO = function(t, e, n, i, a) {
			for(var o = new sO(i), r = 0; r < t.length; r++) o.addNode(D(t[r].id, t[r].name, r), r);
			for(var s = [], l = [], h = 0, r = 0; r < e.length; r++) {
				var c = e[r],
					d = c.source,
					f = c.target;
				o.addEdge(d, f, h) && (l.push(c), s.push(D(c.id, d + " > " + f)), h++)
			}
			var p, g = n.get("coordinateSystem");
			if("cartesian2d" === g || "polar" === g) p = Hu(t, n);
			else {
				var m = os.get(g),
					v = m && "view" !== m.type ? m.dimensions || [] : [];
				u(v, "value") < 0 && v.concat(["value"]);
				var y = HD(t, {
					coordDimensions: v
				});
				p = new GD(y, n), p.initData(t)
			}
			var x = new GD(["value"], n);
			return x.initData(l, s), a && a(p, x), Gd({
				mainData: p,
				struct: o,
				structAttr: "graph",
				datas: {
					node: p,
					edge: x
				},
				datasAttr: {
					node: "data",
					edge: "edgeData"
				}
			}), o.update(), o
		},
		cO = fu({
			type: "series.graph",
			init: function(t) {
				cO.superApply(this, "init", arguments), this.legendDataProvider = function() {
					return this._categoriesData
				}, this.fillDataTextStyle(t.edges || t.links), this._updateCategoriesData()
			},
			mergeOption: function(t) {
				cO.superApply(this, "mergeOption", arguments), this.fillDataTextStyle(t.edges || t.links), this._updateCategoriesData()
			},
			mergeDefaultAndTheme: function(t) {
				cO.superApply(this, "mergeDefaultAndTheme", arguments), Bi(t, ["edgeLabel"], ["show"])
			},
			getInitialData: function(t, e) {
				function n(t, n) {
					function i(t) {
						return t = this.parsePath(t), t && "label" === t[0] ? r : t && "emphasis" === t[0] && "label" === t[1] ? l : this.parentModel
					}
					t.wrapMethod("getItemModel", function(t) {
						var e = o._categoriesModels,
							n = t.getShallow("category"),
							i = e[n];
						return i && (i.parentModel = t.parentModel, t.parentModel = i), t
					});
					var a = o.getModel("edgeLabel"),
						r = new Xo({
							label: a.option
						}, a.parentModel, e),
						s = o.getModel("emphasis.edgeLabel"),
						l = new Xo({
							emphasis: {
								label: s.option
							}
						}, s.parentModel, e);
					n.wrapMethod("getItemModel", function(t) {
						return t.customizeGetParent(i), t
					})
				}
				var i = t.edges || t.links || [],
					a = t.data || t.nodes || [],
					o = this;
				return a && i ? hO(a, i, this, !0, n).data : void 0
			},
			getGraph: function() {
				return this.getData().graph
			},
			getEdgeData: function() {
				return this.getGraph().edgeData
			},
			getCategoriesData: function() {
				return this._categoriesData
			},
			formatTooltip: function(t, e, n) {
				if("edge" === n) {
					var i = this.getData(),
						a = this.getDataParams(t, n),
						o = i.graph.getEdgeByIndex(t),
						r = i.getName(o.node1.dataIndex),
						s = i.getName(o.node2.dataIndex),
						l = [];
					return null != r && l.push(r), null != s && l.push(s), l = vr(l.join(" > ")), a.value && (l += " : " + vr(a.value)), l
				}
				return cO.superApply(this, "formatTooltip", arguments)
			},
			_updateCategoriesData: function() {
				var t = p(this.option.categories || [], function(t) {
						return null != t.value ? t : r({
							value: 0
						}, t)
					}),
					e = new GD(["value"], this);
				e.initData(t), this._categoriesData = e, this._categoriesModels = e.mapArray(function(t) {
					return e.getItemModel(t, !0)
				})
			},
			setZoom: function(t) {
				this.option.zoom = t
			},
			setCenter: function(t) {
				this.option.center = t
			},
			isAnimationEnabled: function() {
				return cO.superCall(this, "isAnimationEnabled") && !("force" === this.get("layout") && this.get("force.layoutAnimation"))
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "view",
				legendHoverLink: !0,
				hoverAnimation: !0,
				layout: null,
				focusNodeAdjacency: !1,
				circular: {
					rotateLabel: !1
				},
				force: {
					initLayout: null,
					repulsion: [0, 50],
					gravity: .1,
					edgeLength: 30,
					layoutAnimation: !0
				},
				left: "center",
				top: "center",
				symbol: "circle",
				symbolSize: 10,
				edgeSymbol: ["none", "none"],
				edgeSymbolSize: 10,
				edgeLabel: {
					position: "middle"
				},
				draggable: !1,
				roam: !1,
				center: null,
				zoom: 1,
				nodeScaleRatio: .6,
				label: {
					show: !1,
					formatter: "{b}"
				},
				itemStyle: {},
				lineStyle: {
					color: "#aaa",
					width: 1,
					curveness: 0,
					opacity: .5
				},
				emphasis: {
					label: {
						show: !0
					}
				}
			}
		}),
		dO = [],
		fO = [],
		pO = [],
		gO = ga,
		mO = gb,
		vO = Math.abs,
		yO = function(t, e) {
			function n(t) {
				var e = t.getVisual("symbolSize");
				return e instanceof Array && (e = (e[0] + e[1]) / 2), e
			}
			var i = [],
				a = xa,
				o = [
					[],
					[],
					[]
				],
				r = [
					[],
					[]
				],
				s = [];
			e /= 2, t.eachEdge(function(t) {
				var l = t.getLayout(),
					u = t.getVisual("fromSymbol"),
					h = t.getVisual("toSymbol");
				l.__original || (l.__original = [H(l[0]), H(l[1])], l[2] && l.__original.push(H(l[2])));
				var c = l.__original;
				if(null != l[2]) {
					if(W(o[0], c[0]), W(o[1], c[2]), W(o[2], c[1]), u && "none" !== u) {
						var d = n(t.node1),
							f = xg(o, c[0], d * e);
						a(o[0][0], o[1][0], o[2][0], f, i), o[0][0] = i[3], o[1][0] = i[4], a(o[0][1], o[1][1], o[2][1], f, i), o[0][1] = i[3], o[1][1] = i[4]
					}
					if(h && "none" !== h) {
						var d = n(t.node2),
							f = xg(o, c[1], d * e);
						a(o[0][0], o[1][0], o[2][0], f, i), o[1][0] = i[1], o[2][0] = i[2], a(o[0][1], o[1][1], o[2][1], f, i), o[1][1] = i[1], o[2][1] = i[2]
					}
					W(l[0], o[0]), W(l[1], o[2]), W(l[2], o[1])
				} else {
					if(W(r[0], c[0]), W(r[1], c[1]), U(s, r[1], r[0]), te(s, s), u && "none" !== u) {
						var d = n(t.node1);
						Y(r[0], r[0], s, d * e)
					}
					if(h && "none" !== h) {
						var d = n(t.node2);
						Y(r[1], r[1], s, -d * e)
					}
					W(l[0], r[0]), W(l[1], r[1])
				}
			})
		},
		xO = "__focusNodeAdjacency",
		_O = "__unfocusNodeAdjacency",
		wO = ["itemStyle", "opacity"],
		bO = ["lineStyle", "opacity"];
	pu({
		type: "graph",
		init: function(t, e) {
			var n = new Xc,
				i = new og,
				a = this.group;
			this._controller = new xf(e.getZr()), this._controllerHost = {
				target: a
			}, a.add(n.group), a.add(i.group), this._symbolDraw = n, this._lineDraw = i, this._firstRender = !0
		},
		render: function(t, e, n) {
			var i = t.coordinateSystem;
			this._model = t, this._nodeScaleRatio = t.get("nodeScaleRatio");
			var a = this._symbolDraw,
				o = this._lineDraw,
				r = this.group;
			if("view" === i.type) {
				var s = {
					position: i.position,
					scale: i.scale
				};
				this._firstRender ? r.attr(s) : zo(r, s, t)
			}
			yO(t.getGraph(), this._getNodeGlobalScale(t));
			var l = t.getData();
			a.updateData(l);
			var u = t.getEdgeData();
			o.updateData(u), this._updateNodeAndLinkScale(), this._updateController(t, e, n), clearTimeout(this._layoutTimeout);
			var h = t.forceLayout,
				c = t.get("force.layoutAnimation");
			h && this._startForceLayoutIteration(h, c), l.eachItemGraphicEl(function(e, i) {
				var a = l.getItemModel(i);
				e.off("drag").off("dragend");
				var o = a.get("draggable");
				o && e.on("drag", function() {
					h && (h.warmUp(), !this._layouting && this._startForceLayoutIteration(h, c), h.setFixed(i), l.setItemLayout(i, e.position))
				}, this).on("dragend", function() {
					h && h.setUnfixed(i)
				}, this), e.setDraggable(o && h), e[xO] && e.off("mouseover", e[xO]), e[_O] && e.off("mouseout", e[_O]), a.get("focusNodeAdjacency") && (e.on("mouseover", e[xO] = function() {
					n.dispatchAction({
						type: "focusNodeAdjacency",
						seriesId: t.id,
						dataIndex: e.dataIndex
					})
				}), e.on("mouseout", e[_O] = function() {
					n.dispatchAction({
						type: "unfocusNodeAdjacency",
						seriesId: t.id
					})
				}))
			}, this), l.graph.eachEdge(function(e) {
				var i = e.getGraphicEl();
				i[xO] && i.off("mouseover", i[xO]), i[_O] && i.off("mouseout", i[_O]), e.getModel().get("focusNodeAdjacency") && (i.on("mouseover", i[xO] = function() {
					n.dispatchAction({
						type: "focusNodeAdjacency",
						seriesId: t.id,
						edgeDataIndex: e.dataIndex
					})
				}), i.on("mouseout", i[_O] = function() {
					n.dispatchAction({
						type: "unfocusNodeAdjacency",
						seriesId: t.id
					})
				}))
			});
			var d = "circular" === t.get("layout") && t.get("circular.rotateLabel"),
				f = l.getLayout("cx"),
				p = l.getLayout("cy");
			l.eachItemGraphicEl(function(t, e) {
				var n = t.getSymbolPath();
				if(d) {
					var i = l.getItemLayout(e),
						a = Math.atan2(i[1] - p, i[0] - f);
					0 > a && (a = 2 * Math.PI + a);
					var o = i[0] < f;
					o && (a -= Math.PI);
					var r = o ? "left" : "right";
					n.setStyle({
						textRotation: -a,
						textPosition: r,
						textOrigin: "center"
					}), n.hoverStyle && (n.hoverStyle.textPosition = r)
				} else n.setStyle({
					textRotation: 0
				})
			}), this._firstRender = !1
		},
		dispose: function() {
			this._controller && this._controller.dispose(), this._controllerHost = {}
		},
		focusNodeAdjacency: function(t, e, n, i) {
			var a = this._model.getData(),
				o = a.graph,
				r = i.dataIndex,
				s = i.edgeDataIndex,
				l = o.getNodeByIndex(r),
				u = o.getEdgeByIndex(s);
			(l || u) && (o.eachNode(function(t) {
				wg(t, wO, .1)
			}), o.eachEdge(function(t) {
				wg(t, bO, .1)
			}), l && (bg(l, wO), f(l.edges, function(t) {
				t.dataIndex < 0 || (bg(t, bO), bg(t.node1, wO), bg(t.node2, wO))
			})), u && (bg(u, bO), bg(u.node1, wO), bg(u.node2, wO)))
		},
		unfocusNodeAdjacency: function() {
			var t = this._model.getData().graph;
			t.eachNode(function(t) {
				wg(t, wO)
			}), t.eachEdge(function(t) {
				wg(t, bO)
			})
		},
		_startForceLayoutIteration: function(t, e) {
			var n = this;
			! function i() {
				t.step(function(t) {
					n.updateLayout(n._model), (n._layouting = !t) && (e ? n._layoutTimeout = setTimeout(i, 16) : i())
				})
			}()
		},
		_updateController: function(t, e, n) {
			var i = this._controller,
				a = this._controllerHost,
				o = this.group;
			return i.setPointerChecker(function(e, i, a) {
				var r = o.getBoundingRect();
				return r.applyTransform(o.transform), r.contain(i, a) && !Df(e, n, t)
			}), "view" !== t.coordinateSystem.type ? void i.disable() : (i.enable(t.get("roam")), a.zoomLimit = t.get("scaleLimit"), a.zoom = t.coordinateSystem.getZoom(), void i.off("pan").off("zoom").on("pan", function(e) {
				ff(a, e.dx, e.dy), n.dispatchAction({
					seriesId: t.id,
					type: "graphRoam",
					dx: e.dx,
					dy: e.dy
				})
			}).on("zoom", function(e) {
				pf(a, e.scale, e.originX, e.originY), n.dispatchAction({
					seriesId: t.id,
					type: "graphRoam",
					zoom: e.scale,
					originX: e.originX,
					originY: e.originY
				}), this._updateNodeAndLinkScale(), yO(t.getGraph(), this._getNodeGlobalScale(t)), this._lineDraw.updateLayout()
			}, this))
		},
		_updateNodeAndLinkScale: function() {
			var t = this._model,
				e = t.getData(),
				n = this._getNodeGlobalScale(t),
				i = [n, n];
			e.eachItemGraphicEl(function(t) {
				t.attr("scale", i)
			})
		},
		_getNodeGlobalScale: function(t) {
			var e = t.coordinateSystem;
			if("view" !== e.type) return 1;
			var n = this._nodeScaleRatio,
				i = e.scale,
				a = i && i[0] || 1,
				o = e.getZoom(),
				r = (o - 1) * n + 1;
			return r / a
		},
		updateLayout: function(t) {
			yO(t.getGraph(), this._getNodeGlobalScale(t)), this._symbolDraw.updateLayout(), this._lineDraw.updateLayout()
		},
		remove: function() {
			this._symbolDraw && this._symbolDraw.remove(), this._lineDraw && this._lineDraw.remove()
		}
	}), au({
		type: "focusNodeAdjacency",
		event: "focusNodeAdjacency",
		update: "series:focusNodeAdjacency"
	}, function() {}), au({
		type: "unfocusNodeAdjacency",
		event: "unfocusNodeAdjacency",
		update: "series:unfocusNodeAdjacency"
	}, function() {});
	var SO = {
		type: "graphRoam",
		event: "graphRoam",
		update: "none"
	};
	au(SO, function(t, e) {
		e.eachComponent({
			mainType: "series",
			query: t
		}, function(e) {
			var n = e.coordinateSystem,
				i = Nf(n, t);
			e.setCenter && e.setCenter(i.center), e.setZoom && e.setZoom(i.zoom)
		})
	});
	var MO = function(t) {
			var e = t.findComponents({
				mainType: "legend"
			});
			e && e.length && t.eachSeriesByType("graph", function(t) {
				var n = t.getCategoriesData(),
					i = t.getGraph(),
					a = i.data,
					o = n.mapArray(n.getName);
				a.filterSelf(function(t) {
					var n = a.getItemModel(t),
						i = n.getShallow("category");
					if(null != i) {
						"number" == typeof i && (i = o[i]);
						for(var r = 0; r < e.length; r++)
							if(!e[r].isSelected(i)) return !1
					}
					return !0
				})
			}, this)
		},
		IO = function(t) {
			var e = {};
			t.eachSeriesByType("graph", function(t) {
				var n = t.getCategoriesData(),
					i = t.getData(),
					a = {};
				n.each(function(i) {
					var o = n.getName(i);
					a["ec-" + o] = i;
					var r = n.getItemModel(i),
						s = r.get("itemStyle.color") || t.getColorFromPalette(o, e);
					n.setItemVisual(i, "color", s)
				}), n.count() && i.each(function(t) {
					var e = i.getItemModel(t),
						o = e.getShallow("category");
					null != o && ("string" == typeof o && (o = a["ec-" + o]), i.getItemVisual(t, "color", !0) || i.setItemVisual(t, "color", n.getItemVisual(o, "color")))
				})
			})
		},
		TO = function(t) {
			t.eachSeriesByType("graph", function(t) {
				var e = t.getGraph(),
					n = t.getEdgeData(),
					i = Sg(t.get("edgeSymbol")),
					a = Sg(t.get("edgeSymbolSize")),
					o = "lineStyle.color".split("."),
					r = "lineStyle.opacity".split(".");
				n.setVisual("fromSymbol", i && i[0]), n.setVisual("toSymbol", i && i[1]), n.setVisual("fromSymbolSize", a && a[0]), n.setVisual("toSymbolSize", a && a[1]), n.setVisual("color", t.get(o)), n.setVisual("opacity", t.get(r)), n.each(function(t) {
					var i = n.getItemModel(t),
						a = e.getEdgeByIndex(t),
						s = Sg(i.getShallow("symbol", !0)),
						l = Sg(i.getShallow("symbolSize", !0)),
						u = i.get(o),
						h = i.get(r);
					switch(u) {
						case "source":
							u = a.node1.getVisual("color");
							break;
						case "target":
							u = a.node2.getVisual("color")
					}
					s[0] && a.setVisual("fromSymbol", s[0]), s[1] && a.setVisual("toSymbol", s[1]), l[0] && a.setVisual("fromSymbolSize", l[0]), l[1] && a.setVisual("toSymbolSize", l[1]), a.setVisual("color", u), a.setVisual("opacity", h)
				})
			})
		},
		AO = function(t) {
			t.eachSeriesByType("graph", function(t) {
				var e = t.get("layout"),
					n = t.coordinateSystem;
				if(n && "view" !== n.type) {
					var i = t.getData(),
						a = [];
					f(n.dimensions, function(t) {
						a = a.concat(i.mapDimension(t, !0))
					});
					for(var o = 0; o < i.count(); o++) {
						for(var r = [], s = !1, l = 0; l < a.length; l++) {
							var u = i.get(a[l], o);
							isNaN(u) || (s = !0), r.push(u)
						}
						s ? i.setItemLayout(o, n.dataToPoint(r)) : i.setItemLayout(o, [0 / 0, 0 / 0])
					}
					Ig(i.graph)
				} else e && "none" !== e || Mg(t)
			})
		},
		DO = function(t) {
			t.eachSeriesByType("graph", function(t) {
				"circular" === t.get("layout") && Tg(t)
			})
		},
		CO = Y,
		LO = function(t) {
			t.eachSeriesByType("graph", function(t) {
				var e = t.coordinateSystem;
				if(!e || "view" === e.type)
					if("force" === t.get("layout")) {
						var n = t.preservedPoints || {},
							i = t.getGraph(),
							a = i.data,
							o = i.edgeData,
							r = t.getModel("force"),
							s = r.get("initLayout");
						t.preservedPoints ? a.each(function(t) {
							var e = a.getId(t);
							a.setItemLayout(t, n[e] || [0 / 0, 0 / 0])
						}) : s && "none" !== s ? "circular" === s && Tg(t) : Mg(t);
						var l = a.getDataExtent("value"),
							u = o.getDataExtent("value"),
							h = r.get("repulsion"),
							c = r.get("edgeLength");
						_(h) || (h = [h, h]), _(c) || (c = [c, c]), c = [c[1], c[0]];
						var d = a.mapArray("value", function(t, e) {
								var n = a.getItemLayout(e),
									i = Jo(t, l, h);
								return isNaN(i) && (i = (h[0] + h[1]) / 2), {
									w: i,
									rep: i,
									fixed: a.getItemModel(e).get("fixed"),
									p: !n || isNaN(n[0]) || isNaN(n[1]) ? null : n
								}
							}),
							f = o.mapArray("value", function(t, e) {
								var n = i.getEdgeByIndex(e),
									a = Jo(t, u, c);
								return isNaN(a) && (a = (c[0] + c[1]) / 2), {
									n1: d[n.node1.dataIndex],
									n2: d[n.node2.dataIndex],
									d: a,
									curveness: n.getModel().get("lineStyle.curveness") || 0
								}
							}),
							e = t.coordinateSystem,
							p = e.getBoundingRect(),
							g = Ag(d, f, {
								rect: p,
								gravity: r.get("gravity")
							}),
							m = g.step;
						g.step = function(t) {
							for(var e = 0, o = d.length; o > e; e++) d[e].fixed && W(d[e].p, i.getNodeByIndex(e).getLayout());
							m(function(e, o, r) {
								for(var s = 0, l = e.length; l > s; s++) e[s].fixed || i.getNodeByIndex(s).setLayout(e[s].p), n[a.getId(s)] = e[s].p;
								for(var s = 0, l = o.length; l > s; s++) {
									var u = o[s],
										h = i.getEdgeByIndex(s),
										c = u.n1.p,
										d = u.n2.p,
										f = h.getLayout();
									f = f ? f.slice() : [], f[0] = f[0] || [], f[1] = f[1] || [], W(f[0], c), W(f[1], d), +u.curveness && (f[2] = [(c[0] + d[0]) / 2 - (c[1] - d[1]) * u.curveness, (c[1] + d[1]) / 2 - (d[0] - c[0]) * u.curveness]), h.setLayout(f)
								}
								t && t(r)
							})
						}, t.forceLayout = g, t.preservedPoints = n, g.step()
					} else t.forceLayout = null
			})
		},
		kO = function(t, e) {
			var n = [];
			return t.eachSeriesByType("graph", function(t) {
				var i = t.get("coordinateSystem");
				if(!i || "view" === i) {
					var a = t.getData(),
						o = a.mapArray(function(t) {
							var e = a.getItemModel(t);
							return [+e.get("x"), +e.get("y")]
						}),
						r = [],
						s = [];
					wa(o, r, s), s[0] - r[0] === 0 && (s[0] += 1, r[0] -= 1), s[1] - r[1] === 0 && (s[1] += 1, r[1] -= 1);
					var l = (s[0] - r[0]) / (s[1] - r[1]),
						u = Dg(t, e, l);
					isNaN(l) && (r = [u.x, u.y], s = [u.x + u.width, u.y + u.height]);
					var h = s[0] - r[0],
						c = s[1] - r[1],
						d = u.width,
						f = u.height,
						p = t.coordinateSystem = new cf;
					p.zoomLimit = t.get("scaleLimit"), p.setBoundingRect(r[0], r[1], h, c), p.setViewRect(u.x, u.y, d, f), p.setCenter(t.get("center")), p.setZoom(t.get("zoom")), n.push(p)
				}
			}), n
		};
	nu(MO), lu(CL("graph", "circle", null)), lu(IO), lu(TO), su(AO), su(DO), su(LO), ou("graphView", {
		create: kO
	});
	var PO = sA.extend({
		type: "series.boxplot",
		dependencies: ["xAxis", "yAxis", "grid"],
		defaultValueDimensions: [{
			name: "min",
			defaultTooltip: !0
		}, {
			name: "Q1",
			defaultTooltip: !0
		}, {
			name: "median",
			defaultTooltip: !0
		}, {
			name: "Q3",
			defaultTooltip: !0
		}, {
			name: "max",
			defaultTooltip: !0
		}],
		dimensions: null,
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "cartesian2d",
			legendHoverLink: !0,
			hoverAnimation: !0,
			layout: null,
			boxWidth: [7, 50],
			itemStyle: {
				color: "#fff",
				borderWidth: 1
			},
			emphasis: {
				itemStyle: {
					borderWidth: 2,
					shadowBlur: 5,
					shadowOffsetX: 2,
					shadowOffsetY: 2,
					shadowColor: "rgba(0,0,0,0.4)"
				}
			},
			animationEasing: "elasticOut",
			animationDuration: 800
		}
	});
	c(PO, KL, !0);
	var OO = ["itemStyle"],
		NO = ["emphasis", "itemStyle"],
		EO = (Xs.extend({
			type: "boxplot",
			render: function(t) {
				var e = t.getData(),
					n = this.group,
					i = this._data;
				this._data || n.removeAll();
				var a = "horizontal" === t.get("layout") ? 1 : 0;
				e.diff(i).add(function(t) {
					if(e.hasValue(t)) {
						var i = e.getItemLayout(t),
							o = Cg(i, e, t, a, !0);
						e.setItemGraphicEl(t, o), n.add(o)
					}
				}).update(function(t, o) {
					var r = i.getItemGraphicEl(o);
					if(!e.hasValue(t)) return void n.remove(r);
					var s = e.getItemLayout(t);
					r ? Lg(s, r, e, t) : r = Cg(s, e, t, a), n.add(r), e.setItemGraphicEl(t, r)
				}).remove(function(t) {
					var e = i.getItemGraphicEl(t);
					e && n.remove(e)
				}).execute(), this._data = e
			},
			remove: function() {
				var t = this.group,
					e = this._data;
				this._data = null, e && e.eachItemGraphicEl(function(e) {
					e && t.remove(e)
				})
			},
			dispose: G
		}), Ga.extend({
			type: "boxplotBoxPath",
			shape: {},
			buildPath: function(t, e) {
				var n = e.points,
					i = 0;
				for(t.moveTo(n[i][0], n[i][1]), i++; 4 > i; i++) t.lineTo(n[i][0], n[i][1]);
				for(t.closePath(); i < n.length; i++) t.moveTo(n[i][0], n[i][1]), i++, t.lineTo(n[i][0], n[i][1])
			}
		})),
		zO = ["itemStyle", "borderColor"],
		RO = function(t) {
			var e = t.get("color");
			t.eachRawSeriesByType("boxplot", function(n) {
				var i = e[n.seriesIndex % e.length],
					a = n.getData();
				a.setVisual({
					legendSymbol: "roundRect",
					color: n.get(zO) || i
				}), t.isSeriesFiltered(n) || a.each(function(t) {
					var e = a.getItemModel(t);
					a.setItemVisual(t, {
						color: e.get(zO, !0)
					})
				})
			})
		},
		BO = f,
		VO = function(t) {
			var e = Pg(t);
			BO(e, function(t) {
				var e = t.seriesModels;
				e.length && (Og(t), BO(e, function(e, n) {
					Ng(e, t.boxOffsetList[n], t.boxWidthList[n])
				}))
			})
		};
	lu(RO), su(VO);
	var GO = function(t) {
			Eg(t), zg(t)
		},
		FO = function(t, e, n, i, a) {
			NC.call(this, t, e, n), this.type = i || "value", this.axisIndex = a
		};
	FO.prototype = {
		constructor: FO,
		model: null,
		isHorizontal: function() {
			return "horizontal" !== this.coordinateSystem.getModel().get("layout")
		}
	}, h(FO, NC);
	var WO = function(t, e, n, i, a, o) {
			e[0] = Bg(e[0], n), e[1] = Bg(e[1], n), t = t || 0;
			var r = n[1] - n[0];
			null != a && (a = Bg(a, [0, r])), null != o && (o = Math.max(o, null != a ? a : 0)), "all" === i && (a = o = Math.abs(e[1] - e[0]), i = 0);
			var s = Rg(e, i);
			e[i] += t;
			var l = a || 0,
				u = n.slice();
			s.sign < 0 ? u[0] += l : u[1] -= l, e[i] = Bg(e[i], u);
			var h = Rg(e, i);
			null != a && (h.sign !== s.sign || h.span < a) && (e[1 - i] = e[i] + s.sign * a);
			var h = Rg(e, i);
			return null != o && h.span > o && (e[1 - i] = e[i] + h.sign * o), e
		},
		HO = f,
		ZO = Math.min,
		XO = Math.max,
		YO = Math.floor,
		UO = Math.ceil,
		jO = tr,
		qO = Math.PI;
	Vg.prototype = {
		type: "parallel",
		constructor: Vg,
		_init: function(t, e) {
			var n = t.dimensions,
				i = t.parallelAxisIndex;
			HO(n, function(t, n) {
				var a = i[n],
					o = e.getComponent("parallelAxis", a),
					r = this._axesMap.set(t, new FO(t, mh(o), [0, 0], o.get("type"), a)),
					s = "category" === r.type;
				r.onBand = s && o.get("boundaryGap"), r.inverse = o.get("inverse"), o.axis = r, r.model = o, r.coordinateSystem = o.coordinateSystem = this
			}, this)
		},
		update: function(t) {
			this._updateAxesFromSeries(this._model, t)
		},
		containPoint: function(t) {
			var e = this._makeLayoutInfo(),
				n = e.axisBase,
				i = e.layoutBase,
				a = e.pixelDimIndex,
				o = t[1 - a],
				r = t[a];
			return o >= n && o <= n + e.axisLength && r >= i && r <= i + e.layoutLength
		},
		getModel: function() {
			return this._model
		},
		_updateAxesFromSeries: function(t, e) {
			e.eachSeries(function(n) {
				if(t.contains(n, e)) {
					var i = n.getData();
					HO(this.dimensions, function(t) {
						var e = this._axesMap.get(t);
						e.scale.unionExtentFromData(i, i.mapDimension(t)), gh(e.scale, e.model)
					}, this)
				}
			}, this)
		},
		resize: function(t, e) {
			this._rect = Dr(t.getBoxLayoutParams(), {
				width: e.getWidth(),
				height: e.getHeight()
			}), this._layoutAxes()
		},
		getRect: function() {
			return this._rect
		},
		_makeLayoutInfo: function() {
			var t, e = this._model,
				n = this._rect,
				i = ["x", "y"],
				a = ["width", "height"],
				o = e.get("layout"),
				r = "horizontal" === o ? 0 : 1,
				s = n[a[r]],
				l = [0, s],
				u = this.dimensions.length,
				h = Gg(e.get("axisExpandWidth"), l),
				c = Gg(e.get("axisExpandCount") || 0, [0, u]),
				d = e.get("axisExpandable") && u > 3 && u > c && c > 1 && h > 0 && s > 0,
				f = e.get("axisExpandWindow");
			if(f) t = Gg(f[1] - f[0], l), f[1] = f[0] + t;
			else {
				t = Gg(h * (c - 1), l);
				var p = e.get("axisExpandCenter") || YO(u / 2);
				f = [h * p - t / 2], f[1] = f[0] + t
			}
			var g = (s - t) / (u - c);
			3 > g && (g = 0);
			var m = [YO(jO(f[0] / h, 1)) + 1, UO(jO(f[1] / h, 1)) - 1],
				v = g / h * f[0];
			return {
				layout: o,
				pixelDimIndex: r,
				layoutBase: n[i[r]],
				layoutLength: s,
				axisBase: n[i[1 - r]],
				axisLength: n[a[1 - r]],
				axisExpandable: d,
				axisExpandWidth: h,
				axisCollapseWidth: g,
				axisExpandWindow: f,
				axisCount: u,
				winInnerIndices: m,
				axisExpandWindow0Pos: v
			}
		},
		_layoutAxes: function() {
			var t = this._rect,
				e = this._axesMap,
				n = this.dimensions,
				i = this._makeLayoutInfo(),
				a = i.layout;
			e.each(function(t) {
				var e = [0, i.axisLength],
					n = t.inverse ? 1 : 0;
				t.setExtent(e[n], e[1 - n])
			}), HO(n, function(e, n) {
				var o = (i.axisExpandable ? Wg : Fg)(n, i),
					r = {
						horizontal: {
							x: o.position,
							y: i.axisLength
						},
						vertical: {
							x: 0,
							y: o.position
						}
					},
					s = {
						horizontal: qO / 2,
						vertical: 0
					},
					l = [r[a].x + t.x, r[a].y + t.y],
					u = s[a],
					h = Ie();
				Le(h, h, u), Ce(h, h, l), this._axesLayout[e] = {
					position: l,
					rotation: u,
					transform: h,
					axisNameAvailableWidth: o.axisNameAvailableWidth,
					axisLabelShow: o.axisLabelShow,
					nameTruncateMaxWidth: o.nameTruncateMaxWidth,
					tickDirection: 1,
					labelDirection: 1
				}
			}, this)
		},
		getAxis: function(t) {
			return this._axesMap.get(t)
		},
		dataToPoint: function(t, e) {
			return this.axisCoordToPoint(this._axesMap.get(e).dataToCoord(t), e)
		},
		eachActiveState: function(t, e, n, i) {
			null == n && (n = 0), null == i && (i = t.count());
			var a = this._axesMap,
				o = this.dimensions,
				r = [],
				s = [];
			f(o, function(e) {
				r.push(t.mapDimension(e)), s.push(a.get(e).model)
			});
			for(var l = this.hasAxisBrushed(), u = n; i > u; u++) {
				var h;
				if(l) {
					h = "active";
					for(var c = t.getValues(r, u), d = 0, p = o.length; p > d; d++) {
						var g = s[d].getActiveState(c[d]);
						if("inactive" === g) {
							h = "inactive";
							break
						}
					}
				} else h = "normal";
				e(h, u)
			}
		},
		hasAxisBrushed: function() {
			for(var t = this.dimensions, e = this._axesMap, n = !1, i = 0, a = t.length; a > i; i++) "normal" !== e.get(t[i]).model.getActiveState() && (n = !0);
			return n
		},
		axisCoordToPoint: function(t, e) {
			var n = this._axesLayout[e];
			return Vo([t, 0], n.transform)
		},
		getAxisLayout: function(t) {
			return i(this._axesLayout[t])
		},
		getSlidedAxisExpandWindow: function(t) {
			var e = this._makeLayoutInfo(),
				n = e.pixelDimIndex,
				i = e.axisExpandWindow.slice(),
				a = i[1] - i[0],
				o = [0, e.axisExpandWidth * (e.axisCount - 1)];
			if(!this.containPoint(t)) return {
				behavior: "none",
				axisExpandWindow: i
			};
			var r, s = t[n] - e.layoutBase - e.axisExpandWindow0Pos,
				l = "slide",
				u = e.axisCollapseWidth,
				h = this._model.get("axisExpandSlideTriggerArea"),
				c = null != h[0];
			if(u) c && u && s < a * h[0] ? (l = "jump", r = s - a * h[2]) : c && u && s > a * (1 - h[0]) ? (l = "jump", r = s - a * (1 - h[2])) : (r = s - a * h[1]) >= 0 && (r = s - a * (1 - h[1])) <= 0 && (r = 0), r *= e.axisExpandWidth / u, r ? WO(r, i, o, "all") : l = "none";
			else {
				var a = i[1] - i[0],
					d = o[1] * s / a;
				i = [XO(0, d - a / 2)], i[1] = ZO(o[1], i[0] + a), i[0] = i[1] - a
			}
			return {
				axisExpandWindow: i,
				behavior: l
			}
		}
	}, os.register("parallel", {
		create: Hg
	});
	var KO = _T.extend({
			type: "baseParallelAxis",
			axis: null,
			activeIntervals: [],
			getAreaSelectStyle: function() {
				return cM([
					["fill", "color"],
					["lineWidth", "borderWidth"],
					["stroke", "borderColor"],
					["width", "width"],
					["opacity", "opacity"]
				])(this.getModel("areaSelectStyle"))
			},
			setActiveIntervals: function(t) {
				var e = this.activeIntervals = i(t);
				if(e)
					for(var n = e.length - 1; n >= 0; n--) er(e[n])
			},
			getActiveState: function(t) {
				var e = this.activeIntervals;
				if(!e.length) return "normal";
				if(null == t || isNaN(t)) return "inactive";
				if(1 === e.length) {
					var n = e[0];
					if(n[0] <= t && t <= n[1]) return "active"
				} else
					for(var i = 0, a = e.length; a > i; i++)
						if(e[i][0] <= t && t <= e[i][1]) return "active";
				return "inactive"
			}
		}),
		$O = {
			type: "value",
			dim: null,
			areaSelectStyle: {
				width: 20,
				borderWidth: 1,
				borderColor: "rgba(160,197,232)",
				color: "rgba(160,197,232)",
				opacity: .3
			},
			realtime: !0,
			z: 10
		};
	a(KO.prototype, xC), HC("parallel", KO, Zg, $O), _T.extend({
		type: "parallel",
		dependencies: ["parallelAxis"],
		coordinateSystem: null,
		dimensions: null,
		parallelAxisIndex: null,
		layoutMode: "box",
		defaultOption: {
			zlevel: 0,
			z: 0,
			left: 80,
			top: 60,
			right: 80,
			bottom: 60,
			layout: "horizontal",
			axisExpandable: !1,
			axisExpandCenter: null,
			axisExpandCount: 0,
			axisExpandWidth: 50,
			axisExpandRate: 17,
			axisExpandDebounce: 50,
			axisExpandSlideTriggerArea: [-.15, .05, .4],
			axisExpandTriggerOn: "click",
			parallelAxisDefault: null
		},
		init: function() {
			_T.prototype.init.apply(this, arguments), this.mergeOption({})
		},
		mergeOption: function(t) {
			var e = this.option;
			t && a(e, t, !0), this._initDimensions()
		},
		contains: function(t, e) {
			var n = t.get("parallelIndex");
			return null != n && e.getComponent("parallel", n) === this
		},
		setAxisExpand: function(t) {
			f(["axisExpandable", "axisExpandCenter", "axisExpandCount", "axisExpandWidth", "axisExpandWindow"], function(e) {
				t.hasOwnProperty(e) && (this.option[e] = t[e])
			}, this)
		},
		_initDimensions: function() {
			var t = this.dimensions = [],
				e = this.parallelAxisIndex = [],
				n = m(this.dependentModels.parallelAxis, function(t) {
					return(t.get("parallelIndex") || 0) === this.componentIndex
				}, this);
			f(n, function(n) {
				t.push("dim" + n.get("dim")), e.push(n.componentIndex)
			})
		}
	});
	var JO = {
		type: "axisAreaSelect",
		event: "axisAreaSelected"
	};
	au(JO, function(t, e) {
		e.eachComponent({
			mainType: "parallelAxis",
			query: t
		}, function(e) {
			e.axis.model.setActiveIntervals(t.intervals)
		})
	}), au("parallelAxisExpand", function(t, e) {
		e.eachComponent({
			mainType: "parallel",
			query: t
		}, function(e) {
			e.setAxisExpand(t)
		})
	});
	var QO = x,
		tN = f,
		eN = p,
		nN = Math.min,
		iN = Math.max,
		aN = Math.pow,
		oN = 1e4,
		rN = 6,
		sN = 6,
		lN = "globalPan",
		uN = {
			w: [0, 0],
			e: [0, 1],
			n: [1, 0],
			s: [1, 1]
		},
		hN = {
			w: "ew",
			e: "ew",
			n: "ns",
			s: "ns",
			ne: "nesw",
			sw: "nesw",
			nw: "nwse",
			se: "nwse"
		},
		cN = {
			brushStyle: {
				lineWidth: 2,
				stroke: "rgba(0,0,0,0.3)",
				fill: "rgba(0,0,0,0.1)"
			},
			transformable: !0,
			brushMode: "single",
			removeOnClick: !1
		},
		dN = 0;
	Xg.prototype = {
		constructor: Xg,
		enableBrush: function(t) {
			return this._brushType && Ug(this), t.brushType && Yg(this, t), this
		},
		setPanels: function(t) {
			if(t && t.length) {
				var e = this._panels = {};
				f(t, function(t) {
					e[t.panelId] = i(t)
				})
			} else this._panels = null;
			return this
		},
		mount: function(t) {
			t = t || {}, this._enableGlobalPan = t.enableGlobalPan;
			var e = this.group;
			return this._zr.add(e), e.attr({
				position: t.position || [0, 0],
				rotation: t.rotation || 0,
				scale: t.scale || [1, 1]
			}), this._transform = e.getLocalTransform(), this
		},
		eachCover: function(t, e) {
			tN(this._covers, t, e)
		},
		updateCovers: function(t) {
			function e(t, e) {
				return(null != t.id ? t.id : s + e) + "-" + t.brushType
			}

			function n(t, n) {
				return e(t.__brushOption, n)
			}

			function o(e, n) {
				var i = t[e];
				if(null != n && l[n] === c) u[e] = l[n];
				else {
					var a = u[e] = null != n ? (l[n].__brushOption = i, l[n]) : qg(h, jg(h, i));
					Jg(h, a)
				}
			}

			function r(t) {
				l[t] !== c && h.group.remove(l[t])
			}
			t = p(t, function(t) {
				return a(i(cN), t, !0)
			});
			var s = "\x00-brush-index-",
				l = this._covers,
				u = this._covers = [],
				h = this,
				c = this._creatingCover;
			return new xu(l, t, n, e).add(o).update(o).remove(r).execute(), this
		},
		unmount: function() {
			return this.enableBrush(!1), nm(this), this._zr.remove(this.group), this
		},
		dispose: function() {
			this.unmount(), this.off()
		}
	}, c(Xg, yb);
	var fN = {
			mousedown: function(t) {
				if(this._dragging) Mm.call(this, t);
				else if(!t.target || !t.target.draggable) {
					_m(t);
					var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
					this._creatingCover = null;
					var n = this._creatingPanel = tm(this, t, e);
					n && (this._dragging = !0, this._track = [e.slice()])
				}
			},
			mousemove: function(t) {
				var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
				if(xm(this, t, e), this._dragging) {
					_m(t);
					var n = bm(this, t, e, !1);
					n && im(this, n)
				}
			},
			mouseup: Mm
		},
		pN = {
			lineX: Im(0),
			lineY: Im(1),
			rect: {
				createCover: function(t, e) {
					return rm(QO(pm, function(t) {
						return t
					}, function(t) {
						return t
					}), t, e, ["w", "e", "n", "s", "se", "sw", "ne", "nw"])
				},
				getCreatingRange: function(t) {
					var e = om(t);
					return cm(e[1][0], e[1][1], e[0][0], e[0][1])
				},
				updateCoverShape: function(t, e, n, i) {
					sm(t, e, n, i)
				},
				updateCommon: lm,
				contain: wm
			},
			polygon: {
				createCover: function(t, e) {
					var n = new rS;
					return n.add(new AI({
						name: "main",
						style: hm(e),
						silent: !0
					})), n
				},
				getCreatingRange: function(t) {
					return t
				},
				endCreating: function(t, e) {
					e.remove(e.childAt(0)), e.add(new TI({
						name: "main",
						draggable: !0,
						drift: QO(gm, t, e),
						ondragend: QO(im, t, {
							isEnd: !0
						})
					}))
				},
				updateCoverShape: function(t, e, n) {
					e.childAt(0).setShape({
						points: vm(t, e, n)
					})
				},
				updateCommon: lm,
				contain: wm
			}
		},
		gN = ["axisLine", "axisTickLabel", "axisName"],
		mN = du({
			type: "parallelAxis",
			init: function(t, e) {
				mN.superApply(this, "init", arguments), (this._brushController = new Xg(e.getZr())).on("brush", y(this._onBrush, this))
			},
			render: function(t, e, n, i) {
				if(!Lm(t, e, i)) {
					this.axisModel = t, this.api = n, this.group.removeAll();
					var a = this._axisGroup;
					if(this._axisGroup = new rS, this.group.add(this._axisGroup), t.get("show")) {
						var o = Pm(t, e),
							s = o.coordinateSystem,
							l = t.getAreaSelectStyle(),
							u = l.width,
							h = t.axis.dim,
							c = s.getAxisLayout(h),
							d = r({
								strokeContainThreshold: u
							}, c),
							p = new nL(t, d);
						f(gN, p.add, p), this._axisGroup.add(p.getGroup()), this._refreshBrushController(d, l, t, o, u, n);
						var g = i && i.animation === !1 ? null : t;
						Fo(a, this._axisGroup, g)
					}
				}
			},
			_refreshBrushController: function(t, e, n, i, a, o) {
				var r = n.axis.getExtent(),
					s = r[1] - r[0],
					l = Math.min(30, .1 * Math.abs(s)),
					u = xn.create({
						x: r[0],
						y: -a / 2,
						width: s,
						height: a
					});
				u.x -= l, u.width += 2 * l, this._brushController.mount({
					enableGlobalPan: !0,
					rotation: t.rotation,
					position: t.position
				}).setPanels([{
					panelId: "pl",
					clipPath: Tm(u),
					isTargetByCursor: Dm(u, o, i),
					getLinearBrushOtherExtent: Am(u, 0)
				}]).enableBrush({
					brushType: "lineX",
					brushStyle: e,
					removeOnClick: !0
				}).updateCovers(km(n))
			},
			_onBrush: function(t, e) {
				var n = this.axisModel,
					i = n.axis,
					a = p(t, function(t) {
						return [i.coordToData(t.range[0], !0), i.coordToData(t.range[1], !0)]
					});
				(!n.option.realtime === e.isEnd || e.removeOnClick) && this.api.dispatchAction({
					type: "axisAreaSelect",
					parallelAxisId: n.id,
					intervals: a
				})
			},
			dispose: function() {
				this._brushController.dispose()
			}
		}),
		vN = 5;
	du({
		type: "parallel",
		render: function(t, e, n) {
			this._model = t, this._api = n, this._handlers || (this._handlers = {}, f(yN, function(t, e) {
				n.getZr().on(e, this._handlers[e] = y(t, this))
			}, this)), $s(this, "_throttledDispatchExpand", t.get("axisExpandRate"), "fixRate")
		},
		dispose: function(t, e) {
			f(this._handlers, function(t, n) {
				e.getZr().off(n, t)
			}), this._handlers = null
		},
		_throttledDispatchExpand: function(t) {
			this._dispatchExpand(t)
		},
		_dispatchExpand: function(t) {
			t && this._api.dispatchAction(r({
				type: "parallelAxisExpand"
			}, t))
		}
	});
	var yN = {
		mousedown: function(t) {
			Om(this, "click") && (this._mouseDownPoint = [t.offsetX, t.offsetY])
		},
		mouseup: function(t) {
			var e = this._mouseDownPoint;
			if(Om(this, "click") && e) {
				var n = [t.offsetX, t.offsetY],
					i = Math.pow(e[0] - n[0], 2) + Math.pow(e[1] - n[1], 2);
				if(i > vN) return;
				var a = this._model.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX, t.offsetY]);
				"none" !== a.behavior && this._dispatchExpand({
					axisExpandWindow: a.axisExpandWindow
				})
			}
			this._mouseDownPoint = null
		},
		mousemove: function(t) {
			if(!this._mouseDownPoint && Om(this, "mousemove")) {
				var e = this._model,
					n = e.coordinateSystem.getSlidedAxisExpandWindow([t.offsetX, t.offsetY]),
					i = n.behavior;
				"jump" === i && this._throttledDispatchExpand.debounceNextCall(e.get("axisExpandDebounce")), this._throttledDispatchExpand("none" === i ? null : {
					axisExpandWindow: n.axisExpandWindow,
					animation: "jump" === i ? null : !1
				})
			}
		}
	};
	eu(GO), sA.extend({
		type: "series.parallel",
		dependencies: ["parallel"],
		visualColorAccessPath: "lineStyle.color",
		getInitialData: function() {
			var t = this.getSource();
			return Nm(t, this), Hu(t, this)
		},
		getRawIndicesByActiveState: function(t) {
			var e = this.coordinateSystem,
				n = this.getData(),
				i = [];
			return e.eachActiveState(n, function(e, a) {
				t === e && i.push(n.getRawIndex(a))
			}), i
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "parallel",
			parallelIndex: 0,
			label: {
				show: !1
			},
			inactiveOpacity: .05,
			activeOpacity: 1,
			lineStyle: {
				width: 1,
				opacity: .45,
				type: "solid"
			},
			emphasis: {
				label: {
					show: !1
				}
			},
			progressive: 500,
			smooth: !1,
			animationEasing: "linear"
		}
	});
	var xN = .3,
		_N = (Xs.extend({
			type: "parallel",
			init: function() {
				this._dataGroup = new rS, this.group.add(this._dataGroup), this._data, this._initialized
			},
			render: function(t, e, n, i) {
				function a(t) {
					var e = Bm(l, s, t, c, h);
					Gm(e, l, t, d)
				}

				function o(e, n) {
					var a = u.getItemGraphicEl(n),
						o = Rm(l, e, c, h);
					l.setItemGraphicEl(e, a);
					var r = i && i.animation === !1 ? null : t;
					zo(a, {
						shape: {
							points: o
						}
					}, r, e), Gm(a, l, e, d)
				}

				function r(t) {
					var e = u.getItemGraphicEl(t);
					s.remove(e)
				}
				var s = this._dataGroup,
					l = t.getData(),
					u = this._data,
					h = t.coordinateSystem,
					c = h.dimensions,
					d = Vm(t);
				if(l.diff(u).add(a).update(o).remove(r).execute(), !this._initialized) {
					this._initialized = !0;
					var f = zm(h, t, function() {
						setTimeout(function() {
							s.removeClipPath()
						})
					});
					s.setClipPath(f)
				}
				this._data = l
			},
			incrementalPrepareRender: function() {
				this._initialized = !0, this._data = null, this._dataGroup.removeAll()
			},
			incrementalRender: function(t, e) {
				for(var n = e.getData(), i = e.coordinateSystem, a = i.dimensions, o = Vm(e), r = t.start; r < t.end; r++) {
					var s = Bm(n, this._dataGroup, r, a, i);
					s.incremental = !0, Gm(s, n, r, o)
				}
			},
			dispose: function() {},
			remove: function() {
				this._dataGroup && this._dataGroup.removeAll(), this._data = null
			}
		}), ["lineStyle", "normal", "opacity"]),
		wN = {
			seriesType: "parallel",
			reset: function(t, e) {
				function n(t, e) {
					h.eachActiveState(e, function(t, n) {
						var i = d[t];
						if("normal" === t && e.hasItemOption) {
							var a = e.getItemModel(n).get(_N, !0);
							null != a && (i = a)
						}
						e.setItemVisual(n, "opacity", i)
					}, t.start, t.end)
				}
				var i = t.getModel("itemStyle"),
					a = t.getModel("lineStyle"),
					o = e.get("color"),
					r = a.get("color") || i.get("color") || o[t.seriesIndex % o.length],
					s = t.get("inactiveOpacity"),
					l = t.get("activeOpacity"),
					u = t.getModel("lineStyle").getLineStyle(),
					h = t.coordinateSystem,
					c = t.getData(),
					d = {
						normal: u.opacity,
						active: l,
						inactive: s
					};
				return c.setVisual("color", r), {
					progress: n
				}
			}
		};
	lu(wN);
	var bN = (sA.extend({
			type: "series.gauge",
			getInitialData: function(t) {
				var e = t.data || [];
				return _(e) || (e = [e]), t.data = e, NL(this, ["value"])
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				center: ["50%", "50%"],
				legendHoverLink: !0,
				radius: "75%",
				startAngle: 225,
				endAngle: -45,
				clockwise: !0,
				min: 0,
				max: 100,
				splitNumber: 10,
				axisLine: {
					show: !0,
					lineStyle: {
						color: [
							[.2, "#91c7ae"],
							[.8, "#63869e"],
							[1, "#c23531"]
						],
						width: 30
					}
				},
				splitLine: {
					show: !0,
					length: 30,
					lineStyle: {
						color: "#eee",
						width: 2,
						type: "solid"
					}
				},
				axisTick: {
					show: !0,
					splitNumber: 5,
					length: 8,
					lineStyle: {
						color: "#eee",
						width: 1,
						type: "solid"
					}
				},
				axisLabel: {
					show: !0,
					distance: 5,
					color: "auto"
				},
				pointer: {
					show: !0,
					length: "80%",
					width: 8
				},
				itemStyle: {
					color: "auto"
				},
				title: {
					show: !0,
					offsetCenter: [0, "-40%"],
					color: "#333",
					fontSize: 15
				},
				detail: {
					show: !0,
					backgroundColor: "rgba(0,0,0,0)",
					borderWidth: 0,
					borderColor: "#ccc",
					width: 100,
					height: null,
					padding: [5, 10],
					offsetCenter: [0, "40%"],
					color: "auto",
					fontSize: 30
				}
			}
		}), Ga.extend({
			type: "echartsGaugePointer",
			shape: {
				angle: 0,
				width: 10,
				r: 10,
				x: 0,
				y: 0
			},
			buildPath: function(t, e) {
				var n = Math.cos,
					i = Math.sin,
					a = e.r,
					o = e.width,
					r = e.angle,
					s = e.x - n(r) * o * (o >= a / 3 ? 1 : 2),
					l = e.y - i(r) * o * (o >= a / 3 ? 1 : 2);
				r = e.angle - Math.PI / 2, t.moveTo(s, l), t.lineTo(e.x + n(r) * o, e.y + i(r) * o), t.lineTo(e.x + n(e.angle) * a, e.y + i(e.angle) * a), t.lineTo(e.x - n(r) * o, e.y - i(r) * o), t.lineTo(s, l)
			}
		})),
		SN = 2 * Math.PI,
		MN = (Xs.extend({
			type: "gauge",
			render: function(t, e, n) {
				this.group.removeAll();
				var i = t.get("axisLine.lineStyle.color"),
					a = Wm(t, n);
				this._renderMain(t, e, n, i, a)
			},
			dispose: function() {},
			_renderMain: function(t, e, n, i, a) {
				for(var o = this.group, r = t.getModel("axisLine"), s = r.getModel("lineStyle"), l = t.get("clockwise"), u = -t.get("startAngle") / 180 * Math.PI, h = -t.get("endAngle") / 180 * Math.PI, c = (h - u) % SN, d = u, f = s.get("width"), p = 0; p < i.length; p++) {
					var g = Math.min(Math.max(i[p][0], 0), 1),
						h = u + c * g,
						m = new bI({
							shape: {
								startAngle: d,
								endAngle: h,
								cx: a.cx,
								cy: a.cy,
								clockwise: l,
								r0: a.r - f,
								r: a.r
							},
							silent: !0
						});
					m.setStyle({
						fill: i[p][1]
					}), m.setStyle(s.getLineStyle(["color", "borderWidth", "borderColor"])), o.add(m), d = h
				}
				var v = function(t) {
					if(0 >= t) return i[0][1];
					for(var e = 0; e < i.length; e++)
						if(i[e][0] >= t && (0 === e ? 0 : i[e - 1][0]) < t) return i[e][1];
					return i[e - 1][1]
				};
				if(!l) {
					var y = u;
					u = h, h = y
				}
				this._renderTicks(t, e, n, v, a, u, h, l), this._renderPointer(t, e, n, v, a, u, h, l), this._renderTitle(t, e, n, v, a), this._renderDetail(t, e, n, v, a)
			},
			_renderTicks: function(t, e, n, i, a, o, r) {
				for(var s = this.group, l = a.cx, u = a.cy, h = a.r, c = +t.get("min"), d = +t.get("max"), f = t.getModel("splitLine"), p = t.getModel("axisTick"), g = t.getModel("axisLabel"), m = t.get("splitNumber"), v = p.get("splitNumber"), y = Qo(f.get("length"), h), x = Qo(p.get("length"), h), _ = o, w = (r - o) / m, b = w / v, S = f.getModel("lineStyle").getLineStyle(), M = p.getModel("lineStyle").getLineStyle(), I = 0; m >= I; I++) {
					var T = Math.cos(_),
						A = Math.sin(_);
					if(f.get("show")) {
						var D = new PI({
							shape: {
								x1: T * h + l,
								y1: A * h + u,
								x2: T * (h - y) + l,
								y2: A * (h - y) + u
							},
							style: S,
							silent: !0
						});
						"auto" === S.stroke && D.setStyle({
							stroke: i(I / m)
						}), s.add(D)
					}
					if(g.get("show")) {
						var C = Hm(tr(I / m * (d - c) + c), g.get("formatter")),
							L = g.get("distance"),
							k = i(I / m);
						s.add(new yI({
							style: To({}, g, {
								text: C,
								x: T * (h - y - L) + l,
								y: A * (h - y - L) + u,
								textVerticalAlign: -.4 > A ? "top" : A > .4 ? "bottom" : "middle",
								textAlign: -.4 > T ? "left" : T > .4 ? "right" : "center"
							}, {
								autoColor: k
							}),
							silent: !0
						}))
					}
					if(p.get("show") && I !== m) {
						for(var P = 0; v >= P; P++) {
							var T = Math.cos(_),
								A = Math.sin(_),
								O = new PI({
									shape: {
										x1: T * h + l,
										y1: A * h + u,
										x2: T * (h - x) + l,
										y2: A * (h - x) + u
									},
									silent: !0,
									style: M
								});
							"auto" === M.stroke && O.setStyle({
								stroke: i((I + P / v) / m)
							}), s.add(O), _ += b
						}
						_ -= b
					} else _ += w
				}
			},
			_renderPointer: function(t, e, n, i, a, o, r) {
				var s = this.group,
					l = this._data;
				if(!t.get("pointer.show")) return void(l && l.eachItemGraphicEl(function(t) {
					s.remove(t)
				}));
				var u = [+t.get("min"), +t.get("max")],
					h = [o, r],
					c = t.getData(),
					d = c.mapDimension("value");
				c.diff(l).add(function(e) {
					var n = new bN({
						shape: {
							angle: o
						}
					});
					Ro(n, {
						shape: {
							angle: Jo(c.get(d, e), u, h, !0)
						}
					}, t), s.add(n), c.setItemGraphicEl(e, n)
				}).update(function(e, n) {
					var i = l.getItemGraphicEl(n);
					zo(i, {
						shape: {
							angle: Jo(c.get(d, e), u, h, !0)
						}
					}, t), s.add(i), c.setItemGraphicEl(e, i)
				}).remove(function(t) {
					var e = l.getItemGraphicEl(t);
					s.remove(e)
				}).execute(), c.eachItemGraphicEl(function(t, e) {
					var n = c.getItemModel(e),
						o = n.getModel("pointer");
					t.setShape({
						x: a.cx,
						y: a.cy,
						width: Qo(o.get("width"), a.r),
						r: Qo(o.get("length"), a.r)
					}), t.useStyle(n.getModel("itemStyle").getItemStyle()), "auto" === t.style.fill && t.setStyle("fill", i(Jo(c.get(d, e), u, [0, 1], !0))), So(t, n.getModel("emphasis.itemStyle").getItemStyle())
				}), this._data = c
			},
			_renderTitle: function(t, e, n, i, a) {
				var o = t.getData(),
					r = o.mapDimension("value"),
					s = t.getModel("title");
				if(s.get("show")) {
					var l = s.get("offsetCenter"),
						u = a.cx + Qo(l[0], a.r),
						h = a.cy + Qo(l[1], a.r),
						c = +t.get("min"),
						d = +t.get("max"),
						f = t.getData().get(r, 0),
						p = i(Jo(f, [c, d], [0, 1], !0));
					this.group.add(new yI({
						silent: !0,
						style: To({}, s, {
							x: u,
							y: h,
							text: o.getName(0),
							textAlign: "center",
							textVerticalAlign: "middle"
						}, {
							autoColor: p,
							forceRich: !0
						})
					}))
				}
			},
			_renderDetail: function(t, e, n, i, a) {
				var o = t.getModel("detail"),
					r = +t.get("min"),
					s = +t.get("max");
				if(o.get("show")) {
					var l = o.get("offsetCenter"),
						u = a.cx + Qo(l[0], a.r),
						h = a.cy + Qo(l[1], a.r),
						c = Qo(o.get("width"), a.r),
						d = Qo(o.get("height"), a.r),
						f = t.getData(),
						p = f.get(f.mapDimension("value"), 0),
						g = i(Jo(p, [r, s], [0, 1], !0));
					this.group.add(new yI({
						silent: !0,
						style: To({}, o, {
							x: u,
							y: h,
							text: Hm(p, o.get("formatter")),
							textWidth: isNaN(c) ? null : c,
							textHeight: isNaN(d) ? null : d,
							textAlign: "center",
							textVerticalAlign: "middle"
						}, {
							autoColor: g,
							forceRich: !0
						})
					}))
				}
			}
		}), fu({
			type: "series.funnel",
			init: function(t) {
				MN.superApply(this, "init", arguments), this.legendDataProvider = function() {
					return this.getRawData()
				}, this._defaultLabelLine(t)
			},
			getInitialData: function() {
				return NL(this, ["value"])
			},
			_defaultLabelLine: function(t) {
				Bi(t, "labelLine", ["show"]);
				var e = t.labelLine,
					n = t.emphasis.labelLine;
				e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show
			},
			getDataParams: function(t) {
				var e = this.getData(),
					n = MN.superCall(this, "getDataParams", t),
					i = e.mapDimension("value"),
					a = e.getSum(i);
				return n.percent = a ? +(e.get(i, t) / a * 100).toFixed(2) : 0, n.$vars.push("percent"), n
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				left: 80,
				top: 60,
				right: 80,
				bottom: 60,
				minSize: "0%",
				maxSize: "100%",
				sort: "descending",
				gap: 0,
				funnelAlign: "center",
				label: {
					show: !0,
					position: "outer"
				},
				labelLine: {
					show: !0,
					length: 20,
					lineStyle: {
						width: 1,
						type: "solid"
					}
				},
				itemStyle: {
					borderColor: "#fff",
					borderWidth: 1
				},
				emphasis: {
					label: {
						show: !0
					}
				}
			}
		})),
		IN = Zm.prototype,
		TN = ["itemStyle", "opacity"];
	IN.updateData = function(t, e, n) {
		var i = this.childAt(0),
			a = t.hostModel,
			o = t.getItemModel(e),
			r = t.getItemLayout(e),
			l = t.getItemModel(e).get(TN);
		l = null == l ? 1 : l, i.useStyle({}), n ? (i.setShape({
			points: r.points
		}), i.setStyle({
			opacity: 0
		}), Ro(i, {
			style: {
				opacity: l
			}
		}, a, e)) : zo(i, {
			style: {
				opacity: l
			},
			shape: {
				points: r.points
			}
		}, a, e);
		var u = o.getModel("itemStyle"),
			h = t.getItemVisual(e, "color");
		i.setStyle(s({
			lineJoin: "round",
			fill: h
		}, u.getItemStyle(["opacity"]))), i.hoverStyle = u.getModel("emphasis").getItemStyle(), this._updateLabel(t, e), So(this)
	}, IN._updateLabel = function(t, e) {
		var n = this.childAt(1),
			i = this.childAt(2),
			a = t.hostModel,
			o = t.getItemModel(e),
			r = t.getItemLayout(e),
			s = r.label,
			l = t.getItemVisual(e, "color");
		zo(n, {
			shape: {
				points: s.linePoints || s.linePoints
			}
		}, a, e), zo(i, {
			style: {
				x: s.x,
				y: s.y
			}
		}, a, e), i.attr({
			rotation: s.rotation,
			origin: [s.x, s.y],
			z2: 10
		});
		var u = o.getModel("label"),
			h = o.getModel("emphasis.label"),
			c = o.getModel("labelLine"),
			d = o.getModel("emphasis.labelLine"),
			l = t.getItemVisual(e, "color");
		Io(i.style, i.hoverStyle = {}, u, h, {
			labelFetcher: t.hostModel,
			labelDataIndex: e,
			defaultText: t.getName(e),
			autoColor: l,
			useInsideStyle: !!s.inside
		}, {
			textAlign: s.textAlign,
			textVerticalAlign: s.verticalAlign
		}), i.ignore = i.normalIgnore = !u.get("show"), i.hoverIgnore = !h.get("show"), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), n.setStyle({
			stroke: l
		}), n.setStyle(c.getModel("lineStyle").getLineStyle()), n.hoverStyle = d.getModel("lineStyle").getLineStyle()
	}, h(Zm, rS);
	var AN = (Xs.extend({
		type: "funnel",
		render: function(t) {
			var e = t.getData(),
				n = this._data,
				i = this.group;
			e.diff(n).add(function(t) {
				var n = new Zm(e, t);
				e.setItemGraphicEl(t, n), i.add(n)
			}).update(function(t, a) {
				var o = n.getItemGraphicEl(a);
				o.updateData(e, t), i.add(o), e.setItemGraphicEl(t, o)
			}).remove(function(t) {
				var e = n.getItemGraphicEl(t);
				i.remove(e)
			}).execute(), this._data = e
		},
		remove: function() {
			this.group.removeAll(), this._data = null
		},
		dispose: function() {}
	}), function(t, e) {
		t.eachSeriesByType("funnel", function(t) {
			var n = t.getData(),
				i = n.mapDimension("value"),
				a = t.get("sort"),
				o = Xm(t, e),
				r = Ym(n, a),
				s = [Qo(t.get("minSize"), o.width), Qo(t.get("maxSize"), o.width)],
				l = n.getDataExtent(i),
				u = t.get("min"),
				h = t.get("max");
			null == u && (u = Math.min(l[0], 0)), null == h && (h = l[1]);
			var c = t.get("funnelAlign"),
				d = t.get("gap"),
				f = (o.height - d * (n.count() - 1)) / n.count(),
				p = o.y,
				g = function(t, e) {
					var a, r = n.get(i, t) || 0,
						l = Jo(r, [u, h], s, !0);
					switch(c) {
						case "left":
							a = o.x;
							break;
						case "center":
							a = o.x + (o.width - l) / 2;
							break;
						case "right":
							a = o.x + o.width - l
					}
					return [
						[a, e],
						[a + l, e]
					]
				};
			"ascending" === a && (f = -f, d = -d, p += o.height, r = r.reverse());
			for(var m = 0; m < r.length; m++) {
				var v = r[m],
					y = r[m + 1],
					x = n.getItemModel(v),
					_ = x.get("itemStyle.height");
				null == _ ? _ = f : (_ = Qo(_, o.height), "ascending" === a && (_ = -_));
				var w = g(v, p),
					b = g(y, p + _);
				p += _ + d, n.setItemLayout(v, {
					points: w.concat(b.slice().reverse())
				})
			}
			Um(n)
		})
	});
	lu(VL("funnel")), su(AN), nu(ZL("funnel"));
	var DN = sA.extend({
			type: "series.sankey",
			layoutInfo: null,
			getInitialData: function(t) {
				var e = t.edges || t.links,
					n = t.data || t.nodes;
				if(n && e) {
					var i = hO(n, e, this, !0);
					return i.data
				}
			},
			setNodePosition: function(t, e) {
				var n = this.option.data[t];
				n.localX = e[0], n.localY = e[1]
			},
			getGraph: function() {
				return this.getData().graph
			},
			getEdgeData: function() {
				return this.getGraph().edgeData
			},
			formatTooltip: function(t, e, n) {
				if("edge" === n) {
					var i = this.getDataParams(t, n),
						a = i.data,
						o = a.source + " -- " + a.target;
					return i.value && (o += " : " + i.value), vr(o)
				}
				return DN.superCall(this, "formatTooltip", t, e)
			},
			optionUpdated: function() {
				var t = this.option;
				t.focusNodeAdjacency === !0 && (t.focusNodeAdjacency = "allEdges")
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "view",
				layout: null,
				left: "5%",
				top: "5%",
				right: "20%",
				bottom: "5%",
				orient: "horizontal",
				nodeWidth: 20,
				nodeGap: 8,
				draggable: !0,
				focusNodeAdjacency: !1,
				layoutIterations: 32,
				label: {
					show: !0,
					position: "right",
					color: "#000",
					fontSize: 12
				},
				itemStyle: {
					borderWidth: 1,
					borderColor: "#333"
				},
				lineStyle: {
					color: "#314656",
					opacity: .2,
					curveness: .5
				},
				emphasis: {
					label: {
						show: !0
					},
					lineStyle: {
						opacity: .6
					}
				},
				animationEasing: "linear",
				animationDuration: 1e3
			}
		}),
		CN = ["itemStyle", "opacity"],
		LN = ["lineStyle", "opacity"],
		kN = to({
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				cpx1: 0,
				cpy1: 0,
				cpx2: 0,
				cpy2: 0,
				extent: 0,
				orient: ""
			},
			buildPath: function(t, e) {
				var n = e.extent,
					i = e.orient;
				"vertical" === i ? (t.moveTo(e.x1, e.y1), t.bezierCurveTo(e.cpx1, e.cpy1, e.cpx2, e.cpy2, e.x2, e.y2), t.lineTo(e.x2 + n, e.y2), t.bezierCurveTo(e.cpx2 + n, e.cpy2, e.cpx1 + n, e.cpy1, e.x1 + n, e.y1)) : (t.moveTo(e.x1, e.y1), t.bezierCurveTo(e.cpx1, e.cpy1, e.cpx2, e.cpy2, e.x2, e.y2), t.lineTo(e.x2, e.y2 + n), t.bezierCurveTo(e.cpx2, e.cpy2 + n, e.cpx1, e.cpy1 + n, e.x1, e.y1 + n)), t.closePath()
			}
		});
	pu({
		type: "sankey",
		_model: null,
		_focusAdjacencyDisabled: !1,
		render: function(t, e, n) {
			var i = this,
				a = t.getGraph(),
				o = this.group,
				r = t.layoutInfo,
				s = r.width,
				l = r.height,
				u = t.getData(),
				h = t.getData("edge"),
				c = t.get("orient");
			this._model = t, o.removeAll(), o.attr("position", [r.x, r.y]), a.eachEdge(function(e) {
				var n = new kN;
				n.dataIndex = e.dataIndex, n.seriesIndex = t.seriesIndex, n.dataType = "edge";
				var i, a, r, u, d, f, p, g, m = e.getModel("lineStyle"),
					v = m.get("curveness"),
					y = e.node1.getLayout(),
					x = e.node1.getModel(),
					_ = x.get("localX"),
					w = x.get("localY"),
					b = e.node2.getLayout(),
					S = e.node2.getModel(),
					M = S.get("localX"),
					I = S.get("localY"),
					T = e.getLayout();
				switch(n.shape.extent = Math.max(1, T.dy), n.shape.orient = c, "vertical" === c ? (i = (null != _ ? _ * s : y.x) + T.sy, a = (null != w ? w * l : y.y) + y.dy, r = (null != M ? M * s : b.x) + T.ty, u = null != I ? I * l : b.y, d = i, f = a * (1 - v) + u * v, p = r, g = a * v + u * (1 - v)) : (i = (null != _ ? _ * s : y.x) + y.dx, a = (null != w ? w * l : y.y) + T.sy, r = null != M ? M * s : b.x, u = (null != I ? I * l : b.y) + T.ty, d = i * (1 - v) + r * v, f = a, p = i * v + r * (1 - v), g = u), n.setShape({
					x1: i,
					y1: a,
					x2: r,
					y2: u,
					cpx1: d,
					cpy1: f,
					cpx2: p,
					cpy2: g
				}), n.setStyle(m.getItemStyle()), n.style.fill) {
					case "source":
						n.style.fill = e.node1.getVisual("color");
						break;
					case "target":
						n.style.fill = e.node2.getVisual("color")
				}
				So(n, e.getModel("emphasis.lineStyle").getItemStyle()), o.add(n), h.setItemGraphicEl(e.dataIndex, n)
			}), a.eachNode(function(e) {
				var n = e.getLayout(),
					i = e.getModel(),
					a = i.get("localX"),
					r = i.get("localY"),
					h = i.getModel("label"),
					c = i.getModel("emphasis.label"),
					d = new LI({
						shape: {
							x: null != a ? a * s : n.x,
							y: null != r ? r * l : n.y,
							width: n.dx,
							height: n.dy
						},
						style: i.getModel("itemStyle").getItemStyle()
					}),
					f = e.getModel("emphasis.itemStyle").getItemStyle();
				Io(d.style, f, h, c, {
					labelFetcher: t,
					labelDataIndex: e.dataIndex,
					defaultText: e.id,
					isRectText: !0
				}), d.setStyle("fill", e.getVisual("color")), So(d, f), o.add(d), u.setItemGraphicEl(e.dataIndex, d), d.dataType = "node"
			}), u.eachItemGraphicEl(function(e, a) {
				var o = u.getItemModel(a);
				o.get("draggable") && (e.drift = function(e, o) {
					i._focusAdjacencyDisabled = !0, this.shape.x += e, this.shape.y += o, this.dirty(), n.dispatchAction({
						type: "dragNode",
						seriesId: t.id,
						dataIndex: u.getRawIndex(a),
						localX: this.shape.x / s,
						localY: this.shape.y / l
					})
				}, e.ondragend = function() {
					i._focusAdjacencyDisabled = !1
				}, e.draggable = !0, e.cursor = "move"), o.get("focusNodeAdjacency") && (e.off("mouseover").on("mouseover", function() {
					i._focusAdjacencyDisabled || n.dispatchAction({
						type: "focusNodeAdjacency",
						seriesId: t.id,
						dataIndex: e.dataIndex
					})
				}), e.off("mouseout").on("mouseout", function() {
					i._focusAdjacencyDisabled || n.dispatchAction({
						type: "unfocusNodeAdjacency",
						seriesId: t.id
					})
				}))
			}), h.eachItemGraphicEl(function(e, a) {
				var o = h.getItemModel(a);
				o.get("focusNodeAdjacency") && (e.off("mouseover").on("mouseover", function() {
					i._focusAdjacencyDisabled || n.dispatchAction({
						type: "focusNodeAdjacency",
						seriesId: t.id,
						edgeDataIndex: e.dataIndex
					})
				}), e.off("mouseout").on("mouseout", function() {
					i._focusAdjacencyDisabled || n.dispatchAction({
						type: "unfocusNodeAdjacency",
						seriesId: t.id
					})
				}))
			}), !this._data && t.get("animation") && o.setClipPath($m(o.getBoundingRect(), t, function() {
				o.removeClipPath()
			})), this._data = t.getData()
		},
		dispose: function() {},
		focusNodeAdjacency: function(t, e, n, i) {
			var a = this._model.getData(),
				o = a.graph,
				r = i.dataIndex,
				s = a.getItemModel(r),
				l = i.edgeDataIndex;
			if(null != r || null != l) {
				var u = o.getNodeByIndex(r),
					h = o.getEdgeByIndex(l);
				if(o.eachNode(function(t) {
						qm(t, CN, .1)
					}), o.eachEdge(function(t) {
						qm(t, LN, .1)
					}), u) {
					Km(u, CN);
					var c = s.get("focusNodeAdjacency");
					"outEdges" === c ? f(u.outEdges, function(t) {
						t.dataIndex < 0 || (Km(t, LN), Km(t.node2, CN))
					}) : "inEdges" === c ? f(u.inEdges, function(t) {
						t.dataIndex < 0 || (Km(t, LN), Km(t.node1, CN))
					}) : "allEdges" === c && f(u.edges, function(t) {
						t.dataIndex < 0 || (Km(t, LN), Km(t.node1, CN), Km(t.node2, CN))
					})
				}
				h && (Km(h, LN), Km(h.node1, CN), Km(h.node2, CN))
			}
		},
		unfocusNodeAdjacency: function() {
			var t = this._model.getGraph();
			t.eachNode(function(t) {
				qm(t, CN)
			}), t.eachEdge(function(t) {
				qm(t, LN)
			})
		}
	}), au({
		type: "dragNode",
		event: "dragNode",
		update: "update"
	}, function(t, e) {
		e.eachComponent({
			mainType: "series",
			subType: "sankey",
			query: t
		}, function(e) {
			e.setNodePosition(t.dataIndex, [t.localX, t.localY])
		})
	});
	var PN = function(t, e) {
			t.eachSeriesByType("sankey", function(t) {
				var n = t.get("nodeWidth"),
					i = t.get("nodeGap"),
					a = Jm(t, e);
				t.layoutInfo = a;
				var o = a.width,
					r = a.height,
					s = t.getGraph(),
					l = s.nodes,
					u = s.edges;
				tv(l);
				var h = m(l, function(t) {
						return 0 === t.getLayout().value
					}),
					c = 0 !== h.length ? 0 : t.get("layoutIterations"),
					d = t.get("orient");
				Qm(l, u, n, i, o, r, c, d)
			})
		},
		ON = function(t) {
			t.eachSeriesByType("sankey", function(t) {
				var e = t.getGraph(),
					n = e.nodes;
				if(n.length) {
					var i = 1 / 0,
						a = -1 / 0;
					f(n, function(t) {
						var e = t.getLayout().value;
						i > e && (i = e), e > a && (a = e)
					}), f(n, function(e) {
						var n = new jk({
								type: "color",
								mappingMethod: "linear",
								dataExtent: [i, a],
								visual: t.get("color")
							}),
							o = n.mapValueToVisual(e.getLayout().value);
						e.setVisual("color", o);
						var r = e.getModel(),
							s = r.get("itemStyle.color");
						null != s && e.setVisual("color", s)
					})
				}
			})
		};
	su(PN), lu(ON);
	var NN = function(t, e, n, i, a) {
		NC.call(this, t, e, n), this.type = i || "value", this.position = a || "bottom", this.orient = null
	};
	NN.prototype = {
		constructor: NN,
		model: null,
		isHorizontal: function() {
			var t = this.position;
			return "top" === t || "bottom" === t
		},
		pointToData: function(t, e) {
			return this.coordinateSystem.pointToData(t, e)[0]
		},
		toGlobalCoord: null,
		toLocalCoord: null
	}, h(NN, NC), mv.prototype = {
		type: "singleAxis",
		axisPointerEnabled: !0,
		constructor: mv,
		_init: function(t) {
			var e = this.dimension,
				n = new NN(e, mh(t), [0, 0], t.get("type"), t.get("position")),
				i = "category" === n.type;
			n.onBand = i && t.get("boundaryGap"), n.inverse = t.get("inverse"), n.orient = t.get("orient"), t.axis = n, n.model = t, n.coordinateSystem = this, this._axis = n
		},
		update: function(t) {
			t.eachSeries(function(t) {
				if(t.coordinateSystem === this) {
					var e = t.getData();
					f(e.mapDimension(this.dimension, !0), function(t) {
						this._axis.scale.unionExtentFromData(e, t)
					}, this), gh(this._axis.scale, this._axis.model)
				}
			}, this)
		},
		resize: function(t, e) {
			this._rect = Dr({
				left: t.get("left"),
				top: t.get("top"),
				right: t.get("right"),
				bottom: t.get("bottom"),
				width: t.get("width"),
				height: t.get("height")
			}, {
				width: e.getWidth(),
				height: e.getHeight()
			}), this._adjustAxis()
		},
		getRect: function() {
			return this._rect
		},
		_adjustAxis: function() {
			var t = this._rect,
				e = this._axis,
				n = e.isHorizontal(),
				i = n ? [0, t.width] : [0, t.height],
				a = e.reverse ? 1 : 0;
			e.setExtent(i[a], i[1 - a]), this._updateAxisTransform(e, n ? t.x : t.y)
		},
		_updateAxisTransform: function(t, e) {
			var n = t.getExtent(),
				i = n[0] + n[1],
				a = t.isHorizontal();
			t.toGlobalCoord = a ? function(t) {
				return t + e
			} : function(t) {
				return i - t + e
			}, t.toLocalCoord = a ? function(t) {
				return t - e
			} : function(t) {
				return i - t + e
			}
		},
		getAxis: function() {
			return this._axis
		},
		getBaseAxis: function() {
			return this._axis
		},
		getAxes: function() {
			return [this._axis]
		},
		getTooltipAxes: function() {
			return {
				baseAxes: [this.getAxis()]
			}
		},
		containPoint: function(t) {
			var e = this.getRect(),
				n = this.getAxis(),
				i = n.orient;
			return "horizontal" === i ? n.contain(n.toLocalCoord(t[0])) && t[1] >= e.y && t[1] <= e.y + e.height : n.contain(n.toLocalCoord(t[1])) && t[0] >= e.y && t[0] <= e.y + e.height
		},
		pointToData: function(t) {
			var e = this.getAxis();
			return [e.coordToData(e.toLocalCoord(t["horizontal" === e.orient ? 0 : 1]))]
		},
		dataToPoint: function(t) {
			var e = this.getAxis(),
				n = this.getRect(),
				i = [],
				a = "horizontal" === e.orient ? 0 : 1;
			return t instanceof Array && (t = t[0]), i[a] = e.toGlobalCoord(e.dataToCoord(+t)), i[1 - a] = 0 === a ? n.y + n.height / 2 : n.x + n.width / 2, i
		}
	}, os.register("single", {
		create: vv,
		dimensions: mv.prototype.dimensions
	});
	var EN = ["axisLine", "axisTickLabel", "axisName"],
		zN = "splitLine",
		RN = sL.extend({
			type: "singleAxis",
			axisPointerClass: "SingleAxisPointer",
			render: function(t, e, n, i) {
				var a = this.group;
				a.removeAll();
				var o = yv(t),
					r = new nL(t, o);
				f(EN, r.add, r), a.add(r.getGroup()), t.get(zN + ".show") && this["_" + zN](t), RN.superCall(this, "render", t, e, n, i)
			},
			_splitLine: function(t) {
				var e = t.axis;
				if(!e.scale.isBlank()) {
					var n = t.getModel("splitLine"),
						i = n.getModel("lineStyle"),
						a = i.get("width"),
						o = i.get("color");
					o = o instanceof Array ? o : [o];
					for(var r = t.coordinateSystem.getRect(), s = e.isHorizontal(), l = [], u = 0, h = e.getTicksCoords({
							tickModel: n
						}), c = [], d = [], f = 0; f < h.length; ++f) {
						var p = e.toGlobalCoord(h[f].coord);
						s ? (c[0] = p, c[1] = r.y, d[0] = p, d[1] = r.y + r.height) : (c[0] = r.x, c[1] = p, d[0] = r.x + r.width, d[1] = p);
						var g = u++ % o.length;
						l[g] = l[g] || [], l[g].push(new PI(ro({
							shape: {
								x1: c[0],
								y1: c[1],
								x2: d[0],
								y2: d[1]
							},
							style: {
								lineWidth: a
							},
							silent: !0
						})))
					}
					for(var f = 0; f < l.length; ++f) this.group.add(YI(l[f], {
						style: {
							stroke: o[f % o.length],
							lineDash: i.getLineDash(a),
							lineWidth: a
						},
						silent: !0
					}))
				}
			}
		}),
		BN = _T.extend({
			type: "singleAxis",
			layoutMode: "box",
			axis: null,
			coordinateSystem: null,
			getCoordSysModel: function() {
				return this
			}
		}),
		VN = {
			left: "5%",
			top: "5%",
			right: "5%",
			bottom: "5%",
			type: "value",
			position: "bottom",
			orient: "horizontal",
			axisLine: {
				show: !0,
				lineStyle: {
					width: 2,
					type: "solid"
				}
			},
			tooltip: {
				show: !0
			},
			axisTick: {
				show: !0,
				length: 6,
				lineStyle: {
					width: 2
				}
			},
			axisLabel: {
				show: !0,
				interval: "auto"
			},
			splitLine: {
				show: !0,
				lineStyle: {
					type: "dashed",
					opacity: .2
				}
			}
		};
	a(BN.prototype, xC), HC("single", BN, xv, VN);
	var GN = function(t, e) {
			var n, i = [],
				a = t.seriesIndex;
			if(null == a || !(n = e.getSeriesByIndex(a))) return {
				point: []
			};
			var o = n.getData(),
				r = Yi(o, t);
			if(null == r || 0 > r || _(r)) return {
				point: []
			};
			var s = o.getItemGraphicEl(r),
				l = n.coordinateSystem;
			if(n.getTooltipPosition) i = n.getTooltipPosition(r) || [];
			else if(l && l.dataToPoint) i = l.dataToPoint(o.getValues(p(l.dimensions, function(t) {
				return o.mapDimension(t)
			}), r, !0)) || [];
			else if(s) {
				var u = s.getBoundingRect().clone();
				u.applyTransform(s.transform), i = [u.x + u.width / 2, u.y + u.height / 2]
			}
			return {
				point: i,
				el: s
			}
		},
		FN = f,
		WN = x,
		HN = Ui(),
		ZN = function(t, e, n) {
			var i = t.currTrigger,
				a = [t.x, t.y],
				o = t,
				r = t.dispatchAction || y(n.dispatchAction, n),
				s = e.getComponent("axisPointer").coordSysAxesInfo;
			if(s) {
				Cv(a) && (a = GN({
					seriesIndex: o.seriesIndex,
					dataIndex: o.dataIndex
				}, e).point);
				var l = Cv(a),
					u = o.axesInfo,
					h = s.axesInfo,
					c = "leave" === i || Cv(a),
					d = {},
					f = {},
					p = {
						list: [],
						map: {}
					},
					g = {
						showPointer: WN(bv, f),
						showTooltip: WN(Sv, p)
					};
				FN(s.coordSysMap, function(t, e) {
					var n = l || t.containPoint(a);
					FN(s.coordSysAxesInfo[e], function(t) {
						var e = t.axis,
							i = Av(u, t);
						if(!c && n && (!u || i)) {
							var o = i && i.value;
							null != o || l || (o = e.pointToData(a)), null != o && _v(t, o, g, !1, d)
						}
					})
				});
				var m = {};
				return FN(h, function(t, e) {
					var n = t.linkGroup;
					n && !f[e] && FN(n.axesInfo, function(e, i) {
						var a = f[i];
						if(e !== t && a) {
							var o = a.value;
							n.mapper && (o = t.axis.scale.parse(n.mapper(o, Dv(e), Dv(t)))), m[t.key] = o
						}
					})
				}), FN(m, function(t, e) {
					_v(h[e], t, g, !0, d)
				}), Mv(f, h, d), Iv(p, a, t, r), Tv(h, r, n), d
			}
		},
		XN = (cu({
			type: "axisPointer",
			coordSysAxesInfo: null,
			defaultOption: {
				show: "auto",
				triggerOn: null,
				zlevel: 0,
				z: 50,
				type: "line",
				snap: !1,
				triggerTooltip: !0,
				value: null,
				status: null,
				link: [],
				animation: null,
				animationDurationUpdate: 200,
				lineStyle: {
					color: "#aaa",
					width: 1,
					type: "solid"
				},
				shadowStyle: {
					color: "rgba(150,150,150,0.3)"
				},
				label: {
					show: !0,
					formatter: null,
					precision: "auto",
					margin: 3,
					color: "#fff",
					padding: [5, 7, 5, 7],
					backgroundColor: "auto",
					borderColor: null,
					borderWidth: 0,
					shadowBlur: 3,
					shadowColor: "#aaa"
				},
				handle: {
					show: !1,
					icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
					size: 45,
					margin: 50,
					color: "#333",
					shadowBlur: 3,
					shadowColor: "#aaa",
					shadowOffsetX: 0,
					shadowOffsetY: 2,
					throttle: 40
				}
			}
		}), Ui()),
		YN = f,
		UN = du({
			type: "axisPointer",
			render: function(t, e, n) {
				var i = e.getComponent("tooltip"),
					a = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
				Lv("axisPointer", n, function(t, e, n) {
					"none" !== a && ("leave" === t || a.indexOf(t) >= 0) && n({
						type: "updateAxisPointer",
						currTrigger: t,
						x: e && e.offsetX,
						y: e && e.offsetY
					})
				})
			},
			remove: function(t, e) {
				zv(e.getZr(), "axisPointer"), UN.superApply(this._model, "remove", arguments)
			},
			dispose: function(t, e) {
				zv("axisPointer", e), UN.superApply(this._model, "dispose", arguments)
			}
		}),
		jN = Ui(),
		qN = i,
		KN = y;
	Rv.prototype = {
		_group: null,
		_lastGraphicKey: null,
		_handle: null,
		_dragging: !1,
		_lastValue: null,
		_lastStatus: null,
		_payloadInfo: null,
		animationThreshold: 15,
		render: function(t, e, n, i) {
			var a = e.get("value"),
				o = e.get("status");
			if(this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== a || this._lastStatus !== o) {
				this._lastValue = a, this._lastStatus = o;
				var r = this._group,
					s = this._handle;
				if(!o || "hide" === o) return r && r.hide(), void(s && s.hide());
				r && r.show(), s && s.show();
				var l = {};
				this.makeElOption(l, a, t, e, n);
				var u = l.graphicKey;
				u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;
				var h = this._moveAnimation = this.determineAnimation(t, e);
				if(r) {
					var c = x(Bv, e, h);
					this.updatePointerEl(r, l, c, e), this.updateLabelEl(r, l, c, e)
				} else r = this._group = new rS, this.createPointerEl(r, l, t, e), this.createLabelEl(r, l, t, e), n.getZr().add(r);
				Wv(r, e, !0), this._renderHandle(a)
			}
		},
		remove: function(t) {
			this.clear(t)
		},
		dispose: function(t) {
			this.clear(t)
		},
		determineAnimation: function(t, e) {
			var n = e.get("animation"),
				i = t.axis,
				a = "category" === i.type,
				o = e.get("snap");
			if(!o && !a) return !1;
			if("auto" === n || null == n) {
				var r = this.animationThreshold;
				if(a && i.getBandWidth() > r) return !0;
				if(o) {
					var s = kc(t).seriesDataCount,
						l = i.getExtent();
					return Math.abs(l[0] - l[1]) / s > r
				}
				return !1
			}
			return n === !0
		},
		makeElOption: function() {},
		createPointerEl: function(t, e) {
			var n = e.pointer;
			if(n) {
				var i = jN(t).pointerEl = new qI[n.type](qN(e.pointer));
				t.add(i)
			}
		},
		createLabelEl: function(t, e, n, i) {
			if(e.label) {
				var a = jN(t).labelEl = new LI(qN(e.label));
				t.add(a), Gv(a, i)
			}
		},
		updatePointerEl: function(t, e, n) {
			var i = jN(t).pointerEl;
			i && (i.setStyle(e.pointer.style), n(i, {
				shape: e.pointer.shape
			}))
		},
		updateLabelEl: function(t, e, n, i) {
			var a = jN(t).labelEl;
			a && (a.setStyle(e.label.style), n(a, {
				shape: e.label.shape,
				position: e.label.position
			}), Gv(a, i))
		},
		_renderHandle: function(t) {
			if(!this._dragging && this.updateHandleTransform) {
				var e = this._axisPointerModel,
					n = this._api.getZr(),
					i = this._handle,
					a = e.getModel("handle"),
					o = e.get("status");
				if(!a.get("show") || !o || "hide" === o) return i && n.remove(i), void(this._handle = null);
				var r;
				this._handle || (r = !0, i = this._handle = Zo(a.get("icon"), {
					cursor: "move",
					draggable: !0,
					onmousemove: function(t) {
						wb(t.event)
					},
					onmousedown: KN(this._onHandleDragMove, this, 0, 0),
					drift: KN(this._onHandleDragMove, this),
					ondragend: KN(this._onHandleDragEnd, this)
				}), n.add(i)), Wv(i, e, !1);
				var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
				i.setStyle(a.getItemStyle(null, s));
				var l = a.get("size");
				_(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), $s(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, r)
			}
		},
		_moveHandleToValue: function(t, e) {
			Bv(this._axisPointerModel, !e && this._moveAnimation, this._handle, Fv(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
		},
		_onHandleDragMove: function(t, e) {
			var n = this._handle;
			if(n) {
				this._dragging = !0;
				var i = this.updateHandleTransform(Fv(n), [t, e], this._axisModel, this._axisPointerModel);
				this._payloadInfo = i, n.stopAnimation(), n.attr(Fv(i)), jN(n).lastProp = null, this._doDispatchAxisPointer()
			}
		},
		_doDispatchAxisPointer: function() {
			var t = this._handle;
			if(t) {
				var e = this._payloadInfo,
					n = this._axisModel;
				this._api.dispatchAction({
					type: "updateAxisPointer",
					x: e.cursorPoint[0],
					y: e.cursorPoint[1],
					tooltipOption: e.tooltipOption,
					axesInfo: [{
						axisDim: n.axis.dim,
						axisIndex: n.componentIndex
					}]
				})
			}
		},
		_onHandleDragEnd: function() {
			this._dragging = !1;
			var t = this._handle;
			if(t) {
				var e = this._axisPointerModel.get("value");
				this._moveHandleToValue(e), this._api.dispatchAction({
					type: "hideTip"
				})
			}
		},
		getHandleTransform: null,
		updateHandleTransform: null,
		clear: function(t) {
			this._lastValue = null, this._lastStatus = null;
			var e = t.getZr(),
				n = this._group,
				i = this._handle;
			e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null)
		},
		doClear: function() {},
		buildLabel: function(t, e, n) {
			return n = n || 0, {
				x: t[n],
				y: t[1 - n],
				width: e[n],
				height: e[1 - n]
			}
		}
	}, Rv.prototype.constructor = Rv, na(Rv);
	var $N = Rv.extend({
			makeElOption: function(t, e, n, i, a) {
				var o = n.axis,
					r = o.grid,
					s = i.get("type"),
					l = Jv(r, o).getOtherAxis(o).getGlobalExtent(),
					u = o.toGlobalCoord(o.dataToCoord(e, !0));
				if(s && "none" !== s) {
					var h = Hv(i),
						c = JN[s](o, u, l, h);
					c.style = h, t.graphicKey = c.type, t.pointer = c
				}
				var d = Rc(r.model, n);
				jv(e, t, d, n, i, a)
			},
			getHandleTransform: function(t, e, n) {
				var i = Rc(e.axis.grid.model, e, {
					labelInside: !1
				});
				return i.labelMargin = n.get("handle.margin"), {
					position: Uv(e.axis, t, i),
					rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
				}
			},
			updateHandleTransform: function(t, e, n) {
				var i = n.axis,
					a = i.grid,
					o = i.getGlobalExtent(!0),
					r = Jv(a, i).getOtherAxis(i).getGlobalExtent(),
					s = "x" === i.dim ? 0 : 1,
					l = t.position;
				l[s] += e[s], l[s] = Math.min(o[1], l[s]), l[s] = Math.max(o[0], l[s]);
				var u = (r[1] + r[0]) / 2,
					h = [u, u];
				h[s] = l[s];
				var c = [{
					verticalAlign: "middle"
				}, {
					align: "center"
				}];
				return {
					position: l,
					rotation: t.rotation,
					cursorPoint: h,
					tooltipOption: c[s]
				}
			}
		}),
		JN = {
			line: function(t, e, n, i) {
				var a = qv([e, n[0]], [e, n[1]], Qv(t));
				return ro({
					shape: a,
					style: i
				}), {
					type: "Line",
					shape: a
				}
			},
			shadow: function(t, e, n) {
				var i = Math.max(1, t.getBandWidth()),
					a = n[1] - n[0];
				return {
					type: "Rect",
					shape: Kv([e - i / 2, n[0]], [i, a], Qv(t))
				}
			}
		};
	sL.registerAxisPointerClass("CartesianAxisPointer", $N), eu(function(t) {
		if(t) {
			(!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
			var e = t.axisPointer.link;
			e && !_(e) && (t.axisPointer.link = [e])
		}
	}), nu(sD.PROCESSOR.STATISTIC, function(t, e) {
		t.getComponent("axisPointer").coordSysAxesInfo = Mc(t, e)
	}), au({
		type: "updateAxisPointer",
		event: "updateAxisPointer",
		update: ":updateAxisPointer"
	}, ZN);
	var QN = ["x", "y"],
		tE = ["width", "height"],
		eE = Rv.extend({
			makeElOption: function(t, e, n, i, a) {
				var o = n.axis,
					r = o.coordinateSystem,
					s = ey(r, 1 - ty(o)),
					l = r.dataToPoint(e)[0],
					u = i.get("type");
				if(u && "none" !== u) {
					var h = Hv(i),
						c = nE[u](o, l, s, h);
					c.style = h, t.graphicKey = c.type, t.pointer = c
				}
				var d = yv(n);
				jv(e, t, d, n, i, a)
			},
			getHandleTransform: function(t, e, n) {
				var i = yv(e, {
					labelInside: !1
				});
				return i.labelMargin = n.get("handle.margin"), {
					position: Uv(e.axis, t, i),
					rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
				}
			},
			updateHandleTransform: function(t, e, n) {
				var i = n.axis,
					a = i.coordinateSystem,
					o = ty(i),
					r = ey(a, o),
					s = t.position;
				s[o] += e[o], s[o] = Math.min(r[1], s[o]), s[o] = Math.max(r[0], s[o]);
				var l = ey(a, 1 - o),
					u = (l[1] + l[0]) / 2,
					h = [u, u];
				return h[o] = s[o], {
					position: s,
					rotation: t.rotation,
					cursorPoint: h,
					tooltipOption: {
						verticalAlign: "middle"
					}
				}
			}
		}),
		nE = {
			line: function(t, e, n, i) {
				var a = qv([e, n[0]], [e, n[1]], ty(t));
				return ro({
					shape: a,
					style: i
				}), {
					type: "Line",
					shape: a
				}
			},
			shadow: function(t, e, n) {
				var i = t.getBandWidth(),
					a = n[1] - n[0];
				return {
					type: "Rect",
					shape: Kv([e - i / 2, n[0]], [i, a], ty(t))
				}
			}
		};
	sL.registerAxisPointerClass("SingleAxisPointer", eE), du({
		type: "single"
	});
	var iE = 2,
		aE = sA.extend({
			type: "series.themeRiver",
			dependencies: ["singleAxis"],
			nameMap: null,
			init: function() {
				aE.superApply(this, "init", arguments), this.legendDataProvider = function() {
					return this.getRawData()
				}
			},
			fixData: function(t) {
				var e = t.length,
					n = Qi(t, function(t) {
						return t[2]
					}),
					i = [];
				n.buckets.each(function(t, e) {
					i.push({
						name: e,
						dataList: t
					})
				});
				for(var a = i.length, o = -1, r = -1, s = 0; a > s; ++s) {
					var l = i[s].dataList.length;
					l > o && (o = l, r = s)
				}
				for(var u = 0; a > u; ++u)
					if(u !== r)
						for(var h = i[u].name, c = 0; o > c; ++c) {
							for(var d = i[r].dataList[c][0], f = i[u].dataList.length, p = -1, g = 0; f > g; ++g) {
								var m = i[u].dataList[g][0];
								if(m === d) {
									p = g;
									break
								}
							} - 1 === p && (t[e] = [], t[e][0] = d, t[e][1] = 0, t[e][2] = h, e++)
						}
				return t
			},
			getInitialData: function(t, e) {
				for(var n = e.queryComponents({
						mainType: "singleAxis",
						index: this.get("singleAxisIndex"),
						id: this.get("singleAxisId")
					})[0], i = n.get("type"), a = m(t.data, function(t) {
						return void 0 !== t[2]
					}), o = this.fixData(a || []), r = [], s = this.nameMap = B(), l = 0, u = 0; u < o.length; ++u) r.push(o[u][iE]), s.get(o[u][iE]) || (s.set(o[u][iE], l), l++);
				var h = HD(o, {
						coordDimensions: ["single"],
						dimensionsDefine: [{
							name: "time",
							type: bu(i)
						}, {
							name: "value",
							type: "float"
						}, {
							name: "name",
							type: "ordinal"
						}],
						encodeDefine: {
							single: 0,
							value: 1,
							itemName: 2
						}
					}),
					c = new GD(h, this);
				return c.initData(o), c
			},
			getLayerSeries: function() {
				for(var t = this.getData(), e = t.count(), n = [], i = 0; e > i; ++i) n[i] = i;
				var a = t.mapDimension("single"),
					o = Qi(n, function(e) {
						return t.get("name", e)
					}),
					r = [];
				return o.buckets.each(function(e, n) {
					e.sort(function(e, n) {
						return t.get(a, e) - t.get(a, n)
					}), r.push({
						name: n,
						indices: e
					})
				}), r
			},
			getAxisTooltipData: function(t, e) {
				_(t) || (t = t ? [t] : []);
				for(var n, i = this.getData(), a = this.getLayerSeries(), o = [], r = a.length, s = 0; r > s; ++s) {
					for(var l = Number.MAX_VALUE, u = -1, h = a[s].indices.length, c = 0; h > c; ++c) {
						var d = i.get(t[0], a[s].indices[c]),
							f = Math.abs(d - e);
						l >= f && (n = d, l = f, u = a[s].indices[c])
					}
					o.push(u)
				}
				return {
					dataIndices: o,
					nestestValue: n
				}
			},
			formatTooltip: function(t) {
				var e = this.getData(),
					n = e.getName(t),
					i = e.get(e.mapDimension("value"), t);
				return(isNaN(i) || null == i) && (i = "-"), vr(n + " : " + i)
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "singleAxis",
				boundaryGap: ["10%", "10%"],
				singleAxisIndex: 0,
				animationEasing: "linear",
				label: {
					margin: 4,
					show: !0,
					position: "left",
					color: "#000",
					fontSize: 11
				},
				emphasis: {
					label: {
						show: !0
					}
				}
			}
		});
	pu({
		type: "themeRiver",
		init: function() {
			this._layers = []
		},
		render: function(t) {
			function e(t) {
				return t.name
			}

			function n(e, n, s) {
				var l = this._layers;
				if("remove" === e) return void a.remove(l[n]);
				for(var u, h = [], d = [], f = o[n].indices, p = 0; p < f.length; p++) {
					var g = i.getItemLayout(f[p]),
						m = g.x,
						v = g.y0,
						y = g.y;
					h.push([m, v]), d.push([m, v + y]), u = i.getItemVisual(f[p], "color")
				}
				var x, _, w = i.getItemLayout(f[0]),
					b = i.getItemModel(f[p - 1]),
					S = b.getModel("label"),
					M = S.get("margin");
				if("add" === e) {
					var I = c[n] = new rS;
					x = new DL({
						shape: {
							points: h,
							stackedOnPoints: d,
							smooth: .4,
							stackedOnSmooth: .4,
							smoothConstraint: !1
						},
						z2: 0
					}), _ = new yI({
						style: {
							x: w.x - M,
							y: w.y0 + w.y / 2
						}
					}), I.add(x), I.add(_), a.add(I), x.setClipPath(ny(x.getBoundingRect(), t, function() {
						x.removeClipPath()
					}))
				} else {
					var I = l[s];
					x = I.childAt(0), _ = I.childAt(1), a.add(I), c[n] = I, zo(x, {
						shape: {
							points: h,
							stackedOnPoints: d
						}
					}, t), zo(_, {
						style: {
							x: w.x - M,
							y: w.y0 + w.y / 2
						}
					}, t)
				}
				var T = b.getModel("emphasis.itemStyle"),
					A = b.getModel("itemStyle");
				To(_.style, S, {
					text: S.get("show") ? t.getFormattedLabel(f[p - 1], "normal") || i.getName(f[p - 1]) : null,
					textVerticalAlign: "middle"
				}), x.setStyle(r({
					fill: u
				}, A.getItemStyle(["color"]))), So(x, T.getItemStyle())
			}
			var i = t.getData(),
				a = this.group,
				o = t.getLayerSeries(),
				s = i.getLayout("layoutInfo"),
				l = s.rect,
				u = s.boundaryGap;
			a.attr("position", [0, l.y + u[0]]);
			var h = new xu(this._layersSeries || [], o, e, e),
				c = {};
			h.add(y(n, this, "add")).update(y(n, this, "update")).remove(y(n, this, "remove")).execute(), this._layersSeries = o, this._layers = c
		},
		dispose: function() {}
	});
	var oE = function(t) {
			t.eachSeriesByType("themeRiver", function(t) {
				var e = t.getData(),
					n = t.coordinateSystem,
					i = {},
					a = n.getRect();
				i.rect = a;
				var o = t.get("boundaryGap"),
					r = n.getAxis();
				if(i.boundaryGap = o, "horizontal" === r.orient) {
					o[0] = Qo(o[0], a.height), o[1] = Qo(o[1], a.height);
					var s = a.height - o[0] - o[1];
					iy(e, t, s)
				} else {
					o[0] = Qo(o[0], a.width), o[1] = Qo(o[1], a.width);
					var l = a.width - o[0] - o[1];
					iy(e, t, l)
				}
				e.setLayout("layoutInfo", i)
			})
		},
		rE = function(t) {
			t.eachSeriesByType("themeRiver", function(t) {
				var e = t.getData(),
					n = t.getRawData(),
					i = t.get("color"),
					a = B();
				e.each(function(t) {
					a.set(e.getRawIndex(t), t)
				}), n.each(function(o) {
					var r = n.getName(o),
						s = i[(t.nameMap.get(r) - 1) % i.length];
					n.setItemVisual(o, "color", s);
					var l = a.get(o);
					null != l && e.setItemVisual(l, "color", s)
				})
			})
		};
	su(oE), lu(rE), nu(ZL("themeRiver")); {
		var sE = jC.extend({
				type: "series.pictorialBar",
				dependencies: ["grid"],
				defaultOption: {
					symbol: "circle",
					symbolSize: null,
					symbolRotate: null,
					symbolPosition: null,
					symbolOffset: null,
					symbolMargin: null,
					symbolRepeat: !1,
					symbolRepeatDirection: "end",
					symbolClip: !1,
					symbolBoundingData: null,
					symbolPatternSize: 400,
					barGap: "-100%",
					progressive: 0,
					hoverAnimation: !1
				},
				getInitialData: function(t) {
					return t.stack = null, sE.superApply(this, "getInitialData", arguments)
				}
			}),
			lE = ["itemStyle", "borderWidth"],
			uE = [{
				xy: "x",
				wh: "width",
				index: 0,
				posDesc: ["left", "right"]
			}, {
				xy: "y",
				wh: "height",
				index: 1,
				posDesc: ["top", "bottom"]
			}],
			hE = new xI;
		pu({
			type: "pictorialBar",
			render: function(t, e, n) {
				var i = this.group,
					a = t.getData(),
					o = this._data,
					r = t.coordinateSystem,
					s = r.getBaseAxis(),
					l = !!s.isHorizontal(),
					u = r.grid.getRect(),
					h = {
						ecSize: {
							width: n.getWidth(),
							height: n.getHeight()
						},
						seriesModel: t,
						coordSys: r,
						coordSysExtent: [
							[u.x, u.x + u.width],
							[u.y, u.y + u.height]
						],
						isHorizontal: l,
						valueDim: uE[+l],
						categoryDim: uE[1 - l]
					};
				return a.diff(o).add(function(t) {
					if(a.hasValue(t)) {
						var e = my(a, t),
							n = oy(a, t, e, h),
							o = _y(a, h, n);
						a.setItemGraphicEl(t, o), i.add(o), Ty(o, h, n)
					}
				}).update(function(t, e) {
					var n = o.getItemGraphicEl(e);
					if(!a.hasValue(t)) return void i.remove(n);
					var r = my(a, t),
						s = oy(a, t, r, h),
						l = Sy(a, s);
					n && l !== n.__pictorialShapeStr && (i.remove(n), a.setItemGraphicEl(t, null), n = null), n ? wy(n, h, s) : n = _y(a, h, s, !0), a.setItemGraphicEl(t, n), n.__pictorialSymbolMeta = s, i.add(n), Ty(n, h, s)
				}).remove(function(t) {
					var e = o.getItemGraphicEl(t);
					e && by(o, t, e.__pictorialSymbolMeta.animationModel, e)
				}).execute(), this._data = a, this.group
			},
			dispose: G,
			remove: function(t) {
				var e = this.group,
					n = this._data;
				t.get("animation") ? n && n.eachItemGraphicEl(function(e) {
					by(n, e.dataIndex, t, e)
				}) : e.removeAll()
			}
		})
	}
	su(x(lh, "pictorialBar")), lu(CL("pictorialBar", "roundRect"));
	var cE = function(t) {
			var e = t.grid.getRect();
			return {
				coordSys: {
					type: "cartesian2d",
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height
				},
				api: {
					coord: function(e) {
						return t.dataToPoint(e)
					},
					size: y(Dy, t)
				}
			}
		},
		dE = function(t) {
			var e = t.getBoundingRect();
			return {
				coordSys: {
					type: "geo",
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height,
					zoom: t.getZoom()
				},
				api: {
					coord: function(e) {
						return t.dataToPoint(e)
					},
					size: y(Cy, t)
				}
			}
		},
		fE = function(t) {
			var e = t.getRect();
			return {
				coordSys: {
					type: "singleAxis",
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height
				},
				api: {
					coord: function(e) {
						return t.dataToPoint(e)
					},
					size: y(Ly, t)
				}
			}
		},
		pE = function(t) {
			var e = t.getRadiusAxis(),
				n = t.getAngleAxis(),
				i = e.getExtent();
			return i[0] > i[1] && i.reverse(), {
				coordSys: {
					type: "polar",
					cx: t.cx,
					cy: t.cy,
					r: i[1],
					r0: i[0]
				},
				api: {
					coord: y(function(i) {
						var a = e.dataToRadius(i[0]),
							o = n.dataToAngle(i[1]),
							r = t.coordToPoint([a, o]);
						return r.push(a, o * Math.PI / 180), r
					}),
					size: y(ky, t)
				}
			}
		},
		gE = function(t) {
			var e = t.getRect(),
				n = t.getRangeInfo();
			return {
				coordSys: {
					type: "calendar",
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height,
					cellWidth: t.getCellWidth(),
					cellHeight: t.getCellHeight(),
					rangeInfo: {
						start: n.start,
						end: n.end,
						weeks: n.weeks,
						dayCount: n.allDay
					}
				},
				api: {
					coord: function(e, n) {
						return t.dataToPoint(e, n)
					}
				}
			}
		},
		mE = ["itemStyle"],
		vE = ["emphasis", "itemStyle"],
		yE = ["label"],
		xE = ["emphasis", "label"],
		_E = "e\x00\x00",
		wE = {
			cartesian2d: cE,
			geo: dE,
			singleAxis: fE,
			polar: pE,
			calendar: gE
		};
	sA.extend({
		type: "series.custom",
		dependencies: ["grid", "polar", "geo", "singleAxis", "calendar"],
		defaultOption: {
			coordinateSystem: "cartesian2d",
			zlevel: 0,
			z: 2,
			legendHoverLink: !0,
			useTransform: !0
		},
		getInitialData: function() {
			return Hu(this.getSource(), this)
		},
		getDataParams: function(t, e, n) {
			var i = sA.prototype.getDataParams.apply(this, arguments);
			return n && (i.info = n.info), i
		}
	}), Xs.extend({
		type: "custom",
		_data: null,
		render: function(t, e, n, i) {
			var a = this._data,
				o = t.getData(),
				r = this.group,
				s = Ey(t, o, e, n);
			o.diff(a).add(function(e) {
				Ry(null, e, s(e, i), t, r, o)
			}).update(function(e, n) {
				var l = a.getItemGraphicEl(n);
				Ry(l, e, s(e, i), t, r, o)
			}).remove(function(t) {
				var e = a.getItemGraphicEl(t);
				e && r.remove(e)
			}).execute(), this._data = o
		},
		incrementalPrepareRender: function() {
			this.group.removeAll(), this._data = null
		},
		incrementalRender: function(t, e, n, i, a) {
			function o(t) {
				t.isGroup || (t.incremental = !0, t.useHoverLayer = !0)
			}
			for(var r = e.getData(), s = Ey(e, r, n, i), l = t.start; l < t.end; l++) {
				var u = Ry(null, l, s(l, a), e, this.group, r);
				u.traverse(o)
			}
		},
		dispose: G,
		filterForExposedEvent: function(t, e, n) {
			var i = e.element;
			if(null == i || n.name === i) return !0;
			for(;
				(n = n.parent) && n !== this.group;)
				if(n.name === i) return !0;
			return !1
		}
	}), $y.prototype = {
		constructor: $y,
		pointToData: function(t, e) {
			return this.polar.pointToData(t, e)["radius" === this.dim ? 0 : 1]
		},
		dataToRadius: NC.prototype.dataToCoord,
		radiusToData: NC.prototype.coordToData
	}, h($y, NC);
	var bE = Ui();
	Jy.prototype = {
		constructor: Jy,
		pointToData: function(t, e) {
			return this.polar.pointToData(t, e)["radius" === this.dim ? 0 : 1]
		},
		dataToAngle: NC.prototype.dataToCoord,
		angleToData: NC.prototype.coordToData,
		calculateCategoryInterval: function() {
			var t = this,
				e = t.getLabelModel(),
				n = t.scale,
				i = n.getExtent(),
				a = n.count();
			if(i[1] - i[0] < 1) return 0;
			var o = i[0],
				r = t.dataToCoord(o + 1) - t.dataToCoord(o),
				s = Math.abs(r),
				l = Bn(o, e.getFont(), "center", "top"),
				u = Math.max(l.height, 7),
				h = u / s;
			isNaN(h) && (h = 1 / 0);
			var c = Math.max(0, Math.floor(h)),
				d = bE(t.model),
				f = d.lastAutoInterval,
				p = d.lastTickCount;
			return null != f && null != p && Math.abs(f - c) <= 1 && Math.abs(p - a) <= 1 && f > c ? c = f : (d.lastTickCount = a, d.lastAutoInterval = c), c
		}
	}, h(Jy, NC);
	var SE = function(t) {
		this.name = t || "", this.cx = 0, this.cy = 0, this._radiusAxis = new $y, this._angleAxis = new Jy, this._radiusAxis.polar = this._angleAxis.polar = this
	};
	SE.prototype = {
		type: "polar",
		axisPointerEnabled: !0,
		constructor: SE,
		dimensions: ["radius", "angle"],
		model: null,
		containPoint: function(t) {
			var e = this.pointToCoord(t);
			return this._radiusAxis.contain(e[0]) && this._angleAxis.contain(e[1])
		},
		containData: function(t) {
			return this._radiusAxis.containData(t[0]) && this._angleAxis.containData(t[1])
		},
		getAxis: function(t) {
			return this["_" + t + "Axis"]
		},
		getAxes: function() {
			return [this._radiusAxis, this._angleAxis]
		},
		getAxesByScale: function(t) {
			var e = [],
				n = this._angleAxis,
				i = this._radiusAxis;
			return n.scale.type === t && e.push(n), i.scale.type === t && e.push(i), e
		},
		getAngleAxis: function() {
			return this._angleAxis
		},
		getRadiusAxis: function() {
			return this._radiusAxis
		},
		getOtherAxis: function(t) {
			var e = this._angleAxis;
			return t === e ? this._radiusAxis : e
		},
		getBaseAxis: function() {
			return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAngleAxis()
		},
		getTooltipAxes: function(t) {
			var e = null != t && "auto" !== t ? this.getAxis(t) : this.getBaseAxis();
			return {
				baseAxes: [e],
				otherAxes: [this.getOtherAxis(e)]
			}
		},
		dataToPoint: function(t, e) {
			return this.coordToPoint([this._radiusAxis.dataToRadius(t[0], e), this._angleAxis.dataToAngle(t[1], e)])
		},
		pointToData: function(t, e) {
			var n = this.pointToCoord(t);
			return [this._radiusAxis.radiusToData(n[0], e), this._angleAxis.angleToData(n[1], e)]
		},
		pointToCoord: function(t) {
			var e = t[0] - this.cx,
				n = t[1] - this.cy,
				i = this.getAngleAxis(),
				a = i.getExtent(),
				o = Math.min(a[0], a[1]),
				r = Math.max(a[0], a[1]);
			i.inverse ? o = r - 360 : r = o + 360;
			var s = Math.sqrt(e * e + n * n);
			e /= s, n /= s;
			for(var l = Math.atan2(-n, e) / Math.PI * 180, u = o > l ? 1 : -1; o > l || l > r;) l += 360 * u;
			return [s, l]
		},
		coordToPoint: function(t) {
			var e = t[0],
				n = t[1] / 180 * Math.PI,
				i = Math.cos(n) * e + this.cx,
				a = -Math.sin(n) * e + this.cy;
			return [i, a]
		}
	};
	var ME = _T.extend({
		type: "polarAxis",
		axis: null,
		getCoordSysModel: function() {
			return this.ecModel.queryComponents({
				mainType: "polar",
				index: this.option.polarIndex,
				id: this.option.polarId
			})[0]
		}
	});
	a(ME.prototype, xC);
	var IE = {
		angle: {
			startAngle: 90,
			clockwise: !0,
			splitNumber: 12,
			axisLabel: {
				rotate: !1
			}
		},
		radius: {
			splitNumber: 5
		}
	};
	HC("angle", ME, Qy, IE.angle), HC("radius", ME, Qy, IE.radius), cu({
		type: "polar",
		dependencies: ["polarAxis", "angleAxis"],
		coordinateSystem: null,
		findAxisModel: function(t) {
			var e, n = this.ecModel;
			return n.eachComponent(t, function(t) {
				t.getCoordSysModel() === this && (e = t)
			}, this), e
		},
		defaultOption: {
			zlevel: 0,
			z: 0,
			center: ["50%", "50%"],
			radius: "80%"
		}
	});
	var TE = {
		dimensions: SE.prototype.dimensions,
		create: function(t, e) {
			var n = [];
			return t.eachComponent("polar", function(t, i) {
				var a = new SE(i);
				a.update = ex;
				var o = a.getRadiusAxis(),
					r = a.getAngleAxis(),
					s = t.findAxisModel("radiusAxis"),
					l = t.findAxisModel("angleAxis");
				nx(o, s), nx(r, l), tx(a, t, e), n.push(a), t.coordinateSystem = a, a.model = t
			}), t.eachSeries(function(e) {
				if("polar" === e.get("coordinateSystem")) {
					var n = t.queryComponents({
						mainType: "polar",
						index: e.get("polarIndex"),
						id: e.get("polarId")
					})[0];
					e.coordinateSystem = n.coordinateSystem
				}
			}), n
		}
	};
	os.register("polar", TE);
	var AE = ["axisLine", "axisLabel", "axisTick", "splitLine", "splitArea"];
	sL.extend({
		type: "angleAxis",
		axisPointerClass: "PolarAxisPointer",
		render: function(t) {
			if(this.group.removeAll(), t.get("show")) {
				var e = t.axis,
					n = e.polar,
					a = n.getRadiusAxis().getExtent(),
					o = e.getTicksCoords(),
					r = p(e.getViewLabels(), function(t) {
						var t = i(t);
						return t.coord = e.dataToCoord(t.tickValue), t
					});
				ox(r), ox(o), f(AE, function(i) {
					!t.get(i + ".show") || e.scale.isBlank() && "axisLine" !== i || this["_" + i](t, n, o, a, r)
				}, this)
			}
		},
		_axisLine: function(t, e, n, i) {
			var a = t.getModel("axisLine.lineStyle"),
				o = new xI({
					shape: {
						cx: e.cx,
						cy: e.cy,
						r: i[ax(e)]
					},
					style: a.getLineStyle(),
					z2: 1,
					silent: !0
				});
			o.style.fill = null, this.group.add(o)
		},
		_axisTick: function(t, e, n, i) {
			var a = t.getModel("axisTick"),
				o = (a.get("inside") ? -1 : 1) * a.get("length"),
				r = i[ax(e)],
				l = p(n, function(t) {
					return new PI({
						shape: ix(e, [r, r + o], t.coord)
					})
				});
			this.group.add(YI(l, {
				style: s(a.getModel("lineStyle").getLineStyle(), {
					stroke: t.get("axisLine.lineStyle.color")
				})
			}))
		},
		_axisLabel: function(t, e, n, i, a) {
			var o = t.getCategories(!0),
				r = t.getModel("axisLabel"),
				s = r.get("margin");
			f(a, function(n) {
				var a = r,
					l = n.tickValue,
					u = i[ax(e)],
					h = e.coordToPoint([u + s, n.coord]),
					c = e.cx,
					d = e.cy,
					f = Math.abs(h[0] - c) / u < .3 ? "center" : h[0] > c ? "left" : "right",
					p = Math.abs(h[1] - d) / u < .3 ? "middle" : h[1] > d ? "top" : "bottom";
				o && o[l] && o[l].textStyle && (a = new Xo(o[l].textStyle, r, r.ecModel));
				var g = new yI({
					silent: !0
				});
				this.group.add(g), To(g.style, a, {
					x: h[0],
					y: h[1],
					textFill: a.getTextColor() || t.get("axisLine.lineStyle.color"),
					text: n.formattedLabel,
					textAlign: f,
					textVerticalAlign: p
				})
			}, this)
		},
		_splitLine: function(t, e, n, i) {
			var a = t.getModel("splitLine"),
				o = a.getModel("lineStyle"),
				r = o.get("color"),
				l = 0;
			r = r instanceof Array ? r : [r];
			for(var u = [], h = 0; h < n.length; h++) {
				var c = l++ % r.length;
				u[c] = u[c] || [], u[c].push(new PI({
					shape: ix(e, i, n[h].coord)
				}))
			}
			for(var h = 0; h < u.length; h++) this.group.add(YI(u[h], {
				style: s({
					stroke: r[h % r.length]
				}, o.getLineStyle()),
				silent: !0,
				z: t.get("z")
			}))
		},
		_splitArea: function(t, e, n, i) {
			if(n.length) {
				var a = t.getModel("splitArea"),
					o = a.getModel("areaStyle"),
					r = o.get("color"),
					l = 0;
				r = r instanceof Array ? r : [r];
				for(var u = [], h = Math.PI / 180, c = -n[0].coord * h, d = Math.min(i[0], i[1]), f = Math.max(i[0], i[1]), p = t.get("clockwise"), g = 1; g < n.length; g++) {
					var m = l++ % r.length;
					u[m] = u[m] || [], u[m].push(new bI({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r0: d,
							r: f,
							startAngle: c,
							endAngle: -n[g].coord * h,
							clockwise: p
						},
						silent: !0
					})), c = -n[g].coord * h
				}
				for(var g = 0; g < u.length; g++) this.group.add(YI(u[g], {
					style: s({
						fill: r[g % r.length]
					}, o.getAreaStyle()),
					silent: !0
				}))
			}
		}
	});
	var DE = ["axisLine", "axisTickLabel", "axisName"],
		CE = ["splitLine", "splitArea"];
	sL.extend({
		type: "radiusAxis",
		axisPointerClass: "PolarAxisPointer",
		render: function(t) {
			if(this.group.removeAll(), t.get("show")) {
				var e = t.axis,
					n = e.polar,
					i = n.getAngleAxis(),
					a = e.getTicksCoords(),
					o = i.getExtent()[0],
					r = e.getExtent(),
					s = rx(n, t, o),
					l = new nL(t, s);
				f(DE, l.add, l), this.group.add(l.getGroup()), f(CE, function(i) {
					t.get(i + ".show") && !e.scale.isBlank() && this["_" + i](t, n, o, r, a)
				}, this)
			}
		},
		_splitLine: function(t, e, n, i, a) {
			var o = t.getModel("splitLine"),
				r = o.getModel("lineStyle"),
				l = r.get("color"),
				u = 0;
			l = l instanceof Array ? l : [l];
			for(var h = [], c = 0; c < a.length; c++) {
				var d = u++ % l.length;
				h[d] = h[d] || [], h[d].push(new xI({
					shape: {
						cx: e.cx,
						cy: e.cy,
						r: a[c].coord
					},
					silent: !0
				}))
			}
			for(var c = 0; c < h.length; c++) this.group.add(YI(h[c], {
				style: s({
					stroke: l[c % l.length],
					fill: null
				}, r.getLineStyle()),
				silent: !0
			}))
		},
		_splitArea: function(t, e, n, i, a) {
			if(a.length) {
				var o = t.getModel("splitArea"),
					r = o.getModel("areaStyle"),
					l = r.get("color"),
					u = 0;
				l = l instanceof Array ? l : [l];
				for(var h = [], c = a[0].coord, d = 1; d < a.length; d++) {
					var f = u++ % l.length;
					h[f] = h[f] || [], h[f].push(new bI({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r0: c,
							r: a[d].coord,
							startAngle: 0,
							endAngle: 2 * Math.PI
						},
						silent: !0
					})), c = a[d].coord
				}
				for(var d = 0; d < h.length; d++) this.group.add(YI(h[d], {
					style: s({
						fill: l[d % l.length]
					}, r.getAreaStyle()),
					silent: !0
				}))
			}
		}
	});
	var LE = Rv.extend({
			makeElOption: function(t, e, n, i, a) {
				var o = n.axis;
				"angle" === o.dim && (this.animationThreshold = Math.PI / 18);
				var r, s = o.polar,
					l = s.getOtherAxis(o),
					u = l.getExtent();
				r = o["dataTo" + Sr(o.dim)](e);
				var h = i.get("type");
				if(h && "none" !== h) {
					var c = Hv(i),
						d = kE[h](o, s, r, u, c);
					d.style = c, t.graphicKey = d.type, t.pointer = d
				}
				var f = i.get("label.margin"),
					p = sx(e, n, i, s, f);
				Zv(t, n, i, a, p)
			}
		}),
		kE = {
			line: function(t, e, n, i) {
				return "angle" === t.dim ? {
					type: "Line",
					shape: qv(e.coordToPoint([i[0], n]), e.coordToPoint([i[1], n]))
				} : {
					type: "Circle",
					shape: {
						cx: e.cx,
						cy: e.cy,
						r: n
					}
				}
			},
			shadow: function(t, e, n, i) {
				var a = Math.max(1, t.getBandWidth()),
					o = Math.PI / 180;
				return "angle" === t.dim ? {
					type: "Sector",
					shape: $v(e.cx, e.cy, i[0], i[1], (-n - a / 2) * o, (-n + a / 2) * o)
				} : {
					type: "Sector",
					shape: $v(e.cx, e.cy, n - a / 2, n + a / 2, 0, 2 * Math.PI)
				}
			}
		};
	sL.registerAxisPointerClass("PolarAxisPointer", LE), su(x(qy, "bar")), du({
		type: "polar"
	});
	var PE = _T.extend({
		type: "geo",
		coordinateSystem: null,
		layoutMode: "box",
		init: function(t) {
			_T.prototype.init.apply(this, arguments), Bi(t, "label", ["show"])
		},
		optionUpdated: function() {
			var t = this.option,
				e = this;
			t.regions = VP.getFilledRegions(t.regions, t.map, t.nameMap), this._optionModelMap = g(t.regions || [], function(t, n) {
				return n.name && t.set(n.name, new Xo(n, e)), t
			}, B()), this.updateSelectedMap(t.regions)
		},
		defaultOption: {
			zlevel: 0,
			z: 0,
			show: !0,
			left: "center",
			top: "center",
			aspectScale: null,
			silent: !1,
			map: "",
			boundingCoords: null,
			center: null,
			zoom: 1,
			scaleLimit: null,
			label: {
				show: !1,
				color: "#000"
			},
			itemStyle: {
				borderWidth: .5,
				borderColor: "#444",
				color: "#eee"
			},
			emphasis: {
				label: {
					show: !0,
					color: "rgb(100,0,0)"
				},
				itemStyle: {
					color: "rgba(255,215,0,0.8)"
				}
			},
			regions: []
		},
		getRegionModel: function(t) {
			return this._optionModelMap.get(t) || new Xo(null, this, this.ecModel)
		},
		getFormattedLabel: function(t, e) {
			var n = this.getRegionModel(t),
				i = n.get("label." + e + ".formatter"),
				a = {
					name: t
				};
			return "function" == typeof i ? (a.status = e, i(a)) : "string" == typeof i ? i.replace("{a}", null != t ? t : "") : void 0
		},
		setZoom: function(t) {
			this.option.zoom = t
		},
		setCenter: function(t) {
			this.option.center = t
		}
	});
	c(PE, EL), du({
		type: "geo",
		init: function(t, e) {
			var n = new Hp(e, !0);
			this._mapDraw = n, this.group.add(n.group)
		},
		render: function(t, e, n, i) {
			if(!i || "geoToggleSelect" !== i.type || i.from !== this.uid) {
				var a = this._mapDraw;
				t.get("show") ? a.draw(t, e, n, this, i) : this._mapDraw.group.removeAll(), this.group.silent = t.get("silent")
			}
		},
		dispose: function() {
			this._mapDraw && this._mapDraw.remove()
		}
	}), lx("toggleSelected", {
		type: "geoToggleSelect",
		event: "geoselectchanged"
	}), lx("select", {
		type: "geoSelect",
		event: "geoselected"
	}), lx("unSelect", {
		type: "geoUnSelect",
		event: "geounselected"
	});
	var OE = 864e5;
	ux.prototype = {
		constructor: ux,
		type: "calendar",
		dimensions: ["time", "value"],
		getDimensionsInfo: function() {
			return [{
				name: "time",
				type: "time"
			}, "value"]
		},
		getRangeInfo: function() {
			return this._rangeInfo
		},
		getModel: function() {
			return this._model
		},
		getRect: function() {
			return this._rect
		},
		getCellWidth: function() {
			return this._sw
		},
		getCellHeight: function() {
			return this._sh
		},
		getOrient: function() {
			return this._orient
		},
		getFirstDayOfWeek: function() {
			return this._firstDayOfWeek
		},
		getDateInfo: function(t) {
			t = lr(t);
			var e = t.getFullYear(),
				n = t.getMonth() + 1;
			n = 10 > n ? "0" + n : n;
			var i = t.getDate();
			i = 10 > i ? "0" + i : i;
			var a = t.getDay();
			return a = Math.abs((a + 7 - this.getFirstDayOfWeek()) % 7), {
				y: e,
				m: n,
				d: i,
				day: a,
				time: t.getTime(),
				formatedDate: e + "-" + n + "-" + i,
				date: t
			}
		},
		getNextNDay: function(t, e) {
			return e = e || 0, 0 === e ? this.getDateInfo(t) : (t = new Date(this.getDateInfo(t).time), t.setDate(t.getDate() + e), this.getDateInfo(t))
		},
		update: function(t, e) {
			function n(t, e) {
				return null != t[e] && "auto" !== t[e]
			}
			this._firstDayOfWeek = +this._model.getModel("dayLabel").get("firstDay"), this._orient = this._model.get("orient"), this._lineWidth = this._model.getModel("itemStyle").getItemStyle().lineWidth || 0, this._rangeInfo = this._getRangeInfo(this._initRangeOption());
			var i = this._rangeInfo.weeks || 1,
				a = ["width", "height"],
				o = this._model.get("cellSize").slice(),
				r = this._model.getBoxLayoutParams(),
				s = "horizontal" === this._orient ? [i, 7] : [7, i];
			f([0, 1], function(t) {
				n(o, t) && (r[a[t]] = o[t] * s[t])
			});
			var l = {
					width: e.getWidth(),
					height: e.getHeight()
				},
				u = this._rect = Dr(r, l);
			f([0, 1], function(t) {
				n(o, t) || (o[t] = u[a[t]] / s[t])
			}), this._sw = o[0], this._sh = o[1]
		},
		dataToPoint: function(t, e) {
			_(t) && (t = t[0]), null == e && (e = !0);
			var n = this.getDateInfo(t),
				i = this._rangeInfo,
				a = n.formatedDate;
			if(e && !(n.time >= i.start.time && n.time < i.end.time + OE)) return [0 / 0, 0 / 0];
			var o = n.day,
				r = this._getRangeInfo([i.start.time, a]).nthWeek;
			return "vertical" === this._orient ? [this._rect.x + o * this._sw + this._sw / 2, this._rect.y + r * this._sh + this._sh / 2] : [this._rect.x + r * this._sw + this._sw / 2, this._rect.y + o * this._sh + this._sh / 2]
		},
		pointToData: function(t) {
			var e = this.pointToDate(t);
			return e && e.time
		},
		dataToRect: function(t, e) {
			var n = this.dataToPoint(t, e);
			return {
				contentShape: {
					x: n[0] - (this._sw - this._lineWidth) / 2,
					y: n[1] - (this._sh - this._lineWidth) / 2,
					width: this._sw - this._lineWidth,
					height: this._sh - this._lineWidth
				},
				center: n,
				tl: [n[0] - this._sw / 2, n[1] - this._sh / 2],
				tr: [n[0] + this._sw / 2, n[1] - this._sh / 2],
				br: [n[0] + this._sw / 2, n[1] + this._sh / 2],
				bl: [n[0] - this._sw / 2, n[1] + this._sh / 2]
			}
		},
		pointToDate: function(t) {
			var e = Math.floor((t[0] - this._rect.x) / this._sw) + 1,
				n = Math.floor((t[1] - this._rect.y) / this._sh) + 1,
				i = this._rangeInfo.range;
			return "vertical" === this._orient ? this._getDateByWeeksAndDay(n, e - 1, i) : this._getDateByWeeksAndDay(e, n - 1, i)
		},
		convertToPixel: x(hx, "dataToPoint"),
		convertFromPixel: x(hx, "pointToData"),
		_initRangeOption: function() {
			var t = this._model.get("range"),
				e = t;
			if(_(e) && 1 === e.length && (e = e[0]), /^\d{4}$/.test(e) && (t = [e + "-01-01", e + "-12-31"]), /^\d{4}[\/|-]\d{1,2}$/.test(e)) {
				var n = this.getDateInfo(e),
					i = n.date;
				i.setMonth(i.getMonth() + 1);
				var a = this.getNextNDay(i, -1);
				t = [n.formatedDate, a.formatedDate]
			}
			/^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(e) && (t = [e, e]);
			var o = this._getRangeInfo(t);
			return o.start.time > o.end.time && t.reverse(), t
		},
		_getRangeInfo: function(t) {
			t = [this.getDateInfo(t[0]), this.getDateInfo(t[1])];
			var e;
			t[0].time > t[1].time && (e = !0, t.reverse());
			var n = Math.floor(t[1].time / OE) - Math.floor(t[0].time / OE) + 1,
				i = new Date(t[0].time),
				a = i.getDate(),
				o = t[1].date.getDate();
			if(i.setDate(a + n - 1), i.getDate() !== o)
				for(var r = i.getTime() - t[1].time > 0 ? 1 : -1; i.getDate() !== o && (i.getTime() - t[1].time) * r > 0;) n -= r, i.setDate(a + n - 1);
			var s = Math.floor((n + t[0].day + 6) / 7),
				l = e ? -s + 1 : s - 1;
			return e && t.reverse(), {
				range: [t[0].formatedDate, t[1].formatedDate],
				start: t[0],
				end: t[1],
				allDay: n,
				weeks: s,
				nthWeek: l,
				fweek: t[0].day,
				lweek: t[1].day
			}
		},
		_getDateByWeeksAndDay: function(t, e, n) {
			var i = this._getRangeInfo(n);
			if(t > i.weeks || 0 === t && e < i.fweek || t === i.weeks && e > i.lweek) return !1;
			var a = 7 * (t - 1) - i.fweek + e,
				o = new Date(i.start.time);
			return o.setDate(i.start.d + a), this.getDateInfo(o)
		}
	}, ux.dimensions = ux.prototype.dimensions, ux.getDimensionsInfo = ux.prototype.getDimensionsInfo, ux.create = function(t, e) {
		var n = [];
		return t.eachComponent("calendar", function(i) {
			var a = new ux(i, t, e);
			n.push(a), i.coordinateSystem = a
		}), t.eachSeries(function(t) {
			"calendar" === t.get("coordinateSystem") && (t.coordinateSystem = n[t.get("calendarIndex") || 0])
		}), n
	}, os.register("calendar", ux);
	var NE = _T.extend({
			type: "calendar",
			coordinateSystem: null,
			defaultOption: {
				zlevel: 0,
				z: 2,
				left: 80,
				top: 60,
				cellSize: 20,
				orient: "horizontal",
				splitLine: {
					show: !0,
					lineStyle: {
						color: "#000",
						width: 1,
						type: "solid"
					}
				},
				itemStyle: {
					color: "#fff",
					borderWidth: 1,
					borderColor: "#ccc"
				},
				dayLabel: {
					show: !0,
					firstDay: 0,
					position: "start",
					margin: "50%",
					nameMap: "en",
					color: "#000"
				},
				monthLabel: {
					show: !0,
					position: "start",
					margin: 5,
					align: "center",
					nameMap: "en",
					formatter: null,
					color: "#000"
				},
				yearLabel: {
					show: !0,
					position: null,
					margin: 30,
					formatter: null,
					color: "#ccc",
					fontFamily: "sans-serif",
					fontWeight: "bolder",
					fontSize: 20
				}
			},
			init: function(t) {
				var e = Pr(t);
				NE.superApply(this, "init", arguments), cx(t, e)
			},
			mergeOption: function(t) {
				NE.superApply(this, "mergeOption", arguments), cx(this.option, t)
			}
		}),
		EE = {
			EN: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			CN: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
		},
		zE = {
			EN: ["S", "M", "T", "W", "T", "F", "S"],
			CN: ["日", "一", "二", "三", "四", "五", "六"]
		};
	du({
		type: "calendar",
		_tlpoints: null,
		_blpoints: null,
		_firstDayOfMonth: null,
		_firstDayPoints: null,
		render: function(t) {
			var e = this.group;
			e.removeAll();
			var n = t.coordinateSystem,
				i = n.getRangeInfo(),
				a = n.getOrient();
			this._renderDayRect(t, i, e), this._renderLines(t, i, a, e), this._renderYearText(t, i, a, e), this._renderMonthText(t, a, e), this._renderWeekText(t, i, a, e)
		},
		_renderDayRect: function(t, e, n) {
			for(var i = t.coordinateSystem, a = t.getModel("itemStyle").getItemStyle(), o = i.getCellWidth(), r = i.getCellHeight(), s = e.start.time; s <= e.end.time; s = i.getNextNDay(s, 1).time) {
				var l = i.dataToRect([s], !1).tl,
					u = new LI({
						shape: {
							x: l[0],
							y: l[1],
							width: o,
							height: r
						},
						cursor: "default",
						style: a
					});
				n.add(u)
			}
		},
		_renderLines: function(t, e, n, i) {
			function a(e) {
				o._firstDayOfMonth.push(r.getDateInfo(e)), o._firstDayPoints.push(r.dataToRect([e], !1).tl);
				var a = o._getLinePointsOfOneWeek(t, e, n);
				o._tlpoints.push(a[0]), o._blpoints.push(a[a.length - 1]), l && o._drawSplitline(a, s, i)
			}
			var o = this,
				r = t.coordinateSystem,
				s = t.getModel("splitLine.lineStyle").getLineStyle(),
				l = t.get("splitLine.show"),
				u = s.lineWidth;
			this._tlpoints = [], this._blpoints = [], this._firstDayOfMonth = [], this._firstDayPoints = [];
			for(var h = e.start, c = 0; h.time <= e.end.time; c++) {
				a(h.formatedDate), 0 === c && (h = r.getDateInfo(e.start.y + "-" + e.start.m));
				var d = h.date;
				d.setMonth(d.getMonth() + 1), h = r.getDateInfo(d)
			}
			a(r.getNextNDay(e.end.time, 1).formatedDate), l && this._drawSplitline(o._getEdgesPoints(o._tlpoints, u, n), s, i), l && this._drawSplitline(o._getEdgesPoints(o._blpoints, u, n), s, i)
		},
		_getEdgesPoints: function(t, e, n) {
			var i = [t[0].slice(), t[t.length - 1].slice()],
				a = "horizontal" === n ? 0 : 1;
			return i[0][a] = i[0][a] - e / 2, i[1][a] = i[1][a] + e / 2, i
		},
		_drawSplitline: function(t, e, n) {
			var i = new AI({
				z2: 20,
				shape: {
					points: t
				},
				style: e
			});
			n.add(i)
		},
		_getLinePointsOfOneWeek: function(t, e, n) {
			var i = t.coordinateSystem;
			e = i.getDateInfo(e);
			for(var a = [], o = 0; 7 > o; o++) {
				var r = i.getNextNDay(e.time, o),
					s = i.dataToRect([r.time], !1);
				a[2 * r.day] = s.tl, a[2 * r.day + 1] = s["horizontal" === n ? "bl" : "tr"]
			}
			return a
		},
		_formatterLabel: function(t, e) {
			return "string" == typeof t && t ? xr(t, e) : "function" == typeof t ? t(e) : e.nameMap
		},
		_yearTextPositionControl: function(t, e, n, i, a) {
			e = e.slice();
			var o = ["center", "bottom"];
			"bottom" === i ? (e[1] += a, o = ["center", "top"]) : "left" === i ? e[0] -= a : "right" === i ? (e[0] += a, o = ["center", "top"]) : e[1] -= a;
			var r = 0;
			return("left" === i || "right" === i) && (r = Math.PI / 2), {
				rotation: r,
				position: e,
				style: {
					textAlign: o[0],
					textVerticalAlign: o[1]
				}
			}
		},
		_renderYearText: function(t, e, n, i) {
			var a = t.getModel("yearLabel");
			if(a.get("show")) {
				var o = a.get("margin"),
					r = a.get("position");
				r || (r = "horizontal" !== n ? "top" : "left");
				var s = [this._tlpoints[this._tlpoints.length - 1], this._blpoints[0]],
					l = (s[0][0] + s[1][0]) / 2,
					u = (s[0][1] + s[1][1]) / 2,
					h = "horizontal" === n ? 0 : 1,
					c = {
						top: [l, s[h][1]],
						bottom: [l, s[1 - h][1]],
						left: [s[1 - h][0], u],
						right: [s[h][0], u]
					},
					d = e.start.y; + e.end.y > +e.start.y && (d = d + "-" + e.end.y);
				var f = a.get("formatter"),
					p = {
						start: e.start.y,
						end: e.end.y,
						nameMap: d
					},
					g = this._formatterLabel(f, p),
					m = new yI({
						z2: 30
					});
				To(m.style, a, {
					text: g
				}), m.attr(this._yearTextPositionControl(m, c[r], n, r, o)), i.add(m)
			}
		},
		_monthTextPositionControl: function(t, e, n, i, a) {
			var o = "left",
				r = "top",
				s = t[0],
				l = t[1];
			return "horizontal" === n ? (l += a, e && (o = "center"), "start" === i && (r = "bottom")) : (s += a, e && (r = "middle"), "start" === i && (o = "right")), {
				x: s,
				y: l,
				textAlign: o,
				textVerticalAlign: r
			}
		},
		_renderMonthText: function(t, e, n) {
			var i = t.getModel("monthLabel");
			if(i.get("show")) {
				var a = i.get("nameMap"),
					o = i.get("margin"),
					s = i.get("position"),
					l = i.get("align"),
					u = [this._tlpoints, this._blpoints];
				b(a) && (a = EE[a.toUpperCase()] || []);
				var h = "start" === s ? 0 : 1,
					c = "horizontal" === e ? 0 : 1;
				o = "start" === s ? -o : o;
				for(var d = "center" === l, f = 0; f < u[h].length - 1; f++) {
					var p = u[h][f].slice(),
						g = this._firstDayOfMonth[f];
					if(d) {
						var m = this._firstDayPoints[f];
						p[c] = (m[c] + u[0][f + 1][c]) / 2
					}
					var v = i.get("formatter"),
						y = a[+g.m - 1],
						x = {
							yyyy: g.y,
							yy: (g.y + "").slice(2),
							MM: g.m,
							M: +g.m,
							nameMap: y
						},
						_ = this._formatterLabel(v, x),
						w = new yI({
							z2: 30
						});
					r(To(w.style, i, {
						text: _
					}), this._monthTextPositionControl(p, d, e, s, o)), n.add(w)
				}
			}
		},
		_weekTextPositionControl: function(t, e, n, i, a) {
			var o = "center",
				r = "middle",
				s = t[0],
				l = t[1],
				u = "start" === n;
			return "horizontal" === e ? (s = s + i + (u ? 1 : -1) * a[0] / 2, o = u ? "right" : "left") : (l = l + i + (u ? 1 : -1) * a[1] / 2, r = u ? "bottom" : "top"), {
				x: s,
				y: l,
				textAlign: o,
				textVerticalAlign: r
			}
		},
		_renderWeekText: function(t, e, n, i) {
			var a = t.getModel("dayLabel");
			if(a.get("show")) {
				var o = t.coordinateSystem,
					s = a.get("position"),
					l = a.get("nameMap"),
					u = a.get("margin"),
					h = o.getFirstDayOfWeek();
				b(l) && (l = zE[l.toUpperCase()] || []);
				var c = o.getNextNDay(e.end.time, 7 - e.lweek).time,
					d = [o.getCellWidth(), o.getCellHeight()];
				u = Qo(u, d["horizontal" === n ? 0 : 1]), "start" === s && (c = o.getNextNDay(e.start.time, -(7 + e.fweek)).time, u = -u);
				for(var f = 0; 7 > f; f++) {
					var p = o.getNextNDay(c, f),
						g = o.dataToRect([p.time], !1).center,
						m = f;
					m = Math.abs((f + h) % 7);
					var v = new yI({
						z2: 30
					});
					r(To(v.style, a, {
						text: l[m]
					}), this._weekTextPositionControl(g, n, s, u, d)), i.add(v)
				}
			}
		}
	}), cu({
		type: "title",
		layoutMode: {
			type: "box",
			ignoreSize: !0
		},
		defaultOption: {
			zlevel: 0,
			z: 6,
			show: !0,
			text: "",
			target: "blank",
			subtext: "",
			subtarget: "blank",
			left: 0,
			top: 0,
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderWidth: 0,
			padding: 5,
			itemGap: 10,
			textStyle: {
				fontSize: 18,
				fontWeight: "bolder",
				color: "#333"
			},
			subtextStyle: {
				color: "#aaa"
			}
		}
	}), du({
		type: "title",
		render: function(t, e, n) {
			if(this.group.removeAll(), t.get("show")) {
				var i = this.group,
					a = t.getModel("textStyle"),
					o = t.getModel("subtextStyle"),
					r = t.get("textAlign"),
					s = t.get("textBaseline"),
					l = new yI({
						style: To({}, a, {
							text: t.get("text"),
							textFill: a.getTextColor()
						}, {
							disableBox: !0
						}),
						z2: 10
					}),
					u = l.getBoundingRect(),
					h = t.get("subtext"),
					c = new yI({
						style: To({}, o, {
							text: h,
							textFill: o.getTextColor(),
							y: u.height + t.get("itemGap"),
							textVerticalAlign: "top"
						}, {
							disableBox: !0
						}),
						z2: 10
					}),
					d = t.get("link"),
					f = t.get("sublink"),
					p = t.get("triggerEvent", !0);
				l.silent = !d && !p, c.silent = !f && !p, d && l.on("click", function() {
					window.open(d, "_" + t.get("target"))
				}), f && c.on("click", function() {
					window.open(f, "_" + t.get("subtarget"))
				}), l.eventData = c.eventData = p ? {
					componentType: "title",
					componentIndex: t.componentIndex
				} : null, i.add(l), h && i.add(c);
				var g = i.getBoundingRect(),
					m = t.getBoxLayoutParams();
				m.width = g.width, m.height = g.height;
				var v = Dr(m, {
					width: n.getWidth(),
					height: n.getHeight()
				}, t.get("padding"));
				r || (r = t.get("left") || t.get("right"), "middle" === r && (r = "center"), "right" === r ? v.x += v.width : "center" === r && (v.x += v.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? v.y += v.height : "middle" === s && (v.y += v.height / 2), s = s || "top"), i.attr("position", [v.x, v.y]);
				var y = {
					textAlign: r,
					textVerticalAlign: s
				};
				l.setStyle(y), c.setStyle(y), g = i.getBoundingRect();
				var x = v.margin,
					_ = t.getItemStyle(["color", "opacity"]);
				_.fill = t.get("backgroundColor");
				var w = new LI({
					shape: {
						x: g.x - x[3],
						y: g.y - x[0],
						width: g.width + x[1] + x[3],
						height: g.height + x[0] + x[2],
						r: t.get("borderRadius")
					},
					style: _,
					silent: !0
				});
				so(w), i.add(w)
			}
		}
	});
	var RE = cu({
		type: "legend.plain",
		dependencies: ["series"],
		layoutMode: {
			type: "box",
			ignoreSize: !0
		},
		init: function(t, e, n) {
			this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}
		},
		mergeOption: function(t) {
			RE.superCall(this, "mergeOption", t)
		},
		optionUpdated: function() {
			this._updateData(this.ecModel);
			var t = this._data;
			if(t[0] && "single" === this.get("selectedMode")) {
				for(var e = !1, n = 0; n < t.length; n++) {
					var i = t[n].get("name");
					if(this.isSelected(i)) {
						this.select(i), e = !0;
						break
					}
				}!e && this.select(t[0].get("name"))
			}
		},
		_updateData: function(t) {
			var e = [],
				n = [];
			t.eachRawSeries(function(i) {
				var a = i.name;
				n.push(a);
				var o;
				if(i.legendDataProvider) {
					var r = i.legendDataProvider(),
						s = r.mapArray(r.getName);
					t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : o = !0
				} else o = !0;
				o && Hi(i) && e.push(i.name)
			}), this._availableNames = n;
			var i = this.get("data") || e,
				a = p(i, function(t) {
					return("string" == typeof t || "number" == typeof t) && (t = {
						name: t
					}), new Xo(t, this, this.ecModel)
				}, this);
			this._data = a
		},
		getData: function() {
			return this._data
		},
		select: function(t) {
			var e = this.option.selected,
				n = this.get("selectedMode");
			if("single" === n) {
				var i = this._data;
				f(i, function(t) {
					e[t.get("name")] = !1
				})
			}
			e[t] = !0
		},
		unSelect: function(t) {
			"single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
		},
		toggleSelected: function(t) {
			var e = this.option.selected;
			e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
		},
		isSelected: function(t) {
			var e = this.option.selected;
			return !(e.hasOwnProperty(t) && !e[t]) && u(this._availableNames, t) >= 0
		},
		defaultOption: {
			zlevel: 0,
			z: 4,
			show: !0,
			orient: "horizontal",
			left: "center",
			top: 0,
			align: "auto",
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderRadius: 0,
			borderWidth: 0,
			padding: 5,
			itemGap: 10,
			itemWidth: 25,
			itemHeight: 14,
			inactiveColor: "#ccc",
			textStyle: {
				color: "#333"
			},
			selectedMode: !0,
			tooltip: {
				show: !1
			}
		}
	});
	au("legendToggleSelect", "legendselectchanged", x(dx, "toggleSelected")), au("legendSelect", "legendselected", x(dx, "select")), au("legendUnSelect", "legendunselected", x(dx, "unSelect"));
	var BE = x,
		VE = f,
		GE = rS,
		FE = du({
			type: "legend.plain",
			newlineDisabled: !1,
			init: function() {
				this.group.add(this._contentGroup = new GE), this._backgroundEl, this._isFirstRender = !0
			},
			getContentGroup: function() {
				return this._contentGroup
			},
			render: function(t, e, n) {
				var i = this._isFirstRender;
				if(this._isFirstRender = !1, this.resetInner(), t.get("show", !0)) {
					var a = t.get("align");
					a && "auto" !== a || (a = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), this.renderInner(a, t, e, n);
					var o = t.getBoxLayoutParams(),
						r = {
							width: n.getWidth(),
							height: n.getHeight()
						},
						l = t.get("padding"),
						u = Dr(o, r, l),
						h = this.layoutInner(t, a, u, i),
						c = Dr(s({
							width: h.width,
							height: h.height
						}, o), r, l);
					this.group.attr("position", [c.x - h.x, c.y - h.y]), this.group.add(this._backgroundEl = px(h, t))
				}
			},
			resetInner: function() {
				this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl)
			},
			renderInner: function(t, e, n, i) {
				var a = this.getContentGroup(),
					o = B(),
					r = e.get("selectedMode"),
					s = [];
				n.eachRawSeries(function(t) {
					!t.get("legendHoverLink") && s.push(t.id)
				}), VE(e.getData(), function(l, u) {
					var h = l.get("name");
					if(!this.newlineDisabled && ("" === h || "\n" === h)) return void a.add(new GE({
						newline: !0
					}));
					var c = n.getSeriesByName(h)[0];
					if(!o.get(h))
						if(c) {
							var d = c.getData(),
								f = d.getVisual("color");
							"function" == typeof f && (f = f(c.getDataParams(0)));
							var p = d.getVisual("legendSymbol") || "roundRect",
								g = d.getVisual("symbol"),
								m = this._createItem(h, u, l, e, p, g, t, f, r);
							m.on("click", BE(gx, h, i)).on("mouseover", BE(mx, c.name, null, i, s)).on("mouseout", BE(vx, c.name, null, i, s)), o.set(h, !0)
						} else n.eachRawSeries(function(n) {
							if(!o.get(h) && n.legendDataProvider) {
								var a = n.legendDataProvider(),
									c = a.indexOfName(h);
								if(0 > c) return;
								var d = a.getItemVisual(c, "color"),
									f = "roundRect",
									p = this._createItem(h, u, l, e, f, null, t, d, r);
								p.on("click", BE(gx, h, i)).on("mouseover", BE(mx, null, h, i, s)).on("mouseout", BE(vx, null, h, i, s)), o.set(h, !0)
							}
						}, this)
				}, this)
			},
			_createItem: function(t, e, n, i, a, o, s, l, u) {
				var h = i.get("itemWidth"),
					c = i.get("itemHeight"),
					d = i.get("inactiveColor"),
					f = i.get("symbolKeepAspect"),
					p = i.isSelected(t),
					g = new GE,
					m = n.getModel("textStyle"),
					v = n.get("icon"),
					y = n.getModel("tooltip"),
					x = y.parentModel;
				if(a = v || a, g.add(Ih(a, 0, 0, h, c, p ? l : d, null == f ? !0 : f)), !v && o && (o !== a || "none" === o)) {
					var _ = .8 * c;
					"none" === o && (o = "circle"), g.add(Ih(o, (h - _) / 2, (c - _) / 2, _, _, p ? l : d, null == f ? !0 : f))
				}
				var w = "left" === s ? h + 5 : -5,
					b = s,
					S = i.get("formatter"),
					M = t;
				"string" == typeof S && S ? M = S.replace("{name}", null != t ? t : "") : "function" == typeof S && (M = S(t)), g.add(new yI({
					style: To({}, m, {
						text: M,
						x: w,
						y: c / 2,
						textFill: p ? m.getTextColor() : d,
						textAlign: b,
						textVerticalAlign: "middle"
					})
				}));
				var I = new LI({
					shape: g.getBoundingRect(),
					invisible: !0,
					tooltip: y.get("show") ? r({
						content: t,
						formatter: x.get("formatter", !0) || function() {
							return t
						},
						formatterParams: {
							componentType: "legend",
							legendIndex: i.componentIndex,
							name: t,
							$vars: ["name"]
						}
					}, y.option) : null
				});
				return g.add(I), g.eachChild(function(t) {
					t.silent = !0
				}), I.silent = !u, this.getContentGroup().add(g), So(g), g.__legendDataIndex = e, g
			},
			layoutInner: function(t, e, n) {
				var i = this.getContentGroup();
				vT(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
				var a = i.getBoundingRect();
				return i.attr("position", [-a.x, -a.y]), this.group.getBoundingRect()
			},
			remove: function() {
				this.getContentGroup().removeAll(), this._isFirstRender = !0
			}
		}),
		WE = function(t) {
			var e = t.findComponents({
				mainType: "legend"
			});
			e && e.length && t.filterSeries(function(t) {
				for(var n = 0; n < e.length; n++)
					if(!e[n].isSelected(t.name)) return !1;
				return !0
			})
		};
	nu(WE), _T.registerSubTypeDefaulter("legend", function() {
		return "plain"
	});
	var HE = RE.extend({
			type: "legend.scroll",
			setScrollDataIndex: function(t) {
				this.option.scrollDataIndex = t
			},
			defaultOption: {
				scrollDataIndex: 0,
				pageButtonItemGap: 5,
				pageButtonGap: null,
				pageButtonPosition: "end",
				pageFormatter: "{current}/{total}",
				pageIcons: {
					horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
					vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
				},
				pageIconColor: "#2f4554",
				pageIconInactiveColor: "#aaa",
				pageIconSize: 15,
				pageTextStyle: {
					color: "#333"
				},
				animationDurationUpdate: 800
			},
			init: function(t, e, n, i) {
				var a = Pr(t);
				HE.superCall(this, "init", t, e, n, i), yx(this, t, a)
			},
			mergeOption: function(t, e) {
				HE.superCall(this, "mergeOption", t, e), yx(this, this.option, t)
			},
			getOrient: function() {
				return "vertical" === this.get("orient") ? {
					index: 1,
					name: "vertical"
				} : {
					index: 0,
					name: "horizontal"
				}
			}
		}),
		ZE = rS,
		XE = ["width", "height"],
		YE = ["x", "y"],
		UE = FE.extend({
			type: "legend.scroll",
			newlineDisabled: !0,
			init: function() {
				UE.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new ZE), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new ZE), this._showController
			},
			resetInner: function() {
				UE.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null
			},
			renderInner: function(t, e, n, i) {
				function a(t, n) {
					var a = t + "DataIndex",
						l = Zo(e.get("pageIcons", !0)[e.getOrient().name][n], {
							onclick: y(o._pageGo, o, a, e, i)
						}, {
							x: -s[0] / 2,
							y: -s[1] / 2,
							width: s[0],
							height: s[1]
						});
					l.name = t, r.add(l)
				}
				var o = this;
				UE.superCall(this, "renderInner", t, e, n, i);
				var r = this._controllerGroup,
					s = e.get("pageIconSize", !0);
				_(s) || (s = [s, s]), a("pagePrev", 0);
				var l = e.getModel("pageTextStyle");
				r.add(new yI({
					name: "pageText",
					style: {
						textFill: l.getTextColor(),
						font: l.getFont(),
						textVerticalAlign: "middle",
						textAlign: "center"
					},
					silent: !0
				})), a("pageNext", 1)
			},
			layoutInner: function(t, e, n, i) {
				var a = this.getContentGroup(),
					o = this._containerGroup,
					r = this._controllerGroup,
					s = t.getOrient().index,
					l = XE[s],
					u = XE[1 - s],
					h = YE[1 - s];
				vT(t.get("orient"), a, t.get("itemGap"), s ? n.width : null, s ? null : n.height), vT("horizontal", r, t.get("pageButtonItemGap", !0));
				var c = a.getBoundingRect(),
					d = r.getBoundingRect(),
					f = this._showController = c[l] > n[l],
					p = [-c.x, -c.y];
				i || (p[s] = a.position[s]);
				var g = [0, 0],
					m = [-d.x, -d.y],
					v = C(t.get("pageButtonGap", !0), t.get("itemGap", !0));
				if(f) {
					var y = t.get("pageButtonPosition", !0);
					"end" === y ? m[s] += n[l] - d[l] : g[s] += d[l] + v
				}
				m[1 - s] += c[u] / 2 - d[u] / 2, a.attr("position", p), o.attr("position", g), r.attr("position", m);
				var x = this.group.getBoundingRect(),
					x = {
						x: 0,
						y: 0
					};
				if(x[l] = f ? n[l] : c[l], x[u] = Math.max(c[u], d[u]), x[h] = Math.min(0, d[h] + m[1 - s]), o.__rectSize = n[l], f) {
					var _ = {
						x: 0,
						y: 0
					};
					_[l] = Math.max(n[l] - d[l] - v, 0), _[u] = x[u], o.setClipPath(new LI({
						shape: _
					})), o.__rectSize = _[l]
				} else r.eachChild(function(t) {
					t.attr({
						invisible: !0,
						silent: !0
					})
				});
				var w = this._getPageInfo(t);
				return null != w.pageIndex && zo(a, {
					position: w.contentPosition
				}, f ? t : !1), this._updatePageInfoView(t, w), x
			},
			_pageGo: function(t, e, n) {
				var i = this._getPageInfo(e)[t];
				null != i && n.dispatchAction({
					type: "legendScroll",
					scrollDataIndex: i,
					legendId: e.id
				})
			},
			_updatePageInfoView: function(t, e) {
				var n = this._controllerGroup;
				f(["pagePrev", "pageNext"], function(i) {
					var a = null != e[i + "DataIndex"],
						o = n.childOfName(i);
					o && (o.setStyle("fill", a ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), o.cursor = a ? "pointer" : "default")
				});
				var i = n.childOfName("pageText"),
					a = t.get("pageFormatter"),
					o = e.pageIndex,
					r = null != o ? o + 1 : 0,
					s = e.pageCount;
				i && a && i.setStyle("text", b(a) ? a.replace("{current}", r).replace("{total}", s) : a({
					current: r,
					total: s
				}))
			},
			_getPageInfo: function(t) {
				function e(t) {
					if(t) {
						var e = t.getBoundingRect(),
							n = e[l] + t.position[r];
						return {
							s: n,
							e: n + e[s],
							i: t.__legendDataIndex
						}
					}
				}

				function n(t, e) {
					return t.e >= e && t.s <= e + o
				}
				var i = t.get("scrollDataIndex", !0),
					a = this.getContentGroup(),
					o = this._containerGroup.__rectSize,
					r = t.getOrient().index,
					s = XE[r],
					l = YE[r],
					u = this._findTargetItemIndex(i),
					h = a.children(),
					c = h[u],
					d = h.length,
					f = d ? 1 : 0,
					p = {
						contentPosition: a.position.slice(),
						pageCount: f,
						pageIndex: f - 1,
						pagePrevDataIndex: null,
						pageNextDataIndex: null
					};
				if(!c) return p;
				var g = e(c);
				p.contentPosition[r] = -g.s;
				for(var m = u + 1, v = g, y = g, x = null; d >= m; ++m) x = e(h[m]), (!x && y.e > v.s + o || x && !n(x, v.s)) && (v = y.i > v.i ? y : x, v && (null == p.pageNextDataIndex && (p.pageNextDataIndex = v.i), ++p.pageCount)), y = x;
				for(var m = u - 1, v = g, y = g, x = null; m >= -1; --m) x = e(h[m]), x && n(y, x.s) || !(v.i < y.i) || (y = v, null == p.pagePrevDataIndex && (p.pagePrevDataIndex = v.i), ++p.pageCount, ++p.pageIndex), v = x;
				return p
			},
			_findTargetItemIndex: function(t) {
				var e, n = this.getContentGroup();
				return this._showController ? n.eachChild(function(n, i) {
					n.__legendDataIndex === t && (e = i)
				}) : e = 0, e
			}
		});
	au("legendScroll", "legendscroll", function(t, e) {
		var n = t.scrollDataIndex;
		null != n && e.eachComponent({
			mainType: "legend",
			subType: "scroll",
			query: t
		}, function(t) {
			t.setScrollDataIndex(n)
		})
	}), cu({
		type: "tooltip",
		dependencies: ["axisPointer"],
		defaultOption: {
			zlevel: 0,
			z: 60,
			show: !0,
			showContent: !0,
			trigger: "item",
			triggerOn: "mousemove|click",
			alwaysShowContent: !1,
			displayMode: "single",
			renderMode: "auto",
			confine: !1,
			showDelay: 0,
			hideDelay: 100,
			transitionDuration: .4,
			enterable: !1,
			backgroundColor: "rgba(50,50,50,0.7)",
			borderColor: "#333",
			borderRadius: 4,
			borderWidth: 0,
			padding: 5,
			extraCssText: "",
			axisPointer: {
				type: "line",
				axis: "auto",
				animation: "auto",
				animationDurationUpdate: 200,
				animationEasingUpdate: "exponentialOut",
				crossStyle: {
					color: "#999",
					width: 1,
					type: "dashed",
					textStyle: {}
				}
			},
			textStyle: {
				color: "#fff",
				fontSize: 14
			}
		}
	});
	var jE = f,
		qE = mr,
		KE = ["", "-webkit-", "-moz-", "-o-"],
		$E = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
	Sx.prototype = {
		constructor: Sx,
		_enterable: !0,
		update: function() {
			var t = this._container,
				e = t.currentStyle || document.defaultView.getComputedStyle(t),
				n = t.style;
			"absolute" !== n.position && "absolute" !== e.position && (n.position = "relative")
		},
		show: function(t) {
			clearTimeout(this._hideTimeout);
			var e = this.el;
			e.style.cssText = $E + bx(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0
		},
		setContent: function(t) {
			this.el.innerHTML = null == t ? "" : t
		},
		setEnterable: function(t) {
			this._enterable = t
		},
		getSize: function() {
			var t = this.el;
			return [t.clientWidth, t.clientHeight]
		},
		moveTo: function(t, e) {
			var n, i = this._zr;
			i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n.offsetTop);
			var a = this.el.style;
			a.left = t + "px", a.top = e + "px", this._x = t, this._y = e
		},
		hide: function() {
			this.el.style.display = "none", this._show = !1
		},
		hideLater: function(t) {
			!this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
		},
		isShow: function() {
			return this._show
		},
		getOuterSize: function() {
			var t = this.el.clientWidth,
				e = this.el.clientHeight;
			if(document.defaultView && document.defaultView.getComputedStyle) {
				var n = document.defaultView.getComputedStyle(this.el);
				n && (t += parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10) + parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), e += parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10))
			}
			return {
				width: t,
				height: e
			}
		}
	}, Mx.prototype = {
		constructor: Mx,
		_enterable: !0,
		update: function() {},
		show: function() {
			this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0
		},
		setContent: function(t, e, n) {
			this.el && this._zr.remove(this.el);
			for(var i = {}, a = t, o = "{marker", r = "|}", s = a.indexOf(o); s >= 0;) {
				var l = a.indexOf(r),
					u = a.substr(s + o.length, l - s - o.length);
				i["marker" + u] = u.indexOf("sub") > -1 ? {
					textWidth: 4,
					textHeight: 4,
					textBorderRadius: 2,
					textBackgroundColor: e[u],
					textOffset: [3, 0]
				} : {
					textWidth: 10,
					textHeight: 10,
					textBorderRadius: 5,
					textBackgroundColor: e[u]
				}, a = a.substr(l + 1), s = a.indexOf("{marker")
			}
			this.el = new yI({
				style: {
					rich: i,
					text: t,
					textLineHeight: 20,
					textBackgroundColor: n.get("backgroundColor"),
					textBorderRadius: n.get("borderRadius"),
					textFill: n.get("textStyle.color"),
					textPadding: n.get("padding")
				},
				z: n.get("z")
			}), this._zr.add(this.el);
			var h = this;
			this.el.on("mouseover", function() {
				h._enterable && (clearTimeout(h._hideTimeout), h._show = !0), h._inContent = !0
			}), this.el.on("mouseout", function() {
				h._enterable && h._show && h.hideLater(h._hideDelay), h._inContent = !1
			})
		},
		setEnterable: function(t) {
			this._enterable = t
		},
		getSize: function() {
			var t = this.el.getBoundingRect();
			return [t.width, t.height]
		},
		moveTo: function(t, e) {
			this.el && this.el.attr("position", [t, e])
		},
		hide: function() {
			this.el.hide(), this._show = !1
		},
		hideLater: function(t) {
			!this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
		},
		isShow: function() {
			return this._show
		},
		getOuterSize: function() {
			return this.getSize()
		}
	};
	var JE = y,
		QE = f,
		tz = Qo,
		ez = new LI({
			shape: {
				x: -1,
				y: -1,
				width: 2,
				height: 2
			}
		});
	du({
		type: "tooltip",
		init: function(t, e) {
			if(!Kw.node) {
				var n = t.getComponent("tooltip"),
					i = n.get("renderMode");
				this._renderMode = Ji(i);
				var a;
				"html" === this._renderMode ? (a = new Sx(e.getDom(), e), this._newLine = "<br/>") : (a = new Mx(e), this._newLine = "\n"), this._tooltipContent = a
			}
		},
		render: function(t, e, n) {
			if(!Kw.node) {
				this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
				var i = this._tooltipContent;
				i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
			}
		},
		_initGlobalListener: function() {
			var t = this._tooltipModel,
				e = t.get("triggerOn");
			Lv("itemTooltip", this._api, JE(function(t, n, i) {
				"none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i))
			}, this))
		},
		_keepShow: function() {
			var t = this._tooltipModel,
				e = this._ecModel,
				n = this._api;
			if(null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
				var i = this;
				clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
					i.manuallyShowTip(t, e, n, {
						x: i._lastX,
						y: i._lastY
					})
				})
			}
		},
		manuallyShowTip: function(t, e, n, i) {
			if(i.from !== this.uid && !Kw.node) {
				var a = Tx(i, n);
				this._ticket = "";
				var o = i.dataByCoordSys;
				if(i.tooltip && null != i.x && null != i.y) {
					var r = ez;
					r.position = [i.x, i.y], r.update(), r.tooltip = i.tooltip, this._tryShow({
						offsetX: i.x,
						offsetY: i.y,
						target: r
					}, a)
				} else if(o) this._tryShow({
					offsetX: i.x,
					offsetY: i.y,
					position: i.position,
					event: {},
					dataByCoordSys: i.dataByCoordSys,
					tooltipOption: i.tooltipOption
				}, a);
				else if(null != i.seriesIndex) {
					if(this._manuallyAxisShowTip(t, e, n, i)) return;
					var s = GN(i, e),
						l = s.point[0],
						u = s.point[1];
					null != l && null != u && this._tryShow({
						offsetX: l,
						offsetY: u,
						position: i.position,
						target: s.el,
						event: {}
					}, a)
				} else null != i.x && null != i.y && (n.dispatchAction({
					type: "updateAxisPointer",
					x: i.x,
					y: i.y
				}), this._tryShow({
					offsetX: i.x,
					offsetY: i.y,
					position: i.position,
					target: n.getZr().findHover(i.x, i.y).target,
					event: {}
				}, a))
			}
		},
		manuallyHideTip: function(t, e, n, i) {
			var a = this._tooltipContent;
			!this._alwaysShowContent && this._tooltipModel && a.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(Tx(i, n))
		},
		_manuallyAxisShowTip: function(t, e, n, i) {
			var a = i.seriesIndex,
				o = i.dataIndex,
				r = e.getComponent("axisPointer").coordSysAxesInfo;
			if(null != a && null != o && null != r) {
				var s = e.getSeriesByIndex(a);
				if(s) {
					var l = s.getData(),
						t = Ix([l.getItemModel(o), s, (s.coordinateSystem || {}).model, t]);
					if("axis" === t.get("trigger")) return n.dispatchAction({
						type: "updateAxisPointer",
						seriesIndex: a,
						dataIndex: o,
						position: i.position
					}), !0
				}
			}
		},
		_tryShow: function(t, e) {
			var n = t.target,
				i = this._tooltipModel;
			if(i) {
				this._lastX = t.offsetX, this._lastY = t.offsetY;
				var a = t.dataByCoordSys;
				a && a.length ? this._showAxisTooltip(a, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e))
			}
		},
		_showOrMove: function(t, e) {
			var n = t.get("showDelay");
			e = y(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
		},
		_showAxisTooltip: function(t, e) {
			var n = this._ecModel,
				i = this._tooltipModel,
				o = [e.offsetX, e.offsetY],
				r = [],
				s = [],
				l = Ix([e.tooltipOption, i]),
				u = this._renderMode,
				h = this._newLine,
				c = {};
			QE(t, function(t) {
				QE(t.dataByAxis, function(t) {
					var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),
						i = t.value,
						o = [];
					if(e && null != i) {
						var l = Yv(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
						f(t.seriesDataIndices, function(r) {
							var h = n.getSeriesByIndex(r.seriesIndex),
								d = r.dataIndexInside,
								f = h && h.getDataParams(d);
							if(f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = xh(e.axis, i), f.axisValueLabel = l, f) {
								s.push(f);
								var p, g = h.formatTooltip(d, !0, null, u);
								if(S(g)) {
									p = g.html;
									var m = g.markers;
									a(c, m)
								} else p = g;
								o.push(p)
							}
						});
						var d = l;
						r.push("html" !== u ? o.join(h) : (d ? vr(d) + h : "") + o.join(h))
					}
				})
			}, this), r.reverse(), r = r.join(this._newLine + this._newLine);
			var d = e.position;
			this._showOrMove(l, function() {
				this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, o[0], o[1], this._tooltipContent, s) : this._showTooltipContent(l, r, s, Math.random(), o[0], o[1], d, void 0, c)
			})
		},
		_showSeriesItemTooltip: function(t, e, n) {
			var i = this._ecModel,
				a = e.seriesIndex,
				o = i.getSeriesByIndex(a),
				r = e.dataModel || o,
				s = e.dataIndex,
				l = e.dataType,
				u = r.getData(),
				h = Ix([u.getItemModel(s), r, o && (o.coordinateSystem || {}).model, this._tooltipModel]),
				c = h.get("trigger");
			if(null == c || "item" === c) {
				var d, f, p = r.getDataParams(s, l),
					g = r.formatTooltip(s, !1, l, this._renderMode);
				S(g) ? (d = g.html, f = g.markers) : (d = g, f = null);
				var m = "item_" + r.name + "_" + s;
				this._showOrMove(h, function() {
					this._showTooltipContent(h, d, p, m, t.offsetX, t.offsetY, t.position, t.target, f)
				}), n({
					type: "showTip",
					dataIndexInside: s,
					dataIndex: u.getRawIndex(s),
					seriesIndex: a,
					from: this.uid
				})
			}
		},
		_showComponentItemTooltip: function(t, e, n) {
			var i = e.tooltip;
			if("string" == typeof i) {
				var a = i;
				i = {
					content: a,
					formatter: a
				}
			}
			var o = new Xo(i, this._tooltipModel, this._ecModel),
				r = o.get("content"),
				s = Math.random();
			this._showOrMove(o, function() {
				this._showTooltipContent(o, r, o.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e)
			}), n({
				type: "showTip",
				from: this.uid
			})
		},
		_showTooltipContent: function(t, e, n, i, a, o, r, s, l) {
			if(this._ticket = "", t.get("showContent") && t.get("show")) {
				var u = this._tooltipContent,
					h = t.get("formatter");
				r = r || t.get("position");
				var c = e;
				if(h && "string" == typeof h) c = yr(h, n, !0);
				else if("function" == typeof h) {
					var d = JE(function(e, i) {
						e === this._ticket && (u.setContent(i, l, t), this._updatePosition(t, r, a, o, u, n, s))
					}, this);
					this._ticket = i, c = h(n, i, d)
				}
				u.setContent(c, l, t), u.show(t), this._updatePosition(t, r, a, o, u, n, s)
			}
		},
		_updatePosition: function(t, e, n, i, a, o, r) {
			var s = this._api.getWidth(),
				l = this._api.getHeight();
			e = e || t.get("position");
			var u = a.getSize(),
				h = t.get("align"),
				c = t.get("verticalAlign"),
				d = r && r.getBoundingRect().clone();
			if(r && d.applyTransform(r.transform), "function" == typeof e && (e = e([n, i], o, a.el, d, {
					viewSize: [s, l],
					contentSize: u.slice()
				})), _(e)) n = tz(e[0], s), i = tz(e[1], l);
			else if(S(e)) {
				e.width = u[0], e.height = u[1];
				var f = Dr(e, {
					width: s,
					height: l
				});
				n = f.x, i = f.y, h = null, c = null
			} else if("string" == typeof e && r) {
				var p = Cx(e, d, u);
				n = p[0], i = p[1]
			} else {
				var p = Ax(n, i, a, s, l, h ? null : 20, c ? null : 20);
				n = p[0], i = p[1]
			}
			if(h && (n -= Lx(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= Lx(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), t.get("confine")) {
				var p = Dx(n, i, a, s, l);
				n = p[0], i = p[1]
			}
			a.moveTo(n, i)
		},
		_updateContentNotChangedOnAxis: function(t) {
			var e = this._lastDataByCoordSys,
				n = !!e && e.length === t.length;
			return n && QE(e, function(e, i) {
				var a = e.dataByAxis || {},
					o = t[i] || {},
					r = o.dataByAxis || [];
				n &= a.length === r.length, n && QE(a, function(t, e) {
					var i = r[e] || {},
						a = t.seriesDataIndices || [],
						o = i.seriesDataIndices || [];
					n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && a.length === o.length, n && QE(a, function(t, e) {
						var i = o[e];
						n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex
					})
				})
			}), this._lastDataByCoordSys = t, !!n
		},
		_hide: function(t) {
			this._lastDataByCoordSys = null, t({
				type: "hideTip",
				from: this.uid
			})
		},
		dispose: function(t, e) {
			Kw.node || (this._tooltipContent.hide(), zv("itemTooltip", e))
		}
	}), au({
		type: "showTip",
		event: "showTip",
		update: "tooltip:manuallyShowTip"
	}, function() {}), au({
		type: "hideTip",
		event: "hideTip",
		update: "tooltip:manuallyHideTip"
	}, function() {});
	var nz = gr,
		iz = vr,
		az = cu({
			type: "marker",
			dependencies: ["series", "grid", "polar", "geo"],
			init: function(t, e, n, i) {
				this.mergeDefaultAndTheme(t, n), this.mergeOption(t, n, i.createdBySelf, !0)
			},
			isAnimationEnabled: function() {
				if(Kw.node) return !1;
				var t = this.__hostSeries;
				return this.getShallow("animation") && t && t.isAnimationEnabled()
			},
			mergeOption: function(t, e, n, i) {
				var a = this.constructor,
					o = this.mainType + "Model";
				n || e.eachSeries(function(t) {
					var n = t.get(this.mainType, !0),
						s = t[o];
					return n && n.data ? (s ? s.mergeOption(n, e, !0) : (i && kx(n), f(n.data, function(t) {
						t instanceof Array ? (kx(t[0]), kx(t[1])) : kx(t)
					}), s = new a(n, this, e), r(s, {
						mainType: this.mainType,
						seriesIndex: t.seriesIndex,
						name: t.name,
						createdBySelf: !0
					}), s.__hostSeries = t), void(t[o] = s)) : void(t[o] = null)
				}, this)
			},
			formatTooltip: function(t) {
				var e = this.getData(),
					n = this.getRawValue(t),
					i = _(n) ? p(n, nz).join(", ") : nz(n),
					a = e.getName(t),
					o = iz(this.name);
				return(null != n || a) && (o += "<br />"), a && (o += iz(a), null != n && (o += " : ")), null != n && (o += iz(i)), o
			},
			getData: function() {
				return this._data
			},
			setData: function(t) {
				this._data = t
			}
		});
	c(az, iA), az.extend({
		type: "markPoint",
		defaultOption: {
			zlevel: 0,
			z: 5,
			symbol: "pin",
			symbolSize: 50,
			tooltip: {
				trigger: "item"
			},
			label: {
				show: !0,
				position: "inside"
			},
			itemStyle: {
				borderWidth: 2
			},
			emphasis: {
				label: {
					show: !0
				}
			}
		}
	});
	var oz = u,
		rz = x,
		sz = {
			min: rz(Nx, "min"),
			max: rz(Nx, "max"),
			average: rz(Nx, "average")
		},
		lz = du({
			type: "marker",
			init: function() {
				this.markerGroupMap = B()
			},
			render: function(t, e, n) {
				var i = this.markerGroupMap;
				i.each(function(t) {
					t.__keep = !1
				});
				var a = this.type + "Model";
				e.eachSeries(function(t) {
					var i = t[a];
					i && this.renderSeries(t, i, e, n)
				}, this), i.each(function(t) {
					!t.__keep && this.group.remove(t.group)
				}, this)
			},
			renderSeries: function() {}
		});
	lz.extend({
		type: "markPoint",
		updateTransform: function(t, e, n) {
			e.eachSeries(function(t) {
				var e = t.markPointModel;
				e && (Fx(e.getData(), t, n), this.markerGroupMap.get(t.id).updateLayout(e))
			}, this)
		},
		renderSeries: function(t, e, n, i) {
			var a = t.coordinateSystem,
				o = t.id,
				r = t.getData(),
				s = this.markerGroupMap,
				l = s.get(o) || s.set(o, new Xc),
				u = Wx(a, t, e);
			e.setData(u), Fx(e.getData(), t, i), u.each(function(t) {
				var n = u.getItemModel(t),
					i = n.getShallow("symbolSize");
				"function" == typeof i && (i = i(e.getRawValue(t), e.getDataParams(t))), u.setItemVisual(t, {
					symbolSize: i,
					color: n.get("itemStyle.color") || r.getVisual("color"),
					symbol: n.getShallow("symbol")
				})
			}), l.updateData(u), this.group.add(l.group), u.eachItemGraphicEl(function(t) {
				t.traverse(function(t) {
					t.dataModel = e
				})
			}), l.__keep = !0, l.group.silent = e.get("silent") || t.get("silent")
		}
	}), eu(function(t) {
		t.markPoint = t.markPoint || {}
	}), az.extend({
		type: "markLine",
		defaultOption: {
			zlevel: 0,
			z: 5,
			symbol: ["circle", "arrow"],
			symbolSize: [8, 16],
			precision: 2,
			tooltip: {
				trigger: "item"
			},
			label: {
				show: !0,
				position: "end"
			},
			lineStyle: {
				type: "dashed"
			},
			emphasis: {
				label: {
					show: !0
				},
				lineStyle: {
					width: 3
				}
			},
			animationEasing: "linear"
		}
	});
	var uz = function(t, e, n, o) {
		var s = t.getData(),
			l = o.type;
		if(!_(o) && ("min" === l || "max" === l || "average" === l || "median" === l || null != o.xAxis || null != o.yAxis)) {
			var u, h, c;
			if(null != o.yAxis || null != o.xAxis) h = null != o.yAxis ? "y" : "x", u = e.getAxis(h), c = D(o.yAxis, o.xAxis);
			else {
				var d = zx(o, s, e, t);
				h = d.valueDataDim, u = d.valueAxis, c = Gx(s, h, l)
			}
			var f = "x" === h ? 0 : 1,
				p = 1 - f,
				g = i(o),
				m = {};
			g.type = null, g.coord = [], m.coord = [], g.coord[p] = -1 / 0, m.coord[p] = 1 / 0;
			var v = n.get("precision");
			v >= 0 && "number" == typeof c && (c = +c.toFixed(Math.min(v, 20))), g.coord[f] = m.coord[f] = c, o = [g, m, {
				type: l,
				valueIndex: o.valueIndex,
				value: c
			}]
		}
		return o = [Ex(t, o[0]), Ex(t, o[1]), r({}, o[2])], o[2].type = o[2].type || "", a(o[2], o[0]), a(o[2], o[1]), o
	};
	lz.extend({
		type: "markLine",
		updateTransform: function(t, e, n) {
			e.eachSeries(function(t) {
				var e = t.markLineModel;
				if(e) {
					var i = e.getData(),
						a = e.__from,
						o = e.__to;
					a.each(function(e) {
						Yx(a, e, !0, t, n), Yx(o, e, !1, t, n)
					}), i.each(function(t) {
						i.setItemLayout(t, [a.getItemLayout(t), o.getItemLayout(t)])
					}), this.markerGroupMap.get(t.id).updateLayout()
				}
			}, this)
		},
		renderSeries: function(t, e, n, i) {
			function a(e, n, a) {
				var o = e.getItemModel(n);
				Yx(e, n, a, t, i), e.setItemVisual(n, {
					symbolSize: o.get("symbolSize") || g[a ? 0 : 1],
					symbol: o.get("symbol", !0) || p[a ? 0 : 1],
					color: o.get("itemStyle.color") || s.getVisual("color")
				})
			}
			var o = t.coordinateSystem,
				r = t.id,
				s = t.getData(),
				l = this.markerGroupMap,
				u = l.get(r) || l.set(r, new og);
			this.group.add(u.group);
			var h = Ux(o, t, e),
				c = h.from,
				d = h.to,
				f = h.line;
			e.__from = c, e.__to = d, e.setData(f);
			var p = e.get("symbol"),
				g = e.get("symbolSize");
			_(p) || (p = [p, p]), "number" == typeof g && (g = [g, g]), h.from.each(function(t) {
				a(c, t, !0), a(d, t, !1)
			}), f.each(function(t) {
				var e = f.getItemModel(t).get("lineStyle.color");
				f.setItemVisual(t, {
					color: e || c.getItemVisual(t, "color")
				}), f.setItemLayout(t, [c.getItemLayout(t), d.getItemLayout(t)]), f.setItemVisual(t, {
					fromSymbolSize: c.getItemVisual(t, "symbolSize"),
					fromSymbol: c.getItemVisual(t, "symbol"),
					toSymbolSize: d.getItemVisual(t, "symbolSize"),
					toSymbol: d.getItemVisual(t, "symbol")
				})
			}), u.updateData(f), h.line.eachItemGraphicEl(function(t) {
				t.traverse(function(t) {
					t.dataModel = e
				})
			}), u.__keep = !0, u.group.silent = e.get("silent") || t.get("silent")
		}
	}), eu(function(t) {
		t.markLine = t.markLine || {}
	}), az.extend({
		type: "markArea",
		defaultOption: {
			zlevel: 0,
			z: 1,
			tooltip: {
				trigger: "item"
			},
			animation: !1,
			label: {
				show: !0,
				position: "top"
			},
			itemStyle: {
				borderWidth: 0
			},
			emphasis: {
				label: {
					show: !0,
					position: "top"
				}
			}
		}
	});
	var hz = function(t, e, n, i) {
			var a = Ex(t, i[0]),
				r = Ex(t, i[1]),
				s = D,
				l = a.coord,
				u = r.coord;
			l[0] = s(l[0], -1 / 0), l[1] = s(l[1], -1 / 0), u[0] = s(u[0], 1 / 0), u[1] = s(u[1], 1 / 0);
			var h = o([{}, a, r]);
			return h.coord = [a.coord, r.coord], h.x0 = a.x, h.y0 = a.y, h.x1 = r.x, h.y1 = r.y, h
		},
		cz = [
			["x0", "y0"],
			["x1", "y0"],
			["x1", "y1"],
			["x0", "y1"]
		];
	lz.extend({
		type: "markArea",
		updateTransform: function(t, e, n) {
			e.eachSeries(function(t) {
				var e = t.markAreaModel;
				if(e) {
					var i = e.getData();
					i.each(function(e) {
						var a = p(cz, function(a) {
							return $x(i, e, a, t, n)
						});
						i.setItemLayout(e, a);
						var o = i.getItemGraphicEl(e);
						o.setShape("points", a)
					})
				}
			}, this)
		},
		renderSeries: function(t, e, n, i) {
			var a = t.coordinateSystem,
				o = t.id,
				r = t.getData(),
				l = this.markerGroupMap,
				u = l.get(o) || l.set(o, {
					group: new rS
				});
			this.group.add(u.group), u.__keep = !0;
			var h = Jx(a, t, e);
			e.setData(h), h.each(function(e) {
				h.setItemLayout(e, p(cz, function(n) {
					return $x(h, e, n, t, i)
				})), h.setItemVisual(e, {
					color: r.getVisual("color")
				})
			}), h.diff(u.__data).add(function(t) {
				var e = new TI({
					shape: {
						points: h.getItemLayout(t)
					}
				});
				h.setItemGraphicEl(t, e), u.group.add(e)
			}).update(function(t, n) {
				var i = u.__data.getItemGraphicEl(n);
				zo(i, {
					shape: {
						points: h.getItemLayout(t)
					}
				}, e, t), u.group.add(i), h.setItemGraphicEl(t, i)
			}).remove(function(t) {
				var e = u.__data.getItemGraphicEl(t);
				u.group.remove(e)
			}).execute(), h.eachItemGraphicEl(function(t, n) {
				var i = h.getItemModel(n),
					a = i.getModel("label"),
					o = i.getModel("emphasis.label"),
					r = h.getItemVisual(n, "color");
				t.useStyle(s(i.getModel("itemStyle").getItemStyle(), {
					fill: tn(r, .4),
					stroke: r
				})), t.hoverStyle = i.getModel("emphasis.itemStyle").getItemStyle(), Io(t.style, t.hoverStyle, a, o, {
					labelFetcher: e,
					labelDataIndex: n,
					defaultText: h.getName(n) || "",
					isRectText: !0,
					autoColor: r
				}), So(t, {}), t.dataModel = e
			}), u.__data = h, u.group.silent = e.get("silent") || t.get("silent")
		}
	}), eu(function(t) {
		t.markArea = t.markArea || {}
	});
	var dz = function(t) {
		var e = t && t.timeline;
		_(e) || (e = e ? [e] : []), f(e, function(t) {
			t && Qx(t)
		})
	};
	_T.registerSubTypeDefaulter("timeline", function() {
		return "slider"
	}), au({
		type: "timelineChange",
		event: "timelineChanged",
		update: "prepareAndUpdate"
	}, function(t, e) {
		var n = e.getComponent("timeline");
		return n && null != t.currentIndex && (n.setCurrentIndex(t.currentIndex), !n.get("loop", !0) && n.isIndexMax() && n.setPlayState(!1)), e.resetOption("timeline"), s({
			currentIndex: n.option.currentIndex
		}, t)
	}), au({
		type: "timelinePlayChange",
		event: "timelinePlayChanged",
		update: "update"
	}, function(t, e) {
		var n = e.getComponent("timeline");
		n && null != t.playState && n.setPlayState(t.playState)
	});
	var fz = _T.extend({
			type: "timeline",
			layoutMode: "box",
			defaultOption: {
				zlevel: 0,
				z: 4,
				show: !0,
				axisType: "time",
				realtime: !0,
				left: "20%",
				top: null,
				right: "20%",
				bottom: 0,
				width: null,
				height: 40,
				padding: 5,
				controlPosition: "left",
				autoPlay: !1,
				rewind: !1,
				loop: !0,
				playInterval: 2e3,
				currentIndex: 0,
				itemStyle: {},
				label: {
					color: "#000"
				},
				data: []
			},
			init: function(t, e, n) {
				this._data, this._names, this.mergeDefaultAndTheme(t, n), this._initData()
			},
			mergeOption: function() {
				fz.superApply(this, "mergeOption", arguments), this._initData()
			},
			setCurrentIndex: function(t) {
				null == t && (t = this.option.currentIndex);
				var e = this._data.count();
				this.option.loop ? t = (t % e + e) % e : (t >= e && (t = e - 1), 0 > t && (t = 0)), this.option.currentIndex = t
			},
			getCurrentIndex: function() {
				return this.option.currentIndex
			},
			isIndexMax: function() {
				return this.getCurrentIndex() >= this._data.count() - 1
			},
			setPlayState: function(t) {
				this.option.autoPlay = !!t
			},
			getPlayState: function() {
				return !!this.option.autoPlay
			},
			_initData: function() {
				var t = this.option,
					e = t.data || [],
					n = t.axisType,
					a = this._names = [];
				if("category" === n) {
					var o = [];
					f(e, function(t, e) {
						var n, r = Vi(t);
						S(t) ? (n = i(t), n.value = e) : n = e, o.push(n), b(r) || null != r && !isNaN(r) || (r = ""), a.push(r + "")
					}), e = o
				}
				var r = {
						category: "ordinal",
						time: "time"
					}[n] || "number",
					s = this._data = new GD([{
						name: "value",
						type: r
					}], this);
				s.initData(e, a)
			},
			getData: function() {
				return this._data
			},
			getCategories: function() {
				return "category" === this.get("axisType") ? this._names.slice() : void 0
			}
		}),
		pz = fz.extend({
			type: "timeline.slider",
			defaultOption: {
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				borderWidth: 0,
				orient: "horizontal",
				inverse: !1,
				tooltip: {
					trigger: "item"
				},
				symbol: "emptyCircle",
				symbolSize: 10,
				lineStyle: {
					show: !0,
					width: 2,
					color: "#304654"
				},
				label: {
					position: "auto",
					show: !0,
					interval: "auto",
					rotate: 0,
					color: "#304654"
				},
				itemStyle: {
					color: "#304654",
					borderWidth: 1
				},
				checkpointStyle: {
					symbol: "circle",
					symbolSize: 13,
					color: "#c23531",
					borderWidth: 5,
					borderColor: "rgba(194,53,49, 0.5)",
					animation: !0,
					animationDuration: 300,
					animationEasing: "quinticInOut"
				},
				controlStyle: {
					show: !0,
					showPlayBtn: !0,
					showPrevBtn: !0,
					showNextBtn: !0,
					itemSize: 22,
					itemGap: 12,
					position: "left",
					playIcon: "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",
					stopIcon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
					nextIcon: "path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",
					prevIcon: "path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",
					color: "#304654",
					borderColor: "#304654",
					borderWidth: 1
				},
				emphasis: {
					label: {
						show: !0,
						color: "#c23531"
					},
					itemStyle: {
						color: "#c23531"
					},
					controlStyle: {
						color: "#c23531",
						borderColor: "#c23531",
						borderWidth: 2
					}
				},
				data: []
			}
		});
	c(pz, iA);
	var gz = lA.extend({
			type: "timeline"
		}),
		mz = function(t, e, n, i) {
			NC.call(this, t, e, n), this.type = i || "value", this.model = null
		};
	mz.prototype = {
		constructor: mz,
		getLabelModel: function() {
			return this.model.getModel("label")
		},
		isHorizontal: function() {
			return "horizontal" === this.model.get("orient")
		}
	}, h(mz, NC);
	var vz = y,
		yz = f,
		xz = Math.PI;
	gz.extend({
		type: "timeline.slider",
		init: function(t, e) {
			this.api = e, this._axis, this._viewRect, this._timer, this._currentPointer, this._mainGroup, this._labelGroup
		},
		render: function(t, e, n) {
			if(this.model = t, this.api = n, this.ecModel = e, this.group.removeAll(), t.get("show", !0)) {
				var i = this._layout(t, n),
					a = this._createGroup("mainGroup"),
					o = this._createGroup("labelGroup"),
					r = this._axis = this._createAxis(i, t);
				t.formatTooltip = function(t) {
					return vr(r.scale.getLabel(t))
				}, yz(["AxisLine", "AxisTick", "Control", "CurrentPointer"], function(e) {
					this["_render" + e](i, a, r, t)
				}, this), this._renderAxisLabel(i, o, r, t), this._position(i, t)
			}
			this._doPlayStop()
		},
		remove: function() {
			this._clearTimer(), this.group.removeAll()
		},
		dispose: function() {
			this._clearTimer()
		},
		_layout: function(t, e) {
			var n = t.get("label.position"),
				i = t.get("orient"),
				a = n_(t, e);
			null == n || "auto" === n ? n = "horizontal" === i ? a.y + a.height / 2 < e.getHeight() / 2 ? "-" : "+" : a.x + a.width / 2 < e.getWidth() / 2 ? "+" : "-" : isNaN(n) && (n = {
				horizontal: {
					top: "-",
					bottom: "+"
				},
				vertical: {
					left: "-",
					right: "+"
				}
			}[i][n]);
			var o = {
					horizontal: "center",
					vertical: n >= 0 || "+" === n ? "left" : "right"
				},
				r = {
					horizontal: n >= 0 || "+" === n ? "top" : "bottom",
					vertical: "middle"
				},
				s = {
					horizontal: 0,
					vertical: xz / 2
				},
				l = "vertical" === i ? a.height : a.width,
				u = t.getModel("controlStyle"),
				h = u.get("show", !0),
				c = h ? u.get("itemSize") : 0,
				d = h ? u.get("itemGap") : 0,
				f = c + d,
				p = t.get("label.rotate") || 0;
			p = p * xz / 180;
			var g, m, v, y, x = u.get("position", !0),
				_ = h && u.get("showPlayBtn", !0),
				w = h && u.get("showPrevBtn", !0),
				b = h && u.get("showNextBtn", !0),
				S = 0,
				M = l;
			return "left" === x || "bottom" === x ? (_ && (g = [0, 0], S += f), w && (m = [S, 0], S += f), b && (v = [M - c, 0], M -= f)) : (_ && (g = [M - c, 0], M -= f), w && (m = [0, 0], S += f), b && (v = [M - c, 0], M -= f)), y = [S, M], t.get("inverse") && y.reverse(), {
				viewRect: a,
				mainLength: l,
				orient: i,
				rotation: s[i],
				labelRotation: p,
				labelPosOpt: n,
				labelAlign: t.get("label.align") || o[i],
				labelBaseline: t.get("label.verticalAlign") || t.get("label.baseline") || r[i],
				playPosition: g,
				prevBtnPosition: m,
				nextBtnPosition: v,
				axisExtent: y,
				controlSize: c,
				controlGap: d
			}
		},
		_position: function(t) {
			function e(t) {
				var e = t.position;
				t.origin = [h[0][0] - e[0], h[1][0] - e[1]]
			}

			function n(t) {
				return [
					[t.x, t.x + t.width],
					[t.y, t.y + t.height]
				]
			}

			function i(t, e, n, i, a) {
				t[i] += n[i][a] - e[i][a]
			}
			var a = this._mainGroup,
				o = this._labelGroup,
				r = t.viewRect;
			if("vertical" === t.orient) {
				var s = Ie(),
					l = r.x,
					u = r.y + r.height;
				Ce(s, s, [-l, -u]), Le(s, s, -xz / 2), Ce(s, s, [l, u]), r = r.clone(), r.applyTransform(s)
			}
			var h = n(r),
				c = n(a.getBoundingRect()),
				d = n(o.getBoundingRect()),
				f = a.position,
				p = o.position;
			p[0] = f[0] = h[0][0];
			var g = t.labelPosOpt;
			if(isNaN(g)) {
				var m = "+" === g ? 0 : 1;
				i(f, c, h, 1, m), i(p, d, h, 1, 1 - m)
			} else {
				var m = g >= 0 ? 0 : 1;
				i(f, c, h, 1, m), p[1] = f[1] + g
			}
			a.attr("position", f), o.attr("position", p), a.rotation = o.rotation = t.rotation, e(a), e(o)
		},
		_createAxis: function(t, e) {
			var n = e.getData(),
				i = e.get("axisType"),
				a = mh(e, i);
			a.getTicks = function() {
				return n.mapArray(["value"], function(t) {
					return t
				})
			};
			var o = n.getDataExtent("value");
			a.setExtent(o[0], o[1]), a.niceTicks();
			var r = new mz("value", a, t.axisExtent, i);
			return r.model = e, r
		},
		_createGroup: function(t) {
			var e = this["_" + t] = new rS;
			return this.group.add(e), e
		},
		_renderAxisLine: function(t, e, n, i) {
			var a = n.getExtent();
			i.get("lineStyle.show") && e.add(new PI({
				shape: {
					x1: a[0],
					y1: 0,
					x2: a[1],
					y2: 0
				},
				style: r({
					lineCap: "round"
				}, i.getModel("lineStyle").getLineStyle()),
				silent: !0,
				z2: 1
			}))
		},
		_renderAxisTick: function(t, e, n, i) {
			var a = i.getData(),
				o = n.scale.getTicks();
			yz(o, function(t) {
				var o = n.dataToCoord(t),
					r = a.getItemModel(t),
					s = r.getModel("itemStyle"),
					l = r.getModel("emphasis.itemStyle"),
					u = {
						position: [o, 0],
						onclick: vz(this._changeTimeline, this, t)
					},
					h = a_(r, s, e, u);
				So(h, l.getItemStyle()), r.get("tooltip") ? (h.dataIndex = t, h.dataModel = i) : h.dataIndex = h.dataModel = null
			}, this)
		},
		_renderAxisLabel: function(t, e, n, i) {
			var a = n.getLabelModel();
			if(a.get("show")) {
				var o = i.getData(),
					r = n.getViewLabels();
				yz(r, function(i) {
					var a = i.tickValue,
						r = o.getItemModel(a),
						s = r.getModel("label"),
						l = r.getModel("emphasis.label"),
						u = n.dataToCoord(i.tickValue),
						h = new yI({
							position: [u, 0],
							rotation: t.labelRotation - t.rotation,
							onclick: vz(this._changeTimeline, this, a),
							silent: !1
						});
					To(h.style, s, {
						text: i.formattedLabel,
						textAlign: t.labelAlign,
						textVerticalAlign: t.labelBaseline
					}), e.add(h), So(h, To({}, l))
				}, this)
			}
		},
		_renderControl: function(t, e, n, i) {
			function a(t, n, a, h) {
				if(t) {
					var c = {
							position: t,
							origin: [o / 2, 0],
							rotation: h ? -r : 0,
							rectHover: !0,
							style: s,
							onclick: a
						},
						d = i_(i, n, u, c);
					e.add(d), So(d, l)
				}
			}
			var o = t.controlSize,
				r = t.rotation,
				s = i.getModel("controlStyle").getItemStyle(),
				l = i.getModel("emphasis.controlStyle").getItemStyle(),
				u = [0, -o / 2, o, o],
				h = i.getPlayState(),
				c = i.get("inverse", !0);
			a(t.nextBtnPosition, "controlStyle.nextIcon", vz(this._changeTimeline, this, c ? "-" : "+")), a(t.prevBtnPosition, "controlStyle.prevIcon", vz(this._changeTimeline, this, c ? "+" : "-")), a(t.playPosition, "controlStyle." + (h ? "stopIcon" : "playIcon"), vz(this._handlePlayClick, this, !h), !0)
		},
		_renderCurrentPointer: function(t, e, n, i) {
			var a = i.getData(),
				o = i.getCurrentIndex(),
				r = a.getItemModel(o).getModel("checkpointStyle"),
				s = this,
				l = {
					onCreate: function(t) {
						t.draggable = !0, t.drift = vz(s._handlePointerDrag, s), t.ondragend = vz(s._handlePointerDragend, s), o_(t, o, n, i, !0)
					},
					onUpdate: function(t) {
						o_(t, o, n, i)
					}
				};
			this._currentPointer = a_(r, r, this._mainGroup, {}, this._currentPointer, l)
		},
		_handlePlayClick: function(t) {
			this._clearTimer(), this.api.dispatchAction({
				type: "timelinePlayChange",
				playState: t,
				from: this.uid
			})
		},
		_handlePointerDrag: function(t, e, n) {
			this._clearTimer(), this._pointerChangeTimeline([n.offsetX, n.offsetY])
		},
		_handlePointerDragend: function(t) {
			this._pointerChangeTimeline([t.offsetX, t.offsetY], !0)
		},
		_pointerChangeTimeline: function(t, e) {
			var n = this._toAxisCoord(t)[0],
				i = this._axis,
				a = er(i.getExtent().slice());
			n > a[1] && (n = a[1]), n < a[0] && (n = a[0]), this._currentPointer.position[0] = n, this._currentPointer.dirty();
			var o = this._findNearestTick(n),
				r = this.model;
			(e || o !== r.getCurrentIndex() && r.get("realtime")) && this._changeTimeline(o)
		},
		_doPlayStop: function() {
			function t() {
				var t = this.model;
				this._changeTimeline(t.getCurrentIndex() + (t.get("rewind", !0) ? -1 : 1))
			}
			this._clearTimer(), this.model.getPlayState() && (this._timer = setTimeout(vz(t, this), this.model.get("playInterval")))
		},
		_toAxisCoord: function(t) {
			var e = this._mainGroup.getLocalTransform();
			return Vo(t, e, !0)
		},
		_findNearestTick: function(t) {
			var e, n = this.model.getData(),
				i = 1 / 0,
				a = this._axis;
			return n.each(["value"], function(n, o) {
				var r = a.dataToCoord(n),
					s = Math.abs(r - t);
				i > s && (i = s, e = o)
			}), e
		},
		_clearTimer: function() {
			this._timer && (clearTimeout(this._timer), this._timer = null)
		},
		_changeTimeline: function(t) {
			var e = this.model.getCurrentIndex();
			"+" === t ? t = e + 1 : "-" === t && (t = e - 1), this.api.dispatchAction({
				type: "timelineChange",
				currentIndex: t,
				from: this.uid
			})
		}
	}), eu(dz), _T.registerSubTypeDefaulter("dataZoom", function() {
		return "slider"
	});
	var _z = ["x", "y", "z", "radius", "angle", "single"],
		wz = ["cartesian2d", "polar", "singleAxis"],
		bz = s_(_z, ["axisIndex", "axis", "index", "id"]),
		Sz = f,
		Mz = er,
		Iz = function(t, e, n, i) {
			this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this._minMaxSpan, this.ecModel = i, this._dataZoomModel = n
		};
	Iz.prototype = {
		constructor: Iz,
		hostedBy: function(t) {
			return this._dataZoomModel === t
		},
		getDataValueWindow: function() {
			return this._valueWindow.slice()
		},
		getDataPercentWindow: function() {
			return this._percentWindow.slice()
		},
		getTargetSeriesModels: function() {
			var t = [],
				e = this.ecModel;
			return e.eachSeries(function(n) {
				if(r_(n.get("coordinateSystem"))) {
					var i = this._dimName,
						a = e.queryComponents({
							mainType: i + "Axis",
							index: n.get(i + "AxisIndex"),
							id: n.get(i + "AxisId")
						})[0];
					this._axisIndex === (a && a.componentIndex) && t.push(n)
				}
			}, this), t
		},
		getAxisModel: function() {
			return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
		},
		getOtherAxisModel: function() {
			var t, e, n = this._dimName,
				i = this.ecModel,
				a = this.getAxisModel(),
				o = "x" === n || "y" === n;
			o ? (e = "gridIndex", t = "x" === n ? "y" : "x") : (e = "polarIndex", t = "angle" === n ? "radius" : "angle");
			var r;
			return i.eachComponent(t + "Axis", function(t) {
				(t.get(e) || 0) === (a.get(e) || 0) && (r = t)
			}), r
		},
		getMinMaxSpan: function() {
			return i(this._minMaxSpan)
		},
		calculateDataWindow: function(t) {
			var e = this._dataExtent,
				n = this.getAxisModel(),
				i = n.axis.scale,
				a = this._dataZoomModel.getRangePropMode(),
				o = [0, 100],
				r = [t.start, t.end],
				s = [];
			return Sz(["startValue", "endValue"], function(e) {
				s.push(null != t[e] ? i.parse(t[e]) : null)
			}), Sz([0, 1], function(t) {
				var n = s[t],
					l = r[t];
				"percent" === a[t] ? (null == l && (l = o[t]), n = i.parse(Jo(l, o, e, !0))) : l = Jo(n, e, o, !0), s[t] = n, r[t] = l
			}), {
				valueWindow: Mz(s),
				percentWindow: Mz(r)
			}
		},
		reset: function(t) {
			if(t === this._dataZoomModel) {
				var e = this.getTargetSeriesModels();
				this._dataExtent = u_(this, this._dimName, e);
				var n = this.calculateDataWindow(t.option);
				this._valueWindow = n.valueWindow, this._percentWindow = n.percentWindow, d_(this), c_(this)
			}
		},
		restore: function(t) {
			t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, c_(this, !0))
		},
		filterData: function(t) {
			function e(t) {
				return t >= o[0] && t <= o[1]
			}
			if(t === this._dataZoomModel) {
				var n = this._dimName,
					i = this.getTargetSeriesModels(),
					a = t.get("filterMode"),
					o = this._valueWindow;
				"none" !== a && Sz(i, function(t) {
					var i = t.getData(),
						r = i.mapDimension(n, !0);
					r.length && ("weakFilter" === a ? i.filterSelf(function(t) {
						for(var e, n, a, s = 0; s < r.length; s++) {
							var l = i.get(r[s], t),
								u = !isNaN(l),
								h = l < o[0],
								c = l > o[1];
							if(u && !h && !c) return !0;
							u && (a = !0), h && (e = !0), c && (n = !0)
						}
						return a && e && n
					}) : Sz(r, function(n) {
						if("empty" === a) t.setData(i.map(n, function(t) {
							return e(t) ? t : 0 / 0
						}));
						else {
							var r = {};
							r[n] = o, i.selectRange(r)
						}
					}), Sz(r, function(t) {
						i.setApproximateExtent(o, t)
					}))
				})
			}
		}
	};
	var Tz = f,
		Az = bz,
		Dz = cu({
			type: "dataZoom",
			dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "singleAxis", "series"],
			defaultOption: {
				zlevel: 0,
				z: 4,
				orient: null,
				xAxisIndex: null,
				yAxisIndex: null,
				filterMode: "filter",
				throttle: null,
				start: 0,
				end: 100,
				startValue: null,
				endValue: null,
				minSpan: null,
				maxSpan: null,
				minValueSpan: null,
				maxValueSpan: null,
				rangeMode: null
			},
			init: function(t, e, n) {
				this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this._autoThrottle = !0, this._rangePropMode = ["percent", "percent"];
				var i = f_(t);
				this.mergeDefaultAndTheme(t, n), this.doInit(i)
			},
			mergeOption: function(t) {
				var e = f_(t);
				a(this.option, t, !0), this.doInit(e)
			},
			doInit: function(t) {
				var e = this.option;
				Kw.canvasSupported || (e.realtime = !1), this._setDefaultThrottle(t), p_(this, t), Tz([
					["start", "startValue"],
					["end", "endValue"]
				], function(t, n) {
					"value" === this._rangePropMode[n] && (e[t[0]] = null)
				}, this), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies()
			},
			_giveAxisProxies: function() {
				var t = this._axisProxies;
				this.eachTargetAxis(function(e, n, i, a) {
					var o = this.dependentModels[e.axis][n],
						r = o.__dzAxisProxy || (o.__dzAxisProxy = new Iz(e.name, n, this, a));
					t[e.name + "_" + n] = r
				}, this)
			},
			_resetTarget: function() {
				var t = this.option,
					e = this._judgeAutoMode();
				Az(function(e) {
					var n = e.axisIndex;
					t[n] = Ri(t[n])
				}, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
			},
			_judgeAutoMode: function() {
				var t = this.option,
					e = !1;
				Az(function(n) {
					null != t[n.axisIndex] && (e = !0)
				}, this);
				var n = t.orient;
				return null == n && e ? "orient" : e ? void 0 : (null == n && (t.orient = "horizontal"), "axisIndex")
			},
			_autoSetAxisIndex: function() {
				var t = !0,
					e = this.get("orient", !0),
					n = this.option,
					i = this.dependentModels;
				if(t) {
					var a = "vertical" === e ? "y" : "x";
					i[a + "Axis"].length ? (n[a + "AxisIndex"] = [0], t = !1) : Tz(i.singleAxis, function(i) {
						t && i.get("orient", !0) === e && (n.singleAxisIndex = [i.componentIndex], t = !1)
					})
				}
				t && Az(function(e) {
					if(t) {
						var i = [],
							a = this.dependentModels[e.axis];
						if(a.length && !i.length)
							for(var o = 0, r = a.length; r > o; o++) "category" === a[o].get("type") && i.push(o);
						n[e.axisIndex] = i, i.length && (t = !1)
					}
				}, this), t && this.ecModel.eachSeries(function(t) {
					this._isSeriesHasAllAxesTypeOf(t, "value") && Az(function(e) {
						var i = n[e.axisIndex],
							a = t.get(e.axisIndex),
							o = t.get(e.axisId),
							r = t.ecModel.queryComponents({
								mainType: e.axis,
								index: a,
								id: o
							})[0];
						a = r.componentIndex, u(i, a) < 0 && i.push(a)
					})
				}, this)
			},
			_autoSetOrient: function() {
				var t;
				this.eachTargetAxis(function(e) {
					!t && (t = e.name)
				}, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
			},
			_isSeriesHasAllAxesTypeOf: function(t, e) {
				var n = !0;
				return Az(function(i) {
					var a = t.get(i.axisIndex),
						o = this.dependentModels[i.axis][a];
					o && o.get("type") === e || (n = !1)
				}, this), n
			},
			_setDefaultThrottle: function(t) {
				if(t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
					var e = this.ecModel.option;
					this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20
				}
			},
			getFirstTargetAxisModel: function() {
				var t;
				return Az(function(e) {
					if(null == t) {
						var n = this.get(e.axisIndex);
						n.length && (t = this.dependentModels[e.axis][n[0]])
					}
				}, this), t
			},
			eachTargetAxis: function(t, e) {
				var n = this.ecModel;
				Az(function(i) {
					Tz(this.get(i.axisIndex), function(a) {
						t.call(e, i, a, this, n)
					}, this)
				}, this)
			},
			getAxisProxy: function(t, e) {
				return this._axisProxies[t + "_" + e]
			},
			getAxisModel: function(t, e) {
				var n = this.getAxisProxy(t, e);
				return n && n.getAxisModel()
			},
			setRawRange: function(t, e) {
				var n = this.option;
				Tz([
					["start", "startValue"],
					["end", "endValue"]
				], function(e) {
					(null != t[e[0]] || null != t[e[1]]) && (n[e[0]] = t[e[0]], n[e[1]] = t[e[1]])
				}, this), !e && p_(this, t)
			},
			getPercentRange: function() {
				var t = this.findRepresentativeAxisProxy();
				return t ? t.getDataPercentWindow() : void 0
			},
			getValueRange: function(t, e) {
				if(null != t || null != e) return this.getAxisProxy(t, e).getDataValueWindow();
				var n = this.findRepresentativeAxisProxy();
				return n ? n.getDataValueWindow() : void 0
			},
			findRepresentativeAxisProxy: function(t) {
				if(t) return t.__dzAxisProxy;
				var e = this._axisProxies;
				for(var n in e)
					if(e.hasOwnProperty(n) && e[n].hostedBy(this)) return e[n];
				for(var n in e)
					if(e.hasOwnProperty(n) && !e[n].hostedBy(this)) return e[n]
			},
			getRangePropMode: function() {
				return this._rangePropMode.slice()
			}
		}),
		Cz = lA.extend({
			type: "dataZoom",
			render: function(t, e, n) {
				this.dataZoomModel = t, this.ecModel = e, this.api = n
			},
			getTargetCoordInfo: function() {
				function t(t, e, n, i) {
					for(var a, o = 0; o < n.length; o++)
						if(n[o].model === t) {
							a = n[o];
							break
						}
					a || n.push(a = {
						model: t,
						axisModels: [],
						coordIndex: i
					}), a.axisModels.push(e)
				}
				var e = this.dataZoomModel,
					n = this.ecModel,
					i = {};
				return e.eachTargetAxis(function(e, a) {
					var o = n.getComponent(e.axis, a);
					if(o) {
						var r = o.getCoordSysModel();
						r && t(r, o, i[r.mainType] || (i[r.mainType] = []), r.componentIndex)
					}
				}, this), i
			}
		}),
		Lz = (Dz.extend({
			type: "dataZoom.slider",
			layoutMode: "box",
			defaultOption: {
				show: !0,
				right: "ph",
				top: "ph",
				width: "ph",
				height: "ph",
				left: null,
				bottom: null,
				backgroundColor: "rgba(47,69,84,0)",
				dataBackground: {
					lineStyle: {
						color: "#2f4554",
						width: .5,
						opacity: .3
					},
					areaStyle: {
						color: "rgba(47,69,84,0.3)",
						opacity: .3
					}
				},
				borderColor: "#ddd",
				fillerColor: "rgba(167,183,204,0.4)",
				handleIcon: "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",
				handleSize: "100%",
				handleStyle: {
					color: "#a7b7cc"
				},
				labelPrecision: null,
				labelFormatter: null,
				showDetail: !0,
				showDataShadow: "auto",
				realtime: !0,
				zoomLock: !1,
				textStyle: {
					color: "#333"
				}
			}
		}), LI),
		kz = Jo,
		Pz = er,
		Oz = y,
		Nz = f,
		Ez = 7,
		zz = 1,
		Rz = 30,
		Bz = "horizontal",
		Vz = "vertical",
		Gz = 5,
		Fz = ["line", "bar", "candlestick", "scatter"],
		Wz = Cz.extend({
			type: "dataZoom.slider",
			init: function(t, e) {
				this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._handleWidth, this._handleHeight, this._location, this._dragging, this._dataShadowInfo, this.api = e
			},
			render: function(t, e, n, i) {
				return Wz.superApply(this, "render", arguments), $s(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get("orient"), this.dataZoomModel.get("show") === !1 ? void this.group.removeAll() : (i && "dataZoom" === i.type && i.from === this.uid || this._buildView(), void this._updateView())
			},
			remove: function() {
				Wz.superApply(this, "remove", arguments), Js(this, "_dispatchZoomAction")
			},
			dispose: function() {
				Wz.superApply(this, "dispose", arguments), Js(this, "_dispatchZoomAction")
			},
			_buildView: function() {
				var t = this.group;
				t.removeAll(), this._resetLocation(), this._resetInterval();
				var e = this._displayables.barGroup = new rS;
				this._renderBackground(), this._renderHandle(), this._renderDataShadow(), t.add(e), this._positionGroup()
			},
			_resetLocation: function() {
				var t = this.dataZoomModel,
					e = this.api,
					n = this._findCoordRect(),
					i = {
						width: e.getWidth(),
						height: e.getHeight()
					},
					a = this._orient === Bz ? {
						right: i.width - n.x - n.width,
						top: i.height - Rz - Ez,
						width: n.width,
						height: Rz
					} : {
						right: Ez,
						top: n.y,
						width: Rz,
						height: n.height
					},
					o = Pr(t.option);
				f(["right", "top", "width", "height"], function(t) {
					"ph" === o[t] && (o[t] = a[t])
				});
				var r = Dr(o, i, t.padding);
				this._location = {
					x: r.x,
					y: r.y
				}, this._size = [r.width, r.height], this._orient === Vz && this._size.reverse()
			},
			_positionGroup: function() {
				var t = this.group,
					e = this._location,
					n = this._orient,
					i = this.dataZoomModel.getFirstTargetAxisModel(),
					a = i && i.get("inverse"),
					o = this._displayables.barGroup,
					r = (this._dataShadowInfo || {}).otherAxisInverse;
				o.attr(n !== Bz || a ? n === Bz && a ? {
					scale: r ? [-1, 1] : [-1, -1]
				} : n !== Vz || a ? {
					scale: r ? [-1, -1] : [-1, 1],
					rotation: Math.PI / 2
				} : {
					scale: r ? [1, -1] : [1, 1],
					rotation: Math.PI / 2
				} : {
					scale: r ? [1, 1] : [1, -1]
				});
				var s = t.getBoundingRect([o]);
				t.attr("position", [e.x - s.x, e.y - s.y])
			},
			_getViewExtent: function() {
				return [0, this._size[0]]
			},
			_renderBackground: function() {
				var t = this.dataZoomModel,
					e = this._size,
					n = this._displayables.barGroup;
				n.add(new Lz({
					silent: !0,
					shape: {
						x: 0,
						y: 0,
						width: e[0],
						height: e[1]
					},
					style: {
						fill: t.get("backgroundColor")
					},
					z2: -40
				})), n.add(new Lz({
					shape: {
						x: 0,
						y: 0,
						width: e[0],
						height: e[1]
					},
					style: {
						fill: "transparent"
					},
					z2: 0,
					onclick: y(this._onClickPanelClick, this)
				}))
			},
			_renderDataShadow: function() {
				var t = this._dataShadowInfo = this._prepareDataShadowInfo();
				if(t) {
					var e = this._size,
						n = t.series,
						i = n.getRawData(),
						a = n.getShadowDim ? n.getShadowDim() : t.otherDim;
					if(null != a) {
						var o = i.getDataExtent(a),
							r = .3 * (o[1] - o[0]);
						o = [o[0] - r, o[1] + r];
						var l, u = [0, e[1]],
							h = [0, e[0]],
							c = [
								[e[0], 0],
								[0, 0]
							],
							d = [],
							f = h[1] / (i.count() - 1),
							p = 0,
							g = Math.round(i.count() / e[0]);
						i.each([a], function(t, e) {
							if(g > 0 && e % g) return void(p += f);
							var n = null == t || isNaN(t) || "" === t,
								i = n ? 0 : kz(t, o, u, !0);
							n && !l && e ? (c.push([c[c.length - 1][0], 0]), d.push([d[d.length - 1][0], 0])) : !n && l && (c.push([p, 0]), d.push([p, 0])), c.push([p, i]), d.push([p, i]), p += f, l = n
						});
						var m = this.dataZoomModel;
						this._displayables.barGroup.add(new TI({
							shape: {
								points: c
							},
							style: s({
								fill: m.get("dataBackgroundColor")
							}, m.getModel("dataBackground.areaStyle").getAreaStyle()),
							silent: !0,
							z2: -20
						})), this._displayables.barGroup.add(new AI({
							shape: {
								points: d
							},
							style: m.getModel("dataBackground.lineStyle").getLineStyle(),
							silent: !0,
							z2: -19
						}))
					}
				}
			},
			_prepareDataShadowInfo: function() {
				var t = this.dataZoomModel,
					e = t.get("showDataShadow");
				if(e !== !1) {
					var n, i = this.ecModel;
					return t.eachTargetAxis(function(a, o) {
						var r = t.getAxisProxy(a.name, o).getTargetSeriesModels();
						f(r, function(t) {
							if(!(n || e !== !0 && u(Fz, t.get("type")) < 0)) {
								var r, s = i.getComponent(a.axis, o).axis,
									l = g_(a.name),
									h = t.coordinateSystem;
								null != l && h.getOtherAxis && (r = h.getOtherAxis(s).inverse), l = t.getData().mapDimension(l), n = {
									thisAxis: s,
									series: t,
									thisDim: a.name,
									otherDim: l,
									otherAxisInverse: r
								}
							}
						}, this)
					}, this), n
				}
			},
			_renderHandle: function() {
				var t = this._displayables,
					e = t.handles = [],
					n = t.handleLabels = [],
					i = this._displayables.barGroup,
					a = this._size,
					o = this.dataZoomModel;
				i.add(t.filler = new Lz({
					draggable: !0,
					cursor: m_(this._orient),
					drift: Oz(this._onDragMove, this, "all"),
					onmousemove: function(t) {
						wb(t.event)
					},
					ondragstart: Oz(this._showDataInfo, this, !0),
					ondragend: Oz(this._onDragEnd, this),
					onmouseover: Oz(this._showDataInfo, this, !0),
					onmouseout: Oz(this._showDataInfo, this, !1),
					style: {
						fill: o.get("fillerColor"),
						textPosition: "inside"
					}
				})), i.add(new Lz(so({
					silent: !0,
					shape: {
						x: 0,
						y: 0,
						width: a[0],
						height: a[1]
					},
					style: {
						stroke: o.get("dataBackgroundColor") || o.get("borderColor"),
						lineWidth: zz,
						fill: "rgba(0,0,0,0)"
					}
				}))), Nz([0, 1], function(t) {
					var a = Zo(o.get("handleIcon"), {
							cursor: m_(this._orient),
							draggable: !0,
							drift: Oz(this._onDragMove, this, t),
							onmousemove: function(t) {
								wb(t.event)
							},
							ondragend: Oz(this._onDragEnd, this),
							onmouseover: Oz(this._showDataInfo, this, !0),
							onmouseout: Oz(this._showDataInfo, this, !1)
						}, {
							x: -1,
							y: 0,
							width: 2,
							height: 2
						}),
						r = a.getBoundingRect();
					this._handleHeight = Qo(o.get("handleSize"), this._size[1]), this._handleWidth = r.width / r.height * this._handleHeight, a.setStyle(o.getModel("handleStyle").getItemStyle());
					var s = o.get("handleColor");
					null != s && (a.style.fill = s), i.add(e[t] = a);
					var l = o.textStyleModel;
					this.group.add(n[t] = new yI({
						silent: !0,
						invisible: !0,
						style: {
							x: 0,
							y: 0,
							text: "",
							textVerticalAlign: "middle",
							textAlign: "center",
							textFill: l.getTextColor(),
							textFont: l.getFont()
						},
						z2: 10
					}))
				}, this)
			},
			_resetInterval: function() {
				var t = this._range = this.dataZoomModel.getPercentRange(),
					e = this._getViewExtent();
				this._handleEnds = [kz(t[0], [0, 100], e, !0), kz(t[1], [0, 100], e, !0)]
			},
			_updateInterval: function(t, e) {
				var n = this.dataZoomModel,
					i = this._handleEnds,
					a = this._getViewExtent(),
					o = n.findRepresentativeAxisProxy().getMinMaxSpan(),
					r = [0, 100];
				WO(e, i, a, n.get("zoomLock") ? "all" : t, null != o.minSpan ? kz(o.minSpan, r, a, !0) : null, null != o.maxSpan ? kz(o.maxSpan, r, a, !0) : null);
				var s = this._range,
					l = this._range = Pz([kz(i[0], a, r, !0), kz(i[1], a, r, !0)]);
				return !s || s[0] !== l[0] || s[1] !== l[1]
			},
			_updateView: function(t) {
				var e = this._displayables,
					n = this._handleEnds,
					i = Pz(n.slice()),
					a = this._size;
				Nz([0, 1], function(t) {
					var i = e.handles[t],
						o = this._handleHeight;
					i.attr({
						scale: [o / 2, o / 2],
						position: [n[t], a[1] / 2 - o / 2]
					})
				}, this), e.filler.setShape({
					x: i[0],
					y: 0,
					width: i[1] - i[0],
					height: a[1]
				}), this._updateDataInfo(t)
			},
			_updateDataInfo: function(t) {
				function e(t) {
					var e = Bo(i.handles[t].parent, this.group),
						n = Go(0 === t ? "right" : "left", e),
						s = this._handleWidth / 2 + Gz,
						l = Vo([c[t] + (0 === t ? -s : s), this._size[1] / 2], e);
					a[t].setStyle({
						x: l[0],
						y: l[1],
						textVerticalAlign: o === Bz ? "middle" : n,
						textAlign: o === Bz ? n : "center",
						text: r[t]
					})
				}
				var n = this.dataZoomModel,
					i = this._displayables,
					a = i.handleLabels,
					o = this._orient,
					r = ["", ""];
				if(n.get("showDetail")) {
					var s = n.findRepresentativeAxisProxy();
					if(s) {
						var l = s.getAxisModel().axis,
							u = this._range,
							h = t ? s.calculateDataWindow({
								start: u[0],
								end: u[1]
							}).valueWindow : s.getDataValueWindow();
						r = [this._formatLabel(h[0], l), this._formatLabel(h[1], l)]
					}
				}
				var c = Pz(this._handleEnds.slice());
				e.call(this, 0), e.call(this, 1)
			},
			_formatLabel: function(t, e) {
				var n = this.dataZoomModel,
					i = n.get("labelFormatter"),
					a = n.get("labelPrecision");
				(null == a || "auto" === a) && (a = e.getPixelPrecision());
				var o = null == t || isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(a, 20));
				return w(i) ? i(t, o) : b(i) ? i.replace("{value}", o) : o
			},
			_showDataInfo: function(t) {
				t = this._dragging || t;
				var e = this._displayables.handleLabels;
				e[0].attr("invisible", !t), e[1].attr("invisible", !t)
			},
			_onDragMove: function(t, e, n) {
				this._dragging = !0;
				var i = this._displayables.barGroup.getLocalTransform(),
					a = Vo([e, n], i, !0),
					o = this._updateInterval(t, a[0]),
					r = this.dataZoomModel.get("realtime");
				this._updateView(!r), o && r && this._dispatchZoomAction()
			},
			_onDragEnd: function() {
				this._dragging = !1, this._showDataInfo(!1);
				var t = this.dataZoomModel.get("realtime");
				!t && this._dispatchZoomAction()
			},
			_onClickPanelClick: function(t) {
				var e = this._size,
					n = this._displayables.barGroup.transformCoordToLocal(t.offsetX, t.offsetY);
				if(!(n[0] < 0 || n[0] > e[0] || n[1] < 0 || n[1] > e[1])) {
					var i = this._handleEnds,
						a = (i[0] + i[1]) / 2,
						o = this._updateInterval("all", n[0] - a);
					this._updateView(), o && this._dispatchZoomAction()
				}
			},
			_dispatchZoomAction: function() {
				var t = this._range;
				this.api.dispatchAction({
					type: "dataZoom",
					from: this.uid,
					dataZoomId: this.dataZoomModel.id,
					start: t[0],
					end: t[1]
				})
			},
			_findCoordRect: function() {
				var t;
				if(Nz(this.getTargetCoordInfo(), function(e) {
						if(!t && e.length) {
							var n = e[0].model.coordinateSystem;
							t = n.getRect && n.getRect()
						}
					}), !t) {
					var e = this.api.getWidth(),
						n = this.api.getHeight();
					t = {
						x: .2 * e,
						y: .2 * n,
						width: .6 * e,
						height: .6 * n
					}
				}
				return t
			}
		});
	Dz.extend({
		type: "dataZoom.inside",
		defaultOption: {
			disabled: !1,
			zoomLock: !1,
			zoomOnMouseWheel: !0,
			moveOnMouseMove: !0,
			moveOnMouseWheel: !1,
			preventDefaultMouseMove: !0
		}
	});
	var Hz = "\x00_ec_dataZoom_roams",
		Zz = y,
		Xz = Cz.extend({
			type: "dataZoom.inside",
			init: function() {
				this._range
			},
			render: function(t, e, n) {
				Xz.superApply(this, "render", arguments), this._range = t.getPercentRange(), f(this.getTargetCoordInfo(), function(e, i) {
					var a = p(e, function(t) {
						return x_(t.model)
					});
					f(e, function(e) {
						var o = e.model,
							r = {};
						f(["pan", "zoom", "scrollMove"], function(t) {
							r[t] = Zz(Yz[t], this, e, i)
						}, this), v_(n, {
							coordId: x_(o),
							allCoordIds: a,
							containsPoint: function(t, e, n) {
								return o.coordinateSystem.containPoint([e, n])
							},
							dataZoomId: t.id,
							dataZoomModel: t,
							getRange: r
						})
					}, this)
				}, this)
			},
			dispose: function() {
				y_(this.api, this.dataZoomModel.id), Xz.superApply(this, "dispose", arguments), this._range = null
			}
		}),
		Yz = {
			zoom: function(t, e, n, i) {
				var a = this._range,
					o = a.slice(),
					r = t.axisModels[0];
				if(r) {
					var s = Uz[e](null, [i.originX, i.originY], r, n, t),
						l = (s.signal > 0 ? s.pixelStart + s.pixelLength - s.pixel : s.pixel - s.pixelStart) / s.pixelLength * (o[1] - o[0]) + o[0],
						u = Math.max(1 / i.scale, 0);
					o[0] = (o[0] - l) * u + l, o[1] = (o[1] - l) * u + l;
					var h = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
					return WO(0, o, [0, 100], 0, h.minSpan, h.maxSpan), this._range = o, a[0] !== o[0] || a[1] !== o[1] ? o : void 0
				}
			},
			pan: I_(function(t, e, n, i, a, o) {
				var r = Uz[i]([o.oldX, o.oldY], [o.newX, o.newY], e, a, n);
				return r.signal * (t[1] - t[0]) * r.pixel / r.pixelLength
			}),
			scrollMove: I_(function(t, e, n, i, a, o) {
				var r = Uz[i]([0, 0], [o.scrollDelta, o.scrollDelta], e, a, n);
				return r.signal * (t[1] - t[0]) * o.scrollDelta
			})
		},
		Uz = {
			grid: function(t, e, n, i, a) {
				var o = n.axis,
					r = {},
					s = a.model.coordinateSystem.getRect();
				return t = t || [0, 0], "x" === o.dim ? (r.pixel = e[0] - t[0], r.pixelLength = s.width, r.pixelStart = s.x, r.signal = o.inverse ? 1 : -1) : (r.pixel = e[1] - t[1], r.pixelLength = s.height, r.pixelStart = s.y, r.signal = o.inverse ? -1 : 1), r
			},
			polar: function(t, e, n, i, a) {
				var o = n.axis,
					r = {},
					s = a.model.coordinateSystem,
					l = s.getRadiusAxis().getExtent(),
					u = s.getAngleAxis().getExtent();
				return t = t ? s.pointToCoord(t) : [0, 0], e = s.pointToCoord(e), "radiusAxis" === n.mainType ? (r.pixel = e[0] - t[0], r.pixelLength = l[1] - l[0], r.pixelStart = l[0], r.signal = o.inverse ? 1 : -1) : (r.pixel = e[1] - t[1], r.pixelLength = u[1] - u[0], r.pixelStart = u[0], r.signal = o.inverse ? -1 : 1), r
			},
			singleAxis: function(t, e, n, i, a) {
				var o = n.axis,
					r = a.model.coordinateSystem.getRect(),
					s = {};
				return t = t || [0, 0], "horizontal" === o.orient ? (s.pixel = e[0] - t[0], s.pixelLength = r.width, s.pixelStart = r.x, s.signal = o.inverse ? 1 : -1) : (s.pixel = e[1] - t[1], s.pixelLength = r.height, s.pixelStart = r.y, s.signal = o.inverse ? -1 : 1), s
			}
		};
	nu({
		getTargetSeries: function(t) {
			var e = B();
			return t.eachComponent("dataZoom", function(t) {
				t.eachTargetAxis(function(t, n, i) {
					var a = i.getAxisProxy(t.name, n);
					f(a.getTargetSeriesModels(), function(t) {
						e.set(t.uid, t)
					})
				})
			}), e
		},
		modifyOutputEnd: !0,
		overallReset: function(t, e) {
			t.eachComponent("dataZoom", function(t) {
				t.eachTargetAxis(function(t, n, i) {
					i.getAxisProxy(t.name, n).reset(i, e)
				}), t.eachTargetAxis(function(t, n, i) {
					i.getAxisProxy(t.name, n).filterData(i, e)
				})
			}), t.eachComponent("dataZoom", function(t) {
				var e = t.findRepresentativeAxisProxy(),
					n = e.getDataPercentWindow(),
					i = e.getDataValueWindow();
				t.setRawRange({
					start: n[0],
					end: n[1],
					startValue: i[0],
					endValue: i[1]
				}, !0)
			})
		}
	}), au("dataZoom", function(t, e) {
		var n = l_(y(e.eachComponent, e, "dataZoom"), bz, function(t, e) {
				return t.get(e.axisIndex)
			}),
			i = [];
		e.eachComponent({
			mainType: "dataZoom",
			query: t
		}, function(t) {
			i.push.apply(i, n(t).nodes)
		}), f(i, function(e) {
			e.setRawRange({
				start: t.start,
				end: t.end,
				startValue: t.startValue,
				endValue: t.endValue
			})
		})
	});
	var jz = ["rect", "polygon", "keep", "clear"],
		qz = function(t, e) {
			var n = t && t.brush;
			if(_(n) || (n = n ? [n] : []), n.length) {
				var i = [];
				f(n, function(t) {
					var e = t.hasOwnProperty("toolbox") ? t.toolbox : [];
					e instanceof Array && (i = i.concat(e))
				});
				var a = t && t.toolbox;
				_(a) && (a = a[0]), a || (a = {
					feature: {}
				}, t.toolbox = [a]);
				var o = a.feature || (a.feature = {}),
					r = o.brush || (o.brush = {}),
					s = r.type || (r.type = []);
				s.push.apply(s, i), T_(s), e && !s.length && s.push.apply(s, jz)
			}
		},
		Kz = f,
		$z = {
			lineX: P_(0),
			lineY: P_(1),
			rect: {
				point: function(t, e, n) {
					return t && n.boundingRect.contain(t[0], t[1])
				},
				rect: function(t, e, n) {
					return t && n.boundingRect.intersect(t)
				}
			},
			polygon: {
				point: function(t, e, n) {
					return t && n.boundingRect.contain(t[0], t[1]) && Lh(n.range, t[0], t[1])
				},
				rect: function(t, e, n) {
					var i = n.range;
					if(!t || i.length <= 1) return !1;
					var a = t.x,
						o = t.y,
						r = t.width,
						s = t.height,
						l = i[0];
					return Lh(i, a, o) || Lh(i, a + r, o) || Lh(i, a, o + s) || Lh(i, a + r, o + s) || xn.create(t).contain(l[0], l[1]) || N_(a, o, a + r, o, i) || N_(a, o, a, o + s, i) || N_(a + r, o, a + r, o + s, i) || N_(a, o + s, a + r, o + s, i) ? !0 : void 0
				}
			}
		},
		Jz = f,
		Qz = u,
		tR = x,
		eR = ["dataToPoint", "pointToData"],
		nR = ["grid", "xAxis", "yAxis", "geo", "graph", "polar", "radiusAxis", "angleAxis", "bmap"],
		iR = B_.prototype;
	iR.setOutputRanges = function(t, e) {
		this.matchOutputRanges(t, e, function(t, e, n) {
			if((t.coordRanges || (t.coordRanges = [])).push(e), !t.coordRange) {
				t.coordRange = e;
				var i = sR[t.brushType](0, n, e);
				t.__rangeOffset = {
					offset: lR[t.brushType](i.values, t.range, [1, 1]),
					xyMinMax: i.xyMinMax
				}
			}
		})
	}, iR.matchOutputRanges = function(t, e, n) {
		Jz(t, function(t) {
			var i = this.findTargetInfo(t, e);
			i && i !== !0 && f(i.coordSyses, function(i) {
				var a = sR[t.brushType](1, i, t.range);
				n(t, a.values, i, e)
			})
		}, this)
	}, iR.setInputRanges = function(t, e) {
		Jz(t, function(t) {
			var n = this.findTargetInfo(t, e);
			if(t.range = t.range || [], n && n !== !0) {
				t.panelId = n.panelId;
				var i = sR[t.brushType](0, n.coordSys, t.coordRange),
					a = t.__rangeOffset;
				t.range = a ? lR[t.brushType](i.values, a.offset, H_(i.xyMinMax, a.xyMinMax)) : i.values
			}
		}, this)
	}, iR.makePanelOpts = function(t, e) {
		return p(this._targetInfoList, function(n) {
			var i = n.getPanelRect();
			return {
				panelId: n.panelId,
				defaultBrushType: e && e(n),
				clipPath: Tm(i),
				isTargetByCursor: Dm(i, t, n.coordSysModel),
				getLinearBrushOtherExtent: Am(i)
			}
		})
	}, iR.controlSeries = function(t, e, n) {
		var i = this.findTargetInfo(t, n);
		return i === !0 || i && Qz(i.coordSyses, e.coordinateSystem) >= 0
	}, iR.findTargetInfo = function(t, e) {
		for(var n = this._targetInfoList, i = G_(e, t), a = 0; a < n.length; a++) {
			var o = n[a],
				r = t.panelId;
			if(r) {
				if(o.panelId === r) return o
			} else
				for(var a = 0; a < oR.length; a++)
					if(oR[a](i, o)) return o
		}
		return !0
	};
	var aR = {
			grid: function(t, e) {
				var n = t.xAxisModels,
					i = t.yAxisModels,
					a = t.gridModels,
					o = B(),
					r = {},
					s = {};
				(n || i || a) && (Jz(n, function(t) {
					var e = t.axis.grid.model;
					o.set(e.id, e), r[e.id] = !0
				}), Jz(i, function(t) {
					var e = t.axis.grid.model;
					o.set(e.id, e), s[e.id] = !0
				}), Jz(a, function(t) {
					o.set(t.id, t), r[t.id] = !0, s[t.id] = !0
				}), o.each(function(t) {
					var a = t.coordinateSystem,
						o = [];
					Jz(a.getCartesians(), function(t) {
						(Qz(n, t.getAxis("x").model) >= 0 || Qz(i, t.getAxis("y").model) >= 0) && o.push(t)
					}), e.push({
						panelId: "grid--" + t.id,
						gridModel: t,
						coordSysModel: t,
						coordSys: o[0],
						coordSyses: o,
						getPanelRect: rR.grid,
						xAxisDeclared: r[t.id],
						yAxisDeclared: s[t.id]
					})
				}))
			},
			geo: function(t, e) {
				Jz(t.geoModels, function(t) {
					var n = t.coordinateSystem;
					e.push({
						panelId: "geo--" + t.id,
						geoModel: t,
						coordSysModel: t,
						coordSys: n,
						coordSyses: [n],
						getPanelRect: rR.geo
					})
				})
			}
		},
		oR = [function(t, e) {
			var n = t.xAxisModel,
				i = t.yAxisModel,
				a = t.gridModel;
			return !a && n && (a = n.axis.grid.model), !a && i && (a = i.axis.grid.model), a && a === e.gridModel
		}, function(t, e) {
			var n = t.geoModel;
			return n && n === e.geoModel
		}],
		rR = {
			grid: function() {
				return this.coordSys.grid.getRect().clone()
			},
			geo: function() {
				var t = this.coordSys,
					e = t.getBoundingRect().clone();
				return e.applyTransform(Bo(t)), e
			}
		},
		sR = {
			lineX: tR(F_, 0),
			lineY: tR(F_, 1),
			rect: function(t, e, n) {
				var i = e[eR[t]]([n[0][0], n[1][0]]),
					a = e[eR[t]]([n[0][1], n[1][1]]),
					o = [V_([i[0], a[0]]), V_([i[1], a[1]])];
				return {
					values: o,
					xyMinMax: o
				}
			},
			polygon: function(t, e, n) {
				var i = [
						[1 / 0, -1 / 0],
						[1 / 0, -1 / 0]
					],
					a = p(n, function(n) {
						var a = e[eR[t]](n);
						return i[0][0] = Math.min(i[0][0], a[0]), i[1][0] = Math.min(i[1][0], a[1]), i[0][1] = Math.max(i[0][1], a[0]), i[1][1] = Math.max(i[1][1], a[1]), a
					});
				return {
					values: a,
					xyMinMax: i
				}
			}
		},
		lR = {
			lineX: tR(W_, 0),
			lineY: tR(W_, 1),
			rect: function(t, e, n) {
				return [
					[t[0][0] - n[0] * e[0][0], t[0][1] - n[0] * e[0][1]],
					[t[1][0] - n[1] * e[1][0], t[1][1] - n[1] * e[1][1]]
				]
			},
			polygon: function(t, e, n) {
				return p(t, function(t, i) {
					return [t[0] - n[0] * e[i][0], t[1] - n[1] * e[i][1]]
				})
			}
		},
		uR = ["inBrush", "outOfBrush"],
		hR = "__ecBrushSelect",
		cR = "__ecInBrushSelectEvent",
		dR = sD.VISUAL.BRUSH;
	su(dR, function(t, e, n) {
		t.eachComponent({
			mainType: "brush"
		}, function(e) {
			n && "takeGlobalCursor" === n.type && e.setBrushOption("brush" === n.key ? n.brushOption : {
				brushType: !1
			});
			var i = e.brushTargetManager = new B_(e.option, t);
			i.setInputRanges(e.areas, t)
		})
	}), lu(dR, function(t, e, n) {
		var a, o, r = [];
		t.eachComponent({
			mainType: "brush"
		}, function(e, n) {
			function l(t) {
				return "all" === m || v[t]
			}

			function u(t) {
				return !!t.length
			}

			function h(t, e) {
				var n = t.coordinateSystem;
				w |= n.hasAxisBrushed(), l(e) && n.eachActiveState(t.getData(), function(t, e) {
					"active" === t && (y[e] = 1)
				})
			}

			function c(n, i, a) {
				var o = j_(n);
				if(o && !q_(e, i) && (f(b, function(i) {
						o[i.brushType] && e.brushTargetManager.controlSeries(i, n, t) && a.push(i), w |= u(a)
					}), l(i) && u(a))) {
					var r = n.getData();
					r.each(function(t) {
						U_(o, a, r, t) && (y[t] = 1)
					})
				}
			}
			var d = {
				brushId: e.id,
				brushIndex: n,
				brushName: e.name,
				areas: i(e.areas),
				selected: []
			};
			r.push(d);
			var g = e.option,
				m = g.brushLink,
				v = [],
				y = [],
				x = [],
				w = 0;
			n || (a = g.throttleType, o = g.throttleDelay);
			var b = p(e.areas, function(t) {
					return K_(s({
						boundingRect: fR[t.brushType](t)
					}, t))
				}),
				S = D_(e.option, uR, function(t) {
					t.mappingMethod = "fixed"
				});
			_(m) && f(m, function(t) {
				v[t] = 1
			}), t.eachSeries(function(t, e) {
				var n = x[e] = [];
				"parallel" === t.subType ? h(t, e, n) : c(t, e, n)
			}), t.eachSeries(function(t, e) {
				var n = {
					seriesId: t.id,
					seriesIndex: e,
					seriesName: t.name,
					dataIndex: []
				};
				d.selected.push(n);
				var i = j_(t),
					a = x[e],
					o = t.getData(),
					r = l(e) ? function(t) {
						return y[t] ? (n.dataIndex.push(o.getRawIndex(t)), "inBrush") : "outOfBrush"
					} : function(t) {
						return U_(i, a, o, t) ? (n.dataIndex.push(o.getRawIndex(t)), "inBrush") : "outOfBrush"
					};
				(l(e) ? w : u(a)) && L_(uR, S, o, r)
			})
		}), X_(e, a, o, r, n)
	}); {
		var fR = {
				lineX: G,
				lineY: G,
				rect: function(t) {
					return $_(t.range)
				},
				polygon: function(t) {
					for(var e, n = t.range, i = 0, a = n.length; a > i; i++) {
						e = e || [
							[1 / 0, -1 / 0],
							[1 / 0, -1 / 0]
						];
						var o = n[i];
						o[0] < e[0][0] && (e[0][0] = o[0]), o[0] > e[0][1] && (e[0][1] = o[0]), o[1] < e[1][0] && (e[1][0] = o[1]), o[1] > e[1][1] && (e[1][1] = o[1])
					}
					return e && $_(e)
				}
			},
			pR = ["#ddd"];
		cu({
			type: "brush",
			dependencies: ["geo", "grid", "xAxis", "yAxis", "parallel", "series"],
			defaultOption: {
				toolbox: null,
				brushLink: null,
				seriesIndex: "all",
				geoIndex: null,
				xAxisIndex: null,
				yAxisIndex: null,
				brushType: "rect",
				brushMode: "single",
				transformable: !0,
				brushStyle: {
					borderWidth: 1,
					color: "rgba(120,140,180,0.3)",
					borderColor: "rgba(120,140,180,0.8)"
				},
				throttleType: "fixRate",
				throttleDelay: 0,
				removeOnClick: !0,
				z: 1e4
			},
			areas: [],
			brushType: null,
			brushOption: {},
			coordInfoList: [],
			optionUpdated: function(t, e) {
				var n = this.option;
				!e && C_(n, t, ["inBrush", "outOfBrush"]);
				var i = n.inBrush = n.inBrush || {};
				n.outOfBrush = n.outOfBrush || {
					color: pR
				}, i.hasOwnProperty("liftZ") || (i.liftZ = 5)
			},
			setAreas: function(t) {
				t && (this.areas = p(t, function(t) {
					return J_(this.option, t)
				}, this))
			},
			setBrushOption: function(t) {
				this.brushOption = J_(this.option, t), this.brushType = this.brushOption.brushType
			}
		})
	}
	du({
		type: "brush",
		init: function(t, e) {
			this.ecModel = t, this.api = e, this.model, (this._brushController = new Xg(e.getZr())).on("brush", y(this._onBrush, this)).mount()
		},
		render: function(t) {
			return this.model = t, Q_.apply(this, arguments)
		},
		updateTransform: Q_,
		updateView: Q_,
		dispose: function() {
			this._brushController.dispose()
		},
		_onBrush: function(t, e) {
			var n = this.model.id;
			this.model.brushTargetManager.setOutputRanges(t, this.ecModel), (!e.isEnd || e.removeOnClick) && this.api.dispatchAction({
				type: "brush",
				brushId: n,
				areas: i(t),
				$from: n
			})
		}
	}), au({
		type: "brush",
		event: "brush"
	}, function(t, e) {
		e.eachComponent({
			mainType: "brush",
			query: t
		}, function(e) {
			e.setAreas(t.areas)
		})
	}), au({
		type: "brushSelect",
		event: "brushSelected",
		update: "none"
	}, function() {});
	var gR = {},
		mR = xA.toolbox.brush;
	nw.defaultOption = {
		show: !0,
		type: ["rect", "polygon", "lineX", "lineY", "keep", "clear"],
		icon: {
			rect: "M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13",
			polygon: "M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2",
			lineX: "M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4",
			lineY: "M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4",
			keep: "M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z",
			clear: "M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2"
		},
		title: i(mR.title)
	};
	var vR = nw.prototype;
	vR.render = vR.updateView = function(t, e) {
		var n, i, a;
		e.eachComponent({
			mainType: "brush"
		}, function(t) {
			n = t.brushType, i = t.brushOption.brushMode || "single", a |= t.areas.length
		}), this._brushType = n, this._brushMode = i, f(t.get("type", !0), function(e) {
			t.setIconStatus(e, ("keep" === e ? "multiple" === i : "clear" === e ? a : e === n) ? "emphasis" : "normal")
		})
	}, vR.getIcons = function() {
		var t = this.model,
			e = t.get("icon", !0),
			n = {};
		return f(t.get("type", !0), function(t) {
			e[t] && (n[t] = e[t])
		}), n
	}, vR.onclick = function(t, e, n) {
		var i = this._brushType,
			a = this._brushMode;
		"clear" === n ? (e.dispatchAction({
			type: "axisAreaSelect",
			intervals: []
		}), e.dispatchAction({
			type: "brush",
			command: "clear",
			areas: []
		})) : e.dispatchAction({
			type: "takeGlobalCursor",
			key: "brush",
			brushOption: {
				brushType: "keep" === n ? i : i === n ? !1 : n,
				brushMode: "keep" === n ? "multiple" === a ? "single" : "multiple" : a
			}
		})
	}, tw("brush", nw), eu(qz);
	var yR = f,
		xR = function(t) {
			var e = t && t.visualMap;
			_(e) || (e = e ? [e] : []), yR(e, function(t) {
				if(t) {
					iw(t, "splitList") && !iw(t, "pieces") && (t.pieces = t.splitList, delete t.splitList);
					var e = t.pieces;
					e && _(e) && yR(e, function(t) {
						S(t) && (iw(t, "start") && !iw(t, "min") && (t.min = t.start), iw(t, "end") && !iw(t, "max") && (t.max = t.end))
					})
				}
			})
		};
	_T.registerSubTypeDefaulter("visualMap", function(t) {
		return t.categories || (t.pieces ? t.pieces.length > 0 : t.splitNumber > 0) && !t.calculable ? "piecewise" : "continuous"
	});
	var _R = sD.VISUAL.COMPONENT;
	lu(_R, {
		createOnAllSeries: !0,
		reset: function(t, e) {
			var n = [];
			return e.eachComponent("visualMap", function(e) {
				var i = t.pipelineContext;
				!e.isTargetSeries(t) || i && i.large || n.push(k_(e.stateList, e.targetVisuals, y(e.getValueState, e), e.getDataDimension(t.getData())))
			}), n
		}
	}), lu(_R, {
		createOnAllSeries: !0,
		reset: function(t, e) {
			var n = t.getData(),
				i = [];
			e.eachComponent("visualMap", function(e) {
				if(e.isTargetSeries(t)) {
					var a = e.getVisualMeta(y(aw, null, t, e)) || {
							stops: [],
							outerColors: []
						},
						o = e.getDataDimension(n),
						r = n.getDimensionInfo(o);
					null != r && (a.dimension = r.index, i.push(a))
				}
			}), t.getData().setVisual("visualMeta", i)
		}
	});
	var wR = {
			get: function(t, e, n) {
				var a = i((bR[t] || {})[e]);
				return n && _(a) ? a[a.length - 1] : a
			}
		},
		bR = {
			color: {
				active: ["#006edd", "#e0ffff"],
				inactive: ["rgba(0,0,0,0)"]
			},
			colorHue: {
				active: [0, 360],
				inactive: [0, 0]
			},
			colorSaturation: {
				active: [.3, 1],
				inactive: [0, 0]
			},
			colorLightness: {
				active: [.9, .5],
				inactive: [0, 0]
			},
			colorAlpha: {
				active: [.3, 1],
				inactive: [0, 0]
			},
			opacity: {
				active: [.3, 1],
				inactive: [0, 0]
			},
			symbol: {
				active: ["circle", "roundRect", "diamond"],
				inactive: ["none"]
			},
			symbolSize: {
				active: [10, 50],
				inactive: [0, 0]
			}
		},
		SR = jk.mapVisual,
		MR = jk.eachVisual,
		IR = _,
		TR = f,
		AR = er,
		DR = Jo,
		CR = G,
		LR = cu({
			type: "visualMap",
			dependencies: ["series"],
			stateList: ["inRange", "outOfRange"],
			replacableOptionKeys: ["inRange", "outOfRange", "target", "controller", "color"],
			dataBound: [-1 / 0, 1 / 0],
			layoutMode: {
				type: "box",
				ignoreSize: !0
			},
			defaultOption: {
				show: !0,
				zlevel: 0,
				z: 4,
				seriesIndex: "all",
				min: 0,
				max: 200,
				dimension: null,
				inRange: null,
				outOfRange: null,
				left: 0,
				right: null,
				top: null,
				bottom: 0,
				itemWidth: null,
				itemHeight: null,
				inverse: !1,
				orient: "vertical",
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				contentColor: "#5793f3",
				inactiveColor: "#aaa",
				borderWidth: 0,
				padding: 5,
				textGap: 10,
				precision: 0,
				color: null,
				formatter: null,
				text: null,
				textStyle: {
					color: "#333"
				}
			},
			init: function(t, e, n) {
				this._dataExtent, this.targetVisuals = {}, this.controllerVisuals = {}, this.textStyleModel, this.itemSize, this.mergeDefaultAndTheme(t, n)
			},
			optionUpdated: function(t, e) {
				var n = this.option;
				Kw.canvasSupported || (n.realtime = !1), !e && C_(n, t, this.replacableOptionKeys), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption()
			},
			resetVisual: function(t) {
				var e = this.stateList;
				t = y(t, this), this.controllerVisuals = D_(this.option.controller, e, t), this.targetVisuals = D_(this.option.target, e, t)
			},
			getTargetSeriesIndices: function() {
				var t = this.option.seriesIndex,
					e = [];
				return null == t || "all" === t ? this.ecModel.eachSeries(function(t, n) {
					e.push(n)
				}) : e = Ri(t), e
			},
			eachTargetSeries: function(t, e) {
				f(this.getTargetSeriesIndices(), function(n) {
					t.call(e, this.ecModel.getSeriesByIndex(n))
				}, this)
			},
			isTargetSeries: function(t) {
				var e = !1;
				return this.eachTargetSeries(function(n) {
					n === t && (e = !0)
				}), e
			},
			formatValueText: function(t, e, n) {
				function i(t) {
					return t === l[0] ? "min" : t === l[1] ? "max" : (+t).toFixed(Math.min(s, 20))
				}
				var a, o, r = this.option,
					s = r.precision,
					l = this.dataBound,
					u = r.formatter;
				return n = n || ["<", ">"], _(t) && (t = t.slice(), a = !0), o = e ? t : a ? [i(t[0]), i(t[1])] : i(t), b(u) ? u.replace("{value}", a ? o[0] : o).replace("{value2}", a ? o[1] : o) : w(u) ? a ? u(t[0], t[1]) : u(t) : a ? t[0] === l[0] ? n[0] + " " + o[1] : t[1] === l[1] ? n[1] + " " + o[0] : o[0] + " - " + o[1] : o
			},
			resetExtent: function() {
				var t = this.option,
					e = AR([t.min, t.max]);
				this._dataExtent = e
			},
			getDataDimension: function(t) {
				var e = this.option.dimension,
					n = t.dimensions;
				if(null != e || n.length) {
					if(null != e) return t.getDimension(e);
					for(var i = t.dimensions, a = i.length - 1; a >= 0; a--) {
						var o = i[a],
							r = t.getDimensionInfo(o);
						if(!r.isCalculationCoord) return o
					}
				}
			},
			getExtent: function() {
				return this._dataExtent.slice()
			},
			completeVisualOption: function() {
				function t(t) {
					IR(r.color) && !t.inRange && (t.inRange = {
						color: r.color.slice().reverse()
					}), t.inRange = t.inRange || {
						color: o.get("gradientColor")
					}, TR(this.stateList, function(e) {
						var n = t[e];
						if(b(n)) {
							var i = wR.get(n, "active", h);
							i ? (t[e] = {}, t[e][n] = i) : delete t[e]
						}
					}, this)
				}

				function e(t, e, n) {
					var i = t[e],
						a = t[n];
					i && !a && (a = t[n] = {}, TR(i, function(t, e) {
						if(jk.isValidType(e)) {
							var n = wR.get(e, "inactive", h);
							null != n && (a[e] = n, "color" !== e || a.hasOwnProperty("opacity") || a.hasOwnProperty("colorAlpha") || (a.opacity = [0, 0]))
						}
					}))
				}

				function n(t) {
					var e = (t.inRange || {}).symbol || (t.outOfRange || {}).symbol,
						n = (t.inRange || {}).symbolSize || (t.outOfRange || {}).symbolSize,
						a = this.get("inactiveColor");
					TR(this.stateList, function(o) {
						var r = this.itemSize,
							s = t[o];
						s || (s = t[o] = {
							color: h ? a : [a]
						}), null == s.symbol && (s.symbol = e && i(e) || (h ? "roundRect" : ["roundRect"])), null == s.symbolSize && (s.symbolSize = n && i(n) || (h ? r[0] : [r[0], r[0]])), s.symbol = SR(s.symbol, function(t) {
							return "none" === t || "square" === t ? "roundRect" : t
						});
						var l = s.symbolSize;
						if(null != l) {
							var u = -1 / 0;
							MR(l, function(t) {
								t > u && (u = t)
							}), s.symbolSize = SR(l, function(t) {
								return DR(t, [0, u], [0, r[0]], !0)
							})
						}
					}, this)
				}
				var o = this.ecModel,
					r = this.option,
					s = {
						inRange: r.inRange,
						outOfRange: r.outOfRange
					},
					l = r.target || (r.target = {}),
					u = r.controller || (r.controller = {});
				a(l, s), a(u, s);
				var h = this.isCategory();
				t.call(this, l), t.call(this, u), e.call(this, l, "inRange", "outOfRange"), n.call(this, u)
			},
			resetItemSize: function() {
				this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))]
			},
			isCategory: function() {
				return !!this.option.categories
			},
			setSelected: CR,
			getValueState: CR,
			getVisualMeta: CR
		}),
		kR = [20, 140],
		PR = LR.extend({
			type: "visualMap.continuous",
			defaultOption: {
				align: "auto",
				calculable: !1,
				range: null,
				realtime: !0,
				itemHeight: null,
				itemWidth: null,
				hoverLink: !0,
				hoverLinkDataSize: null,
				hoverLinkOnHandle: null
			},
			optionUpdated: function() {
				PR.superApply(this, "optionUpdated", arguments), this.resetExtent(), this.resetVisual(function(t) {
					t.mappingMethod = "linear", t.dataExtent = this.getExtent()
				}), this._resetRange()
			},
			resetItemSize: function() {
				PR.superApply(this, "resetItemSize", arguments);
				var t = this.itemSize;
				"horizontal" === this._orient && t.reverse(), (null == t[0] || isNaN(t[0])) && (t[0] = kR[0]), (null == t[1] || isNaN(t[1])) && (t[1] = kR[1])
			},
			_resetRange: function() {
				var t = this.getExtent(),
					e = this.option.range;
				!e || e.auto ? (t.auto = 1, this.option.range = t) : _(e) && (e[0] > e[1] && e.reverse(), e[0] = Math.max(e[0], t[0]), e[1] = Math.min(e[1], t[1]))
			},
			completeVisualOption: function() {
				LR.prototype.completeVisualOption.apply(this, arguments), f(this.stateList, function(t) {
					var e = this.option.controller[t].symbolSize;
					e && e[0] !== e[1] && (e[0] = 0)
				}, this)
			},
			setSelected: function(t) {
				this.option.range = t.slice(), this._resetRange()
			},
			getSelected: function() {
				var t = this.getExtent(),
					e = er((this.get("range") || []).slice());
				return e[0] > t[1] && (e[0] = t[1]), e[1] > t[1] && (e[1] = t[1]), e[0] < t[0] && (e[0] = t[0]), e[1] < t[0] && (e[1] = t[0]), e
			},
			getValueState: function(t) {
				var e = this.option.range,
					n = this.getExtent();
				return(e[0] <= n[0] || e[0] <= t) && (e[1] >= n[1] || t <= e[1]) ? "inRange" : "outOfRange"
			},
			findTargetDataIndices: function(t) {
				var e = [];
				return this.eachTargetSeries(function(n) {
					var i = [],
						a = n.getData();
					a.each(this.getDataDimension(a), function(e, n) {
						t[0] <= e && e <= t[1] && i.push(n)
					}, this), e.push({
						seriesId: n.id,
						dataIndex: i
					})
				}, this), e
			},
			getVisualMeta: function(t) {
				function e(e, n) {
					a.push({
						value: e,
						color: t(e, n)
					})
				}
				for(var n = ow(this, "outOfRange", this.getExtent()), i = ow(this, "inRange", this.option.range.slice()), a = [], o = 0, r = 0, s = i.length, l = n.length; l > r && (!i.length || n[r] <= i[0]); r++) n[r] < i[o] && e(n[r], "outOfRange");
				for(var u = 1; s > o; o++, u = 0) u && a.length && e(i[o], "outOfRange"), e(i[o], "inRange");
				for(var u = 1; l > r; r++)(!i.length || i[i.length - 1] < n[r]) && (u && (a.length && e(a[a.length - 1].value, "outOfRange"), u = 0), e(n[r], "outOfRange"));
				var h = a.length;
				return {
					stops: a,
					outerColors: [h ? a[0].color : "transparent", h ? a[h - 1].color : "transparent"]
				}
			}
		}),
		OR = du({
			type: "visualMap",
			autoPositionValues: {
				left: 1,
				right: 1,
				top: 1,
				bottom: 1
			},
			init: function(t, e) {
				this.ecModel = t, this.api = e, this.visualMapModel
			},
			render: function(t) {
				return this.visualMapModel = t, t.get("show") === !1 ? void this.group.removeAll() : void this.doRender.apply(this, arguments)
			},
			renderBackground: function(t) {
				var e = this.visualMapModel,
					n = sT(e.get("padding") || 0),
					i = t.getBoundingRect();
				t.add(new LI({
					z2: -1,
					silent: !0,
					shape: {
						x: i.x - n[3],
						y: i.y - n[0],
						width: i.width + n[3] + n[1],
						height: i.height + n[0] + n[2]
					},
					style: {
						fill: e.get("backgroundColor"),
						stroke: e.get("borderColor"),
						lineWidth: e.get("borderWidth")
					}
				}))
			},
			getControllerVisual: function(t, e, n) {
				function i(t) {
					return s[t]
				}

				function a(t, e) {
					s[t] = e
				}
				n = n || {};
				var o = n.forceState,
					r = this.visualMapModel,
					s = {};
				if("symbol" === e && (s.symbol = r.get("itemSymbol")), "color" === e) {
					var l = r.get("contentColor");
					s.color = l
				}
				var u = r.controllerVisuals[o || r.getValueState(t)],
					h = jk.prepareVisualTypes(u);
				return f(h, function(o) {
					var r = u[o];
					n.convertOpacityToAlpha && "opacity" === o && (o = "colorAlpha", r = u.__alphaForOpacity), jk.dependsOn(o, e) && r && r.applyVisual(t, i, a)
				}), s[e]
			},
			positionGroup: function(t) {
				var e = this.visualMapModel,
					n = this.api;
				Cr(t, e.getBoxLayoutParams(), {
					width: n.getWidth(),
					height: n.getHeight()
				})
			},
			doRender: G
		}),
		NR = Jo,
		ER = f,
		zR = Math.min,
		RR = Math.max,
		BR = 12,
		VR = 6,
		GR = OR.extend({
			type: "visualMap.continuous",
			init: function() {
				GR.superApply(this, "init", arguments), this._shapes = {}, this._dataInterval = [], this._handleEnds = [], this._orient, this._useHandle, this._hoverLinkDataIndices = [], this._dragging, this._hovering
			},
			doRender: function(t, e, n, i) {
				i && "selectDataRange" === i.type && i.from === this.uid || this._buildView()
			},
			_buildView: function() {
				this.group.removeAll();
				var t = this.visualMapModel,
					e = this.group;
				this._orient = t.get("orient"), this._useHandle = t.get("calculable"), this._resetInterval(), this._renderBar(e);
				var n = t.get("text");
				this._renderEndsText(e, n, 0), this._renderEndsText(e, n, 1), this._updateView(!0), this.renderBackground(e), this._updateView(), this._enableHoverLinkToSeries(), this._enableHoverLinkFromSeries(), this.positionGroup(e)
			},
			_renderEndsText: function(t, e, n) {
				if(e) {
					var i = e[1 - n];
					i = null != i ? i + "" : "";
					var a = this.visualMapModel,
						o = a.get("textGap"),
						r = a.itemSize,
						s = this._shapes.barGroup,
						l = this._applyTransform([r[0] / 2, 0 === n ? -o : r[1] + o], s),
						u = this._applyTransform(0 === n ? "bottom" : "top", s),
						h = this._orient,
						c = this.visualMapModel.textStyleModel;
					this.group.add(new yI({
						style: {
							x: l[0],
							y: l[1],
							textVerticalAlign: "horizontal" === h ? "middle" : u,
							textAlign: "horizontal" === h ? u : "center",
							text: i,
							textFont: c.getFont(),
							textFill: c.getTextColor()
						}
					}))
				}
			},
			_renderBar: function(t) {
				var e = this.visualMapModel,
					n = this._shapes,
					i = e.itemSize,
					a = this._orient,
					o = this._useHandle,
					r = rw(e, this.api, i),
					s = n.barGroup = this._createBarGroup(r);
				s.add(n.outOfRange = lw()), s.add(n.inRange = lw(null, o ? fw(this._orient) : null, y(this._dragHandle, this, "all", !1), y(this._dragHandle, this, "all", !0)));
				var l = e.textStyleModel.getTextRect("国"),
					u = RR(l.width, l.height);
				o && (n.handleThumbs = [], n.handleLabels = [], n.handleLabelPoints = [], this._createHandle(s, 0, i, u, a, r), this._createHandle(s, 1, i, u, a, r)), this._createIndicator(s, i, u, a), t.add(s)
			},
			_createHandle: function(t, e, n, i, a) {
				var o = y(this._dragHandle, this, e, !1),
					r = y(this._dragHandle, this, e, !0),
					s = lw(uw(e, i), fw(this._orient), o, r);
				s.position[0] = n[0], t.add(s);
				var l = this.visualMapModel.textStyleModel,
					u = new yI({
						draggable: !0,
						drift: o,
						onmousemove: function(t) {
							wb(t.event)
						},
						ondragend: r,
						style: {
							x: 0,
							y: 0,
							text: "",
							textFont: l.getFont(),
							textFill: l.getTextColor()
						}
					});
				this.group.add(u);
				var h = ["horizontal" === a ? i / 2 : 1.5 * i, "horizontal" === a ? 0 === e ? -(1.5 * i) : 1.5 * i : 0 === e ? -i / 2 : i / 2],
					c = this._shapes;
				c.handleThumbs[e] = s, c.handleLabelPoints[e] = h, c.handleLabels[e] = u
			},
			_createIndicator: function(t, e, n, i) {
				var a = lw([
					[0, 0]
				], "move");
				a.position[0] = e[0], a.attr({
					invisible: !0,
					silent: !0
				}), t.add(a);
				var o = this.visualMapModel.textStyleModel,
					r = new yI({
						silent: !0,
						invisible: !0,
						style: {
							x: 0,
							y: 0,
							text: "",
							textFont: o.getFont(),
							textFill: o.getTextColor()
						}
					});
				this.group.add(r);
				var s = ["horizontal" === i ? n / 2 : VR + 3, 0],
					l = this._shapes;
				l.indicator = a, l.indicatorLabel = r, l.indicatorLabelPoint = s
			},
			_dragHandle: function(t, e, n, i) {
				if(this._useHandle) {
					if(this._dragging = !e, !e) {
						var a = this._applyTransform([n, i], this._shapes.barGroup, !0);
						this._updateInterval(t, a[1]), this._updateView()
					}
					e === !this.visualMapModel.get("realtime") && this.api.dispatchAction({
						type: "selectDataRange",
						from: this.uid,
						visualMapId: this.visualMapModel.id,
						selected: this._dataInterval.slice()
					}), e ? !this._hovering && this._clearHoverLinkToSeries() : dw(this.visualMapModel) && this._doHoverLinkToSeries(this._handleEnds[t], !1)
				}
			},
			_resetInterval: function() {
				var t = this.visualMapModel,
					e = this._dataInterval = t.getSelected(),
					n = t.getExtent(),
					i = [0, t.itemSize[1]];
				this._handleEnds = [NR(e[0], n, i, !0), NR(e[1], n, i, !0)]
			},
			_updateInterval: function(t, e) {
				e = e || 0;
				var n = this.visualMapModel,
					i = this._handleEnds,
					a = [0, n.itemSize[1]];
				WO(e, i, a, t, 0);
				var o = n.getExtent();
				this._dataInterval = [NR(i[0], a, o, !0), NR(i[1], a, o, !0)]
			},
			_updateView: function(t) {
				var e = this.visualMapModel,
					n = e.getExtent(),
					i = this._shapes,
					a = [0, e.itemSize[1]],
					o = t ? a : this._handleEnds,
					r = this._createBarVisual(this._dataInterval, n, o, "inRange"),
					s = this._createBarVisual(n, n, a, "outOfRange");
				i.inRange.setStyle({
					fill: r.barColor,
					opacity: r.opacity
				}).setShape("points", r.barPoints), i.outOfRange.setStyle({
					fill: s.barColor,
					opacity: s.opacity
				}).setShape("points", s.barPoints), this._updateHandle(o, r)
			},
			_createBarVisual: function(t, e, n, i) {
				var a = {
						forceState: i,
						convertOpacityToAlpha: !0
					},
					o = this._makeColorGradient(t, a),
					r = [this.getControllerVisual(t[0], "symbolSize", a), this.getControllerVisual(t[1], "symbolSize", a)],
					s = this._createBarPoints(n, r);
				return {
					barColor: new BI(0, 0, 0, 1, o),
					barPoints: s,
					handlesColor: [o[0].color, o[o.length - 1].color]
				}
			},
			_makeColorGradient: function(t, e) {
				var n = 100,
					i = [],
					a = (t[1] - t[0]) / n;
				i.push({
					color: this.getControllerVisual(t[0], "color", e),
					offset: 0
				});
				for(var o = 1; n > o; o++) {
					var r = t[0] + a * o;
					if(r > t[1]) break;
					i.push({
						color: this.getControllerVisual(r, "color", e),
						offset: o / n
					})
				}
				return i.push({
					color: this.getControllerVisual(t[1], "color", e),
					offset: 1
				}), i
			},
			_createBarPoints: function(t, e) {
				var n = this.visualMapModel.itemSize;
				return [
					[n[0] - e[0], t[0]],
					[n[0], t[0]],
					[n[0], t[1]],
					[n[0] - e[1], t[1]]
				]
			},
			_createBarGroup: function(t) {
				var e = this._orient,
					n = this.visualMapModel.get("inverse");
				return new rS("horizontal" !== e || n ? "horizontal" === e && n ? {
					scale: "bottom" === t ? [-1, 1] : [1, 1],
					rotation: -Math.PI / 2
				} : "vertical" !== e || n ? {
					scale: "left" === t ? [1, 1] : [-1, 1]
				} : {
					scale: "left" === t ? [1, -1] : [-1, -1]
				} : {
					scale: "bottom" === t ? [1, 1] : [-1, 1],
					rotation: Math.PI / 2
				})
			},
			_updateHandle: function(t, e) {
				if(this._useHandle) {
					var n = this._shapes,
						i = this.visualMapModel,
						a = n.handleThumbs,
						o = n.handleLabels;
					ER([0, 1], function(r) {
						var s = a[r];
						s.setStyle("fill", e.handlesColor[r]), s.position[1] = t[r];
						var l = Vo(n.handleLabelPoints[r], Bo(s, this.group));
						o[r].setStyle({
							x: l[0],
							y: l[1],
							text: i.formatValueText(this._dataInterval[r]),
							textVerticalAlign: "middle",
							textAlign: this._applyTransform("horizontal" === this._orient ? 0 === r ? "bottom" : "top" : "left", n.barGroup)
						})
					}, this)
				}
			},
			_showIndicator: function(t, e, n, i) {
				var a = this.visualMapModel,
					o = a.getExtent(),
					r = a.itemSize,
					s = [0, r[1]],
					l = NR(t, o, s, !0),
					u = this._shapes,
					h = u.indicator;
				if(h) {
					h.position[1] = l, h.attr("invisible", !1), h.setShape("points", hw(!!n, i, l, r[1]));
					var c = {
							convertOpacityToAlpha: !0
						},
						d = this.getControllerVisual(t, "color", c);
					h.setStyle("fill", d);
					var f = Vo(u.indicatorLabelPoint, Bo(h, this.group)),
						p = u.indicatorLabel;
					p.attr("invisible", !1);
					var g = this._applyTransform("left", u.barGroup),
						m = this._orient;
					p.setStyle({
						text: (n ? n : "") + a.formatValueText(e),
						textVerticalAlign: "horizontal" === m ? g : "middle",
						textAlign: "horizontal" === m ? "center" : g,
						x: f[0],
						y: f[1]
					})
				}
			},
			_enableHoverLinkToSeries: function() {
				var t = this;
				this._shapes.barGroup.on("mousemove", function(e) {
					if(t._hovering = !0, !t._dragging) {
						var n = t.visualMapModel.itemSize,
							i = t._applyTransform([e.offsetX, e.offsetY], t._shapes.barGroup, !0, !0);
						i[1] = zR(RR(0, i[1]), n[1]), t._doHoverLinkToSeries(i[1], 0 <= i[0] && i[0] <= n[0])
					}
				}).on("mouseout", function() {
					t._hovering = !1, !t._dragging && t._clearHoverLinkToSeries()
				})
			},
			_enableHoverLinkFromSeries: function() {
				var t = this.api.getZr();
				this.visualMapModel.option.hoverLink ? (t.on("mouseover", this._hoverLinkFromSeriesMouseOver, this), t.on("mouseout", this._hideIndicator, this)) : this._clearHoverLinkFromSeries()
			},
			_doHoverLinkToSeries: function(t, e) {
				var n = this.visualMapModel,
					i = n.itemSize;
				if(n.option.hoverLink) {
					var a = [0, i[1]],
						o = n.getExtent();
					t = zR(RR(a[0], t), a[1]);
					var r = cw(n, o, a),
						s = [t - r, t + r],
						l = NR(t, a, o, !0),
						u = [NR(s[0], a, o, !0), NR(s[1], a, o, !0)];
					s[0] < a[0] && (u[0] = -1 / 0), s[1] > a[1] && (u[1] = 1 / 0), e && (u[0] === -1 / 0 ? this._showIndicator(l, u[1], "< ", r) : 1 / 0 === u[1] ? this._showIndicator(l, u[0], "> ", r) : this._showIndicator(l, l, "≈ ", r));
					var h = this._hoverLinkDataIndices,
						c = [];
					(e || dw(n)) && (c = this._hoverLinkDataIndices = n.findTargetDataIndices(u));
					var d = Xi(h, c);
					this._dispatchHighDown("downplay", sw(d[0])), this._dispatchHighDown("highlight", sw(d[1]))
				}
			},
			_hoverLinkFromSeriesMouseOver: function(t) {
				var e = t.target,
					n = this.visualMapModel;
				if(e && null != e.dataIndex) {
					var i = this.ecModel.getSeriesByIndex(e.seriesIndex);
					if(n.isTargetSeries(i)) {
						var a = i.getData(e.dataType),
							o = a.get(n.getDataDimension(a), e.dataIndex, !0);
						isNaN(o) || this._showIndicator(o, o)
					}
				}
			},
			_hideIndicator: function() {
				var t = this._shapes;
				t.indicator && t.indicator.attr("invisible", !0), t.indicatorLabel && t.indicatorLabel.attr("invisible", !0)
			},
			_clearHoverLinkToSeries: function() {
				this._hideIndicator();
				var t = this._hoverLinkDataIndices;
				this._dispatchHighDown("downplay", sw(t)), t.length = 0
			},
			_clearHoverLinkFromSeries: function() {
				this._hideIndicator();
				var t = this.api.getZr();
				t.off("mouseover", this._hoverLinkFromSeriesMouseOver), t.off("mouseout", this._hideIndicator)
			},
			_applyTransform: function(t, e, n, i) {
				var a = Bo(e, i ? null : this.group);
				return qI[_(t) ? "applyTransform" : "transformDirection"](t, a, n)
			},
			_dispatchHighDown: function(t, e) {
				e && e.length && this.api.dispatchAction({
					type: t,
					batch: e
				})
			},
			dispose: function() {
				this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries()
			},
			remove: function() {
				this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries()
			}
		}),
		FR = {
			type: "selectDataRange",
			event: "dataRangeSelected",
			update: "update"
		};
	au(FR, function(t, e) {
		e.eachComponent({
			mainType: "visualMap",
			query: t
		}, function(e) {
			e.setSelected(t.selected)
		})
	}), eu(xR); {
		var WR = LR.extend({
				type: "visualMap.piecewise",
				defaultOption: {
					selected: null,
					minOpen: !1,
					maxOpen: !1,
					align: "auto",
					itemWidth: 20,
					itemHeight: 14,
					itemSymbol: "roundRect",
					pieceList: null,
					categories: null,
					splitNumber: 5,
					selectedMode: "multiple",
					itemGap: 10,
					hoverLink: !0,
					showLabel: null
				},
				optionUpdated: function(t, e) {
					WR.superApply(this, "optionUpdated", arguments), this._pieceList = [], this.resetExtent();
					var n = this._mode = this._determineMode();
					HR[this._mode].call(this), this._resetSelected(t, e);
					var a = this.option.categories;
					this.resetVisual(function(t, e) {
						"categories" === n ? (t.mappingMethod = "category", t.categories = i(a)) : (t.dataExtent = this.getExtent(), t.mappingMethod = "piecewise", t.pieceList = p(this._pieceList, function(t) {
							var t = i(t);
							return "inRange" !== e && (t.visual = null), t
						}))
					})
				},
				completeVisualOption: function() {
					function t(t, e, n) {
						return t && t[e] && (S(t[e]) ? t[e].hasOwnProperty(n) : t[e] === n)
					}
					var e = this.option,
						n = {},
						i = jk.listVisualTypes(),
						a = this.isCategory();
					f(e.pieces, function(t) {
						f(i, function(e) {
							t.hasOwnProperty(e) && (n[e] = 1)
						})
					}), f(n, function(n, i) {
						var o = 0;
						f(this.stateList, function(n) {
							o |= t(e, n, i) || t(e.target, n, i)
						}, this), !o && f(this.stateList, function(t) {
							(e[t] || (e[t] = {}))[i] = wR.get(i, "inRange" === t ? "active" : "inactive", a)
						})
					}, this), LR.prototype.completeVisualOption.apply(this, arguments)
				},
				_resetSelected: function(t, e) {
					var n = this.option,
						i = this._pieceList,
						a = (e ? n : t).selected || {};
					if(n.selected = a, f(i, function(t) {
							var e = this.getSelectedMapKey(t);
							a.hasOwnProperty(e) || (a[e] = !0)
						}, this), "single" === n.selectedMode) {
						var o = !1;
						f(i, function(t) {
							var e = this.getSelectedMapKey(t);
							a[e] && (o ? a[e] = !1 : o = !0)
						}, this)
					}
				},
				getSelectedMapKey: function(t) {
					return "categories" === this._mode ? t.value + "" : t.index + ""
				},
				getPieceList: function() {
					return this._pieceList
				},
				_determineMode: function() {
					var t = this.option;
					return t.pieces && t.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber"
				},
				setSelected: function(t) {
					this.option.selected = i(t)
				},
				getValueState: function(t) {
					var e = jk.findPieceIndex(t, this._pieceList);
					return null != e && this.option.selected[this.getSelectedMapKey(this._pieceList[e])] ? "inRange" : "outOfRange"
				},
				findTargetDataIndices: function(t) {
					var e = [];
					return this.eachTargetSeries(function(n) {
						var i = [],
							a = n.getData();
						a.each(this.getDataDimension(a), function(e, n) {
							var a = jk.findPieceIndex(e, this._pieceList);
							a === t && i.push(n)
						}, this), e.push({
							seriesId: n.id,
							dataIndex: i
						})
					}, this), e
				},
				getRepresentValue: function(t) {
					var e;
					if(this.isCategory()) e = t.value;
					else if(null != t.value) e = t.value;
					else {
						var n = t.interval || [];
						e = n[0] === -1 / 0 && 1 / 0 === n[1] ? 0 : (n[0] + n[1]) / 2
					}
					return e
				},
				getVisualMeta: function(t) {
					function e(e, o) {
						var r = a.getRepresentValue({
							interval: e
						});
						o || (o = a.getValueState(r));
						var s = t(r, o);
						e[0] === -1 / 0 ? i[0] = s : 1 / 0 === e[1] ? i[1] = s : n.push({
							value: e[0],
							color: s
						}, {
							value: e[1],
							color: s
						})
					}
					if(!this.isCategory()) {
						var n = [],
							i = [],
							a = this,
							o = this._pieceList.slice();
						if(o.length) {
							var r = o[0].interval[0];
							r !== -1 / 0 && o.unshift({
								interval: [-1 / 0, r]
							}), r = o[o.length - 1].interval[1], 1 / 0 !== r && o.push({
								interval: [r, 1 / 0]
							})
						} else o.push({
							interval: [-1 / 0, 1 / 0]
						});
						var s = -1 / 0;
						return f(o, function(t) {
							var n = t.interval;
							n && (n[0] > s && e([s, n[0]], "outOfRange"), e(n.slice()), s = n[1])
						}, this), {
							stops: n,
							outerColors: i
						}
					}
				}
			}),
			HR = {
				splitNumber: function() {
					var t = this.option,
						e = this._pieceList,
						n = Math.min(t.precision, 20),
						i = this.getExtent(),
						a = t.splitNumber;
					a = Math.max(parseInt(a, 10), 1), t.splitNumber = a;
					for(var o = (i[1] - i[0]) / a; + o.toFixed(n) !== o && 5 > n;) n++;
					t.precision = n, o = +o.toFixed(n);
					var r = 0;
					t.minOpen && e.push({
						index: r++,
						interval: [-1 / 0, i[0]],
						close: [0, 0]
					});
					for(var s = i[0], l = r + a; l > r; s += o) {
						var u = r === a - 1 ? i[1] : s + o;
						e.push({
							index: r++,
							interval: [s, u],
							close: [1, 1]
						})
					}
					t.maxOpen && e.push({
						index: r++,
						interval: [i[1], 1 / 0],
						close: [0, 0]
					}), fr(e), f(e, function(t) {
						t.text = this.formatValueText(t.interval)
					}, this)
				},
				categories: function() {
					var t = this.option;
					f(t.categories, function(t) {
						this._pieceList.push({
							text: this.formatValueText(t, !0),
							value: t
						})
					}, this), pw(t, this._pieceList)
				},
				pieces: function() {
					var t = this.option,
						e = this._pieceList;
					f(t.pieces, function(t, n) {
						S(t) || (t = {
							value: t
						});
						var i = {
							text: "",
							index: n
						};
						if(null != t.label && (i.text = t.label), t.hasOwnProperty("value")) {
							var a = i.value = t.value;
							i.interval = [a, a], i.close = [1, 1]
						} else {
							for(var o = i.interval = [], r = i.close = [0, 0], s = [1, 0, 1], l = [-1 / 0, 1 / 0], u = [], h = 0; 2 > h; h++) {
								for(var c = [
										["gte", "gt", "min"],
										["lte", "lt", "max"]
									][h], d = 0; 3 > d && null == o[h]; d++) o[h] = t[c[d]], r[h] = s[d], u[h] = 2 === d;
								null == o[h] && (o[h] = l[h])
							}
							u[0] && 1 / 0 === o[1] && (r[0] = 0), u[1] && o[0] === -1 / 0 && (r[1] = 0), o[0] === o[1] && r[0] && r[1] && (i.value = o[0])
						}
						i.visual = jk.retrieveVisuals(t), e.push(i)
					}, this), pw(t, e), fr(e), f(e, function(t) {
						var e = t.close,
							n = [
								["<", "≤"][e[1]],
								[">", "≥"][e[0]]
							];
						t.text = t.text || this.formatValueText(null != t.value ? t.value : t.interval, !1, n)
					}, this)
				}
			};
		OR.extend({
			type: "visualMap.piecewise",
			doRender: function() {
				function t(t) {
					var a = t.piece,
						u = new rS;
					u.onclick = y(this._onItemClick, this, a), this._enableHoverLink(u, t.indexInModelPieceList);
					var h = n.getRepresentValue(a);
					if(this._createItemSymbol(u, h, [0, 0, l[0], l[1]]), c) {
						var d = this.visualMapModel.getValueState(h);
						u.add(new yI({
							style: {
								x: "right" === s ? -i : l[0] + i,
								y: l[1] / 2,
								text: a.text,
								textVerticalAlign: "middle",
								textAlign: s,
								textFont: o,
								textFill: r,
								opacity: "outOfRange" === d ? .5 : 1
							}
						}))
					}
					e.add(u)
				}
				var e = this.group;
				e.removeAll();
				var n = this.visualMapModel,
					i = n.get("textGap"),
					a = n.textStyleModel,
					o = a.getFont(),
					r = a.getTextColor(),
					s = this._getItemAlign(),
					l = n.itemSize,
					u = this._getViewData(),
					h = u.endsText,
					c = D(n.get("showLabel", !0), !h);
				h && this._renderEndsText(e, h[0], l, c, s), f(u.viewPieceList, t, this), h && this._renderEndsText(e, h[1], l, c, s), vT(n.get("orient"), e, n.get("itemGap")), this.renderBackground(e), this.positionGroup(e)
			},
			_enableHoverLink: function(t, e) {
				function n(t) {
					var n = this.visualMapModel;
					n.option.hoverLink && this.api.dispatchAction({
						type: t,
						batch: sw(n.findTargetDataIndices(e))
					})
				}
				t.on("mouseover", y(n, this, "highlight")).on("mouseout", y(n, this, "downplay"))
			},
			_getItemAlign: function() {
				var t = this.visualMapModel,
					e = t.option;
				if("vertical" === e.orient) return rw(t, this.api, t.itemSize);
				var n = e.align;
				return n && "auto" !== n || (n = "left"), n
			},
			_renderEndsText: function(t, e, n, i, a) {
				if(e) {
					var o = new rS,
						r = this.visualMapModel.textStyleModel;
					o.add(new yI({
						style: {
							x: i ? "right" === a ? n[0] : 0 : n[0] / 2,
							y: n[1] / 2,
							textVerticalAlign: "middle",
							textAlign: i ? a : "center",
							text: e,
							textFont: r.getFont(),
							textFill: r.getTextColor()
						}
					})), t.add(o)
				}
			},
			_getViewData: function() {
				var t = this.visualMapModel,
					e = p(t.getPieceList(), function(t, e) {
						return {
							piece: t,
							indexInModelPieceList: e
						}
					}),
					n = t.get("text"),
					i = t.get("orient"),
					a = t.get("inverse");
				return("horizontal" === i ? a : !a) ? e.reverse() : n && (n = n.slice().reverse()), {
					viewPieceList: e,
					endsText: n
				}
			},
			_createItemSymbol: function(t, e, n) {
				t.add(Ih(this.getControllerVisual(e, "symbol"), n[0], n[1], n[2], n[3], this.getControllerVisual(e, "color")))
			},
			_onItemClick: function(t) {
				var e = this.visualMapModel,
					n = e.option,
					a = i(n.selected),
					o = e.getSelectedMapKey(t);
				"single" === n.selectedMode ? (a[o] = !0, f(a, function(t, e) {
					a[e] = e === o
				})) : a[o] = !a[o], this.api.dispatchAction({
					type: "selectDataRange",
					from: this.uid,
					visualMapId: this.visualMapModel.id,
					selected: a
				})
			}
		})
	}
	eu(xR);
	var ZR = cu({
		type: "toolbox",
		layoutMode: {
			type: "box",
			ignoreSize: !0
		},
		optionUpdated: function() {
			ZR.superApply(this, "optionUpdated", arguments), f(this.option.feature, function(t, e) {
				var n = ew(e);
				n && a(t, n.defaultOption)
			})
		},
		defaultOption: {
			show: !0,
			z: 6,
			zlevel: 0,
			orient: "horizontal",
			left: "right",
			top: "top",
			backgroundColor: "transparent",
			borderColor: "#ccc",
			borderRadius: 0,
			borderWidth: 0,
			padding: 5,
			itemSize: 15,
			itemGap: 8,
			showTitle: !0,
			iconStyle: {
				borderColor: "#666",
				color: "none"
			},
			emphasis: {
				iconStyle: {
					borderColor: "#3E98C5"
				}
			}
		}
	});
	du({
		type: "toolbox",
		render: function(t, e, n, i) {
			function a(a, r) {
				var s, c = h[a],
					d = h[r],
					f = l[c],
					p = new Xo(f, t, t.ecModel);
				if(c && !d) {
					if(gw(c)) s = {
						model: p,
						onclick: p.option.onclick,
						featureName: c
					};
					else {
						var g = ew(c);
						if(!g) return;
						s = new g(p, e, n)
					}
					u[c] = s
				} else {
					if(s = u[d], !s) return;
					s.model = p, s.ecModel = e, s.api = n
				}
				return !c && d ? void(s.dispose && s.dispose(e, n)) : !p.get("show") || s.unusable ? void(s.remove && s.remove(e, n)) : (o(p, s, c), p.setIconStatus = function(t, e) {
					var n = this.option,
						i = this.iconPaths;
					n.iconStatus = n.iconStatus || {}, n.iconStatus[t] = e, i[t] && i[t].trigger(e)
				}, void(s.render && s.render(p, e, n, i)))
			}

			function o(i, a, o) {
				var l = i.getModel("iconStyle"),
					u = i.getModel("emphasis.iconStyle"),
					h = a.getIcons ? a.getIcons() : i.get("icon"),
					c = i.get("title") || {};
				if("string" == typeof h) {
					var d = h,
						p = c;
					h = {}, c = {}, h[o] = d, c[o] = p
				}
				var g = i.iconPaths = {};
				f(h, function(o, h) {
					var d = Zo(o, {}, {
						x: -s / 2,
						y: -s / 2,
						width: s,
						height: s
					});
					d.setStyle(l.getItemStyle()), d.hoverStyle = u.getItemStyle(), So(d), t.get("showTitle") && (d.__title = c[h], d.on("mouseover", function() {
						var t = u.getItemStyle();
						d.setStyle({
							text: c[h],
							textPosition: t.textPosition || "bottom",
							textFill: t.fill || t.stroke || "#000",
							textAlign: t.textAlign || "center"
						})
					}).on("mouseout", function() {
						d.setStyle({
							textFill: null
						})
					})), d.trigger(i.get("iconStatus." + h) || "normal"), r.add(d), d.on("click", y(a.onclick, a, e, n, h)), g[h] = d
				})
			}
			var r = this.group;
			if(r.removeAll(), t.get("show")) {
				var s = +t.get("itemSize"),
					l = t.get("feature") || {},
					u = this._features || (this._features = {}),
					h = [];
				f(l, function(t, e) {
					h.push(e)
				}), new xu(this._featureNames || [], h).add(a).update(a).remove(x(a, null)).execute(), this._featureNames = h, fx(r, t, n), r.add(px(r.getBoundingRect(), t)), r.eachChild(function(t) {
					var e = t.__title,
						i = t.hoverStyle;
					if(i && e) {
						var a = Bn(e, Qn(i)),
							o = t.position[0] + r.position[0],
							l = t.position[1] + r.position[1] + s,
							u = !1;
						l + a.height > n.getHeight() && (i.textPosition = "top", u = !0);
						var h = u ? -5 - a.height : s + 8;
						o + a.width / 2 > n.getWidth() ? (i.textPosition = ["100%", h], i.textAlign = "right") : o - a.width / 2 < 0 && (i.textPosition = [0, h], i.textAlign = "left")
					}
				})
			}
		},
		updateView: function(t, e, n, i) {
			f(this._features, function(t) {
				t.updateView && t.updateView(t.model, e, n, i)
			})
		},
		remove: function(t, e) {
			f(this._features, function(n) {
				n.remove && n.remove(t, e)
			}), this.group.removeAll()
		},
		dispose: function(t, e) {
			f(this._features, function(n) {
				n.dispose && n.dispose(t, e)
			})
		}
	});
	var XR = xA.toolbox.saveAsImage;
	mw.defaultOption = {
		show: !0,
		icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
		title: XR.title,
		type: "png",
		name: "",
		excludeComponents: ["toolbox"],
		pixelRatio: 1,
		lang: XR.lang.slice()
	}, mw.prototype.unusable = !Kw.canvasSupported;
	var YR = mw.prototype;
	YR.onclick = function(t, e) {
		var n = this.model,
			i = n.get("name") || t.get("title.0.text") || "echarts",
			a = document.createElement("a"),
			o = n.get("type", !0) || "png";
		a.download = i + "." + o, a.target = "_blank";
		var r = e.getConnectedDataURL({
			type: o,
			backgroundColor: n.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
			excludeComponents: n.get("excludeComponents"),
			pixelRatio: n.get("pixelRatio")
		});
		if(a.href = r, "function" != typeof MouseEvent || Kw.browser.ie || Kw.browser.edge)
			if(window.navigator.msSaveOrOpenBlob) {
				for(var s = atob(r.split(",")[1]), l = s.length, u = new Uint8Array(l); l--;) u[l] = s.charCodeAt(l);
				var h = new Blob([u]);
				window.navigator.msSaveOrOpenBlob(h, i + "." + o)
			} else {
				var c = n.get("lang"),
					d = '<body style="margin:0;"><img src="' + r + '" style="max-width:100%;" title="' + (c && c[0] || "") + '" /></body>',
					f = window.open();
				f.document.write(d)
			}
		else {
			var p = new MouseEvent("click", {
				view: window,
				bubbles: !0,
				cancelable: !1
			});
			a.dispatchEvent(p)
		}
	}, tw("saveAsImage", mw);
	var UR = xA.toolbox.magicType;
	vw.defaultOption = {
		show: !0,
		type: [],
		icon: {
			line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
			bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
			stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
			tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
		},
		title: i(UR.title),
		option: {},
		seriesIndex: {}
	};
	var jR = vw.prototype;
	jR.getIcons = function() {
		var t = this.model,
			e = t.get("icon"),
			n = {};
		return f(t.get("type"), function(t) {
			e[t] && (n[t] = e[t])
		}), n
	};
	var qR = {
			line: function(t, e, n, i) {
				return "bar" === t ? a({
					id: e,
					type: "line",
					data: n.get("data"),
					stack: n.get("stack"),
					markPoint: n.get("markPoint"),
					markLine: n.get("markLine")
				}, i.get("option.line") || {}, !0) : void 0
			},
			bar: function(t, e, n, i) {
				return "line" === t ? a({
					id: e,
					type: "bar",
					data: n.get("data"),
					stack: n.get("stack"),
					markPoint: n.get("markPoint"),
					markLine: n.get("markLine")
				}, i.get("option.bar") || {}, !0) : void 0
			},
			stack: function(t, e, n, i) {
				return "line" === t || "bar" === t ? a({
					id: e,
					stack: "__ec_magicType_stack__"
				}, i.get("option.stack") || {}, !0) : void 0
			},
			tiled: function(t, e, n, i) {
				return "line" === t || "bar" === t ? a({
					id: e,
					stack: ""
				}, i.get("option.tiled") || {}, !0) : void 0
			}
		},
		KR = [
			["line", "bar"],
			["stack", "tiled"]
		];
	jR.onclick = function(t, e, n) {
		var i = this.model,
			a = i.get("seriesIndex." + n);
		if(qR[n]) {
			var o = {
					series: []
				},
				r = function(e) {
					var a = e.subType,
						r = e.id,
						l = qR[n](a, r, e, i);
					l && (s(l, e.option), o.series.push(l));
					var u = e.coordinateSystem;
					if(u && "cartesian2d" === u.type && ("line" === n || "bar" === n)) {
						var h = u.getAxesByScale("ordinal")[0];
						if(h) {
							var c = h.dim,
								d = c + "Axis",
								f = t.queryComponents({
									mainType: d,
									index: e.get(name + "Index"),
									id: e.get(name + "Id")
								})[0],
								p = f.componentIndex;
							o[d] = o[d] || [];
							for(var g = 0; p >= g; g++) o[d][p] = o[d][p] || {};
							o[d][p].boundaryGap = "bar" === n
						}
					}
				};
			f(KR, function(t) {
				u(t, n) >= 0 && f(t, function(t) {
					i.setIconStatus(t, "normal")
				})
			}), i.setIconStatus(n, "emphasis"), t.eachComponent({
				mainType: "series",
				query: null == a ? null : {
					seriesIndex: a
				}
			}, r), e.dispatchAction({
				type: "changeMagicType",
				currentType: n,
				newOption: o
			})
		}
	}, au({
		type: "changeMagicType",
		event: "magicTypeChanged",
		update: "prepareAndUpdate"
	}, function(t, e) {
		e.mergeOption(t.newOption)
	}), tw("magicType", vw);
	var $R = xA.toolbox.dataView,
		JR = new Array(60).join("-"),
		QR = "    ",
		tB = new RegExp("[" + QR + "]+", "g");
	Aw.defaultOption = {
		show: !0,
		readOnly: !1,
		optionToContent: null,
		contentToOption: null,
		icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
		title: i($R.title),
		lang: i($R.lang),
		backgroundColor: "#fff",
		textColor: "#000",
		textareaColor: "#fff",
		textareaBorderColor: "#333",
		buttonColor: "#c23531",
		buttonTextColor: "#fff"
	}, Aw.prototype.onclick = function(t, e) {
		function n() {
			i.removeChild(o), x._dom = null
		}
		var i = e.getDom(),
			a = this.model;
		this._dom && i.removeChild(this._dom);
		var o = document.createElement("div");
		o.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", o.style.backgroundColor = a.get("backgroundColor") || "#fff";
		var r = document.createElement("h4"),
			s = a.get("lang") || [];
		r.innerHTML = s[0] || a.get("title"), r.style.cssText = "margin: 10px 20px;", r.style.color = a.get("textColor");
		var l = document.createElement("div"),
			u = document.createElement("textarea");
		l.style.cssText = "display:block;width:100%;overflow:auto;";
		var h = a.get("optionToContent"),
			c = a.get("contentToOption"),
			d = ww(t);
		if("function" == typeof h) {
			var f = h(e.getOption());
			"string" == typeof f ? l.innerHTML = f : T(f) && l.appendChild(f)
		} else l.appendChild(u), u.readOnly = a.get("readOnly"), u.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;", u.style.color = a.get("textColor"), u.style.borderColor = a.get("textareaBorderColor"), u.style.backgroundColor = a.get("textareaColor"), u.value = d.value;
		var p = d.meta,
			g = document.createElement("div");
		g.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
		var m = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
			v = document.createElement("div"),
			y = document.createElement("div");
		m += ";background-color:" + a.get("buttonColor"), m += ";color:" + a.get("buttonTextColor");
		var x = this;
		me(v, "click", n), me(y, "click", function() {
			var t;
			try {
				t = "function" == typeof c ? c(l, e.getOption()) : Tw(u.value, p)
			} catch(i) {
				throw n(), new Error("Data view format error " + i)
			}
			t && e.dispatchAction({
				type: "changeDataView",
				newOption: t
			}), n()
		}), v.innerHTML = s[1], y.innerHTML = s[2], y.style.cssText = m, v.style.cssText = m, !a.get("readOnly") && g.appendChild(y), g.appendChild(v), me(u, "keydown", function(t) {
			if(9 === (t.keyCode || t.which)) {
				var e = this.value,
					n = this.selectionStart,
					i = this.selectionEnd;
				this.value = e.substring(0, n) + QR + e.substring(i), this.selectionStart = this.selectionEnd = n + 1, wb(t)
			}
		}), o.appendChild(r), o.appendChild(l), o.appendChild(g), l.style.height = i.clientHeight - 80 + "px", i.appendChild(o), this._dom = o
	}, Aw.prototype.remove = function(t, e) {
		this._dom && e.getDom().removeChild(this._dom)
	}, Aw.prototype.dispose = function(t, e) {
		this.remove(t, e)
	}, tw("dataView", Aw), au({
		type: "changeDataView",
		event: "dataViewChanged",
		update: "prepareAndUpdate"
	}, function(t, e) {
		var n = [];
		f(t.newOption.series, function(t) {
			var i = e.getSeriesByName(t.name)[0];
			if(i) {
				var a = i.get("data");
				n.push({
					name: t.name,
					data: Dw(t.data, a)
				})
			} else n.push(r({
				type: "scatter"
			}, t))
		}), e.mergeOption(s({
			series: n
		}, t.newOption))
	});
	var eB = f,
		nB = "\x00_ec_hist_store";
	Dz.extend({
		type: "dataZoom.select"
	}), Cz.extend({
		type: "dataZoom.select"
	});
	var iB = xA.toolbox.dataZoom,
		aB = f,
		oB = "\x00_ec_\x00toolbox-dataZoom_";
	Nw.defaultOption = {
		show: !0,
		icon: {
			zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
			back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
		},
		title: i(iB.title)
	};
	var rB = Nw.prototype;
	rB.render = function(t, e, n, i) {
		this.model = t, this.ecModel = e, this.api = n, Rw(t, e, this, i, n), zw(t, e)
	}, rB.onclick = function(t, e, n) {
		sB[n].call(this)
	}, rB.remove = function() {
		this._brushController.unmount()
	}, rB.dispose = function() {
		this._brushController.dispose()
	};
	var sB = {
		zoom: function() {
			var t = !this._isZoomActive;
			this.api.dispatchAction({
				type: "takeGlobalCursor",
				key: "dataZoomSelect",
				dataZoomSelectActive: t
			})
		},
		back: function() {
			this._dispatchZoomAction(Lw(this.ecModel))
		}
	};
	rB._onBrush = function(t, e) {
		function n(t, e, n) {
			var r = e.getAxis(t),
				s = r.model,
				l = i(t, s, o),
				u = l.findRepresentativeAxisProxy(s).getMinMaxSpan();
			(null != u.minValueSpan || null != u.maxValueSpan) && (n = WO(0, n.slice(), r.scale.getExtent(), 0, u.minValueSpan, u.maxValueSpan)), l && (a[l.id] = {
				dataZoomId: l.id,
				startValue: n[0],
				endValue: n[1]
			})
		}

		function i(t, e, n) {
			var i;
			return n.eachComponent({
				mainType: "dataZoom",
				subType: "select"
			}, function(n) {
				var a = n.getAxisModel(t, e.componentIndex);
				a && (i = n)
			}), i
		}
		if(e.isEnd && t.length) {
			var a = {},
				o = this.ecModel;
			this._brushController.updateCovers([]);
			var r = new B_(Ew(this.model.option), o, {
				include: ["grid"]
			});
			r.matchOutputRanges(t, o, function(t, e, i) {
				if("cartesian2d" === i.type) {
					var a = t.brushType;
					"rect" === a ? (n("x", i, e[0]), n("y", i, e[1])) : n({
						lineX: "x",
						lineY: "y"
					}[a], i, e)
				}
			}), Cw(o, a), this._dispatchZoomAction(a)
		}
	}, rB._dispatchZoomAction = function(t) {
		var e = [];
		aB(t, function(t) {
			e.push(i(t))
		}), e.length && this.api.dispatchAction({
			type: "dataZoom",
			from: this.uid,
			batch: e
		})
	}, tw("dataZoom", Nw), eu(function(t) {
		function e(t, e) {
			if(e) {
				var a = t + "Index",
					o = e[a];
				null == o || "all" === o || _(o) || (o = o === !1 || "none" === o ? [] : [o]), n(t, function(e, n) {
					if(null == o || "all" === o || -1 !== u(o, n)) {
						var r = {
							type: "select",
							$fromToolbox: !0,
							id: oB + t + n
						};
						r[a] = n, i.push(r)
					}
				})
			}
		}

		function n(e, n) {
			var i = t[e];
			_(i) || (i = i ? [i] : []), aB(i, n)
		}
		if(t) {
			var i = t.dataZoom || (t.dataZoom = []);
			_(i) || (t.dataZoom = i = [i]);
			var a = t.toolbox;
			if(a && (_(a) && (a = a[0]), a && a.feature)) {
				var o = a.feature.dataZoom;
				e("xAxis", o), e("yAxis", o)
			}
		}
	});
	var lB = xA.toolbox.restore;
	Bw.defaultOption = {
		show: !0,
		icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
		title: lB.title
	};
	var uB = Bw.prototype;
	uB.onclick = function(t, e) {
		kw(t), e.dispatchAction({
			type: "restore",
			from: this.uid
		})
	}, tw("restore", Bw), au({
		type: "restore",
		event: "restore",
		update: "prepareAndUpdate"
	}, function(t, e) {
		e.resetOption("recreate")
	}), eu(function(t) {
		var e = t.graphic;
		_(e) ? t.graphic = e[0] && e[0].elements ? [t.graphic[0]] : [{
			elements: e
		}] : e && !e.elements && (t.graphic = [{
			elements: [e]
		}])
	});
	var hB = cu({
		type: "graphic",
		defaultOption: {
			elements: [],
			parentId: null
		},
		_elOptionsToUpdate: null,
		mergeOption: function() {
			var t = this.option.elements;
			this.option.elements = null, hB.superApply(this, "mergeOption", arguments), this.option.elements = t
		},
		optionUpdated: function(t, e) {
			var n = this.option,
				i = (e ? n : t).elements,
				a = n.elements = e ? [] : n.elements,
				o = [];
			this._flatten(i, o);
			var r = Fi(a, o);
			Wi(r);
			var s = this._elOptionsToUpdate = [];
			f(r, function(t, e) {
				var n = t.option;
				n && (s.push(n), Hw(t, n), Zw(a, e, n), Xw(a[e], n))
			}, this);
			for(var l = a.length - 1; l >= 0; l--) null == a[l] ? a.splice(l, 1) : delete a[l].$action
		},
		_flatten: function(t, e, n) {
			f(t, function(t) {
				if(t) {
					n && (t.parentOption = n), e.push(t);
					var i = t.children;
					"group" === t.type && i && this._flatten(i, e, t), delete t.children
				}
			}, this)
		},
		useElOptionsToUpdate: function() {
			var t = this._elOptionsToUpdate;
			return this._elOptionsToUpdate = null, t
		}
	});
	du({
		type: "graphic",
		init: function() {
			this._elMap = B(), this._lastGraphicModel
		},
		render: function(t, e, n) {
			t !== this._lastGraphicModel && this._clear(), this._lastGraphicModel = t, this._updateElements(t), this._relocate(t, n)
		},
		_updateElements: function(t) {
			var e = t.useElOptionsToUpdate();
			if(e) {
				var n = this._elMap,
					i = this.group;
				f(e, function(e) {
					var a = e.$action,
						o = e.id,
						r = n.get(o),
						s = e.parentId,
						l = null != s ? n.get(s) : i,
						u = e.style;
					"text" === e.type && u && (e.hv && e.hv[1] && (u.textVerticalAlign = u.textBaseline = null), !u.hasOwnProperty("textFill") && u.fill && (u.textFill = u.fill), !u.hasOwnProperty("textStroke") && u.stroke && (u.textStroke = u.stroke));
					var h = Fw(e);
					a && "merge" !== a ? "replace" === a ? (Gw(r, n), Vw(o, l, h, n)) : "remove" === a && Gw(r, n) : r ? r.attr(h) : Vw(o, l, h, n);
					var c = n.get(o);
					c && (c.__ecGraphicWidth = e.width, c.__ecGraphicHeight = e.height, Yw(c, t, e))
				})
			}
		},
		_relocate: function(t, e) {
			for(var n = t.option.elements, i = this.group, a = this._elMap, o = n.length - 1; o >= 0; o--) {
				var r = n[o],
					s = a.get(r.id);
				if(s) {
					var l = s.parent,
						u = l === i ? {
							width: e.getWidth(),
							height: e.getHeight()
						} : {
							width: l.__ecGraphicWidth || 0,
							height: l.__ecGraphicHeight || 0
						};
					Cr(s, r, u, null, {
						hv: r.hv,
						boundingMode: r.bounding
					})
				}
			}
		},
		_clear: function() {
			var t = this._elMap;
			t.each(function(e) {
				Gw(e, t)
			}), this._elMap = B()
		},
		dispose: function() {
			this._clear()
		}
	}), t.version = $A, t.dependencies = JA, t.PRIORITY = sD, t.init = jl, t.connect = ql, t.disConnect = Kl, t.disconnect = AD, t.dispose = $l, t.getInstanceByDom = Jl, t.getInstanceById = Ql, t.registerTheme = tu, t.registerPreprocessor = eu, t.registerProcessor = nu, t.registerPostUpdate = iu, t.registerAction = au, t.registerCoordinateSystem = ou, t.getCoordinateSystemDimensions = ru, t.registerLayout = su, t.registerVisual = lu, t.registerLoading = hu, t.extendComponentModel = cu, t.extendComponentView = du, t.extendSeriesModel = fu, t.extendChartView = pu, t.setCanvasCreator = gu, t.registerMap = mu, t.getMap = vu, t.dataTool = DD, t.zrender = eM, t.number = rT, t.format = fT, t.throttle = Ks, t.helper = CC, t.matrix = Db, t.vector = mb, t.color = Ub, t.parseGeoJSON = kC, t.parseGeoJson = EC, t.util = zC, t.graphic = RC, t.List = GD, t.Model = Xo, t.Axis = NC, t.env = Kw
});

	//模块输出
	exports('echartsMin', null);
});